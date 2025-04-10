/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useGetAllUsersQuery,
  useUpdateUserStatusMutation,
} from "@/redux/features/user/userApi";
import { useState } from "react";
import { toast } from "sonner";

export type TUser = {
  _id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  isActivate: boolean;
  createdAt: string;
  updatedAt: string;
  __v?: number;
};

const ManageUsers = () => {
  const { data } = useGetAllUsersQuery(undefined);
  const [updateUserStatus] = useUpdateUserStatusMutation();
  const [showModal, setShowModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [currentStatus, setCurrentStatus] = useState<boolean>(false);
  console.log(data?.data.name);

  const handleStatusChange = async (userId: string, currentStatus: boolean) => {
    try {
      const response = await updateUserStatus({
        id: userId,
        data: { isActivate: !currentStatus },
      }).unwrap();

      if (response.success) {
        toast.success(
          `User ${currentStatus ? "deactivated" : "activated"} successfully!`
        );
      }
    } catch (err) {
      toast.error("Failed to update user status");
    }
  };

  const openModal = (userId: string, status: boolean) => {
    setSelectedUserId(userId);
    setCurrentStatus(status);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const confirmAction = () => {
    if (selectedUserId !== null) {
      handleStatusChange(selectedUserId, currentStatus);
      closeModal();
    }
  };

  return (
    <div className="w-full px-3 md:w-2/3 md:ml-auto xl:p-6 xl:w-10/12 xl:mx-auto mt-10">
      <h2 className="text-4xl gro font-semibold mb-10 text-center">
        Manage Users
      </h2>

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
          {data?.data &&
            data?.data.map((user: TUser, index: number) => (
              <TableRow key={user._id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="">{user.role}</TableCell>
                <TableCell
                  className={
                    user.isActivate ? "text-green-600" : "text-red-500"
                  }
                >
                  {user?.isActivate ? "Active" : "Inactive"}
                </TableCell>
                <TableCell>
                  <button
                    onClick={() => openModal(user._id, user.isActivate)}
                    disabled={!user.isActivate}
                    className={`btn btn-sm text-white ${
                      user.isActivate
                        ? "btn-error"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Deactivate
                  </button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-1/3">
            <h3 className="text-xl font-semibold mb-4">Confirm Action</h3>
            <p>
              Are you sure you want to{" "}
              {currentStatus ? "deactivate" : "activate"} this user?
            </p>
            <div className="mt-4 flex justify-between">
              <Button
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                onClick={confirmAction}
              >
                Yes
              </Button>
              <Button
                className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded-md"
                onClick={closeModal}
              >
                No
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
