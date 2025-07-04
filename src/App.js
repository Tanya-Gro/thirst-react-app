import React, { useState } from "react";
import'./styles/App.css';
import { PostItem } from "./components/PostItem";

function App() {
  const [posts, setPostr] = useState([
    {id:1, title:'JavaScript', body: 'Учимся подключать стили...'},
    {id:2, title:'JavaScript', body: 'Учимся подключать стили...'},
    {id:3, title:'JavaScript', body: 'Учимся подключать стили...'},
  ])

  return (
    <div className="App">
      <h1 className="post-list__title">Список постов:</h1>
      {posts.map(post => <PostItem post = {post} key = {post.id}/>)}
    </div>
  );
}

export default App;
