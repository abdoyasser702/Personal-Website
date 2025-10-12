import { useEffect, useState } from "react";
import styles from "../styles.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("bio");

  const scrollHandler = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
    setActiveSection(id);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className={styles.header}>
      <label htmlFor="menu" className={styles.burger__menu}>
        <div className={styles.burger__menu_bar}></div>
        <div className={styles.burger__menu_bar}></div>
        <div className={styles.burger__menu_bar}></div>
      </label>

      <input
        id="menu"
        className={styles.burger_menu_checkbox}
        type="checkbox"
        checked={isMenuOpen}
        onChange={() => setIsMenuOpen(!isMenuOpen)}
      />

      <nav className={styles.navigation}>
        <ul className={styles.navigation__list}>
          <li>
            <a
              className={`${styles.navigation__link} ${
                activeSection === "bio" ? styles.active : ""
              }`}
              onClick={() => scrollHandler("bio")}
            >
              Bio
            </a>
          </li>
          <li>
            <a
              className={`${styles.navigation__link} ${
                activeSection === "skills" ? styles.active : ""
              }`}
              onClick={() => scrollHandler("skills")}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className={`${styles.navigation__link} ${
                activeSection === "projects" ? styles.active : ""
              }`}
              onClick={() => scrollHandler("projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className={`${styles.navigation__link} ${
                activeSection === "clients" ? styles.active : ""
              }`}
              onClick={() => scrollHandler("clients")}
            >
              My Clients
            </a>
          </li>
          <li>
            <a
              className={`${styles.navigation__link} ${
                activeSection === "contact" ? styles.active : ""
              }`}
              onClick={() => scrollHandler("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.toggle}>
        <h3 className={styles.toggle__title}>Switch Theme</h3>
        <div className="relative">
          <input
            type="checkbox"
            name="toggle checkbox"
            id="toggle"
            className={styles.toggle__checkbox}
            checked={isDarkMode}
            onChange={() => {
              setIsDarkMode(!isDarkMode);
              document.documentElement.classList.toggle("dark");
            }}
          />
          <label
            htmlFor="toggle"
            className={styles.toggle__label}
            role="button"
            tabIndex={0}
          ></label>
        </div>
      </div>
    </header>
  );
};

export default Header;
