import React from 'react'
import { PostItem } from './PostItem';

export const PostList = ({posts, title, remove}) => {
  return (
    <div>
      <h1 className="post-list__title">{title}:</h1>
      {posts.map((post, index) => <PostItem post = {post} key = {post.id} number = {index + 1}  remove = {remove} />)}
    </div>
  )
}
