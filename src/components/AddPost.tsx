import Image from "next/image";
import React from "react";

export const AddPost = () => {
  return (
    <div className="p-4 bg-white rounded-lg flex gap-4 justify-between text-sm">
      {/* avatar */}
      <Image
        src="https://images.pexels.com/photos/29414716/pexels-photo-29414716/free-photo-of-stylish-woman-enjoying-coffee-at-istanbul-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width={48}
        height={48}
        alt=""
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* post */}
      <div className="flex-1 ">
        {/* text input */}
        <div className="flex gap-4">
          <textarea
            placeholder="What's on your mind?"
            className="bg-slate-100 flex-1 p-2 rounded-lg"
          ></textarea>
          <Image
            src="/emoji.png"
            width={20}
            height={20}
            alt=""
            className="w-5 h-5 cursor-pointer self-end"
          />
        </div>
        {/* post option */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap ">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addimage.png" width={20} height={20} alt="" />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" width={20} height={20} alt="" />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" width={20} height={20} alt="" />
            Event
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" width={20} height={20} alt="" />
            Poll
          </div>
        </div>
      </div>
    </div>
  );
};
