import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Subject} from "../models/subject";
import {Content} from "../models/content";

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  private _PATH: string = "/assets/data/document"

  private _CONTENTS_PATH_OF = (subjectId: string, lessonId: string) => `${this._PATH}/${subjectId}/${lessonId}.json`
  private _MAP_PATH = `${this._PATH}/lesson-map.json`

  constructor(private http: HttpClient) { }

  getContentOf(subjectId: string, lessonId: string): Observable<Content> {
    return this.http.get<Content>(this._CONTENTS_PATH_OF(subjectId, lessonId))
  }

  getLessonMap(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this._MAP_PATH)
  }
}
