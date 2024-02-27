"use client";
import { PiNotePencil } from "react-icons/pi";
import { IoMdPhotos } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import Image from "next/image";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useUser from "../Hooks/useUser";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const api_key = "2ada4fdae6c29ea9b5ef757d310870c7";
// console.log(api_key);
const hosting_api = `https://api.imgbb.com/1/upload?key=${api_key}`;

const CreatePostForm = () => {
  const [album, setAlbum] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [hostedImage, setHostedImage] = useState("");

  // console.log(image);

  const axiosPublic = useAxiosPublic();

  const { user } = useUser();
  // console.log(user);

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    // console.log("clicked");
    const postDescription = e.target.postDescription.value;
    // console.log(postDescription);

    if (image) {
      const imageFile = { image: image };
      console.log(imageFile);
      const res = await axiosPublic.post(hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      console.log(res?.data);

      if (res.data?.success) {
        console.log(res.data.success);
        console.log(res.data.data.display_url);

        const postDetails = {
          authorName: user?.displayName,
          authorEmail: user?.email,
          authorImage: user?.photoURL,
          postDescription: postDescription || "",
          albumName: album,
          Location: location,
          date: new Date(),
          postImage: res.data?.data?.display_url || "",
          post: [],
          comment: [],
          share: []
        };

        console.log(postDetails);

        const result = await axiosPublic.post(
          `/posts?email=${user?.email}`,
          postDetails
        );
        console.log(result.data);
        if (result.data.insertedId) {
          toast.success("post success");
          e.target.reset();
        } else {
          toast.error("something wrong");
        }
      }
    } else {
      const postDetails = {
        authorName: user?.displayName,
        authorEmail: user?.email,
        authorImage: user?.photoURL,
        postDescription: postDescription || "",
        albumName: album,
        Location: location,
        date: new Date(),
        postImage: "",
        post: [],
        comment: [],
        share: [],
      };

      // console.log(postDetails);

      const result = await axiosPublic.post(
        `/posts?email=${user?.email}`,
        postDetails
      );
      console.log(result.data);
      if (result.data.insertedId) {
        toast.success("post success");
        e.target.reset();
      } else {
        toast.error("something wrong");
      }
    }

    // console.log(hostedImage);

    // const  res = await axiosPublic.post(`/posts?email=${user?.email}`,post)
    // console.log(res.data);
  };

  return (
    <>
      <div className="editor rounded-lg mx-auto w-full flex flex-col text-gray-800 border border-gray-300 shadow-lg max-w-2xl">
        {/* Tabs above textbox*/}
        <div className="tabs tabs-lifted">
          <a className="tab tab-active">
            <PiNotePencil /> <span className="pl-1">Publish</span>
          </a>
          <a
            className="tab "
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            <IoMdPhotos /> <span className="pl-1">Album</span>
          </a>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg text-center mb-2">
                Add Your Album
              </h3>

              <div>
                <label className="input border border-violet-200 flex items-center gap-2 text-sm lg:text-base focus:outline-none">
                  Album Name:-
                  <input
                    onChange={(e) => setAlbum(e.target.value)}
                    type="text"
                    className="grow"
                    placeholder="Name"
                  />
                </label>

                <label className="input border flex items-center gap-2 my-2 text-sm lg:text-base focus:outline-none border-violet-200">
                  Location:-
                  <input
                    onChange={(e) => setLocation(e.target.value)}
                    type="text"
                    className="grow"
                    placeholder="Album Location"
                  />
                </label>

                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  className="file-input file-input-ghost border border-violet-200 text-indigo-500 w-full text-sm lg:text-base focus:outline-none"
                />
              </div>

              <div className="modal-action justify-between">
                <div className="flex h-full justify-start items-center ">
                  <button
                    type="button"
                    className="btn bg-indigo-500 text-white "
                  >
                    Submit
                  </button>
                </div>
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}

                  <button className="btn  bg-red-400 text-white">Close</button>
                </form>
              </div>
            </div>
          </dialog>
          {/* Following commented code is for video post ------ */}
          {/* <a className="tab">
            <CiVideoOn />
            <span
              className="pl-1"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              Video
            </span>
          </a> */}
          {/* <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg text-center mb-2">
                Add Your Video
              </h3>

              <div>
                <label className="input input-bordered border-2 border-violet-200 flex items-center gap-2">
                  Video Name:-
                  <input type="text" className="grow" placeholder="Name" />
                </label>
                <label className="input input-bordered border-2 border-violet-200 flex items-center gap-2 my-2">
                  Location:-
                  <input
                    type="text"
                    className="grow"
                    placeholder="Video Location"
                  />
                </label>

                <input
                  type="file"
                  id="videoUpload"
                  accept="video/*"
                  className="file-input file-input-bordered file-input-ghost border-2 border-indigo-200 text-indigo-500 w-full max-w-xs"
                />
              </div>

              <div className="modal-action">
                <form method="dialog">
                  <button className="btn bg-indigo-500 text-white">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog> */}
        </div>
        <form onSubmit={handleSubmitPost}>
          {/* textbox/textarea */}
          <div className="relative ">
            {/* <form onSubmit={handleSubmitPost}> */}
            <textarea
              className="description lg:pl-24 md:pl-24 lg:pt-12 md:pt-12 w-full bg-white pl-20 pr-4  py-12 h-60 border border-gray-300 outline-none"
              spellCheck="false"
              name="postDescription"
              placeholder="Describe everything about this post here"
            ></textarea>
            {/* </form> */}
            <div className="left-[5%] top-[15%] avatar absolute ">
              <div className="w-12  rounded-full ring  ring-offset-base-100 ring-offset-2">
                <Image
                  className="rounded-full"
                  height={50}
                  width={50}
                  src={user?.photoURL}
                  alt="profile pic"
                />
              </div>
            </div>
          </div>
          {/* Icons */}
          <div className="icons flex text-gray-500 m-2">
            <svg
              className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <svg
              className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
              />
            </svg>
            <div className="count ml-auto text-gray-400 text-xs font-semibold">
              0/300
            </div>
          </div>
          {/* Buttons */}
          <div className="buttons flex mb-4 mr-2">
            <button
              type="submit"
              className="btn p-1 px-4 font-semibold cursor-pointer text-white ml-2 bg-[#69A2E9]"
            >
              Post
            </button>
          </div>
        </form>

        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
};

export default CreatePostForm;
