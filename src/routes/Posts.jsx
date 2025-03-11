import { Outlet } from "react-router-dom";
import PostList from "../component/PostList";

function Posts() {
 
  return (
    <main>
      <PostList />
      <Outlet/>
    </main>
  )
  
}

export default Posts;
