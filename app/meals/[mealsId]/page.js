import { getMealsBySlug } from "@/lib/meals";
import Image from "next/image";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

const MealId = ({ params }) => {
  const meal = getMealsBySlug(params.mealsId);
  if (!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");
  return (
    <div className={styles.mealContainer}>
      <header className={styles.header}>
        <div className={styles.imageWrapper}>
          <Image
            src={meal.image}
            alt={meal.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{meal.title}</h1>
          <p className={styles.creator}>By {meal.creator}</p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main className={styles.main}>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </div>
  );
};

export default MealId;
