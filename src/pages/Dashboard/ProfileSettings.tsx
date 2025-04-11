
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useGetMyDataQuery } from "@/redux/features/user/userApi";
import { useRequestForUpdatePassMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";

type PasswordFormInputs = {
  currentPassword: string;
  newPassword: string;
};

const ProfileSettings = () => {
    
    const {data} = useGetMyDataQuery(undefined) ;
    const [sendEmail] = useRequestForUpdatePassMutation() ;

    const {
        register,
        handleSubmit,
        reset,
    } = useForm<PasswordFormInputs>();

    const onSubmit = async () => {
        const res = await sendEmail({email : data?.data?.email}) ;
        if(res?.data?.success){
            toast.success("Plz check your email spam or other folders carefully..." , {duration : 10000})
        }
        else{
            toast.error(res?.data?.message , {duration : 5000})
        }
        reset();
    };

    return (
        <div className="min-h-screen py-10 px-4 md:px-10 bg-gray-50 inter">
        <div className="max-w-4xl mx-auto space-y-10">
            
            <div className="bg-white p-6 rounded-xl shadow-md border">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">Profile Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                <p className="text-gray-600 text-sm">Full Name</p>
                <p className="font-medium">{data?.data?.name || "N/A"}</p>
                </div>
                <div>
                <p className="text-gray-600 text-sm">Email</p>
                <p className="font-medium">{data?.data?.email || "N/A"}</p>
                </div>
                <div>
                <p className="text-gray-600 text-sm">Role</p>
                <p className="font-medium capitalize">{data?.data?.role || "user"}</p>
                </div>
                <div>
                <p className="text-gray-600 text-sm">Status</p>
                <p className="font-medium">{data?.data?.isActivate ? "Active" : "Inactive"}</p>
                </div>
            </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">Update Password</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                
                <div>
                <label htmlFor="currentPassword" className="text-sm text-gray-700">
                    Current Password
                </label>
                <Input
                    id="currentPassword"
                    type="password"
                    {...register("currentPassword", { required: "Current password is required" })}
                />
                </div>

                
                <div>
                <label htmlFor="newPassword" className="text-sm text-gray-700">
                    New Password
                </label>
                <Input
                    id="newPassword"
                    type="password"
                    {...register("newPassword", {
                    required: "New password is required",
                    minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                    },
                    })}
                />
                </div>

                <Button type="submit" className="w-full">
                Update Password
                </Button>
            </form>
            </div>
        </div>
        </div>
    );
};

export default ProfileSettings;
