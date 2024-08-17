"use client";
import { useFormStatus } from "react-dom";
import styles from "./page.module.css";
export default function MealSubmit() {
  const { pending } = useFormStatus();

  return (
    <button className={styles.submitButton} disabled={pending}>
      {pending ? "Submiting..." : "Share Meal"}
    </button>
  );
}
