import { Button } from "@/components/ui/button";
import { useGetMyOrdersQuery } from "@/redux/features/order/orderApi";
import { useAppSelector } from "@/redux/hooks"; // customize this if needed
import { Link } from "react-router-dom";

const Cart = () => {

    const cartItems = useAppSelector((state) => state.cart.carts);
    const {data} = useGetMyOrdersQuery({}) ;
    console.log(data?.data);

    const total = data?.data?.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div className="min-h-screen py-8 px-4 md:px-10 lg:px-20 bg-gray-50 inter">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Your Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
            <div className="text-center text-gray-600">
            <p>Your cart is currently empty.</p>
            <Link to="/">
                <Button className="mt-4">Continue Shopping</Button>
            </Link>
            </div>
        ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
            <div className="lg:col-span-2 space-y-4">
                {data?.data?.map((item) => (
                <div
                    key={item._id}
                    className="w-full bg-white p-4 md:p-6 rounded-xl border shadow-sm flex flex-col md:flex-row gap-4"
                >
                    <img
                    src={item?.product?.image}
                    alt={item?.product?.title}
                    className="w-full md:w-40 h-[200px] object-cover rounded-md"
                    />
                    <div className="flex flex-col justify-between w-full">
                    <div>
                        <h2 className="text-xl font-semibold">{item?.product?.title}</h2>
                        <p className="text-gray-600">{item?.product?.category}</p>
                        <p className="text-sm text-gray-500">
                        Price: ${item.price} × {item?.product?.quantity}
                        </p>
                    </div>

                    <div className="mt-3 flex gap-2 items-center">
                        <span className="text-sm">Qty: {item?.product?.quantity}</span>
                    </div>
                    </div>
                </div>
                ))}
            </div>

            <div className="bg-white p-6 rounded-xl border shadow-md flex flex-col gap-4 h-fit">
                <h3 className="text-xl font-semibold border-b pb-2">Order Summary</h3>

                <div className="flex justify-between text-sm text-gray-700">
                <p>Subtotal</p>
                <p>${total}</p>
                </div>

                <div className="flex justify-between text-sm text-gray-700">
                <p>Shipping</p>
                <p>$0.00</p>
                </div>

                <div className="flex justify-between font-bold text-lg">
                <p>Total</p>
                <p>${total}</p>
                </div>

                <Button className="mt-4 w-full active:scale-95 duration-300">
                Proceed to Payment
                </Button>
            </div>
            </div>
        )}
        </div>
    );
};

export default Cart;
