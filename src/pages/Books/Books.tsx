
import BookComp from "@/components/BookComponents/BookComp";
import BookFilteringComp from "@/components/BookComponents/BookFilteringComp";
import { useGetAllBooksQuery } from "@/redux/features/book/bookApi";
import { TBook } from "@/types/bookTypes";

const Books = () => {

    const res = useGetAllBooksQuery({}) ;

    return (
        <div className="min-h-screen">
            <div className="flex flex-col items-center justify-center gap-5 mt-20 mb-32 w-[1440px] mx-auto">

                <BookFilteringComp />

                <div className="grid grid-cols-3 gap-5 w-full">
                    {
                        res?.data?.data && res?.data?.data?.map((item : TBook) => <BookComp key={item?._id} item={item}/>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Books;
