import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../interfaces/Recipe";
import {MeasuringUnitMap, MeasuringUnitPlurals} from "../../enums/MeasuringUnit";

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  unitPluralMap = MeasuringUnitMap
  @Input() recipe: Recipe

  constructor() {
  }

  ngOnInit(): void {
  }

  getlowestfraction(startingNumber: number) {
    /*
     * basically the precision of the calculation
     * if a number is .143  eps 1.0E-3 works,
     * if a number is .1435 eps 1.0E-3 will drop the last digit from the calculation
     */
    const eps = 1.0E-3;


    let x = startingNumber;
    let a = Math.floor(x);
    let h1 = 1;
    let h2
    let k1 = 0;
    let k2
    let h = a;
    let k = 1;

    while (x-a > eps*k*k) {
      x = 1/(x-a);
      a = Math.floor(x);
      h2 = h1; h1 = h;
      k2 = k1; k1 = k;
      h = h2 + a*h1;
      k = k2 + a*k1;
    }

    if (k == 1) {
      return h
    }
    return h + "/" + k;
  }

}
