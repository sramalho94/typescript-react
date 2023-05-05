import React from 'react'
import { useState } from 'react'

const Post = () => {
  const [postTitle, setPostTitle] = useState('')
  const changeTitle = () => {
    setPostTitle(34)
  }
  return <div>{postTitle}</div>
}

export default Post
