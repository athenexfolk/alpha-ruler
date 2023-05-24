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
} from 'src/app/core/editor'

@Component({
  selector: 'app-write-page',
  templateUrl: './write-page.component.html',
  styleUrls: ['./write-page.component.scss']
})
export class WritePageComponent implements OnInit {

  editor!: EditorJS
  isShowOutput = false
  isReading = false
  mode = 'EDIT'
  titleEN = 'Untitled'
  titleTH = 'ไม่มีชื่อ'

  saved(out: HTMLElement) {
    this.editor.save().then(r => {
      this.isShowOutput = true
      out.innerText = JSON.stringify({
        contentId: this.titleEN.toLowerCase().split(" ").join("-"),
        nameEN: this.titleEN,
        nameTH:  this.titleTH,
        data: r
      }, null, 4)
      out.scrollIntoView({behavior: "smooth"})
    })
  }

  enterReadMode() {
    this.isReading = true
    if(this.isReading && !this.editor.readOnly.isEnabled) {
      this.editor.readOnly.toggle()
    }
  }

  enterEditMode() {
    this.isReading = false
    if(!this.isReading && this.editor.readOnly.isEnabled) this.editor.readOnly.toggle()
  }

  ngOnInit(): void {
    this.editor = new EditorJS({
      holder: "editorjs",
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
      placeholder: 'Type something here...',
      data: {
        blocks: [{
          type: 'paragraph',
          data: {
            text: 'Type your mind...'
          }
        }]
      },
      minHeight: 200,
      readOnly: false
    })
  }
}
