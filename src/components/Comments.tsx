import Image from 'next/image'
import React from 'react'

export const Comments = () => {
  return (
    <div className=''>
        {/* right part */}
        <div className='flex-1 flex items-center gap-4'>
            <Image src="https://images.pexels.com/photos/29764572/pexels-photo-29764572/free-photo-of-creative-abstract-portrait-with-vibrant-art-makeup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' width={32} height={32} className='w-8 h-8 rounded-full'/>
            <div className='flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full'>
                <input type="text" placeholder='write a comment...' className='bg-transparent outline-none flex-1' />
                <Image src="/emoji.png" alt='' width={16} height={16} className='cursor-pointer'/>
            </div>
        </div>
        {/* comments */}
        <div className=''>
            {/* comment */}
            <div className='flex gap-4 justify-between mt-6'>
                {/* avatar */}
                <Image src="https://images.pexels.com/photos/29764572/pexels-photo-29764572/free-photo-of-creative-abstract-portrait-with-vibrant-art-makeup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' width={40} height={40} className='w-10 h-10 rounded-full'/>
                {/* des */}
                <div className='flex flex-col gap-2 flex-1'>
                    <span className='font-medium'>Ricky Ponting</span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi aut provident amet tempora molestiae, mollitia id praesentium voluptates eius explicabo.</p>
                    <div className='flex items-center gap-8 text-xs text-gray-500'>
                        <div className='flex items-center gap-4'>
                        <Image src="/like.png" alt="" width={12} height={12} className='cursor-pointer w-4 h-4'/>
                        <span className='text-gray-300'>|</span>
                        <span className='text-gray-500'> 123 Likes</span>
                        </div>
                        <div className=''>
                            Reply
                        </div>
                    </div>
                </div>
                {/* icon */}
                <Image src="/more.png" alt="" width={16} height={16} className='cursor-pointer w-4 h-4'/>
            </div>
        </div>
    </div>
  )
}
