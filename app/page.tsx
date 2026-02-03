import styles from "./page.module.css";
import Header from "@/components/Header";
import ProfileHero from "@/components/ProfileHero";
import About from "@/components/About";
import Featured from "@/components/Featured";
import Activity from "@/components/Activity";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Sidebar from "@/components/Sidebar";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Volunteering from "@/components/Volunteering";
import Recommendations from "@/components/Recommendations";
import WelcomePopup from "@/components/WelcomePopup";

export default function Home() {
  return (
    <div className={styles.page}>
      <WelcomePopup />
      <Header />
      <div className="container" style={{ marginTop: "65px", display: "flex", gap: "24px", paddingTop: "12px" }}>

        {/* Main Content Column */}
        <main style={{ flex: "1 1 0", minWidth: 0 }}>
          <ProfileHero />
          <About />
          <Featured />
          {/* <Activity /> */}
          <Experience />
          <Education />
          <Certifications />
          <Projects />
          <Volunteering />
          <Recommendations />
        </main>

        {/* Right Sidebar Column */}
        <aside style={{ width: "300px", flexShrink: 0 }}>
          <Sidebar />
        </aside>

      </div>
    </div>
  );
}
