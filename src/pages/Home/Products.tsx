
import BookComp from "@/components/BookComponents/BookComp";
import { Button } from "@/components/ui/button";
import { useGetAllBooksQuery } from "@/redux/features/book/bookApi";
import { TBook } from "@/types/bookTypes";
import { Link } from "react-router-dom";

const Products = () => {

    const {data} = useGetAllBooksQuery({limit : 6}) ;

    return (
        <div className="flex flex-col items-center justify-center gap-5 mt-20 mb-32 px-3 xl:p-0 xl:w-[1440px] mx-auto">

            <h1 className="gro text-4xl font-semibold">Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
                {
                    data?.data && data?.data?.map((item : TBook) => <BookComp key={item?._id} item={item}/>)
                }
            </div>

            <Link to={'/books'}>
                <Button className="cursor-pointer duration-300 text-xl font-semibold border bg-white text-black border-black hover:text-white hover:border-black">View All</Button>
            </Link>
            
        </div>
    );
};

export default Products;
