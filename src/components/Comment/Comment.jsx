import { Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/diego3g.png" alt="" />

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

              <button
                title='Deletar comentário'
              >
                <Trash
                  size={20}
                />
              </button>
            </div>
          </header>
          <p>MUito bom Devon, parabéns!!</p>
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