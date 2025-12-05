import styles from "../styles/styles.module.css";

const ClientsSection = () => {
  return (
    <section
      id="clients"
      className={`${styles.clients} ${styles.section} ${styles["section--with-bg"]}`}
    >
      <h2 className={styles["h2__heading"]}>
        What My <br />
        Clients Say.
      </h2>

      <div className={styles["clients__opinions"]}>
        <div className={styles["clients__wrapper"]}>
          <div className={styles["clients__opinion"]}>
            Abdelrahman has an exceptional ability to take a design idea and
            turn it into a clean, responsive, and fully functional interface.
          </div>
          <div className={styles["clients__opinion"]}>
            Working with Abdelrahman was a great experience. He listens
            carefully to requirements, suggests improvements, and adds his
            creative touch.
          </div>
          <div className={styles["clients__opinion"]}>
            I collaborated with Abdelrahman on several front-end projects, and
            what impressed me most is his ownership and dedication.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
