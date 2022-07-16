import "./global.css"
import { Header } from "./components/Header/Header"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Post } from "./Post"

import styles from './App.module.css'

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Vander Lima"
            content="Lorem ipsum aumentando o número de caracteres"
          />
          <Post
            author="Mudei Fulano"
            content="FUlano aumentando o número de caracteres"
          />
        </main>
      </div>

    </div>
  )
}
