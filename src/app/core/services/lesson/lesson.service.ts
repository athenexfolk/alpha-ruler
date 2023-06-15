import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Subject} from "../../models/subject";
import {Content} from "../../models/content";
import {APP_BASE_HREF} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class LessonService {


  //production URL
  // private _PATH: string = "/alpha-ruler/assets/data/document"

  //development URL
  private _PATH: string = "/assets/data/document"

  private _CONTENTS_PATH_OF = (subjectId: string, lessonId: string) => `${this._PATH}/${subjectId}/${lessonId}.json`
  private _MAP_PATH = `${this._PATH}/lesson-map.json`

  constructor(private http: HttpClient, @Inject(APP_BASE_HREF) private baseHref:string) {
    const a = this.baseHref;
    console.log(a, " is base HREF")
    this._PATH = this.baseHref+"/assets/data/document"
  }

  getContentOf(subjectId: string, lessonId: string): Observable<Content> {
    return this.http.get<Content>(this._CONTENTS_PATH_OF(subjectId, lessonId))
  }

  getLessonMap(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this._MAP_PATH)
  }
}
