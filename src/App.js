import React, { useState, useRef } from "react";
import'./styles/App.css';
import { PostList } from "./components/PostList";
import { MyButton } from "./components/UI/button/MyButton";
import { MyInput } from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    {id:1, title:'JavaScript', body: 'Учимся подключать стили...'},
    {id:2, title:'JavaScript', body: 'Учимся подключать стили...'},
    {id:3, title:'JavaScript', body: 'Учимся подключать стили...'},
  ])

  const [title, setTitle] = useState('');

  // получение данных если компонент неуправляемый
  const bodyInputRef = useRef();

  const addNewPost = (e) => { 
    e.preventDefault();
    console.log(title);
    console.log(bodyInputRef.current.value);
   }

  return (
    <div className="App">
      {/* Управляемый компонент */}
      <MyInput 
        type="text" 
        placeholder="Название поста" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* Неуправляемый/неконтролируемый компонент */}
      <MyInput 
        type="text" 
        placeholder="Описание поста"
        ref={bodyInputRef}
      />

      <MyButton onClick={addNewPost}>Создать пост</MyButton>
      <PostList posts = {posts} title = "Список постов" />
    </div>
  );
}

export default App;
