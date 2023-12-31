import React from 'react'
import styles from './footer.module.scss'

function Footer() {
  return (
    <footer className={styles.contact} id='contact'>
      <h2>Contact me</h2>
      <div className={styles.iconContainer}>
      <a href="https://www.linkedin.com/in/leotrim-behrami-a175aa19a/" className={styles.icon} target="_blank" rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="50" height="50" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      </a>
      <a href="https://github.com" className={styles.icon} target="_blank" rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="50" height="50" viewBox="0 0 24 24">
          <path d="M12 0c-6.624 0-12 5.376-12 12 0 5.304 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.334-1.755-1.334-1.755-1.09-.745.083-.73.083-.73 1.205.084 1.838 1.236 1.838 1.236 1.07 1.83 2.809 1.303 3.495.994.109-.776.418-1.303.76-1.603-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.535-1.524.104-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.294-1.23 3.294-1.23.64 1.652.24 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.6-.015 2.885-.015 3.275 0 .31.21.69.825.57 4.77-1.585 8.19-6.08 8.19-11.38 0-6.624-5.376-12-12-12z"/>
        </svg>
      </a>
      <a href="mailto:leotrim.behrami@uni-pr.edu" className={styles.icon}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="70" height="60" viewBox="0 0 24 24">
        <path d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z"/></svg>
      </a>
      </div>
    </footer>
  )
}

export default Footer
