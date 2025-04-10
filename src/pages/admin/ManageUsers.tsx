
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useGetAllUsersQuery } from "@/redux/features/user/userApi";

export type TUser = {
    _id: string;
    name: string;
    email: string;
    role: 'user' | 'admin';
    isActivate: boolean;
    createdAt: string;
    updatedAt: string;
    __v?: number;
}  

const ManageUsers = () => {

    const {data} = useGetAllUsersQuery(undefined) ;
    console.log(data?.data);

    return (
        <div className="w-full px-3 md:w-2/3 md:ml-auto xl:p-6 xl:w-10/12 xl:mx-auto mt-10">

          <h2 className="text-4xl gro font-semibold mb-10 text-center">Manage Users</h2>

          <Table className="border rounded-2xl">
                <TableHeader>

                    <TableRow>

                        <TableHead className="w-[100px]">No.</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead className="">Role</TableHead>
                        <TableHead className="">Status</TableHead>
                        <TableHead className="">Action</TableHead>

                    </TableRow>

                </TableHeader>
                <TableBody>
                    {data?.data && data?.data.map((user : TUser, index: number) => (
                    <TableRow key={user._id}>
                        <TableCell className="font-medium">{index + 1}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell className="">{user.role}</TableCell>
                        <TableCell className={user.isActivate ? 'text-green-600' : 'text-red-500'}>
                            {user?.isActivate ? "Active" : "Inactive"}
                        </TableCell>
                        <TableCell className="">
                            <button
                                className="btn btn-sm btn-error text-white"
                                // onClick={() => handleDeactivate(user._id)}
                                disabled={!user.isActivate}
                            >
                                Deactivate
                            </button>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>

        </div>
      );
};

export default ManageUsers;
