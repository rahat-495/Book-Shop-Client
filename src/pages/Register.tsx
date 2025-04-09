import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import logPic from "../assets/loginPic.webp";
import { Link } from "react-router-dom";

export function Register({ className, ...props }: React.ComponentProps<"div">) {
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
          <form className="p-6 sm:p-8 flex items-center">
            <div className="flex flex-col gap-6 w-full">
              <div className="text-center">
                <h1 className="text-2xl font-bold">Welcome In Books Home</h1>
                <p className="text-balance text-muted-foreground">
                  Register for your account create
                </p>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="name">Username</Label>
                <Input id="name" type="text" placeholder="your mail" required />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" required />
              </div>

              <Button type="submit" className="w-full">
                Login
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
