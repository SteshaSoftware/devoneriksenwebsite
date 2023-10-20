import React from 'react'
import {FaRedditAlien} from "react-icons/fa"
import { NavLink } from 'react-router-dom'
const RedditReadMore = () => {
  return (
    <a href="https://old.reddit.com/user/devoneriksenwrites" target='_blank'>

    <div className='flex items-center gap-2 text-center justify-center mx-auto text-white mt-10'>
      <FaRedditAlien size={30}/>
      <p className='hover:text-blue-600 underline'>Read more by Devon Eriksen</p>
    </div>
    </a>
  )
}

export default RedditReadMore
