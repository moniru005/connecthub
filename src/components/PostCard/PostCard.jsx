"use client";
import Image from "next/image";
import { CiMenuKebab } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { PiShareFatThin } from "react-icons/pi";
import postImage from "../../assets/crowd-concert.webp";

const PostCard = () => {
  return (
    <div>
      <div className="  rounded-lg mx-auto mt-8  mb-8 bg-[#FFFFFF] w-full p-4  max-w-2xl shadow-xl">
        <div className=" w-full flex justify-between items-center  ">
          <div className="flex justify-around items-center gap-1">
            <Image
              width={42}
              height={42}
              className="rounded-full p-1  "
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
            <div>
              <h2 className=" font-semibold text-sm  "> Dan Walker </h2>
              <p className="text-sm text-gray-400 "> July 26 2018, 01:03pm </p>
            </div>
          </div>
          <div>
            <CiMenuKebab className="text-2xl text-gray-500 font-bold"></CiMenuKebab>
          </div>
        </div>
        {/* post content */}
        <div className="mt-5">
          <p className="text-gray-400 text-sm mb-4">
            Yesterday with @Karen Miller and @Marvin Stemperd at the
            #Rock'n'Rolla concert in LA. Was totally fantastic! People were
            really excited about this one!
          </p>
          {/* image */}
          <div className="flex justify-center items-center w-full">
            <Image
              className="rounded-lg "
              height={280}
              width={600}
              alt="post-image"
              src={postImage}
            />
          </div>
        </div>
        {/* like count */}
        <div className=" flex justify-between mt-5 items-center ">
          <div className="flex justify-between gap-2 items-center ">
            <div className="flex justify-around items-center">
              <Image
                width={32}
                height={32}
                className="rounded-full   "
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
              <Image
                width={32}
                height={32}
                className="rounded-full -ml-3  "
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
              <Image
                width={32}
                height={32}
                className="rounded-full -ml-3  "
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>

            <div>
              <h2 className="text-sm font-semibold ">Mily, Devid</h2>
              <p className="text-sm text-gray-400">and 23 more liked this</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <h2 className="flex justify-center items-center gap-1">
              <FaRegHeart className="text-xl"></FaRegHeart> <span> 23 </span>
            </h2>
            <h2 className="flex justify-center items-center gap-1">
              <FaRegCommentDots className="text-xl"></FaRegCommentDots>{" "}
              <span> 7 </span>
            </h2>
            <h2 className="flex justify-center items-center gap-1">
              <PiShareFatThin className="text-xl"></PiShareFatThin>{" "}
              <span> 2 </span>
            </h2>
          </div>
        </div>
      </div>
      <div className="  rounded-lg mx-auto mt-8  mb-8 bg-[#FFFFFF] w-full p-4  max-w-2xl shadow-xl">
        <div className=" w-full flex justify-between items-center  ">
          <div className="flex justify-around items-center gap-1">
            <Image
              width={42}
              height={42}
              className="rounded-full p-1  "
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
            <div>
              <h2 className=" font-semibold text-sm  "> Dan Walker </h2>
              <p className="text-sm text-gray-400 "> July 26 2018, 01:03pm </p>
            </div>
          </div>
          <div>
            <CiMenuKebab className="text-2xl text-gray-500 font-bold"></CiMenuKebab>
          </div>
        </div>
        {/* post content */}
        <div className="mt-5">
          <p className="text-gray-400 text-sm mb-4">
            Yesterday with @Karen Miller and @Marvin Stemperd at the
            #Rock'n'Rolla concert in LA. Was totally fantastic! People were
            really excited about this one!
          </p>
          {/* image */}
          <div className="flex justify-center items-center w-full">
            <Image
              className="rounded-lg "
              height={280}
              width={600}
              alt="post-image"
              src={postImage}
            />
          </div>
        </div>
        {/* like count */}
        <div className=" flex justify-between mt-5 items-center ">
          <div className="flex justify-between gap-2 items-center ">
            <div className="flex justify-around items-center">
              <Image
                width={32}
                height={32}
                className="rounded-full   "
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
              <Image
                width={32}
                height={32}
                className="rounded-full -ml-3  "
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
              <Image
                width={32}
                height={32}
                className="rounded-full -ml-3  "
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>

            <div>
              <h2 className="text-sm font-semibold ">Mily, Devid</h2>
              <p className="text-sm text-gray-400">and 23 more liked this</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <h2 className="flex justify-center items-center gap-1">
              <FaRegHeart className="text-xl"></FaRegHeart> <span> 23 </span>
            </h2>
            <h2 className="flex justify-center items-center gap-1">
              <FaRegCommentDots className="text-xl"></FaRegCommentDots>{" "}
              <span> 7 </span>
            </h2>
            <h2 className="flex justify-center items-center gap-1">
              <PiShareFatThin className="text-xl"></PiShareFatThin>{" "}
              <span> 2 </span>
            </h2>
          </div>
        </div>
      </div>
    
     
    </div>
  );
};

export default PostCard;
