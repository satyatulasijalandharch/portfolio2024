import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/devops.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>DevOps</h3>
              <p>
                I enjoy to improve the speed and quality of devivery, 
                automate and achieve CI CD
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cloud.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Cloud Engineer</h3>
              <p>
                I enjoy design, secure and maintenance of an organization's 
                cloud-based infrastructure and application
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/software.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Development</h3>
              <p>
                I enjoy learning software development either for 
                personal or specific purposes 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
