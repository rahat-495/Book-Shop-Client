
import { useGetAllOrdersQuery, useDeleteOrderMutation, useUpdateOrderMutation } from "@/redux/features/order/orderApi";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Swal from "sweetalert2";

export type TOrder = {
    _id: string;
    createdAt: string;
    updatedAt: string;
    customer: string;
    id: string; 
    quantity: number;
    status: "Pending" | "Processing" | "Completed" | "Cancelled"; 
    totalPrice: number;
    transaction: {
      id: string;
      transactionStatus: "Initiated" | "Success" | "Failed" | "Pending";
    };
    __v: number;
};
  

const ManageOrders = () => {
    
    const { data, isLoading } = useGetAllOrdersQuery(undefined);
    const [deleteOrder] = useDeleteOrderMutation();
    const [updateOrder] = useUpdateOrderMutation();

    const handleDelete = async (id: string) => {
        const res = await deleteOrder(id).unwrap();

        if(res?.success){
            toast.success("Order deleted successfully!" );
        }
        else{
            toast.error("Failed to delete order." );
        }
    };
    
    const handleUpdate = async (id : string) => {
        let status = "" ;
        Swal.fire({
            title: "Do you want to update the status?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Shipped",
            denyButtonText: `Completed`
          }).then(async (result) => {
            if (result.isConfirmed) {

                status = "Shipped" ;
                const res = await updateOrder({id , status}).unwrap();
                if(res?.success){
                    Swal.fire("Order updated successfully!", "", "success");
                }
                else{
                    Swal.fire("Failed to updated order.", "", "success");
                }
                
            } else if (result.isDenied) {
                
                status = "Completed" ;
                const res = await updateOrder({id , status}).unwrap();
                if(res?.success){
                    Swal.fire("Order updated successfully!", "", "success");
                }
                else{
                    Swal.fire("Failed to updated order.", "", "success");
                }

            }
        });
        
    }

    if (isLoading) return <p className="text-center py-6">Loading...</p>;

    return (
        <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">Manage Orders</h2>

        <div className="overflow-x-auto w-full">
            <table className="min-w-[800px] w-full border border-gray-300 text-sm md:text-base">
            <thead className="bg-gray-100 text-gray-700">
                <tr>
                <th className="border p-2">Order ID</th>
                <th className="border p-2">Customer</th>
                <th className="border p-2">Qty</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Update Status</th>
                <th className="border p-2">Txn ID</th>
                <th className="border p-2">Txn Status</th>
                <th className="border p-2">Action</th>
                </tr>
            </thead>
            <tbody>
                {data?.data?.map((order: TOrder) => (
                <tr key={order._id} className="text-center hover:bg-gray-50">
                    <td className="border p-2">{order._id}</td>
                    <td className="border p-2">{order.customer}</td>
                    <td className="border p-2">{order.quantity}</td>
                    <td className="border p-2">${order.totalPrice.toFixed(2)}</td>
                    <td className="border p-2">{order.status}</td>
                    <td className="border p-2">
                        <Button
                            onClick={() => handleUpdate(order._id)}
                            className="text-sm cursor-pointer"
                        >
                            Update
                        </Button>
                    </td>
                    <td className="border p-2">{order.transaction?.id}</td>
                    <td className="border p-2">{order.transaction?.transactionStatus}</td>
                    <td className="border p-2">
                    <Button
                        onClick={() => handleDelete(order._id)}
                        variant="destructive"
                        className="text-sm cursor-pointer"
                    >
                        Delete
                    </Button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>
    );
};

export default ManageOrders;
