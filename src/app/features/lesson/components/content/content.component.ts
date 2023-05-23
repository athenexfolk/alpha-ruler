import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from 'src/app/core/models/content';
import { LessonService } from 'src/app/core/services/lesson.service';
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
} from 'src/app/features/lesson/editor'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

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
    private lessonService: LessonService
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let subjectId = params.get('subjectId')
      let lessonId = params.get('lessonId')
      if(subjectId && lessonId) {
        this.lessonService.getContentOf(subjectId, lessonId).subscribe({
          next: content => {
            this.content = content
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
          },
          error: err => console.log(err)
        })
      }
    })
  }
}
