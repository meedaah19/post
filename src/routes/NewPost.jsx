import Modal from '../component/Modal'
import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost({onCancel, onAddPost}) {
  const [changeAuthor, setChangeAuthor] = useState('');
  const [changeBody, setChangeBody] = useState('');

  function handleAuthor(event) {
      setChangeAuthor(event.target.value);
  }

  function handleBody(event) {
      setChangeBody(event.target.value);
  }

  function submitHandler (event) {
    event.preventDefault();
    const postData = {
    body: changeBody,
    author: changeAuthor
  };
  console.log(postData);
  onAddPost(postData);
  onCancel();
}

 
  return (
    <Modal>
    <form onSubmit={submitHandler} className={classes.form}>
      <p>  
        <label htmlFor="body">Text</label>
        <textarea id="body"  required rows={3} onChange={handleBody}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={handleAuthor} />
        </p>
        <p className={classes.actions}>
        <button  type='button' onClick={onCancel}>Cancel</button>
        <button type='submit'>Submit</button>
        </p>
    </form>
    </Modal>
  );
}

export default NewPost;
