import classes from "./Projects.module.scss";
import { ProjectsData } from "../../db/ProjectsData";
import SecHead from "../../helpers/SecHead/SecHead";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section id="projects" className={classes.section}>
      <SecHead letter="C" title="My Projects" />
      <div className={classes.container}>
        {ProjectsData.map((ele, i) => (
          <div key={i} className={classes.card}>
            <div className={classes.imgContainer}>
              <img src={ele.shot1} alt="" />
            </div>
            <div className={classes.info}>
              <div className={classes.inner}>
                <h3>{ele.name}</h3>
                <p>{ele.concept.substring(0, 240)}...</p>
              </div>
              <Link to={`/projects/${ele.id}`}>
                <p>See More</p>
                <FaArrowRightLong />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
