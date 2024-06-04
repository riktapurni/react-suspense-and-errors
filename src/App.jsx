import { useState } from "react"
import Comments from "./components/Comments"
import PostSelector from "./components/PostSelector"
import "./App.css"; 


function App() {
  const [selectedPostId, setSelectedPostId] = useState(null)
  const handleSelectPost = (e) => {
    setSelectedPostId(e.target.value)
  }

  return (
    <>
      <h1>React suspense and errors boundaries</h1>
      <div>
        <PostSelector onSelectPost={handleSelectPost}/>
       { selectedPostId && <Comments postId={selectedPostId} />}
      </div>
    </>
  )
}

export default App
