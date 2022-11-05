import styles from './Home.module.css'

function Home() {
  return (
    <>
      <main className={styles.home}>
        <h1>CAROL KANG</h1>
        <h2>software engineer</h2>
        <img 
          src='./carolkang.jpeg'
          alt="carol-kang"
          className="self-img"
          height='300' 
          />
      </main>
    </>
  )
}

export default Home
