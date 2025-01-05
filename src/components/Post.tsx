import Image from "next/image";
import React from "react";
import { Comments } from "./Comments";

export const Post = () => {
  return (
    <div className="flex flex-col gap-4 ">
      {/* user */}
      <div className="flex items-center justify-between">
        {/* user image */}
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/8136799/pexels-photo-8136799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full "
          />
          <span className="font-medium">Indranil Chakraborty</span>
        </div>
        {/* icon */}
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/* description */}
      <div className="flex flex-col gap-4">
        {/* description image */}
        <div className="w-full min-h-96 relative ">
          <Image
            src="https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            className="object-cover rounded-md "
          />
        </div>
        {/* description text */}
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
          perferendis, voluptate facere quo repellat, commodi, cum fuga omnis in
          saepe deserunt exercitationem? Quia, id hic, exercitationem itaque
          tempore ad blanditiis libero praesentium debitis, quibusdam iste illo.
          Repellat, tempora quaerat nulla itaque, sequi ad doloribus culpa
          temporibus adipisci impedit, omnis deleniti.
        </p>
      </div>
      {/* interaction*/}
      <div className="flex items-center justify-between text-sm my-4">
        {/* left part */}
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/like.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300 ">|</span>
            <span className="text-gray-500 ">
              123<span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/comment.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300 ">|</span>
            <span className="text-gray-500 ">
              123<span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        {/* right part */}
        <div className="">
          <div className="flex items-center justify-end gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/share.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300 ">|</span>
            <span className="text-gray-500 ">
              123<span className="hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>
      </div>
      {/* comments part */}
      <Comments/>
    </div>
  );
};
