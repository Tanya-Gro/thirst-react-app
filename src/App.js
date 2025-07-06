import React, { useMemo, useState, createRef } from "react";
import'./styles/App.css';
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import { PostFilter } from "./components/PostFilter";
import { MyModal } from "./components/UI/MyModal/MyModal";
import { MyButton } from "./components/UI/button/MyButton";

function App() {

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [posts, setPosts] = useState([
    {id:1, title:'1JavaScript', body: 'Учимся подключать стили...3'},
    {id:2, title:'2JavaScript', body: 'Учимся подключать стили...2'},
    {id:3, title:'3JavaScript', body: 'Учимся подключать стили...1'},
  ]);
  
  const sortedPosts = useMemo(()=> {
    console.log('Работает сортировка постов')
    if(filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(
    () => {
      return sortedPosts.filter(post=> post.title.toLowerCase().includes(filter.query.toLowerCase()))
    },
    [filter.query, sortedPosts]
  )
  const createPost = (newPost) => {     
    setPosts([...posts,  newPost ]);
    setModal(false);
  }

  const removePost = (post) => {     
    setPosts(posts.filter(p => p.id !== post.id)); 
  }

  return (
    <div className="App">
      <MyButton onClick={()=>setModal(true)}>Создать пост</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      
      <hr className="line"/>
      <PostFilter
        filter={filter} 
        setFilter={setFilter}
      />
      <PostList posts = {sortedAndSearchedPosts} title = "Список постов" remove = {removePost} />
    </div>
  );
}

export default App;
