
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Controller, FieldValues, useForm } from "react-hook-form";

const BookFilteringComp = ({ setQuery } : any) => {

    const {register , handleSubmit , control} = useForm() ;

    const onSubmit = (data : FieldValues) => {
        setQuery(data) ;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full grid-cols-1 gap-3 grid xl:grid-cols-6 xl:gap-4">

            <Input
                {...register("searchTerm")}
                type="text"
                placeholder="Search by Title"
                className="w-full"
                name="title"
                />

            <Input
                {...register("author")}
                type="text"
                placeholder="Search by Author"
                className="w-full"
                name="author"
            />

            <Controller
            name="category"
            control={control}
            render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
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
            )}
            />

            <div className="flex items-center gap-2 w-full">
                <Input
                {...register("minPrice")}
                type="number"
                placeholder="Min Price"
                className="xl:w-[100px]"
                name="minPrice"
                min={0}
                />

                <span className="font-bold">-</span>

                <Input
                {...register("maxPrice")}
                type="number"
                placeholder="Max Price"
                className="xl:w-[100px]"
                name="maxPrice"
                min={0}
                />

            </div>

            <Controller
                name="availability"
                control={control}
                render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Availability" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        <SelectItem value="All">All</SelectItem>
                        <SelectItem value="Available">Available</SelectItem>
                        <SelectItem value="Unavailable">Unavailable</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                    </Select>
                )}
            />

            <div className="grid grid-cols-2 gap-3 w-full">
                
                <Button type="reset" onClick={() => setQuery({searchTerm: '', author: '', minPrice: '', maxPrice: '', category: "" , availability : ""})} className="cursor-pointer duration-300 text-lg font-semibold border bg-white text-black border-gray-300 active:scale-90 hover:text-white hover:border-black"> Reset</Button>

                <Button type="submit" className="cursor-pointer duration-300 text-lg font-semibold border bg-white text-black border-gray-300 active:scale-90 hover:text-white hover:border-black">Search</Button>

            </div>

        </form>
    );
};

export default BookFilteringComp;
