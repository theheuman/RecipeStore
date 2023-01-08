import { Injectable } from '@angular/core';
import {Recipe} from "../interfaces/Recipe";
import {MeasuringUnit} from "../enums/MeasuringUnit";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  mexicanNoBeanDip: Recipe = {
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
      "Let it come to room temp then spread in bottom of 8x8 dish",
      "Add a layer of no bean chili",
      "Add layer of salsa",
      "Add layer of cheese on top",
      "Heat in 350 oven till warm and cheese melts, usually around 20-30 minutes"
    ],
    notes: "Use hormels no bean chilli, use salsa of your preferred spice level, you can use less cheese if desired"
  }
  constructor() { }

  getRecipes(): Promise<Recipe[]> {
    return Promise.resolve([this.mexicanNoBeanDip])
  }
}
