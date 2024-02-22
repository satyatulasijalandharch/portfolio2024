import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Satya Tulasi Jalandhar C H</h1>
        <p className={styles.description}>
          I'm a a fresh and enthusiastic DevOps Engineer, ready to make an impact in the world of technology.
           Explore my portfolio to discover my skills, projects, and aspirations.
        </p>
        <div className={styles.buttonsContainer}>
          <a href="mailto:satyatulasijalandharch2@email.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a href="/path/to/your/resume.pdf" download="Satya_Tulasi_Resume.pdf" className={styles.resumeBtn}>
            Download Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
        style={{ width: '35%', height: '35%' , borderRadius: '100%'}}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
