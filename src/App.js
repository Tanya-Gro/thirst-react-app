import React, { useState } from "react";
import'./styles/App.css';
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";

function App() {

  const [posts, setPosts] = useState([
    {id:1, title:'JavaScript', body: 'Учимся подключать стили...'},
    {id:2, title:'JavaScript', body: 'Учимся подключать стили...'},
    {id:3, title:'JavaScript', body: 'Учимся подключать стили...'},
  ])

  const createPost = (newPost) => {     
    setPosts([...posts,  newPost ]); 
  }

  const removePost = (post) => {     
    setPosts(posts.filter(p => p.id !== post.id)); 
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      {posts.length
        ? <PostList posts = {posts} title = "Список постов" remove = {removePost} />
        : <h1 className="no-posts">
            Посты не найдены
          </h1>
      }
    </div>
  );
}

export default App;
