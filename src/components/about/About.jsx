import styles from './about.module.scss'
import img from '../img/leo.jpeg'

function About() {
  return (
    <section className={styles['about-me']} id="about-me">
      <div className={styles.information}>
        <h2>About Me</h2>
        <p>Hello, my name is Leotrim Behrami and I am a full stack developer with experience in both front-end and back-end development. I have a passion for creating clean, efficient, and user-friendly websites and applications</p>
      </div>
      <div className={styles['headshot-container']}>
          <img src={img} alt="Leo" className={styles.headshot} />
      </div>
    </section>
  )
}

export default About
