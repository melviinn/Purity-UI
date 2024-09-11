import Image from "next/image";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { LuUser2, LuUserPlus } from "react-icons/lu";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { PiSignIn } from "react-icons/pi";
import PurityLogo from "./assets/purity_logo_upscaled.png";

export default function RegisterPage() {
  return (
    <div className="flex flex-col h-screen w-full p-4">
      <div className="bg-teal-500 w-full h-full flex flex-col gap-10 rounded-xl bg-register bg-no-repeat bg-[position:left,_right]">
        <nav className="flex justify-evenly mr-20 items-center p-8 px-32">
          <div className="flex gap-4 pointer-events-none">
            <Image src={PurityLogo} alt="logo" width={30} height={30}></Image>
            <h1 className="text-xl font-bold text-white">
              PURITY UI DASHBOARD
            </h1>
          </div>
          <div className="flex gap-6 text-white font-medium">
            <a
              href="#"
              className="flex items-center gap-2 hover:text-black transition-colors duration-100 ease-linear"
            >
              <MdOutlineSpaceDashboard size={18} />
              Dashboard
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-black transition-colors duration-100 ease-linear"
            >
              <LuUser2 size={18} />
              Profile
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-black transition-colors duration-100 ease-linear"
            >
              <LuUserPlus size={18} />
              Sign Up
            </a>
            <a
              href="signin"
              className="flex items-center gap-2 hover:text-black transition-colors duration-100 ease-linear"
            >
              <PiSignIn size={18} />
              Sign In
            </a>
          </div>
          <button className="px-10 py-2 bg-white rounded-full text-sm font-medium hover:bg-black hover:text-white transition duration-300 ease-linear ">
            Free Download
          </button>
        </nav>
        <div className="relative flex flex-col justify-center items-center gap-8 w-full">
          <h1 className="text-4xl font-bold text-white">Welcome!</h1>
          <div className="absolute w-1/4 max-h-fit flex flex-col gap-5 items-center p-7 top-16 bg-white rounded-xl shadow-lg">
            <h2 className="font-semibold text-lg">Register with</h2>
            <div className="flex gap-6">
              <button className="p-4 bg-white text-black rounded-lg font-semibold border hover:bg-teal-400 hover:border-teal-400 transition-colors duration-100 ease-linear">
                <FaFacebook size={24} />
              </button>
              <button className="p-4 bg-white text-black rounded-lg font-semibold border hover:bg-teal-400 hover:border-teal-400 transition-colors duration-100 ease-linear">
                <FaApple size={24} />
              </button>
              <button className="p-4 bg-white text-black rounded-lg font-semibold border hover:bg-teal-400 hover:border-teal-400 transition-colors duration-100 ease-linear">
                <FaGoogle size={24} />
              </button>
            </div>
            <p className="text-gray-400 font-semibold text-lg">or</p>
            <div className="flex flex-col gap-5 w-full">
              <label htmlFor="fullname" className="flex flex-col gap-2">
                <p className="ml-1 text-sm">Name</p>
                <input
                  type="text"
                  placeholder="Your full name"
                  name="fullname"
                  className="p-4 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                />
              </label>
              <label htmlFor="email" className="flex flex-col gap-2">
                <p className="ml-1 text-sm">Email</p>
                <input
                  type="text"
                  placeholder="Your email adress"
                  name="email"
                  className="p-4 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                />
              </label>
              <label htmlFor="password" className="flex flex-col gap-2">
                <p className="ml-1 text-sm">Password</p>
                <input
                  type="password"
                  placeholder="Your password"
                  name="password"
                  className="p-4 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                />
              </label>

              <label className="relative inline-flex cursor-pointer items-center w-fit">
                <input id="switch" type="checkbox" className="peer sr-only" />
                <label htmlFor="switch" className="hidden"></label>
                <div className="peer h-5 w-10 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-teal-500 peer-checked:after:translate-x-5 peer-checked:after:border-teal-500 peer-checked:border-teal-500 peer-focus:ring-teal-500"></div>
                <p className="text-sm inline-flex ml-4">Remember me</p>
              </label>

              <button className="p-4 bg-teal-500 text-white rounded-2xl font-semibold hover:bg-teal-400 transition-colors duration-100 ease-linear">
                Register
              </button>
              <p className="text-sm text-center text-gray-400 font-medium">
                Already have an account?{" "}
                <a
                  href="signin"
                  className="font-bold underline text-teal-500 hover:cursor-pointer hover:text-teal-400 transition-colors duration-100 ease-linear"
                >
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full"></div>
    </div>
  );
}
