
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUpdatePassMutation } from "@/redux/features/auth/authApi";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

type UpdatePasswordInputs = {
  email: string;
  oldPassword: string;
  newPassword: string;
};

const UpdatePassword = () => {
  
    const location = useLocation() ;
    const navigate = useNavigate() ;
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<UpdatePasswordInputs>();
    const [updatePassword, { isLoading }] = useUpdatePassMutation();
    
    const email = location?.search.split("&")[0].slice(7) ;

    const onSubmit = async (data: UpdatePasswordInputs) => {
        const res = await updatePassword(data).unwrap();
        if(res?.success){
            reset();
            navigate('/') ;
            toast.success(res.message) ;
        }
        else{
            toast.success(res.message) ;
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Update Password</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <label className="block mb-1 font-medium">Email</label>
                <Input
                    value={email}    
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div>
                <label className="block mb-1 font-medium">Old Password</label>
                <Input
                type="password"
                {...register("oldPassword", { required: "Old password is required" })}
                placeholder="Enter your current password"
                />
                {errors.oldPassword && (
                <p className="text-red-500 text-sm">{errors.oldPassword.message}</p>
                )}
            </div>

            <div>
                <label className="block mb-1 font-medium">New Password</label>
                <Input
                type="password"
                {...register("newPassword", { required: "New password is required" })}
                placeholder="Enter your new password"
                />
                {errors.newPassword && (
                <p className="text-red-500 text-sm">{errors.newPassword.message}</p>
                )}
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Updating..." : "Update Password"}
            </Button>
            </form>
        </div>
        </div>
    );
};

export default UpdatePassword;
