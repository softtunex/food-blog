const sql = require("better-sqlite3");
const db = sql("meals.db");

const dummyMeals = [
  {
    title: "Spaghetti Carbonara",
    slug: "spaghetti-carbonara",
    image: "/images/annie-spratt-R3LcfTvcGWY-unsplash.jpg",
    summary:
      "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    instructions:
      "1. Cook the pasta. 2. Fry the pancetta. 3. Mix eggs and cheese. 4. Combine pasta with pancetta and egg mixture. 5. Serve hot.",
    creator: "Chef Mario",
    creator_email: "mario@example.com",
  },
  {
    title: "Vegetarian Tacos",
    slug: "vegetarian-tacos",
    image: "/images/artur-rutkowski-GdTLaWamFHw-unsplash.jpg",
    summary: "Delicious vegetarian tacos filled with fresh veggies and beans.",
    instructions:
      "1. Prepare the vegetables. 2. Warm the tortillas. 3. Assemble tacos with veggies and beans. 4. Serve with your favorite toppings.",
    creator: "Chef Anna",
    creator_email: "anna@example.com",
  },
  // Add more meals here...
];

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS meals (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      image TEXT NOT NULL,
      summary TEXT NOT NULL,
      instructions TEXT NOT NULL,
      creator TEXT NOT NULL,
      creator_email TEXT NOT NULL
    )
  `
).run();

async function initData() {
  // Wrap the synchronous operations in a promise
  return new Promise((resolve, reject) => {
    try {
      const insert = db.prepare(`
        INSERT INTO meals
        VALUES (null, @title, @slug, @image, @summary, @instructions, @creator, @creator_email)
      `);

      for (const meal of dummyMeals) {
        insert.run(meal);
      }

      resolve("Meals have been inserted into the database.");
    } catch (error) {
      reject(error);
    }
  });
}
initData();
