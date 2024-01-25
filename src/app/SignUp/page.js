import Link from "next/link";

function SignUp() {
  return (
    <div className="flex flex-col items-center">
      <form
        action=""
        className="bg-[#8e8e8ea2] flex flex-col w-[600px] p-10 rounded-xl"
      >
        <h2 className="text-[64px] text-center font-bold mb-8">Sign Up</h2>
        <div className="flex items-center justify-center h-[40px] gap-5">
          <label htmlFor="" className="text-[20px] font-medium h-full w-[24%]">
            UserName
          </label>
          <input type="text" className="h-full w-2/3 rounded-lg px-4" />
        </div>
        <div className="flex items-center justify-center h-[40px] gap-5 mt-5">
          <label htmlFor="" className="text-[20px] font-medium h-full w-[24%]">
            Email
          </label>
          <input type="text" className="h-full w-2/3 rounded-lg px-4" />
        </div>
        <div className="flex items-center justify-center h-[40px] gap-5 mt-5">
          <label htmlFor="" className="text-[20px] font-medium h-full w-[24%]">
            Password
          </label>
          <input type="text" className="h-full w-2/3 rounded-lg px-4" />
        </div>
        <div className="flex items-center justify-center h-[40px] gap-5 mt-5">
          <label htmlFor="" className="text-[20px] font-medium h-full w-[24%]">
            Re-Password
          </label>
          <input type="text" className="h-full w-2/3 rounded-lg px-4" />
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
            className="text-[#001AFF] font-medium cursor-pointer"
          >
            Sign In.
          </Link>
        </span>
      </form>
    </div>
  );
}

export default SignUp;
