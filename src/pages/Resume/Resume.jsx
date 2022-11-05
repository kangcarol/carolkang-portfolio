import styles from './Resume.module.css'

function Resume() {
  return (
    <>
      <main className={styles.resume}>
        <h1>RESUME</h1>
        <h2>Click to download <a href="/Carol_Kang_Resume_2022.pdf" target="_blank" rel="noreferrer">my resume</a></h2>
      </main>
    </>
  )
}

export default Resume
