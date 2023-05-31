import {Component, OnInit} from '@angular/core';
import EditorJS from "@editorjs/editorjs";
import {
  Delimiter,
  Header, ImagePathBlock,
  InlineCode,
  KatexEquation,
  KatexParagraph,
  NestedList,
  Table
} from "src/app/shared/editor";
import {Subject} from "../../../../core/models/subject";
import {LessonService} from "../../../../core/services/lesson.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  // editor!: EditorJS
  titleTH = ''
  titleEN = ''
  nav: Subject[] = []

  constructor(private lessonService: LessonService) {
  }

  ngOnInit() {
    this.lessonService.getLessonMap().subscribe(subjects => {
      this.nav = subjects
    })
    // this.editor = new EditorJS({
    //   holder: "editorjs",
    //   tools: {
    //     header: Header,
    //     delimiter: Delimiter,
    //     list: {
    //       class: NestedList,
    //       inlineToolbar: true,
    //       config: {
    //         defaultStyle: 'unordered'
    //       },
    //     },
    //     inlineCode: {
    //       class: InlineCode,
    //       shortcut: 'CMD+SHIFT+M',
    //     },
    //     table: Table,
    //     katexEquation: KatexEquation,
    //     katexParagraph: KatexParagraph,
    //     image: ImagePathBlock
    //   },
    //   data: {
    //     blocks: []
    //   },
    //   autofocus: true
    // })
  }
}
