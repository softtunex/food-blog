import Link from "next/link";
import Image from "next/image";
import styles from "./meal-item.module.css";

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={styles.mealItem}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} fill objectFit="cover" />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.summary}>{summary}</p>
        <p className={styles.creator}>Created by: {creator}</p>
        <Link href={`/meals/${slug}`} className={styles.viewDetails}>
          View Details
        </Link>
      </div>
    </article>
  );
}
