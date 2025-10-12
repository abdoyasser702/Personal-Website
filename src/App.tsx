import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import styles from "./styles.module.css";
import BioSection from "./components/BioSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ClientsSection from "./components/ClientsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <video className={styles.video_loop} autoPlay muted loop>
          <source src="video-loop.mp4" type="video/mp4" />
        </video>
        <Header />
        <BioSection />
        <SkillsSection />
        <ProjectsSection />
        <ClientsSection />
        <ContactSection />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
