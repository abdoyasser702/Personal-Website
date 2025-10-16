import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import styles from "../styles.module.css";

const SkillsSection = () => {
  useEffect(() => {
    ScrollReveal().reveal(`.${styles["skills__item"]}`, {
      origin: "bottom",
      distance: "40px",
      duration: 400,
      easing: "ease-in-out",
      interval: 100,
      reset: true,
    });
  }, []);

  return (
    <section
      id="skills"
      className={`${styles.skills} ${styles.section} ${styles["section--with-bg"]}`}
    >
      <h2 className={styles["h2__heading"]}>Skills</h2>
      <ul className={styles["skills__list"]}>
        <li data-name="HTML" className={styles["skills__item"]}>
          <h2 className={styles["skills__title"]}>HTML</h2>
        </li>
        <li data-name="CSS" className={styles["skills__item"]}>
          <h2 className={styles["skills__title"]}>CSS</h2>
        </li>
        <li data-name="Javascript" className={styles["skills__item"]}>
          <h2 className={styles["skills__title"]}>Javascript</h2>
        </li>
        <li data-name="React" className={styles["skills__item"]}>
          <h2 className={styles["skills__title"]}>React</h2>
        </li>
        <li data-name="Tailwind CSS" className={styles["skills__item"]}>
          <h2 className={styles["skills__title"]}>Tailwind CSS</h2>
        </li>
        <li data-name="TypeScript" className={styles["skills__item"]}>
          <h2 className={styles["skills__title"]}>TypeScript</h2>
        </li>
        <li data-name="Vitest" className={styles["skills__item"]}>
          <h2 className={styles["skills__title"]}>Vitest</h2>
        </li>
        <li
          data-name="React Testing Library"
          className={styles["skills__item"]}
        >
          <h2 className={styles["skills__title"]}>React Testing Library</h2>
        </li>
      </ul>
    </section>
  );
};

export default SkillsSection;
