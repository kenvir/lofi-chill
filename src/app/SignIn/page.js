"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";

function SignIn() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <main className="flex flex-col items-center mt-[80px] main">
      <form
        action=""
        className="form bg-[#8e8e8ea2] flex flex-col w-[600px] p-10 rounded-xl"
        onSubmit={handleSubmit()}
      >
        <h2 className="text-[64px] text-center font-bold mb-8">Sign In</h2>
        <div className="flex flex-col h-[60px]">
          <div className="flex items-center justify-center">
            <label
              htmlFor="email"
              className="text-[22px] font-medium h-full w-1/5"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="w-2/3 h-10 rounded-lg px-4"
              autoComplete="new-password"
              {...register("Email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                },
              })}
            />
          </div>
          {errors.Email && errors.Email.type === "required" && (
            <span className="error-message text-[red]">
              Email cannot be empty !
            </span>
          )}
          {errors.Email && errors.Email.type === "pattern" && (
            <span className="error-message text-[red]">Invalid email !</span>
          )}
        </div>
        <div className="flex flex-col h-[60px] mt-5">
          <div className="flex items-center justify-center">
            <label
              htmlFor="password"
              className="text-[22px] font-medium h-full w-1/5"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              autoComplete="new-password"
              className="w-2/3 h-10 rounded-lg px-4"
              {...register("PassWord", {
                required: true,
                minLength: 6,
                maxLength: 30,
              })}
            />
          </div>
          {errors.PassWord && errors.PassWord.type === "required" && (
            <span className="error-message">Password cannot be empty !</span>
          )}
        </div>
        <div className="text-center mt-8 mb-4 ">
          <button className="bg-[#FDAB30] hover:bg-[#faa628] w-[150px] rounded-[8px] py-3 px-6 font-semibold text-[22px] text-white">
            Sign In
          </button>
        </div>

        <div className="flex items-center justify-center">
          Dont have an account yet? &nbsp;
          <Link
            href="/SignUp"
            className="text-[#001AFF] font-medium cursor-pointer"
          >
            Sign Up.
          </Link>
        </div>
      </form>
    </main>
  );
}

export default SignIn;
