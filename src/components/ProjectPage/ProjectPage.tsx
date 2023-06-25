import { useParams } from "react-router-dom";
import classes from "./ProjectPage.module.scss";
import { FaArrowLeftLong } from "react-icons/fa6";
import { ProjectsData } from "../../db/ProjectsData";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const ProjectPage = () => {
  const { projectId } = useParams();
  const data = ProjectsData.filter((ele) => ele.id === Number(projectId))[0];
  return (
    <>
      <section className={classes.section}>
        <div className={classes.content}>
          <Link to="/" className={classes.backBtn}>
            <FaArrowLeftLong />
            <p>Back</p>
          </Link>
          <div className={classes.intro}>
            <div className={classes.imgInfo}>
              <img src={data.shot1} alt="" />
              <h1>{data.name}</h1>
            </div>
            <div className="blur"></div>
            <div className={classes.imgInfo}>
              <img src={data.shot2} alt="" />
              <div className={classes.text}>
                <h2>Concept</h2>
                <p>{data.concept}</p>
              </div>
            </div>
            <div className={classes.interior}>
              <h2>~ More Images ~</h2>
              <div className={classes.holder}>
                <img src={data.shot3} alt="" />
                <img src={data.shot4} alt="" />
              </div>
            </div>
            <div className={classes.card}>
              <h2>How Is This Done</h2>
              <div className={classes.imgsContainer}>
                <img src={data.layer1} alt="" />
                <img src={data.layer2} alt="" />
              </div>
            </div>
            <div className={classes.oneImg}>
              <h2>{data.FPlanName}</h2>
              <img src={data.plan1} alt="" />
            </div>
            <div className={classes.oneImg}>
              <h2>{data.SPlanName}</h2>
              <img src={data.plan2} alt="" />
            </div>
            <div className={classes.oneImg}>
              <h2>Elevations</h2>
              {data.elevations.map((ele, i) => (
                <img key={i} src={ele.image} alt="" />
              ))}
            </div>
          </div>
        </div>
        <div className="blur2"></div>
      </section>
      <Footer />
    </>
  );
};

export default ProjectPage;
