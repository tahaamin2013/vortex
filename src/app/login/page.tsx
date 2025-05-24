"use client";
// React
import { FC, useState } from "react";
// Authentication
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
// Styles
import s from "./styles/SignIn.module.scss";
// Icons
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
// Next
import Image from "next/image";
import Link from "next/link";

// NextUI
import { Input, Button } from "@nextui-org/react";
// Font
import { Lexend } from "next/font/google";
const font = Lexend({
  subsets: ["latin"],
  weight: ["500"],
});

const SignIn: FC = ({}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password");
      } else {
        // Redirect to dashboard or home page
        router.push("/dashboard");
        router.refresh();
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className={`${s.signIn} w-full h-screen md:bg-[url('/bgSignIn.svg')]  bg-no-repeat bg-center bg-cover`}
    >
      <section className={`${s.wrapper}  `}>
        <div
          className={`${s.wrapperForm} h-screen bg-white px-5 md:px-24 py-12 shadow-2xl shadow-black/50 relative z-10`}
        >
          <Link
            href={"/"}
            className={`${s.logo} hover:opacity-80 transition-opacity mb-20 tracking-tight`}
          >
            <Image src={"./Logo.svg"} width={40} height={40} alt="Logo" />
            <h5 style={font.style} className="text-black  text-lg">
              Tax<span className="text-blue ">Pal</span>
            </h5>
          </Link>
          <h5 className="text-black text-lg font-semibold mb-2">
            Sign in to your account
          </h5>
          <form className="w-full mt-20" onSubmit={handleSubmit}>
            <Input
              style={{ fontSize: "16px" }}
              fullWidth
              type="email"
              label="Email"
              labelPlacement={"outside"}
              placeholder=" "
              radius="sm"
              color="primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              classNames={{
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "text-blue",
                  "bg-slate-100",
                  "border-1",
                  "border-gray/20",
                ],
                label: ["text-sm", "font-normal", "text-slate-500"],
              }}
              className=""
            />
            <Input
              style={{ fontSize: "16px" }}
              color="primary"
              endContent={
                <button type="button" onClick={() => setIsVisible(!isVisible)}>
                  {isVisible ? (
                    <IoEyeOffOutline color={"#64748B"} />
                  ) : (
                    <IoEyeOutline color={"#64748B"} />
                  )}
                </button>
              }
              fullWidth
              type={isVisible ? "text" : "password"}
              label="Password"
              labelPlacement={"outside"}
              placeholder=" "
              radius="sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              classNames={{
                inputWrapper: [
                  "text-blue",
                  "bg-slate-100",
                  "border-1",
                  "border-gray/20",
                  "hover:bg-default-200/70",
                ],
                label: ["text-sm", "font-normal", "text-slate-500"],
              }}
              className=""
            />
            
            {error && (
              <div className="text-red-600 text-sm text-center mt-4 mb-4">
                {error}
              </div>
            )}

            <Button
              fullWidth
              type="submit"
              disabled={loading}
              className={`${s.submitBtn} bg-blue text-white font-semibold shadow-md tracking-tight disabled:opacity-50 disabled:cursor-not-allowed`}
              radius="full"
            >
              {loading ? "Signing in..." : "Sign In"}
              {!loading && <GoArrowRight size={16} />}
            </Button>
          </form>
        </div>
        <figure className="hidden lg:block w-full h-screen z-0 bg-[url('/bgSignIn.svg')] bg-no-repeat bg-center bg-cover"></figure>
      </section>
    </section>
  );
};

export default SignIn;