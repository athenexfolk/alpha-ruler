import { Lesson } from "../models/lesson";
import { IntegerData } from "./lesson-list/integer";
import { NaturalNumberData } from "./lesson-list/natural-number";

export const LessonList: Lesson[] = [
    {id: "natural_number",name_th: "จำนวนนับ",name_en: "Counting number", content: NaturalNumberData},
    {id: "integer",name_th: "จำนวนเต็ม",name_en: "Integer",content: IntegerData},
    // {id: "fraction_and_decimal",name_th: "เศษส่วนและทศนิยม",name_en: "Fraction and decimal",content: NaturalNumberData}
  ];