
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useGetSingleBookQuery } from "@/redux/features/book/bookApi";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useAddToCartMutation } from "@/redux/features/cart/cartApi";
import Swal from "sweetalert2";

const AddToCart = () => {

    const { id } = useParams();
    const { data } = useGetSingleBookQuery(id);
    const dispatch = useAppDispatch() ;
    const [quantity, setQuantity] = useState<number>(1);
    const [addToCartIntoDb] = useAddToCartMutation() ;
    const user = useAppSelector(state => state.auth.user) ;
    
    const book = data?.data;

    const handleIncrease = () => data?.data?.stock > quantity && setQuantity(prev => prev + 1);
    const handleDecrease = () => {
        if (quantity > 1) setQuantity(prev => prev - 1);
    };

    const handleAddToCart = async () => {
        dispatch(addToCart({product : id , quantity})) ;

        const res = await addToCartIntoDb({product : id , quantity , email : user?.email}).unwrap() ;
        if(res?.success){
            Swal.fire({
                title: "Item Added!",
                text: "Item added to cart !",
                icon: "success"
            });
        }
    }

    return (
        <div className="min-h-[80vh] py-8 px-4 md:px-10 lg:px-20 flex flex-col items-center bg-gray-50 inter lg:pt-40">
        <div className="w-full max-w-6xl bg-white border rounded-xl shadow-md p-5 md:p-10 flex flex-col md:flex-row gap-6">
            
            <div className="w-full md:w-1/2">
            <img
                src={book?.image}
                alt={book?.title}
                className="w-full h-[300px] md:h-[400px] object-cover rounded-md"
            />
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h1 className="text-2xl md:text-3xl font-bold">{book?.title}</h1>
            <p className="text-gray-700">{book?.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div>
                <p className="font-medium">Category: <span className="font-normal">{book?.category}</span></p>
                <p className="font-medium">Published: <span className="font-normal">{book?.publishedDate}</span></p>
                </div>
                <div>
                <p className="font-medium">Price: <span className="text-green-600 font-semibold">${book?.price}</span></p>
                <p className="font-medium">Stock: <span className="font-normal">{book?.stock}</span></p>
                </div>
            </div>

            <div className="mt-3 flex items-center gap-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border rounded-md">
                <button
                    onClick={handleDecrease}
                    className="px-3 py-1 text-lg font-bold hover:bg-gray-200 transition"
                >−</button>
                <span className="px-4">{quantity}</span>
                <button
                    onClick={handleIncrease}
                    className="px-3 py-1 text-lg font-bold hover:bg-gray-200 transition"
                >+</button>
                </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button onClick={handleAddToCart} className="w-full sm:w-auto cursor-pointer">Confirm Add To Cart</Button>
                <Link to={`/books`}>
                    <Button variant="outline" className="w-full sm:w-auto cursor-pointer">Continue Shopping</Button>
                </Link>
            </div>
            </div>

        </div>
        </div>
    );
};

export default AddToCart;
