import classes from "./SecHead.module.scss";
import { head } from "../../types/main";

const SecHead = ({ letter, title }: head) => {
  return (
    <div className={classes.head}>
      <p>{letter}</p>
      <div className={classes.headRight}>
        <div className={classes.line}></div>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default SecHead;
