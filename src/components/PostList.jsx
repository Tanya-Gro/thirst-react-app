import React from 'react'
import { PostItem } from './PostItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const PostList = ({posts, title, remove}) => {
  if(!posts.length) {
    return (
      <h1 className="no-posts">
        Посты не найдены
      </h1>
    )
  }

  return (
    <div>
      <h1 className="post-list__title">
        {title}:
      </h1>
      
      <TransitionGroup>
        {posts.map((post, index) => {
          
          const nodeRef = React.createRef();
          return (            
            <CSSTransition
              key={post.id}
              nodeRef={nodeRef}
              timeout={500}
              classNames="item"
            >
              <PostItem post = {post} number = {index + 1}  remove = {remove} ref={nodeRef}/>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  )
}
