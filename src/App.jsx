import "./global.css"
import { Header } from "./components/Header/Header"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Post } from "./components/Post/Post"

import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/vanderL.png',
      name: 'Vander Lima',
      role: 'Tech Leader @Cubos.Academy'
    },
    content: [
      { type: 'paragraph', content: 'Olá 👋' },
      { type: 'paragraph', content: 'Acabei de descer de elo no tft. É um cenario bem caotico. Só consigo vencer com comp de astral mage 🚀' },
      { type: 'link', content: 'Jovem 3030' },
    ],
    publishedAt: new Date('2022-07-20 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Olá 👋' },
      { type: 'paragraph', content: 'Acabei de descer de elo no tft. É um cenario bem caotico. Só consigo vencer com comp de astral mage 🚀' },
      { type: 'link', content: 'Jovem 3030' },
    ],
    publishedAt: new Date('2022-07-10 20:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/vanderL.png',
      name: 'Mayk Brito',
      role: 'Educator @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Olá 👋' },
      { type: 'paragraph', content: 'Acabei de descer de elo no tft. É um cenario bem caotico. Só consigo vencer com comp de astral mage 🚀' },
      { type: 'link', content: 'Jovem 3030' },
    ],
    publishedAt: new Date('2022-07-03 20:00:00'),
  }
]

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>

    </div>
  )
}
