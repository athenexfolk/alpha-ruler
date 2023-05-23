import {LessonIndex} from "./lesson";

export interface SubjectIndex {
  subjectId: string,
  name: string,
}

export interface Subject extends SubjectIndex {
  lesson: LessonIndex[]
}
