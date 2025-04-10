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

const CreateProduct = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6 mt-10">
      <h2 className="text-2xl font-semibold text-center">Add New Book</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input name="title" placeholder="Enter book title" required />
          </div>

          <div>
            <Label htmlFor="author">Author</Label>
            <Input name="author" placeholder="Author name" required />
          </div>

          <div>
            <Label htmlFor="price">Price ($)</Label>
            <Input type="number" name="price" placeholder="Price" required />
          </div>

          <div>
            <Label htmlFor="stock">Stock</Label>
            <Input
              type="number"
              name="stock"
              placeholder="Total stock"
              min={1}
              required
            />
          </div>

          <div>
            <Label htmlFor="publishedDate">Published Date</Label>
            <Input type="date" name="publishedDate" required />
          </div>

          <div>
            <Label htmlFor="category">Category</Label>
            <Select name="category" required>
              <SelectTrigger>
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
          </div>
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            name="description"
            placeholder="Write a short description"
            rows={4}
            required
          />
        </div>

        <div>
          <Label htmlFor="image">Image URL</Label>
          <Input name="image" placeholder="Enter image URL" />
        </div>

        <Button type="submit" className="w-full">
          Submit Book
        </Button>
      </form>
    </div>
  );
};

export default CreateProduct;
