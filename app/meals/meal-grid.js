import MealItem from "./meal-item";
import styles from "./meal-grid.module.css"; // Import the CSS module
// import images1 from "@/assets/annie-spratt-R3LcfTvcGWY-unsplash.jpg";
// import images2 from "@/assets/artur-rutkowski-GdTLaWamFHw-unsplash.jpg";
// import images3 from "@/assets/dominik-martin-JYFmYif4n70-unsplash.jpg";

export default function MealsGrid({ meals }) {
  // const meals = [
  //   {
  //     title: "Spaghetti Carbonara",
  //     slug: "spaghetti-carbonara",
  //     image: images1,
  //     summary:
  //       "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
  //     creator: "Chef Mario",
  //   },
  //   {
  //     title: "Vegetarian Tacos",
  //     slug: "vegetarian-tacos",
  //     image: images2,
  //     summary:
  //       "Delicious vegetarian tacos filled with fresh veggies and beans.",
  //     creator: "Chef Anna",
  //   },
  //   // Add more meals here...
  // ];

  return (
    <section className={styles.mealsSection}>
      {meals.map((meal) => (
        <MealItem key={meal.slug} {...meal} />
      ))}
    </section>
  );
}
