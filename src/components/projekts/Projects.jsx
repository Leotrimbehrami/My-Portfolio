import React from "react";
import styles from "./projects.module.scss";
import img from "../img/1.jpg";

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.projectContainer}>
        <div className={styles.projectCard}>
          <img src={img} alt="" className={styles.projectImage} />
          <h3 className={styles.projectTitle}>Project One</h3>
          <p className={styles.projectDescription}>
            This is my project and some text about it.
          </p>
          <hr className={styles.divider} />
          <a
            href="https://example.com"
            className={styles.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>

        <div className={styles.projectCard}>
          <img src={img} alt="" className={styles.projectImage} />
          <h3 className={styles.projectTitle}>Project Two</h3>
          <p className={styles.projectDescription}>
            This is my project and some text about it.
          </p>
          <hr className={styles.divider} />
          <a
            href="https://example.com"
            className={styles.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>

        <div className={styles.projectCard}>
          <img src={img} alt="" className={styles.projectImage} />
          <h3 className={styles.projectTitle}>Project Three</h3>
          <p className={styles.projectDescription}>
            This is my project and some text about it.
          </p>
          <hr className={styles.divider} />
          <a
            href="https://example.com"
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
