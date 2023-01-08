import { Ingredient } from "./Ingredient";
import { RecipeTag } from "../enums/RecipeTag";

export interface Recipe {
  name: string
  ingredients: Ingredient[]
  steps: string[]
  recipeTags?: RecipeTag[]
  categories?: RecipeTag[]
  pictureUrls?: string[]
  notes?: string
}
