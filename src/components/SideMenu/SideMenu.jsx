 "use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { CgFeed } from "react-icons/cg";
import { IoIosImages } from "react-icons/io";
import { BiSolidVideos } from "react-icons/bi";
import { GoQuestion } from "react-icons/go";

export default function SideMenu() {
  return (
    <div className="w-full ">
      <div className="mx-auto w-full rounded-2xl bg-white p-2">
        
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left text-md font-medium ">
                <div className="flex flex-row gap-2 items-center">
                <CgFeed />
                <span>Feed</span>
                </div>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-[#69A2E9]`}
                />
              </Disclosure.Button>

              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                <div className="flex flex-col gap-y-2 justify-start text-sm ">
                  <button className="flex justify-start hover:bg-slate-300 hover:w-full w-full px-4 py-1 rounded">
                    Trending
                  </button>
                  <button className="flex justify-start hover:bg-slate-300 hover:w-full w-full px-4 py-1 rounded">
                    Popular
                  </button>
                  <button className="flex justify-start hover:bg-slate-300 hover:w-full w-full px-4 py-1 rounded">
                    Following
                  </button>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left text-md font-medium ">
                <div className="flex flex-row gap-2 items-center">
                <IoIosImages/>
                <span>Photos</span>
                </div>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-[#69A2E9]`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
              <div className="flex flex-col gap-y-2 justify-start text-sm ">
                  <button className="flex justify-start hover:bg-slate-300 hover:w-full w-full px-4 py-1 rounded">
                    Album
                  </button>
                  <button className="flex justify-start hover:bg-slate-300 hover:w-full w-full px-4 py-1 rounded">
                    Recent Photos
                  </button>
                  
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left text-md font-medium ">
                <div className="flex flex-row gap-2 items-center">
                <BiSolidVideos />
                <span>Videos</span>
                </div>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-[#69A2E9]`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
              <div className="flex flex-col gap-y-2 justify-start text-sm ">
                  <button className="flex justify-start hover:bg-slate-300 hover:w-full w-full px-4 py-1 rounded">
                    Suggested
                  </button>
                  <button className="flex justify-start hover:bg-slate-300 hover:w-full w-full px-4 py-1 rounded">
                    My Channel
                  </button>
                  
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left text-md font-medium ">
                <div className="flex flex-row gap-2 items-center">
                <GoQuestion />
                <span>Questions</span>
                </div>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-[#69A2E9]`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
              <div className="flex flex-col gap-y-2 justify-start text-sm ">
                  <button className="flex justify-start hover:bg-slate-300 hover:w-full w-full px-4 py-1 rounded">
                    Home
                  </button>
                  <button className="flex justify-start hover:bg-slate-300 hover:w-full w-full px-4 py-1 rounded">
                    My Questions
                  </button>
                  <button className="flex justify-start hover:bg-slate-300 hover:w-full w-full px-4 py-1 rounded">
                    Popular
                  </button>
                  
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

      </div>
    </div>
  );
}
