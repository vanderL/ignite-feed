import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'
import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {

    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/diego3g.png"
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time
                title='16 de julho ás 1:20'
                dateTime='2022-07-16 1:30'
              >
                Cerca de 2h atrás
              </time>

            </div>
            <button
              title='Deletar comentário'
              onClick={handleDeleteComment}
            >
              <Trash
                size={24}
              />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp
            />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}