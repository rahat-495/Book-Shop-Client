
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useDeleteBookMutation, useGetAllBooksQuery } from "@/redux/features/book/bookApi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

type TProduct = {
    _id: string;
    title: string;
    description: string;
    author: string;
    category: string;
    price: number;
    image: string;
    stock: number;
    publishedDate: string;
    availability: boolean;
    createdAt: string;
    updatedAt: string;
    __v?: number;
};

const ManageProducts = () => {

    const [deleteBook] = useDeleteBookMutation();
    const {data} = useGetAllBooksQuery({}) ;

    const handleDelete = async (id : string) => {
        Swal.fire({
            title: "Do you want to delete this book ?",
            showCancelButton: true,
            confirmButtonText: "Delete",
            denyButtonText: `Cancel`
          }).then((result) => {
            if (result.isConfirmed) {
                deleteBook(id)
                .then((res) => {
                    if(res?.data?.success){
                        Swal.fire("Book deleted successfully !", "", "success");
                    }
                })
            }
        });
    }

    return (
        <div className="w-full px-3 md:w-2/3 md:ml-auto xl:p-6 xl:w-10/12 xl:mx-auto mt-10">
            <h2 className="text-4xl font-semibold mb-10 text-center">Manage Products</h2>
    
            <Table className="border rounded-2xl gro">
            <TableHeader>
                <TableRow>
                <TableHead>No.</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {data?.data && data?.data?.map((product: TProduct, index: number) => (
                <TableRow key={product._id}>

                    <TableCell>{index + 1}</TableCell>

                    <TableCell>
                        <img src={product.image} alt={product.title} className="w-10 h-10 rounded object-cover" />
                    </TableCell>

                    <TableCell>{product.title}</TableCell>

                    <TableCell>{product.author}</TableCell>

                    <TableCell>{product.category}</TableCell>

                    <TableCell>${product.price}</TableCell>

                    <TableCell>{product.stock}</TableCell>

                    <TableCell className={product.availability ? "text-green-600" : "text-red-500"}>
                        {product.availability ? "Available" : "Unavailable"}
                    </TableCell>

                    <TableCell className="flex gap-2">
                        <Link to={`/dashboard/update-product/${product?._id}`} className="btn btn-sm text-black">
                            Update
                        </Link>

                        <button className="btn btn-sm btn-error text-white"
                            onClick={() => handleDelete(product._id)} >
                            Delete
                        </button>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </div>
    );
};

export default ManageProducts;
