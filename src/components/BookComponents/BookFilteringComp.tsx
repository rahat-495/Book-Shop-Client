
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const BookFilteringComp = () => {
    return (
        <form className="w-full grid grid-cols-6 gap-4">

            <Input
                type="text"
                placeholder="Search by Title"
                className="w-full"
                name="title"
            />

            <Input
                type="text"
                placeholder="Search by Author"
                className="w-full"
                name="author"
            />

            <Select>

                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Category" />
                </SelectTrigger>

                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="All">All Categories</SelectItem>
                        <SelectItem value="Fiction">Fiction</SelectItem>
                        <SelectItem value="Non-Fiction">Non-Fiction</SelectItem>
                        <SelectItem value="Fantasy">Fantasy</SelectItem>
                        <SelectItem value="History">History</SelectItem>
                        <SelectItem value="Science">Science</SelectItem>
                        <SelectItem value="Biography">Biography</SelectItem>
                    </SelectGroup>
                </SelectContent>

            </Select>

            <div className="flex items-center gap-2 w-full">
                <Input
                type="number"
                placeholder="Min Price"
                className="w-[100px]"
                name="minPrice"
                min={0}
                />

                <span className="font-bold">-</span>

                <Input
                type="number"
                placeholder="Max Price"
                className="w-[100px]"
                name="maxPrice"
                min={0}
                />

            </div>

            <Select>

                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Availability" />
                </SelectTrigger>

                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="true">Available</SelectItem>
                        <SelectItem value="false">Unavailable</SelectItem>
                    </SelectGroup>
                </SelectContent>

            </Select>

            <div className="grid grid-cols-2 gap-3 w-full">
                
                <Button type="reset" className="cursor-pointer duration-300 text-lg font-semibold border bg-white text-black border-gray-300 active:scale-90 hover:text-white hover:border-black"> Reset</Button>

                <Button type="submit" className="cursor-pointer duration-300 text-lg font-semibold border bg-white text-black border-gray-300 active:scale-90 hover:text-white hover:border-black">Search</Button>

            </div>

        </form>
    );
};

export default BookFilteringComp;
