import Post from "./Post";
import classes from './PostsList.module.css';
import { useState, useEffect } from "react";

export default function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
      async function fetchPosts(){
        setLoading(true);
        try{
            const response = await fetch('http://localhost:8080/posts');
            const resData = await response.json();
            setPosts(resData.posts);
            setLoading(false);
        } catch(error){
            setError('Could not fetcch Post');
            setLoading(false);
        }
      }
      fetchPosts();
    }, []);
    if (error) {
        return <p style={{textAlign: 'center', color: "white"}}>An error occurred!</p>
      }

    function handleAddPost(postData){
       fetch('http://localhost:8080/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
       });
        setPosts((existingPost) => 
            [postData, ...existingPost]
        );
    }
   
    return(
       <>
        {!loading && posts.length > 0 && (
            <ul className={classes.posts}>
            {posts.map((post)=> (<Post  key={post.body} author={post.author} body={post.body} />) )}
         </ul>
        )}
         {!loading && posts.length === 0 &&(
            <div style={{textAlign: 'center', color: 'white'}}>
                <h2>There are no posts yet</h2>
                <p>Start adding some</p>
            </div>
        )}
        {loading && (
            <div style={{textAlign: 'center', color: 'white'}}>
            <p>Loading posts....</p>
        </div>
        ) }
        
       </>
    )
}