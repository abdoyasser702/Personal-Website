import styles from "../styles.module.css";
import { TypeAnimation } from "react-type-animation";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

const BioSection = () => {
  const scrollHandler = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Title Animation
    ScrollReveal().reveal(`.${styles.bio__heading}`, {
      duration: 500,
      origin: "left",
      distance: "50px",
      easing: "ease-in-out",
      reset: false,
    });

    // Paragraph Animation
    ScrollReveal().reveal(`.${styles.bio__objective}`, {
      duration: 500,
      origin: "bottom",
      distance: "30px",
      delay: 400,
      easing: "ease-in-out",
      reset: false,
    });

    // Buttons Animation
    ScrollReveal().reveal(`.${styles.bio_buttons}`, {
      duration: 500,
      origin: "bottom",
      distance: "20px",
      delay: 800,
      easing: "ease-in-out",
      reset: false,
    });

    // Image Animation
    ScrollReveal().reveal(`.${styles.bio__pic_content}`, {
      duration: 500,
      origin: "right",
      distance: "60px",
      easing: "ease-in-out",
      reset: false,
    });
  }, []);

  return (
    <section id="bio" className={`${styles.bio} ${styles.section}`}>
      <div className={styles.bio__data}>
        <h1 className={styles.bio__heading}>
          Hi There, I'M A{" "}
          <TypeAnimation
            sequence={[
              "Passionate Frontend Developer",
              3000,
              "React Enthusiast",
              3000,
              "Freelancer",
              3000,
            ]}
            wrapper="span"
            speed={30}
            repeat={Infinity}
          />
        </h1>
        <p className={styles.bio__objective}>
          My name is{" "}
          <span className={styles.bio__name}>Abdelrahman Yasser</span>, a
          student at{" "}
          <a href="https://almdrasa.com/" className={styles.bio__almdrasa}>
            Almdrasa.com
          </a>{" "}
          ,Frontend developer and a content creator who publishes content on
          <a
            href="https://www.linkedin.com/in/abdelrahman-yasser-ahmed/"
            className={styles.bio__linkedin}
          >
            LinkedIn
          </a>
        </p>
        <div className={styles.bio_buttons}>
          <a
            className={`${styles.bio__links} ${styles.say_hay_link}`}
            onClick={() => scrollHandler("contact")}
          >
            Say Hi
          </a>
          <a
            href="My CV.pdf"
            className={`${styles.bio__links} ${styles.find_out_link}`}
          >
            Download CV<span className={styles.bio__arrow}>↓</span>
          </a>
        </div>
      </div>
      <div className={styles.bio__pic_content}>
        <img
          className={styles.bio__pic}
          src="/Personal_image-removebg.png"
          alt="Picture of Abdelrahman Yasser"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default BioSection;
