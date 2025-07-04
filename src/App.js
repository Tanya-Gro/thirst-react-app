import React, { useState } from "react";
import'./styles/App.css';
import { PostList } from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
    {id:1, title:'JavaScript', body: 'Учимся подключать стили...'},
    {id:2, title:'JavaScript', body: 'Учимся подключать стили...'},
    {id:3, title:'JavaScript', body: 'Учимся подключать стили...'},
  ])

  return (
    <div className="App">
      <PostList posts = {posts} title = "Список постов" />
    </div>
  );
}

export default App;
