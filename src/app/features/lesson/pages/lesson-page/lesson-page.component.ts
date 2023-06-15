import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Content } from 'src/app/core/models/content';
import { LessonService } from 'src/app/core/services/lesson/lesson.service';
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import Delimiter from '@editorjs/delimiter'
import Table from '@editorjs/table'
import NestedList from '@editorjs/nested-list'
import InlineCode from '@editorjs/inline-code'
import KatexEquation from "../../../../core/tool/katex-equation";
import KatexInline from "../../../../core/tool/katex-inline";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-lesson-page',
  templateUrl: './lesson-page.component.html',
  styleUrls: ['./lesson-page.component.scss']
})
export class LessonPageComponent {
  title = ' - AlphaRuler'
  editor!: EditorJS

  content: Content = {
    contentId: '',
    nameEN: '',
    nameTH: '',
    data: {
      blocks: []
    }
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private meta: Meta,
    private lessonService: LessonService
  ){}

  ngOnInit(): void {
    this.initEditor()
    this.route.paramMap.subscribe(params => {
      let subjectId = params.get('subjectId')
      let lessonId = params.get('lessonId')
      if(subjectId && lessonId) {
        this.lessonService.getContentOf(subjectId, lessonId).subscribe({
          next: content => {
            this.content = content
            this.editor.isReady.then(()=>{
              this.editor.blocks.render(this.content.data).then()
            })
            this.titleService.setTitle(this.content.nameTH + this.title)
            this.meta.addTags([
              { name: 'description', content: 'This is an article about '+this.content.nameEN },
              { name: 'keywords', content: this.content.contentId+','+this.content.nameEN+','+this.content.nameTH }
            ])
          },
          error: err => {
            if (err.status==404){
              this.router.navigate(["not-found"]).then()
            }
          }
        })
      }
    })
  }

  initEditor() {
    this.editor = new EditorJS({
      holder: "read-editorjs",
      readOnly: true,
      tools: {
        header: Header,
        delimiter: Delimiter,
        list: {
          class: NestedList,
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered'
          }
        },
        inlineCode: {
          class: InlineCode,
          shortcut: 'CMD+SHIFT+M'
        },
        table: Table,
        katexEquation: KatexEquation,
        katexInline: KatexInline
      }
    })
  }
}
