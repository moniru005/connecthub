import React, { useState } from "react";
import Image from "next/image";
import { CiMenuKebab } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { PiShareFatThin } from "react-icons/pi";
import postImage from "../../assets/crowd-concert.webp";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useUser from "../Hooks/useUser";
import CommentForm from "../CommentForm/CommentForm";
import CommentModal from "../Modal/CommentModal/CommentModal";

const SinglePostCard = ({ post }) => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [showModal, setShowModal] = useState(false)

  const axiosPublic = useAxiosPublic();
  const { user } = useUser();

  const {
    _id,
    authorName,
    authorEmail,
    authorImage,
    postDescription,
    albumName,
    Location,
    date,
    postImage,
  } = post;

  const handleLike = async (e) => {
    console.log(e);
    const likeDetails = {
      postId: e,
      like: true,
      author: user?.displayName,
      authorImage: user?.photoURL,
    };

    const res = await axiosPublic.put("/posts", likeDetails);
    console.log(res.data);
    if (res.data.acknowledged) {
      setShow2(!show2);
    }
  };

  console.log(post);
  return (
    <div className="  rounded-lg mx-auto mt-8  mb-8 bg-[#FFFFFF]  w-full p-4  max-w-4xl shadow-xl">
      {/* Post header */}
      <div className=" w-full flex justify-between items-center md:px-5  ">
        <div className="flex justify-around items-center gap-1">
          {authorImage ? (
            <Image
              width={42}
              height={42}
              className="rounded-full p-1 w-12 h-12 "
              alt="Tailwind CSS Navbar component"
              src={authorImage}
            />
          ) : (
            <Image
              width={42}
              height={42}
              className="rounded-full p-1  "
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          )}

          <div>
            <h2 className=" font-semibold text-sm  "> {post?.authorName} </h2>
            <p className="text-sm text-gray-400 "> {post?.date} </p>
          </div>
        </div>
        <div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="m-1">
              <CiMenuKebab className="text-2xl text-gray-500 font-bold"></CiMenuKebab>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Bookmark</a>
              </li>
              <li>
                <a>Delete</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* post content */}
      <div className="mt-5">
        <p className="text-gray-400 text-sm mb-4 md:px-5">{postDescription}</p>
        {/* image */}
        {post?.postImage && (
          <div className="flex justify-center items-center w-full">
            <Image
              className="rounded-lg h-96 w-auto"
              height={"280"}
              width={"600"}
              alt="post-image"
              src={post.postImage}
            />
          </div>
        )}
      </div>
      {/* like count */}
      <div className=" flex justify-between mt-5 items-center md:px-5 ">
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
            <button onClick={() => handleLike(post._id)}>
              {show2 ? (
                <FaRegHeart className="text-xl text-red-700"></FaRegHeart>
              ) : (
                <FaRegHeart className="text-xl"></FaRegHeart>
              )}
            </button>{" "}
            <span> 23 </span>
          </h2>
          <h2 onClick={()=>setShowModal(true)} className="flex justify-center items-center gap-1">
            <FaRegCommentDots className="text-xl "></FaRegCommentDots>{" "}
            <span> 7 </span>
          </h2>
        </div>
      </div>
      {/* Comment Section*/}
      <div>
        <button >show modal</button>
        <CommentModal isOpen={showModal}></CommentModal>
        {/* <CommentForm></CommentForm> */}
        
      </div>

    </div>
  );
};

export default SinglePostCard;
