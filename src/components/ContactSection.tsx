/* eslint-disable */
import styles from "../styles/styles.module.css";

const ContactSection = () => {
  return (
    <section id="contact" className={`${styles.contact} ${styles.section}`}>
      <div className={styles["contact__form"]}>
        <h2 className={styles["h2__heading"]}>
          let's work <br />
          together!
        </h2>
      </div>
      <div className={styles["contact__main"]}>
        <p className={styles["contact__description"]}>
          Feel free to reach out to me anytime you'd like — I'm always open to
          connecting and chatting! I particularly prefer to communicate through
          LinkedIn, as it 's a great platform for professional discussions and
          networking, allowing us to share ideas and collaborate effectively at
          our convenience.
        </p>
        <div className={styles["social__contacts"]}>
          <a
            href="https://www.facebook.com/abdo.elnesr.37"
            target="_blank"
            className={styles["social__contact"]}
          >
            <img src="../facebook.svg" alt="Facebook profile of Abdelrahman" />
          </a>
          <a
            href="https://github.com/abdoyasser702"
            target="_blank"
            className={styles["social__contact"]}
          >
            <img src="../github.svg" alt="Github profile of Abdelrahman" />
          </a>
          <a
            href="https://www.linkedin.com/in/abdelrahman-yasser-ahmed/"
            target="_blank"
            className={styles["social__contact"]}
          >
            <img src="../LinkedIn.svg" alt="LinkedIn profile of Abdelrahman" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
