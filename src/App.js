import React, { useState } from "react";
import'./styles/App.css';
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import { MySelect } from "./components/UI/select/MySelect";

function App() {

  const [posts, setPosts] = useState([
    {id:1, title:'1JavaScript', body: 'Учимся подключать стили...3'},
    {id:2, title:'2JavaScript', body: 'Учимся подключать стили...2'},
    {id:3, title:'3JavaScript', body: 'Учимся подключать стили...1'},
  ]);
  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {     
    setPosts([...posts,  newPost ]); 
  }

  const removePost = (post) => {     
    setPosts(posts.filter(p => p.id !== post.id)); 
  }

  const sortPosts = (sort) => {    
    console.log(sort) 
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort]))); 
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr className="line"/>
      <div>
        <MySelect
          defaultValue="Сортировка"
          options={[
            {value: 'title', name: 'По заголовку'},
            {value: 'body', name: 'По описанию'}
          ]}
          value={selectedSort}
          onChange={sort =>sortPosts(sort)}
        />
      </div>
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
