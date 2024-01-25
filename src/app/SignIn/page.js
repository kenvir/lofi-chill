import Link from "next/link";

function SignIn() {
  return (
    <main className="flex flex-col items-center mt-[80px] main">
      <form
        action=""
        className="form bg-[#8e8e8ea2] flex flex-col w-[600px] p-10 rounded-xl"
      >
        <h2 className="text-[64px] text-center font-bold mb-8">Sign In</h2>
        <div className="flex items-center justify-center h-[40px] gap-5">
          <label htmlFor="" className="text-[22px] font-medium h-full w-1/5">
            Email
          </label>
          <input type="text" className="h-full w-2/3 rounded-lg px-4" />
        </div>
        <div className="flex items-center justify-center h-[40px] gap-5 mt-5">
          <label htmlFor="" className="text-[22px] font-medium h-full w-1/5">
            Password
          </label>
          <input type="text" className="h-full w-2/3 rounded-lg px-4" />
        </div>
        <div className="text-center mt-8 mb-4 ">
          <button className="bg-[#FDAB30] hover:bg-[#faa628] w-[150px] rounded-[8px] py-3 px-6 font-semibold text-[22px] text-white">
            Sign In
          </button>
        </div>

        <div className="flex items-center justify-center">
          Dont have an account yet? &nbsp;
          <Link
            href="/dashboard/SignUp"
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
