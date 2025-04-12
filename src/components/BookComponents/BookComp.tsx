
import { TBook } from "@/types/bookTypes";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const BookComp = ({item} : {item : TBook}) => {
    return (
        <div key={item._id} className="w-full border rounded flex flex-col p-3 gap-3 inter">
                            
            <img src={item?.image} alt="" className="w-full h-[250px] xl:h-[300px]"/>

            <div className="flex flex-col items-start justify-center mt-3 gap-3">
                
                <h1 className="text-lg font-semibold">{item?.title}</h1>

                <p className="p-1 rounded bg-[#97def23c]">{item?.description}</p>

                <div className="flex items-center justify-between w-full">
                    
                    <div className="flex flex-col gap-1">
                        <p className="font-semibold">Category : <span className="font-normal">{item?.category}</span></p>
                        <p className="font-semibold">Date : <span className="font-normal">{item?.publishedDate}</span></p>
                    </div>

                    <div className="flex flex-col gap-1">
                        <p className="font-semibold">Price : <span className="font-normal">${item?.price}</span></p>
                        <p className="font-semibold">Stock : <span className="font-normal">{item?.stock}</span></p>
                    </div>

                </div>

            </div>

            <Link to={`/add-to-cart/${item?._id}`} className="w-full">
                <Button className="cursor-pointer w-full active:scale-90 duration-500">Add To Cart</Button>
            </Link>

        </div>
    );
};

export default BookComp;
