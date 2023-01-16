import { Injectable } from '@angular/core';
import {EdibleSubstance, Ingredient} from "../interfaces/Ingredient";
import {MeasuringUnit} from "../enums/MeasuringUnit";
import {creamCheese, noBeanChilli, salsa, shreddedCheddar} from "../database";

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  edibleSubstances: EdibleSubstance[] = [
    creamCheese,
    noBeanChilli,
    salsa,
    shreddedCheddar
  ]

  constructor() { }

  getEdibleSubstances(): Promise<EdibleSubstance[]> {
    return Promise.resolve(this.edibleSubstances)
  }


}
