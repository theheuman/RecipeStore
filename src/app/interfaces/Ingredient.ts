import {MeasuringUnit} from "../enums/MeasuringUnit";

export interface Ingredient {
  amount: number,
  measuringUnit: MeasuringUnit,
  edibleSubstance: EdibleSubstance
}

export interface EdibleSubstance {
  id: string
  name: string
  preferredMeasuringUnit: MeasuringUnit
}
