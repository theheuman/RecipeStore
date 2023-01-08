export enum MeasuringUnit {
  OUNCE="OUNCE",
  CUP="cup",
  FLUID_OUNCE="fluid ounce"
}

export enum MeasuringUnitPlurals {
  OUNCE="ounces",
  CUP="cups",
  FLUID_OUNCE="fluid ounces"
}

export const MeasuringUnitMap = new Map ([
  [MeasuringUnit.OUNCE, MeasuringUnitPlurals.OUNCE],
  [MeasuringUnit.CUP, MeasuringUnitPlurals.CUP],
  [MeasuringUnit.FLUID_OUNCE, MeasuringUnitPlurals.FLUID_OUNCE],
])
