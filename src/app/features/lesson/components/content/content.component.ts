import { Component, OnInit } from '@angular/core';
import {
  EditorJS,
  Header,
  Delimiter,
  Table,
  NestedList,
  InlineCode,
  ImagePathBlock,
  KatexEquation,
  KatexParagraph
} from 'src/app/shared/editor'
import {Content} from "src/app/core/models/content";
import {ActivatedRoute, Router} from "@angular/router";
import {LessonService} from "src/app/core/services/lesson.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  content: Content = {
    contentId: '',
    nameEN: '',
    nameTH: '',
    data: {
      blocks: []
    }
  }
  editor!: EditorJS

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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
          },
          error: err => {
            if (err.status==404){
              this.router.navigate(["lesson"]).then()
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
          },
        },
        inlineCode: {
          class: InlineCode,
          shortcut: 'CMD+SHIFT+M',
        },
        table: Table,
        katexEquation: KatexEquation,
        katexParagraph: KatexParagraph,
        image: ImagePathBlock
      },
      data: this.content.data
    })
  }
}
