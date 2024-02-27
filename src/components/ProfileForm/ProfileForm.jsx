import React, { useState } from "react";
import useUser from "../Hooks/useUser";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import toast, { Toaster } from "react-hot-toast";

const ProfileForm = ({ show }) => {
  const { user } = useUser();
  const [error, setError] = useState("");
  const axiosPublic = useAxiosPublic();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = user.email;
    const institute = form.institute.value;
    const maritalStatus = form.maritalStatus.value;
    const whereFrom = form.whereFrom.value;
    const livesIn = form.livesIn.value;

    const userData = {
      email: email,
      institute: institute,
      maritalStatus: maritalStatus,
      whereFrom: whereFrom,
      livesIn: livesIn,
  
    };

    // console.log(userData);
    try {
      const res = await axiosPublic.put("/users", userData);
      console.log(res.data);
      if (res.data.modifiedCount === 1) {
        toast.success("Data Successfully Updated");
      }
    } catch {
        setError(error.res.data.error);
        toast.error(error);
    }
  };
  return (
    <>
      {show === true ? (
        <div className="w-full mt-4 flex flex-col gap-y-2 justify-center items-center">
          <form
            onSubmit={handleUpdate}
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
                name=""
                id=""
                placeholder="Email"
                defaultValue={user?.email}
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
              />
              <input
                className="p-3 w-1/2 border border-slate-400 rounded-lg"
                type="text"
                name="maritalStatus"
                id=""
                placeholder="Marital Status"
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
              />
              <input
                className="p-3 w-1/2 border border-slate-400 rounded-lg"
                type="text"
                name="livesIn"
                id=""
                placeholder="Currently Lives In"
              />
            </div>
            {/* Submit */}
            <div className="w-full flex flex-col lg:flex-row gap-2 justify-center items-center mt-4 ">
              <input
                className="btn bg-blue-400 hover:bg-blue-500 text-gray-700 px-4 py-1 upper"
                type="submit"
                value="Update"
              />
            </div>
          </form>
          <Toaster />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ProfileForm;
