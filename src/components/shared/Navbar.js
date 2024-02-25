"use client"
import Image from "next/image";
import { FaRegBell, FaRegEnvelope, FaRegHeart } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import logo from "@/assets/logo.png";
import useUser from "../Hooks/useUser";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter()
  const {logout, user} = useUser()

  // console.log(user?.photoURL)

  const handleLogout= ()=>{
    logout()
    .then(()=>{
      Swal.fire({
        position: "center",
        icon: "success",
        title: "successfully Logged Out",
        showConfirmButton: false,
        timer: 1500,
      });
      
      router.push("/login")
      location.reload()
    })
  }
  
  return (
    <div className="navbar w-full z-50 px-3 bg-base-100 fixed">
      <div className="flex-1 gap-4 lg:gap-8 items-center">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <Image className="h-10 w-10" src={logo} alt="" />
          <a className="text-sm lg:text-xl text-[#69A2E9] font-bold uppercase">ConnectHub</a>
        </div>

        {/* Left Icons */}
        <div className="text-xl">
          <button className="btn-md text-xl">
            <FaRegHeart />
          </button>
          <button className="btn-md text-xl">
            <FaRegBell />
          </button>
          <button className="btn-md text-xl">
            <FaRegEnvelope></FaRegEnvelope>
          </button>
          <button className="btn-md text-xl">
            <FaRegMessage></FaRegMessage>
          </button>
        </div>
      </div>

      <div className="flex-none gap-2">
        <div className=" relative form-control hidden lg:flex flex-row items-center ">
          <CiSearch className="absolute left-1 z-20 text-xl text-slate-400" />
          <input
            type="text"
            placeholder="Search"
            className="pl-8 relative z-10 input input-bordered rounded-full focus:outline-none w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end pr-2">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {user?<Image
                width={50}
                height={50}
                alt="Tailwind CSS Navbar component"
                src={user?.photoURL}
              />:
              <Image
                width={50}
                height={50}
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={'/profile'} className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
