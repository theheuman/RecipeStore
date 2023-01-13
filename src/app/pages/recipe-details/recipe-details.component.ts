import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../interfaces/Recipe";
import {ActivatedRoute} from "@angular/router";
import {RecipeService} from "../../services/recipe.service";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe | undefined
  edit = false
  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id']
      this.recipeService.getRecipe(id).then((recipe) => {
        this.recipe = recipe
      })
    });
  }

}
