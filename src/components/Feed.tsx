import React from 'react'
import { Post } from './Post'

export const Feed = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md flex flex-col gap-12 '>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}
