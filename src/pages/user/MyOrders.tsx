
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader2 } from "lucide-react";
import { useGetUserOrdersQuery } from "@/redux/features/order/orderApi";

const MyOrders = () => {
  const { data, isLoading, isError } = useGetUserOrdersQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <Loader2 className="animate-spin h-8 w-8 text-primary" />
      </div>
    );
  }

  if (isError || !data?.data?.length) {
    return (
      <div className="text-center text-muted-foreground mt-10">
        <p>No orders found.</p>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <h2 className="text-xl md:text-2xl font-semibold mb-6">My Orders</h2>

      <div className="overflow-x-auto rounded-xl border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Book Title</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Total Price</TableHead>
              <TableHead>Status</TableHead>
              {/* <TableHead className="text-center">Actions</TableHead> */}
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.data.map((order: any) => (
              <TableRow key={order._id}>
                <TableCell>{order._id}</TableCell>
                <TableCell>{order?.id?.title || "N/A"}</TableCell>
                <TableCell>{order.quantity}</TableCell>
                <TableCell>${order.totalPrice}</TableCell>
                <TableCell className={`${order?.status === "Pending" ? "text-yellow-400" : "text-green-600"} font-semibold gro`}>{order.status}</TableCell>
                {/* <TableCell>
                  <div className="flex justify-center gap-2">
                    <Button
                      variant="outline"
                      onClick={() => toast.info("Increase qty logic here")}
                    >
                      +
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => toast.info("Decrease qty logic here")}
                    >
                      -
                    </Button>
                  </div>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MyOrders;
