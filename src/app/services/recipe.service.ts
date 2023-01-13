import { Injectable } from '@angular/core';
import {Recipe} from "../interfaces/Recipe";
import {MeasuringUnit} from "../enums/MeasuringUnit";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  mexicanNoBeanDip: Recipe = {
    id: "1",
    name: "Mexican No Bean Dip",
    ingredients: [
      {
        amount: 8,
        measuringUnit: MeasuringUnit.OUNCE,
        edibleSubstance: {
          name: "cream cheese",
          preferredMeasuringUnit: MeasuringUnit.OUNCE
        }
      },
      {
        amount: 15,
        measuringUnit: MeasuringUnit.FLUID_OUNCE,
        edibleSubstance: {
          name: "No bean chilli",
          preferredMeasuringUnit: MeasuringUnit.FLUID_OUNCE
        }
      },
      {
        amount: .5,
        measuringUnit: MeasuringUnit.CUP,
        edibleSubstance: {
          name: "salsa",
          preferredMeasuringUnit: MeasuringUnit.CUP
        }
      },
      {
        amount: 1,
        measuringUnit: MeasuringUnit.CUP,
        edibleSubstance: {
          name: "Shredded Cheddar",
          preferredMeasuringUnit: MeasuringUnit.CUP
        }
      },
    ],
    steps: [
      "Let cream cheese come to room temp then spread in bottom of 8x8 dish",
      "Add a layer of no bean chili",
      "Add layer of salsa",
      "Add layer of cheese on top",
      "Heat in 350 oven till warm and cheese melts, usually around 20-30 minutes"
    ],
    notes: "Use hormels no bean chilli, salsa of your preferred spice level. You can use less cheese if desired"
  }

  buffaloChickenDip: Recipe = {
    id: "2",
    name: "Buffalo Chicken Dip",
    ingredients: [
      {
        amount: 8,
        measuringUnit: MeasuringUnit.OUNCE,
        edibleSubstance: {
          name: "cream cheese",
          preferredMeasuringUnit: MeasuringUnit.OUNCE
        }
      },
    ],
    steps: [
      "In a small bowl, mix chicken with buffalo sauce",
      "Let cream cheese come to room temp then spread in bottom of 8x8 dish",
      "Add layer buffalo chicken",
      "Add blue cheese dressing",
      "Add shredded monterrey jack",
      "Heat in 350 oven till warm and cheese melts, usually around 20-30 minutes"
    ],
  }

  recipes = [this.mexicanNoBeanDip, this.buffaloChickenDip]

  constructor() { }

  getRecipes(): Promise<Recipe[]> {
    return Promise.resolve(this.recipes)
  }

  getRecipe(id: string): Promise<Recipe> {
    return Promise.resolve(this.recipes.filter((recipe) => recipe.id === id)[0])
  }
}
