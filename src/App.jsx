import { useState } from "react";
import MainHeader from "./component/MainHeader";
import PostList from "./component/PostList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function handleModal() {
    setModalIsVisible(false);
}
  function showModal(){
    setModalIsVisible(true)
  }

  return (
    <main>
      <MainHeader onCreatePost={showModal}/>
      <PostList isPosting= {modalIsVisible} onHideCart={handleModal} />
    </main>
  )
  
}

export default App;
