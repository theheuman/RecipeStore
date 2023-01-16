import {MeasuringUnit} from "./enums/MeasuringUnit";
import {Recipe} from "./interfaces/Recipe";
import {EdibleSubstance} from "./interfaces/Ingredient";

// edible substances
export const creamCheese: EdibleSubstance = {
  id: '1',
  name: "cream cheese",
  preferredMeasuringUnit: MeasuringUnit.OUNCE
}

export const noBeanChilli: EdibleSubstance = {
  id: '2',
  name: "No bean chilli",
  preferredMeasuringUnit: MeasuringUnit.FLUID_OUNCE
}

export const salsa: EdibleSubstance =  {
  id: '3',
  name: "salsa",
  preferredMeasuringUnit: MeasuringUnit.CUP
}

export const shreddedCheddar: EdibleSubstance = {
  id: '4',
  name: "Shredded Cheddar",
  preferredMeasuringUnit: MeasuringUnit.CUP
}

// recipes
export const mexicanNoBeanDip: Recipe = {
  id: "1",
  name: "Mexican No Bean Dip",
  ingredients: [
    {
      amount: 8,
      measuringUnit: MeasuringUnit.OUNCE,
      edibleSubstance: creamCheese
    },
    {
      amount: 15,
      measuringUnit: MeasuringUnit.FLUID_OUNCE,
      edibleSubstance: noBeanChilli
    },
    {
      amount: .5,
      measuringUnit: MeasuringUnit.CUP,
      edibleSubstance: salsa
    },
    {
      amount: 1,
      measuringUnit: MeasuringUnit.CUP,
      edibleSubstance: shreddedCheddar
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

export const buffaloChickenDip: Recipe = {
  id: "2",
  name: "Buffalo Chicken Dip",
  ingredients: [
    {
      amount: 8,
      measuringUnit: MeasuringUnit.OUNCE,
      edibleSubstance: creamCheese
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
