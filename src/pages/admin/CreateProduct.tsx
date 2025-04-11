
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
import { useCreateBookMutation } from "@/redux/features/book/bookApi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const key = import.meta.env.VITE_IMAGE_HOISTING_API_KEY;
const apiUrl = `https://api.imgbb.com/1/upload?key=${key}`;

const CreateProduct = () => {

  const navigate = useNavigate() ;
  const [createBook] = useCreateBookMutation() ;
  const user = useAppSelector(state => state.auth.user)
  const {register , handleSubmit , control , reset} = useForm() ;

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Creating book...") ;

    const formData = new FormData();
    formData.append("image", data?.image[0]);

    const { data : imageUrl } = await axios.post(apiUrl, formData, {
      headers: { "content-type": "multipart/form-data" }
    });
    
    const bookData = {
      title : data.title ,
      author : data.author ,
      price : Number(data.price) ,
      stock : Number(data.stock) ,
      publishedDate : data.publishedDate ,
      category : data.category ,
      description : data.description ,
      image : imageUrl?.data?.url ,
    }
    const res = await createBook(bookData)
    if(res?.data?.success){
      reset() ;
      toast.success(res?.data?.message , {duration : 1000 , id : toastId}) ;
      setTimeout(() => {
        navigate('/dashboard/manage-products') ;
      } , 1000)
    }
    else{
      toast.success(res?.data?.message , {duration : 1000 , id : toastId}) ;
    }

  }

  return (
    <div className="max-w-2xl mx-auto p-6 border bg-white rounded-xl shadow-md space-y-6 mt-10">
      <h2 className="text-2xl font-semibold text-center">Add New Book</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input {...register("title")} name="title" placeholder="Enter book title" required />
          </div>

          <div>
            <Label htmlFor="author">Author</Label>
            <Input {...register("author")} value={user?.email} name="author" placeholder="Author name" required />
          </div>

          <div>
            <Label htmlFor="price">Price ($)</Label>
            <Input {...register("price")} type="number" name="price" placeholder="Price" required />
          </div>

          <div>
            <Label htmlFor="stock">Stock</Label>
            <Input
              {...register("stock")}
              type="number"
              name="stock"
              placeholder="Total stock"
              min={1}
              required
            />
          </div>

          <div>
            <Label htmlFor="publishedDate">Published Date</Label>
            <Input {...register("publishedDate")} type="date" name="publishedDate" required />
          </div>

          <div>
            <Label htmlFor="category">Category</Label>
            <Controller
              name="category"
              control={control}
              rules={{ required: true }}
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
            name="description"
            placeholder="Write a short description"
            rows={4}
            required
          />
        </div>

        <div>
          <Label htmlFor="image">Image URL</Label>
          <Input type="file" accept="image/*" {...register("image")} name="image" placeholder="Enter image URL" />
        </div>

        <Button type="submit" className="w-full">
          Submit Book
        </Button>
      </form>

    </div>
  );
};

export default CreateProduct;
