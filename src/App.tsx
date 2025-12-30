import { EmojiPop } from "./EmojiPop"



function App() {


  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
      <EmojiPop emoji="😘😘" count={5} />
    </div>
  )
}

export default App
