import classes from "./Footer.module.scss";
import { FaFacebookSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className={classes.footer}>
      <div className={classes.content}>
        <div className={classes.info}>
          <div className={classes.left}>
            <h3>That's all about me</h3>
            <p>You can find me here</p>
            <div className={classes.icons}>
              <a
                target="_blank"
                href="https://www.facebook.com/nourhan.shakir7"
              >
                <FaFacebookSquare />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/%D9%86%D9%88%D8%B1-%D8%B4%D8%A7%D9%83%D8%B1-8880b021b/"
              >
                <FaLinkedin />
              </a>
              <a
                target="_blank"
                href="https://wa.me/+201007912227?text=Hi Nourhan! How are you?"
              >
                <FaWhatsappSquare />
              </a>
            </div>
          </div>
          <div className={classes.right}>
            <h3>If you want to hire me</h3>
            <a target="_blank" href="mailto:nour.shakir7@gmail.com">
              Get in touch
            </a>
          </div>
        </div>
        <p>
          Made By{" "}
          <a
          className={classes.me}
            target="_blank"
            href="https://www.linkedin.com/in/karem-mohamed-a789a6239/"
          >
            Karim Mohamed.
          </a>{" "}
          © 2023 NS. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
