import classes from "./Skills.module.scss";
import Resume from "../../assets/Resume.pdf";
import { skillsData } from "../../db/Skills";

const Skills = () => {
  return (
    <section id="skills" className={classes.section}>
      <h2>Skills & Resume</h2>
      <div className={classes.content}>
        <div className={classes.container}>
          {skillsData.map((ele, i) => (
            <div key={i} className={classes.card}>
              <div className={classes.top}>
                <img key={i} src={`../../../public/${ele.name}.${ele.imgType}`} alt="" />
                <p>{ele.name}</p>
              </div>
              <div className={classes.bar}>
                <div style={{width: ele.skillPercint, backgroundColor: ele.color}} className={classes.inner}>{ele.skillPercint}</div>
              </div>
            </div>
          ))}
        </div>
        <a className={classes.downloadBtn} href={Resume} download="Resume">
          Download My Resume
        </a>
      </div>
    </section>
  );
};

export default Skills;
