import {MeasuringUnit} from "../enums/MeasuringUnit";

export interface Ingredient {
  amount: number,
  measuringUnit: MeasuringUnit,
  edibleSubstance: EdibleSubstance
}

export interface EdibleSubstance {
  name: string
  preferredMeasuringUnit: MeasuringUnit
}
