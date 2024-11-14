import React from "react";
import styles from "@/components/css/Home.module.css"; // Import the CSS for the hero section

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroLogo}>Hero Logo</div>
      <h1 className={styles.heroTitle}>
        Discover real-world design inspiration.
      </h1>
      <p className={styles.heroSubtitle}>
        Featuring over 300,000 screens and 1,000 iOS, Android & Web apps — New
        content weekly.
      </p>
      <div className={styles.heroButtons}>
        <button className={styles.joinButton}>Join for free</button>
        <button className={styles.planButton}>See our plans</button>
      </div>
      <div className={styles.trustedBy}>
        <p>Trusted by design teams at</p>
        <div className={styles.trustedLogos}>
          <span>Uber</span>
          <span>Airbnb</span>
          <span>Ramp</span>
          <span>Metalab</span>
          <span>Pinterest</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
