import classes from "./About.module.scss";
import img from "../../assets/me.jpg";
import SecHead from "../../helpers/SecHead/SecHead";

const About = () => {
  return (
    <section id="about" className={classes.section}>
      <SecHead letter='A' title='About Me' />
      <div className={classes.content}>
        <img src={img} alt="" />
        <div className={classes.text}>
          <p>
            Hello,
            <br /> my name is Nourhan Shakir. I am 23 years old.
            <br />
            Studies at architecture department Alexandria university.
          </p>
          <div className={classes.innerText}>
            <p>
              "As an architect,you design for the present, with an awareness of
              the past for a future which is essentially unknown"
            </p>
            <span>~ Norman Foster ~</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
