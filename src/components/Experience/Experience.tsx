import SecHead from "../../helpers/SecHead/SecHead";
import classes from "./Experience.module.scss";
import { eddata, exdata } from "../../db/data.js";
import { EdCard, ExCard } from "../../types/main.js";

const Experience = () => {
  const edData: EdCard[] = eddata;
  const exData: ExCard[] = exdata;
  return (
    <section className={classes.section}>
      <SecHead letter="B" title="Experience" />
      <div className={classes.content}>
        <div className={classes.cardsContainer}>
          {edData.map((ele, i) => (
            <div key={i} className={classes.card}>
              <h3>{ele.education}</h3>
              <p>{ele.sub}</p>
              <span>{ele.date}</span>
            </div>
          ))}
        </div>
        <div className={classes.mid}></div>
        <div className={classes.cardsContainer}>
          {exData.map((ele, i) => (
            <div key={i} className={classes.card}>
              <h3>{ele.experience}</h3>
              <p>{ele.sub}</p>
              <span>{ele.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
