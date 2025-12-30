import { EmojiPop } from "./EmojiPop"



function App() {


  return (
    <div style={{ 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
      gap: "2rem",
      minHeight: "100vh",
      backgroundColor: "#f5f5f5"
    }}>
      <EmojiPop emoji="👍🏼" count={8} />
      <EmojiPop emoji="😂" count={8} />
      <EmojiPop emoji="🎉" count={8} />
      <EmojiPop emoji="🤗" count={8} />
    </div>
  )
}

export default App
