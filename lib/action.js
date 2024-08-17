"use server";

import { redirect } from "next/navigation";
import { createMeal } from "./meals";
import { revalidatePath } from "next/cache";
function isvalid(value) {
  return !value || value.trim() === "";
}
export async function sharedMeal(state, formData) {
  const meal = {
    title: formData.get("title"),
    image: formData.get("image"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("creator"),
    creator_email: formData.get("creatorEmail"),
  };
  if (
    isvalid(meal.title) ||
    isvalid(meal.summary) ||
    isvalid(meal.instructions) ||
    isvalid(meal.creator) ||
    isvalid(meal.creator_email) ||
    !meal.image ||
    meal.image.size === 0 ||
    !meal.creator_email.includes("@")
  ) {
    return { message: "invalid input" };
  }
  await createMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
