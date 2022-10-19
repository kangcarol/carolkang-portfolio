import { Link } from "react-router-dom"

function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <h2>Reach out if you'd like to work together!</h2>
      <div>
        <ul>
          <li><a href="mailto:carolkang@me.com">Email</a></li>
          <li><a href="https://www.linkedin.com/in/kang-carol/" target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/kangcarol" target="_blank" rel="noreferrer">GitHub</a></li>
        </ul>
      </div>
    </>
  )
}

export default Contact
