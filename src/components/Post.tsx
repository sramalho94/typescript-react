import React from 'react'
import { useState } from 'react'

const Post = () => {
  const [postTitle, setPostTitle] = useState<string | null>('')
  const changeTitle = () => {
    setPostTitle(null)
  }
  return <div>{postTitle}</div>
}

export default Post
