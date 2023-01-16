import { Injectable } from '@angular/core';
import {Recipe} from "../interfaces/Recipe";
import {buffaloChickenDip, mexicanNoBeanDip} from "../database";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {


  recipes = [mexicanNoBeanDip, buffaloChickenDip]

  constructor() { }

  getRecipes(): Promise<Recipe[]> {
    return Promise.resolve(this.recipes)
  }

  getRecipe(id: string): Promise<Recipe> {
    return Promise.resolve(this.recipes.filter((recipe) => recipe.id === id)[0])
  }
}
