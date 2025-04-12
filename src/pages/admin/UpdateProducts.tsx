
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { useAppSelector } from "@/redux/hooks";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useGetSingleBookQuery, useUpdateBookMutation } from "@/redux/features/book/bookApi";

const key = import.meta.env.VITE_IMAGE_HOISTING_API_KEY;
const apiUrl = `https://api.imgbb.com/1/upload?key=${key}`;

const UpdateProducts = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const user = useAppSelector((state) => state.auth.user);
    const { data: bookData, isLoading } = useGetSingleBookQuery(id);
    const [updateBook] = useUpdateBookMutation();

    const { register, handleSubmit, control, reset, setValue } = useForm();

    useEffect(() => {
        if (bookData?.data) {
        const book = bookData.data;
        setValue("title", book.title);
        setValue("author", book.author);
        setValue("price", book.price);
        setValue("stock", book.stock);
        setValue("publishedDate", book.publishedDate);
        setValue("category", book.category);
        setValue("description", book.description);
        }
    }, [bookData, setValue]);

        const onSubmit = async (data : FieldValues) => {
        const toastId = toast.loading("Updating book...");

        let imageUrl = bookData?.data?.image;

        if (data?.image?.length > 0) {
            const formData = new FormData();
            formData.append("image", data.image[0]);
            const { data: imgRes } = await axios.post(apiUrl, formData, {
                headers: { "content-type": "multipart/form-data" },
            });
            imageUrl = imgRes?.data?.url;
        }

        const updatedBook = {
            title: data.title,
            author: data.author,
            price: Number(data.price),
            stock: Number(data.stock),
            publishedDate: data.publishedDate,
            category: data.category,
            description: data.description,
            image: imageUrl,
        };

        const res = await updateBook({ id, updatedData: updatedBook });

        if (res?.data?.success) {
            reset() ;
            toast.success(res?.data?.message, { id: toastId });
            navigate("/dashboard/manage-products");
        } else {
            toast.error("Something went wrong!", { id: toastId });
        }
    };

    if (isLoading) return <p className="text-center mt-10">Loading...</p>;

    return (
        <div className="max-w-2xl mx-auto p-6 border bg-white rounded-xl shadow-md space-y-6 mt-10">
        <h2 className="text-2xl font-semibold text-center">Update Book</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <Label htmlFor="title">Title</Label>
                <Input {...register("title")} placeholder="Enter book title" required />
            </div>

            <div>
                <Label htmlFor="author">Author</Label>
                <Input {...register("author")} value={user?.email} placeholder="Author name" required />
            </div>

            <div>
                <Label htmlFor="price">Price ($)</Label>
                <Input {...register("price")} type="number" placeholder="Price" required />
            </div>

            <div>
                <Label htmlFor="stock">Stock</Label>
                <Input {...register("stock")} type="number" placeholder="Stock" required min={1} />
            </div>

            <div>
                <Label htmlFor="publishedDate">Published Date</Label>
                <Input {...register("publishedDate")} type="date" required />
            </div>

            <div>
                <Label htmlFor="category">Category</Label>
                <Controller
                defaultValue={bookData?.data?.category}
                name="category"
                control={control}
                render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Fiction">Fiction</SelectItem>
                        <SelectItem value="Non-Fiction">Non-Fiction</SelectItem>
                        <SelectItem value="Fantasy">Fantasy</SelectItem>
                        <SelectItem value="History">History</SelectItem>
                        <SelectItem value="Science">Science</SelectItem>
                        <SelectItem value="Biography">Biography</SelectItem>
                    </SelectContent>
                    </Select>
                )}
                />
            </div>
            </div>

            <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
                {...register("description")}
                placeholder="Write a short description"
                rows={4}
                required
            />
            </div>

            <div>
                <Label>Current Image : </Label>
                <img src={bookData?.data?.image} alt="" className="w-full h-[300px] rounded my-2"/>
                <Label htmlFor="image">Choose New Image (optional)</Label>
                <Input type="file" accept="image/*" {...register("image")} />
            </div>

            <Button type="submit" className="w-full">
            Update Book
            </Button>
        </form>
        </div>
    );
};

export default UpdateProducts;
