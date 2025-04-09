
import BookComp from "@/components/BookComponents/BookComp";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Products = () => {

    const data = [
        {
            "_id" : 1 , 
            "title": "The Time Traveler's Journey 4",
            "author": "rahata@gmail.com",
            "description": "A thrilling story about a scientist who invents a time machine and explores the future of humanity.",
            "category": "Fiction",
            "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=360",
            "price": 5.99,
            "stock": 50,
            "publishedDate": "2023-07-15"
        },
        {
            "_id" : 2 , 
            "title": "The Time Traveler's Journey 4",
            "author": "rahata@gmail.com",
            "description": "A thrilling story about a scientist who invents a time machine and explores the future of humanity.",
            "category": "Fiction",
            "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=360",
            "price": 5.99,
            "stock": 50,
            "publishedDate": "2023-07-15"
        },
        {
            "_id" : 3 , 
            "title": "The Time Traveler's Journey 4",
            "author": "rahata@gmail.com",
            "description": "A thrilling story about a scientist who invents a time machine and explores the future of humanity.",
            "category": "Fiction",
            "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=360",
            "price": 5.99,
            "stock": 50,
            "publishedDate": "2023-07-15"
        },
        {
            "_id" : 4 , 
            "title": "The Time Traveler's Journey 4",
            "author": "rahata@gmail.com",
            "description": "A thrilling story about a scientist who invents a time machine and explores the future of humanity.",
            "category": "Fiction",
            "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=360",
            "price": 5.99,
            "stock": 50,
            "publishedDate": "2023-07-15"
        },
        {
            "_id" : 5 , 
            "title": "The Time Traveler's Journey 4",
            "author": "rahata@gmail.com",
            "description": "A thrilling story about a scientist who invents a time machine and explores the future of humanity.",
            "category": "Fiction",
            "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=360",
            "price": 5.99,
            "stock": 50,
            "publishedDate": "2023-07-15"
        },
        {
            "_id" : 6 , 
            "title": "The Time Traveler's Journey 4",
            "author": "rahata@gmail.com",
            "description": "A thrilling story about a scientist who invents a time machine and explores the future of humanity.",
            "category": "Fiction",
            "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=360",
            "price": 5.99,
            "stock": 50,
            "publishedDate": "2023-07-15"
        },
    ]

    return (
        <div className="flex flex-col items-center justify-center gap-5 mt-20 mb-32 w-[1440px] mx-auto">

            <h1 className="gro text-4xl font-semibold">Products</h1>

            <div className="grid grid-cols-3 gap-5 w-full">
                {
                    data?.map((item) => <BookComp key={item?._id} item={item}/>)
                }
            </div>

            <Link to={'/books'}>
                <Button className="cursor-pointer duration-300 text-xl font-semibold border bg-white text-black border-black hover:text-white hover:border-black">View All</Button>
            </Link>
            
        </div>
    );
};

export default Products;
