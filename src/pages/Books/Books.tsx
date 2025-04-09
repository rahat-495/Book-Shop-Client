
import BookComp from "@/components/BookComponents/BookComp";
import BookFilteringComp from "@/components/BookComponents/BookFilteringComp";

const Books = () => {

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
        <div className="min-h-screen">
            <div className="flex flex-col items-center justify-center gap-5 mt-20 mb-32 w-[1440px] mx-auto">

                <BookFilteringComp />

                <div className="grid grid-cols-3 gap-5 w-full">
                    {
                        data?.map((item) => <BookComp key={item?._id} item={item}/>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Books;
