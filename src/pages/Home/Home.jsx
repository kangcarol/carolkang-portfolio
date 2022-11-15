import styles from './Home.module.css'

function Home() {
  return (
    <>
      <main className={styles.home}>
        <section>
          <img src="/carolkang-portfolio-logo.png" alt="Carol Kang logo" className={styles.standard}/>
          <img src="/carolkang-portfolio-logo-mobile.png" alt="Carol Kang logo" className={styles.mobile}/>
        </section>
      </main>
    </>
  )
}

export default Home
