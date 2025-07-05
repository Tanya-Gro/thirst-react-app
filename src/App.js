import React, { useMemo, useState } from "react";
import'./styles/App.css';
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import { MySelect } from "./components/UI/select/MySelect";
import { MyInput } from "./components/UI/input/MyInput";

function App() {

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState([
    {id:1, title:'1JavaScript', body: 'Учимся подключать стили...3'},
    {id:2, title:'2JavaScript', body: 'Учимся подключать стили...2'},
    {id:3, title:'3JavaScript', body: 'Учимся подключать стили...1'},
  ]);
  
  const sortedPosts = useMemo(()=> {
    console.log('Работает сортировка постов')
    if(selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(
    () => {
      return sortedPosts.filter(post=> post.title.toLowerCase().includes(searchQuery.toLowerCase()))
    },
    [searchQuery, sortedPosts]
  )
  const createPost = (newPost) => {     
    setPosts([...posts,  newPost ]); 
  }

  const removePost = (post) => {     
    setPosts(posts.filter(p => p.id !== post.id)); 
  }

  const sortPosts = (sort) => {    
    setSelectedSort(sort);
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      
      <hr className="line"/>
      <div>
        <MyInput 
          type="text" 
          placeholder="Поиск"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        
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
      {sortedAndSearchedPosts.length
        ? 
        <PostList posts = {sortedAndSearchedPosts} title = "Список постов" remove = {removePost} />
        : 
        <h1 className="no-posts">
          Посты не найдены
        </h1>
      }
    </div>
  );
}

export default App;
