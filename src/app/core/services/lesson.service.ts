import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LessonIndex} from "src/app/core/models/lesson";
import {SubjectIndex} from "src/app/core/models/subject";
import {Content} from "src/app/core/models/content";

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  private PATH: string = "/assets/data/document"
  private EXTENSION: string = "json"

  private CONTENTS_PATH_OF = (subjectId: string, lessonId: string) => `${this.PATH}/${subjectId}/${lessonId}.${this.EXTENSION}`
  private LESSON_INDEX_PATH_OF = (subjectId: string) => `${this.PATH}/${subjectId}/${subjectId}-idx.${this.EXTENSION}`
  private SUBJECT_INDEX_PATH = `${this.PATH}/subject-idx.${this.EXTENSION}`

  constructor(private http: HttpClient) {}

  getSubjectIndex(): Observable<SubjectIndex[]> {
    return this.http.get<SubjectIndex[]>(this.SUBJECT_INDEX_PATH)
  }

  getLessonIndexOf(subjectId: string): Observable<LessonIndex[]> {
    return this.http.get<LessonIndex[]>(this.LESSON_INDEX_PATH_OF(subjectId))
  }

  getContentOf(subjectId: string, lessonId: string): Observable<Content> {
    return this.http.get<Content>(this.CONTENTS_PATH_OF(subjectId, lessonId))
  }
}