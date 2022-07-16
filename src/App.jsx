import "./global.css"
import { Header } from "./components/Header"

import { Post } from "./Post"

export function App() {

  return (
    <div>

      <Header />

      <Post
        author="Vander Lima"
        content="Lorem ipsum aumentando o número de caracteres"
      />
      <Post
        author="Mudei Fulano"
        content="FUlano aumentando o número de caracteres"
      />
      <Post />
      <Post />
    </div>
  )
}
