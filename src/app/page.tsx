"use client";
import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../styles/styles.module.css";
import LoadingScreen from "./loading";

const BioSection = lazy(() => import("../components/BioSection"));
const SkillsSection = lazy(() => import("../components/SkillsSection"));
const ProjectsSection = lazy(() => import("../components/ProjectsSection"));
const ClientsSection = lazy(() => import("../components/ClientsSection"));
const ContactSection = lazy(() => import("../components/ContactSection"));

export default function Home() {
  return (
    <div className={styles.container}>
      <video className={styles.video_loop} autoPlay muted loop playsInline>
        <source src="/video-loop.mp4" type="video/mp4" />
      </video>

      <Header />

      <Suspense fallback={<LoadingScreen />}>
        <BioSection />
        <SkillsSection />
        <ProjectsSection />
        <ClientsSection />
        <ContactSection />
      </Suspense>

      <Footer />
    </div>
  );
}
