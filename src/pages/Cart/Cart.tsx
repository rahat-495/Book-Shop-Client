
/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@/components/ui/button";
import { useCreateOrderMutation, useGetMyCartsMutation } from "@/redux/features/order/orderApi";
import { useAppSelector } from "@/redux/hooks"; 
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type TBook = {
    _id: string;
    title: string;
    author: string;
    image: string;
    category: string;
    description: string;
    publishedDate: string;
    stock: number;
    availability: boolean;
    price: number;
    createdAt: string;
    updatedAt: string;
};

type TOrderItem = {
_id: string;
email: string;
product: TBook;
quantity: number;
__v?: number;
};

const Cart = () => {

    const user = useAppSelector((state) => state.auth.user);
    const [getData] = useGetMyCartsMutation() ;
    const [data , setData] = useState([]) ;
    const [createOrder] = useCreateOrderMutation() ;

    const getCartsData = async () => {
        const res = await getData({ email : user?.email}).unwrap()
        setData(res?.data) ;
        return res ;
    }

    useEffect(() => {
        getCartsData()
    } , [])

    const total = data?.reduce(
        (acc : number, item : TOrderItem) => acc + item.product.price * item.quantity,
        0
    );

    const handleOrderPlace = async () => {
        const res = await createOrder({}).unwrap() ;
        console.log(res);
    }

    return (
        <div className="min-h-screen py-8 px-4 md:px-10 lg:px-20 bg-gray-50 inter">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                Your Shopping Cart
            </h1>

            {data.length === 0 ? (
                <div className="text-center text-gray-600">
                <p>Your cart is currently empty.</p>
                <Link to="/">
                    <Button className="mt-4">Continue Shopping</Button>
                </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
                <div className="lg:col-span-2 space-y-4">
                    {data?.map((item : TOrderItem) => (
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
                            <p className="text-gray-600">Category : {item?.product?.category}</p>
                            <p className="text-md text-gray-500">
                                Price: ${item.product.price} × {item?.quantity}
                            </p>
                        </div>

                        <div className="mt-3 flex gap-2 items-center">
                            <span className="text-sm">Qty: {item?.quantity}</span>
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
                        <p>$1.00</p>
                    </div>

                    <div className="flex justify-between font-bold text-lg">
                        <p>Total</p>
                        <p>${total+1}</p>
                    </div>

                    <Button onClick={() => handleOrderPlace()} className="mt-4 w-full cursor-pointer active:scale-95 duration-300">
                        Proceed to Payment
                    </Button>
                </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
