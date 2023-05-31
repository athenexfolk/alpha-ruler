import {BlockTool, BlockToolData,} from '@editorjs/editorjs';
import renderMathInElement from "katex/contrib/auto-render";

/**
 * Interface for using Katex in editorjs
 */
interface KatexData extends BlockTool {
  katexParagraph: string
}

/**
 * Button class utility
 */
interface Button {
  element: HTMLButtonElement,
  color: string
}

export default class KatexParagraph implements BlockTool {

  //Setup
  editText = ''
  wrapperElement = document.createElement('div')
  paragraphElement = document.createElement('p')
  buttonGroupElement = document.createElement('div')
  editButton: Button = {
    element: document.createElement('button'),
    color: '#eca52b'
  }
  previewButton: Button = {
    element: document.createElement('button'),
    color: '#28a745'
  }
  isEditable = true

  private readonly readOnly: boolean

  static get toolbox() {
    return {
      icon: 'P',
      title: 'Math Paragraph'
    }
  }

  static get isReadOnlySupported(): boolean {
    return true
  }

  constructor({data, readOnly}: {data: KatexData,readOnly: boolean}) {

    //Assign initial data if there is old data
    if(data && data.katexParagraph) {
      this.editText = data.katexParagraph
    }

    this.readOnly = readOnly
  }
  render(): HTMLElement {

    //Set editable paragraph
    this.paragraphElement.contentEditable = 'true'

    //Paint style
    this.addStyle()

    //Initialized button behavior
    this.switchButton(this.editButton, this.previewButton)
    this.setPreviewButton()
    this.setEditButton()

    //Close button group if there is data
    if(this.editText.length) {
      this.paragraphElement.innerText = this.editText
      this.paragraphElement.contentEditable = 'false'
      this.renderKatex()
      this.switchButton(this.previewButton, this.editButton)
    }


    //Wrap element
    this.buttonGroupElement.appendChild(this.previewButton.element)
    this.buttonGroupElement.appendChild(this.editButton.element)
    this.wrapperElement.appendChild(this.paragraphElement)
    this.wrapperElement.appendChild(this.buttonGroupElement)

    return this.wrapperElement;
  }

  save(block: HTMLElement): BlockToolData {
    return {
      katexParagraph: this.editText
    }
  }

  validate(blockData: BlockToolData): boolean {
    return !!blockData.katexParagraph.trim()
  }

  addStyle() {
    this.wrapperElement.classList.add(
      'my-2'
    )

    this.paragraphElement.classList.add(
      'focus:outline-none'
    )

    this.buttonGroupElement.style.display = this.readOnly ? 'none' : 'flex'

    this.buttonGroupElement.classList.add(
      'justify-center',
      'gap-1',
      'my-2'
    )

    this.paintButton(this.previewButton)
    this.paintButton(this.editButton)
  }

  switchButton(activatedButton: Button, disabledButton: Button) {
    activatedButton.element.disabled = true
    disabledButton.element.disabled = false
    this.styleDisableButton(activatedButton)
    this.styleActiveButton(disabledButton)
  }

  paintButton(button: Button) {
    button.element.classList.add(
      'px-4',
      'py-1',
      'text-sm',
      'rounded-full'
    )
    button.element.style.color = button.color
    button.element.style.border = '1px '+ button.color +' solid'
  }

  styleDisableButton(button: Button){
    button.element.style.color = 'rgba(0,0,0,0.5)'
    button.element.style.border = '1px rgba(0,0,0,0.5) solid'
  }
  styleActiveButton(button: Button) {
    button.element.style.color = button.color
    button.element.style.border = '1px '+ button.color + ' solid'
  }

  setPreviewButton() {
    this.previewButton.element.innerText = 'Preview'
    this.previewButton.element.addEventListener('click', () => {
      if(this.isEditable) this.isEditable = false
      if (!this.isEditable) {
        this.switchButton(this.previewButton, this.editButton)
        this.editText = this.paragraphElement.innerText
        this.paragraphElement.contentEditable = 'false'
        renderMathInElement(this.paragraphElement, {
          delimiters: [
            {left: '$', right: '$', display: false}
          ],
        })
      }
    })
  }

  setEditButton() {
    this.editButton.element.innerText = 'Edit'
    this.editButton.element.addEventListener('click', () => {
      if(!this.isEditable) this.isEditable = true
      if (this.isEditable) {
        this.switchButton(this.editButton, this.previewButton)
        this.paragraphElement.contentEditable = 'true'
        this.paragraphElement.innerText = this.editText
        this.paragraphElement.focus()
      }
    })
  }

  renderKatex() {
    renderMathInElement(this.paragraphElement, {
      delimiters: [
        {left: '$', right: '$', display: false}
      ],
    })
  }
}
