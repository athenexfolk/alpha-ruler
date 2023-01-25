import { LessonOfCalc } from "../models/lesson-of-calc";
import { NaturalNumberCalculatorList } from "./calculator-logic-list/natural-number";

export const CalcList:LessonOfCalc[] = [
    {id: "natural-number", name_th: "จำนวนนับ", name_en: "Natural number", calc: NaturalNumberCalculatorList},
    {id: "integer", name_th: "จำนวนเต็ม", name_en: "Integer", calc: NaturalNumberCalculatorList}
]