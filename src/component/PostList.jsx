import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";

import classes from './PostsList.module.css';
import Modal from "./Modal";

export default function PostList({onHideCart, isPosting}) {
    const [changeAuthor, setChangeAuthor] = useState('');
    const [changeBody, setChangeBody] = useState('');

    function handleAuthor(event) {
        setChangeAuthor(event.target.value);
    }

    function handleBody(event) {
        setChangeBody(event.target.value)
    }

    
    return(
       <>
       {isPosting && 
        <Modal onClose={onHideCart} >
        <NewPost onChangeAuthor={handleAuthor} onChangeBody={handleBody} onCancel={onHideCart}/>
        </Modal>
       }
        <ul className={classes.posts}>
                <Post  author = {changeAuthor} content = {changeBody} />
                <Post author = 'Hameedat' content = 'A very hard working girl' />
        </ul>
       </>
    )
}