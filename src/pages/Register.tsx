/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import logPic from "../assets/loginPic.webp";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useAppDispatch } from "@/redux/hooks";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
}

export function Register({ className, ...props }: React.ComponentProps<"div">) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [registerMutation] = useRegisterMutation();
  const { register, handleSubmit } = useForm<RegisterFormValues>();

  const onSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
    const toastId = toast.loading("Signing up...");
    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      const res = await registerMutation(userInfo).unwrap();
      dispatch(setUser({ user: res.data.user, token: res.data.accessToken }));
      localStorage.setItem("accessToken", res.data.accessToken);
      toast.success("Registered Successfully", { id: toastId, duration: 2000 });
      navigate("/login");
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div
      className={cn(
        "flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    >
      <Card className="w-full max-w-4xl overflow-hidden shadow-lg">
        <CardContent className="grid grid-cols-1 md:grid-cols-2">
          <form
            className="p-6 sm:p-8 flex items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-6 w-full">
              <div className="text-center">
                <h1 className="text-2xl font-bold">Welcome In Books Home</h1>
                <p className="text-balance text-muted-foreground">
                  Register for your account create
                </p>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="name">Username</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your username"
                  required
                  {...register("name")}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  {...register("email")}
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  {...register("password")}
                />
              </div>

              <Button type="submit" className="w-full">
                Sign Up
              </Button>

              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link to="/login" className="underline underline-offset-4">
                  Login
                </Link>
              </div>
            </div>
          </form>

          <div className="relative hidden md:block bg-muted">
            <img
              src={logPic}
              alt="Login Visual"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
