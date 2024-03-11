import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
// import education from "../../data/education.json"; // Changed from history to education
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        {/* <h2 className={styles.title}>Education</h2> */}
        {/* <ul className={styles.education}> */}
          {/* {education.map((educationItem, id) => { // Changed from historyItem to educationItem */}
            {/* return ( */}
              {/* <li key={id} className={styles.educationItem}> */}
                {/* <img */}
                  {/* src={getImageUrl(educationItem.imageSrc)} */}
                  {/* alt={`${educationItem.institution} Logo`} // Changed from organisation to institution */}
                {/* /> */}
                {/* <div className={styles.educationItemDetails}> Changed from historyItemDetails to educationItemDetails */}
                  {/* <h3>{`${educationItem.degree}, ${educationItem.institution}`}</h3> // Changed from role and organisation to degree and institution */}
                  {/* <p>{`${educationItem.startDate} - ${educationItem.endDate}`}</p> */}
                  {/* <ul> */}
                    {/* {educationItem.courses.map((course, id) => { // Changed from experiences to courses */}
                      {/* return <li key={id}>{course}</li>; */}
                    {/* })} */}
                  {/* </ul> */}
                {/* </div> */}
              {/* </li> */}
            {/* ); */}
          {/* })} */}
        {/* </ul> */}
      </div>
    </section>
  );
};