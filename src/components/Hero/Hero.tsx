import classes from "./Hero.module.scss";
import img from '../../assets/hero.jpg'

const Hero = () => {
  return (
    <section id="hero" className={classes.section}>
      <div className={classes.text}>
        <h1>
          Modern
          <br />
          ARCHITECTURE
        </h1>
        <p>
          Architecture.
          <br />
          Design.
          <br />
          Planning.
        </p>
      </div>
      <img src={img} alt="" />
    </section>
  );
};

export default Hero;
