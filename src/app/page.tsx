import MenuBar from "@/components/menu-bar";
import styles from "@/components/css/Home.module.css";
import HeroSection from "@/components/hero-section";
import { HeroParallaxDemo } from "@/components/second-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <MenuBar />
      <HeroSection />
      <main className={styles.main}>
        <section className={styles.firstSection}>
          <h2>About Jinxx</h2>
        </section>
        <section className={styles.secondSection}>
          <h2>Video</h2>
        </section>
        <section className={styles.thirdSection}>
          <h2>FAQ</h2>
        </section>
      </main>
      <Footer />
    </div>
  );
}
