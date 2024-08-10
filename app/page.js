import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import ImageSlideshow from "@/components/imageRel/image-sideshow";
import images1 from "@/assets/annie-spratt-R3LcfTvcGWY-unsplash.jpg";
import images2 from "@/assets/artur-rutkowski-GdTLaWamFHw-unsplash.jpg";
import images3 from "@/assets/dominik-martin-JYFmYif4n70-unsplash.jpg";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.slideshow}>
          <ImageSlideshow />
        </div>
        <div className={styles.hero}>
          <h1>Foods of Class</h1>
          <p>Classic food for classic people</p>
          <div className={styles.cta}>
            <Link href="./meals">Explore Meals</Link>
            <Link href="./community">Our Community</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <h2>Our Featured Dishes</h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <Image src={images1} alt="Dish 1" />
              <div className={styles["card-content"]}>
                <h3>Classic Italian Pasta</h3>
                <p>A delightful mix of flavors from the heart of Italy.</p>
                <Link href="/meals/classic-italian-pasta">Learn More</Link>
              </div>
            </div>
            <div className={styles.card}>
              <Image src={images2} alt="Dish 2" />
              <div className={styles["card-content"]}>
                <h3>Exotic Asian Delights</h3>
                <p>Experience the richness of Asian cuisine.</p>
                <Link href="/meals/exotic-asian-delights">Learn More</Link>
              </div>
            </div>
            <div className={styles.card}>
              <Image src={images3} alt="Dish 3" />
              <div className={styles["card-content"]}>
                <h3>Gourmet French Pastries</h3>
                <p>Indulge in the finest French pastries.</p>
                <Link href="/meals/gourmet-french-pastries">Learn More</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
