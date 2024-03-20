"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex flex-col items-center">
      <form
        action=""
        onSubmit={handleSubmit()}
      >
        <h2 className="text-[64px] text-center font-bold mb-8">Sign Up</h2>
        <div className="flex flex-col h-[60px]">
          <div className="flex items-center justify-center">
            <label
              htmlFor="userName"
              className="text-[22px] font-medium h-full w-[30%]"
            >
              UserName
            </label>
            <input
              type="text"
              id="userName"
              className="w-2/3 h-10 rounded-lg px-4"
              autoComplete="new-password"
              {...register("UserName", {
                required: true,
                minLength: 6,
                maxLength: 30,
              })}
            />
          </div>
          {errors.UserName && errors.UserName.type === "required" && (
            <span className="error-message">Invalid UserName !</span>
          )}
        </div>
        <div className="flex flex-col h-[60px] mt-5">
          <div className="flex items-center justify-center">
            <label
              htmlFor="email"
              className="text-[22px] font-medium h-full w-[30%]"
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
              className="text-[22px] font-medium h-full w-[30%]"
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
        <div className="flex flex-col h-[60px] mt-5">
          <div className="flex items-center justify-center">
            <label
              htmlFor="re-password"
              className="text-[22px] font-medium h-full w-[30%]"
            >
              Re-Password
            </label>
            <input
              type="password"
              id="re-password"
              autoComplete="new-password"
              className="w-2/3 h-10 rounded-lg px-4"
              {...register("PasswordAgain", {
                required: true,
                validate: (val) => {
                  if (watch("PassWord") !== val) {
                    return "Your passwords does not match!";
                  }
                },
              })}
            />
          </div>
          {errors.PasswordAgain && errors.PasswordAgain.type === "required" && (
            <span className="error-message">
              Password again can not be empty !
            </span>
          )}
          {errors.PasswordAgain && errors.PasswordAgain.type === "validate" && (
            <span className="error-message">
              Confirm password does not match !
            </span>
          )}
        </div>
        <div className="text-center mt-8 mb-4">
          <button className="bg-[#FDAB30] hover:bg-[#faa628] w-[150px] rounded-[8px] py-3 px-6 font-semibold text-[20px] text-white">
            Sign Up
          </button>
        </div>
        <span className="flex items-center justify-center">
          You have an account yet? &nbsp;
          <Link
            href="/SignIn"
            className="text-white font-medium cursor-pointer"
          >
            Sign In.
          </Link>
        </span>
      </form>
    </div>
  );
}

export default SignUp;
