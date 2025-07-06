import React, { useEffect, useState } from "react";
import'./styles/App.css';
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import { PostFilter } from "./components/PostFilter";
import { MyModal } from "./components/UI/MyModal/MyModal";
import { MyButton } from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import { PostService } from "./API/PostService";
import { Loader } from "./components/UI/loader/Loader";

function App() {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [isPostsLoading, setIsPostsLoading] = useState(true);
  
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {     
    setPosts([...posts,  newPost ]);
    setModal(false);
  }

  async function fetchPosts() {
    setIsPostsLoading(true);
    const posts = await PostService.getAll();
    setPosts(posts);
    setIsPostsLoading(false);
  }

  useEffect( () => fetchPosts, [] )

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
      { isPostsLoading
        ? <Loader/>
        : <PostList posts = {sortedAndSearchedPosts} title = "Список постов" remove = {removePost} />
      }
    </div>
  );
}

export default App;
