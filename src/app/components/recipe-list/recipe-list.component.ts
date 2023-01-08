import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../interfaces/Recipe";
import {MeasuringUnit} from "../../enums/MeasuringUnit";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipe: Recipe = {
    name: "",
    ingredients: [],
    steps: [],
    /*
    categories: [],
    notes: "",
    pictureUrls: [],
    recipeTags: [],

     */
  }

  recipes: Recipe[] = [{
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
          name: "Hormel no bean chilli",
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
    steps: [],
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
