import React from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useUser from "../Hooks/useUser";

const ProfileForm = ({ show, setShow }) => {
  
  const axiosPublic = useAxiosPublic();
  const {user} = useUser();
  console.log(user)

  

  return (
    <>
      {show === true ? (
        <div className="w-full mt-4 flex flex-col gap-y-2 justify-center items-center">
          <form
           
            className="w-10/12 flex flex-col gap-y-2 rounded"
          >
            {/* Name & Email */}
            <div className="w-full flex flex-col lg:flex-row gap-2 ">
              <input
                className="p-3 w-1/2 border border-slate-400 rounded-lg "
                type="text"
                name="name"
                id=""
                placeholder="Name"
                defaultValue={user?.displayName}
                disabled
              />
              <input
                className="p-3 w-1/2 border border-slate-400 rounded-lg"
                type="text"
                name="email"
                id=""
                placeholder="Email"
                defaultValue={user.email}
                disabled
              />
            </div>
            {/* Institute & Marital Status */}
            <div className="w-full flex flex-col lg:flex-row gap-2 ">
              <input
                className="p-3 w-1/2 border border-slate-400 rounded-lg"
                type="text"
                name="institute"
                id=""
                placeholder="Your College / University Name"
                defaultValue=""
              />
              <input
                className="p-3 w-1/2 border border-slate-400 rounded-lg"
                type="text"
                name="mStatus"
                id=""
                placeholder="Marital Status"
                defaultValue=""
              />
            </div>
            {/* From & Lives In */}
            <div className="w-full flex flex-col lg:flex-row gap-2 ">
              <input
                className="p-3 w-1/2 border border-slate-400 rounded-lg"
                type="text"
                name="whereFrom"
                id=""
                placeholder="Where you from"
                defaultValue=""
              />
              <input
                className="p-3 w-1/2 border border-slate-400 rounded-lg"
                type="text"
                name="livesIn"
                id=""
                placeholder="Currently Lives In"
                defaultValue=""
              />
            </div>
            {/* Submit */}
            <div className="w-full flex flex-col lg:flex-row gap-2 justify-center items-center mt-4 ">
              <input
                className="btn bg-blue-400 hover:bg-blue-500 text-white px-4 py-1 upper"
                type="button"
                value="Update"
              />
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ProfileForm;
