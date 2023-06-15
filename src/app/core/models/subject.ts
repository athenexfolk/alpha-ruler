import {Lesson} from "./lesson";

export interface Subject {
  subjectId: string,
  subjectNameEN: string,
  subjectNameTH: string,
  lessons: Lesson[]
}
