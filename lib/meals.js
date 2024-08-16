import sql from "better-sqlite3";
import { resolve } from "styled-jsx/css";

const db = sql("meals.db");

export function getMeals() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  return db.prepare("SELECT * FROM meals").all();
}

export function getMealsBySlug(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
