"use client";
import { useEffect, useState } from "react";
import styles from "../styles/styles.module.css";

const ProjectsSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    import("scrollreveal").then((ScrollRevealModule) => {
      const ScrollReveal = ScrollRevealModule.default;

      ScrollReveal().reveal(`.${styles["project__img"]}`, {
        origin: "left",
        distance: "60px",
        duration: 800,
        easing: "ease-in-out",
        interval: 200,
        reset: false,
      });

      ScrollReveal().reveal(`.${styles["project__data"]}`, {
        origin: "bottom",
        distance: "50px",
        duration: 800,
        easing: "ease-in-out",
        interval: 300,
        reset: false,
      });

      ScrollReveal().reveal(`.${styles["h2__heading"]}`, {
        origin: "top",
        distance: "40px",
        duration: 800,
        easing: "ease-out",
        reset: false,
      });
    });
  }, [mounted]);

  return (
    <section id="projects" className={`${styles.projects} ${styles.section}`}>
      <h2 className={styles["h2__heading"]}>
        MY FEATURED <br />
        PROJECTS
      </h2>

      <div className={styles["project__main"]}>
        <img
          className={styles["project__img"]}
          src="../e-commerce-img.png"
          alt="E-Commerce Project"
          loading="lazy"
        />
        <div className={styles["project__data"]}>
          <h3 className={styles["h3__heading"]}>
            E-Commerce <br />
            Project
          </h3>
          <p className={styles["projects__description"]}>
            A small extension that gives you access to products and categories,
            helping you shop from your favorite brands easily. Our E-Commerce
            extension offers a wide variety of items to make online shopping
            fast, simple, and convenient.
          </p>
          <a
            href="https://e-commerce-six-murex-52.vercel.app/"
            className={styles["projects__links"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live-Version
          </a>
        </div>

        <div className={styles["project__data"]}>
          <h3 className={styles["h3__heading"]}>
            Around the World <br />
            Project
          </h3>
          <p className={styles["projects__description"]}>
            A small website that lets you explore any country around the globe
            in seconds. With just a search, you can discover key details like
            population, languages, currency, and more. Around the World makes
            learning about countries quick, simple, and fun.
          </p>
          <a
            href="https://around-the-world-mauve.vercel.app/"
            className={styles["projects__links"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live-Version
          </a>
        </div>
        <img
          className={styles["project__img"]}
          src="../around-the-world-img.png"
          alt="Around the World Project"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
