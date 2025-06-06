
import BookComp from "@/components/BookComponents/BookComp";
import BookFilteringComp from "@/components/BookComponents/BookFilteringComp";
import { useGetAllBooksQuery } from "@/redux/features/book/bookApi";
import { TBook } from "@/types/bookTypes";
import { useEffect, useState } from "react";

const Books = () => {

    const [query , setQuery] = useState({searchTerm: '', author: '', minPrice: '', maxPrice: '', category: "" , availability : ""}) ;
    const {data , refetch} = useGetAllBooksQuery(query) ;

    useEffect(() => {
        refetch() ;
    } , [query , refetch])

    return (
        <div className="min-h-screen">
            <div className="flex flex-col items-center justify-center px-3 xl:px-0 gap-5 mt-20 mb-32 w-full xl:w-[1440px] mx-auto">

                <BookFilteringComp setQuery={setQuery} />

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
                    {
                        data?.data && data?.data?.map((item : TBook) => <BookComp key={item?._id} item={item}/>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Books;
