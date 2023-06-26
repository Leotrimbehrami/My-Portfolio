import React from "react";
import styles from "./projects.module.scss";
import img from "../img/1.jpg";
import img2 from '../img/2.png'
import img3 from '../img/3.jpg'

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.projectContainer}>
        <div className={styles.projectCard}>
          <img src={img} alt="" className={styles.projectImage} />
          <h3 className={styles.projectTitle}>Github Finder App</h3>
          <p className={styles.projectDescription}>
            This is a GitHub Finder app created using Vite-React, and Tailwind CSS. With this app, you can search for users on GitHub and view their profiles.
          </p>
          <hr className={styles.divider} />
          <a
            href="https://github-finder-app-zeta-fawn.vercel.app/"
            className={styles.projectLink}
            target="_blank"
            // rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>

        <div className={styles.projectCard}>
          <img src={img2} alt="" className={styles.projectImage} />
          <h3 className={styles.projectTitle}>Comment App</h3>
          <p className={styles.projectDescription}>
            This is a small project that allows users to share their opinion on an article. It provides a comment list and a  comment form.
          </p>
          <hr className={styles.divider} />
          <a
            href="https://comment-app-iota.vercel.app/"
            className={styles.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>

        <div className={styles.projectCard}>
          <img src={img3} alt="" className={styles.projectImage} />
          <h3 className={styles.projectTitle}>Note taking App</h3>
          <p className={styles.projectDescription}>
            This is a small app that allows users to create new notes by entering a title and the text of the note. The user can delete unwanted notes when they no longer need them.
          </p>
          <hr className={styles.divider} />
          <a
            href="https://notiz-app-aufgabe-mit-context-api.vercel.app/"
            className={styles.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
