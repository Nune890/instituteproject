import React from "react";
import styles from "./RecognitionOfPrior.module.css";
import line from "../../../assets/homeImg/Line 1.png";
import point from "../../../assets/homeImg/Group 1410119159.png"
import manWidtHand from "../../../assets/homeImg/manWidtHand.png"
import student from "../../../assets/homeImg/student.png"



const RecognitionOfPrior = () => {
  return (
    <div className={styles.mainBox}>
      <div className={styles.conteinerText}>
        <h1>
          Recognition of prior learning convert your professional experience
          into an academic achievement
        </h1>
        <img src={line} alt="img" />
        <div className={styles.pBox}>
          <p>
            Recognition of Prior Learning is a method of assessment by which
            learners gain recognition for knowledge, understanding, skills and
            competencies they posses
          </p>
          <p>
            We believe given an opportunity, every candidate can excel in
            his/her area of expertise
          </p>
          <p>
            We encourage candidates to discuss their personal and professional
            requirements with concerned faculty, school and explore various
            options.
          </p>
          <p>We recognize prior learning and award credit</p>
          <p>
            The assessment requires online exams, viva-voce, interview and
            mapping to candidate’s interest area(s)
          </p>
          <p>
            The credits can be used for entry into various certifications,
            bachelor’s, master’s and doctoral degree at our institution or
            partner institutions in US, UK, Malaysia, Singapore and India. This
            helps to reduce duration and tuition fee of programs. In most of the
            cases, there is a minimum fee for assessment. Candidates can acquire
            accredited university degree at one-fifth of regular tuition fee and
            raise their professional and social profile.
          </p>
        </div>
      </div>
      <div className={styles.conteinerImg}>
        <img src={point} alt="img" className={styles.firstPointImg} />
        <img src={manWidtHand} alt="img" className={styles.manWidtHandImg}/>
        <img src={student} alt="img" className={styles.studentImg} />
        <img src={point} alt="img" className={styles.lastPointImg} />
      </div>
    </div>
  );
};

export default RecognitionOfPrior;
