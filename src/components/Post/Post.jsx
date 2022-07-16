import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            src="https://scontent.ffor33-1.fna.fbcdn.net/v/t39.30808-6/281784946_5201937996511100_4649550361815419009_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHxw1KierwcGJCwhNtCOsWCgqKkQF6wBdCCoqRAXrAF0LmqKVRegGyZ5fKjHE2R3-Q3Koh8995DHtZmDN72gJ4T&_nc_ohc=FLWIw6XfTy4AX9VIq2U&tn=ZauXXhvKB-dSNopJ&_nc_ht=scontent.ffor33-1.fna&oh=00_AT8xsWILcPBicl_tSXXzl3YL_2eSD8zqiTO_V8RRhHisfQ&oe=62D6DC50"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Pingui triste</strong>
            <span>Tech</span>
          </div>
        </div>

        <time
          title='16 de julho ás 1:20'
          dateTime='2022-07-16 1:30'
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Olá 👋</p>
        <p>Acabei de descer de elo no tft. É um cenario bem caotico. Só consigo vencer com comp de astral mage 🚀</p>
        <p>
          👉<a href="#">{' '}Jovem 3030</a>
        </p>
        <p>
          <a href="#">#tft</a>{' '}
          <a href="#">#astralmage</a>{' '}
          <a href="#">#ouroiv</a>
        </p>
      </div>
    </article >
  )
}