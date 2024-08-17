"use client";
import { sharedMeal } from "@/lib/action";
import styles from "./page.module.css";
import ImageSelected from "@/components/imageRel/pick-image";
import MealSubmit from "../meal-submit";
import { useFormState } from "react-dom";

export default function ShareMeal() {
  const [state, formData] = useFormState(sharedMeal, { message: null });
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Share Your Favorite Meal</h1>
      <form className={styles.form} action={formData}>
        <div className={styles.formGroup}>
          <label htmlFor="creator">Your Name</label>
          <input
            type="text"
            id="creator"
            name="creator"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="creatorEmail">Your Email</label>
          <input
            type="email"
            id="creatorEmail"
            name="creatorEmail"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="title">Meal Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter the meal title"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="summary">Summary</label>
          <textarea
            id="summary"
            name="summary"
            placeholder="Provide a brief summary of the meal"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="instructions">Instructions</label>
          <textarea
            id="instructions"
            name="instructions"
            placeholder="List the cooking instructions"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <ImageSelected />
        </div>
        {state.message && <p style={{ color: "red" }}>{state.message}</p>}
        <MealSubmit />
      </form>
    </div>
  );
}
