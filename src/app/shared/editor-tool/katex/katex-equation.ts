import { BlockTool, BlockToolData } from '@editorjs/editorjs';
import katex from 'katex'

/**
 * Interface for using Katex in editorjs
 */
interface KatexData extends BlockToolData{
  katexEquation: string
}

export default class KatexEquation implements BlockTool {

  //Setup
  katexData: KatexData = {
    katexEquation: ''
  }
  wrapperElement = document.createElement('div')
  displayElement = document.createElement('div')
  editorElement = document.createElement('input')

  private readonly readOnly: boolean

  static get toolbox() {
    return {
      icon: 'E',
      title: 'Math Equation'
    }
  }

  static get isReadOnlySupported(): boolean {
    return true
  }

  constructor({data,readOnly}: {data: KatexData, readOnly: boolean}) {

    //Assign initial data if there is old data
    if(data && data.katexEquation) {
      this.editorElement.value = data.katexEquation
      this.katexData.katexEquation = data.katexEquation
    }else{
      this.editorElement.value = ''
    }

    this.readOnly = readOnly
  }

  render() {

    //Clear container
    this.wrapperElement.innerHTML = ''
    this.displayElement.innerHTML = ''

    //Close editor if there is data
    if(this.editorElement.value.length) {
      this.editorElement.style.display = 'none'
    }

    //Render katex when keyup
    this.editorElement.addEventListener('keyup', () => {
      this.katexData.katexEquation = this.editorElement.value
      this.renderKatex()
    })

    //Paint style
    this.addStyle()

    //Render katex on first load
    this.renderKatex()

    //Wrap configured element
    this.wrapperElement.appendChild(this.displayElement)
    this.wrapperElement.appendChild(this.editorElement)

    return this.wrapperElement
  }

  /**
   * Render katex from given data into display element
   */
  renderKatex() {
    katex.render(this.katexData.katexEquation, this.displayElement, {
      throwOnError: false,
      output: 'html',
      displayMode: true
    })
  }

  save(block: HTMLElement): BlockToolData {
    return {
      katexEquation: this.katexData.katexEquation
    }
  }

  validate(blockData: BlockToolData): boolean {
    return !!blockData.katexEquation.trim()
  }

  addStyle() {
    this.wrapperElement.style.padding = '4px'
    this.editorElement.placeholder = 'Type your Katex here...'
    this.editorElement.style.color = 'rgba(0,0,0,0.5)'
    this.editorElement.style.transition = 'all 1s ease'
    this.editorElement.style.border = '2px rgba(0,0,0,0.1) solid'
    this.editorElement.style.padding = '4px 16px'
    this.editorElement.style.borderRadius = '100px'
    this.editorElement.style.width = '100%'

    //Set outline none on focus
    this.editorElement.addEventListener('focus', () => {
      this.editorElement.style.outline = 'none'
    })

    //Set visible on focus (by clicking display element)
    if(!this.readOnly){
      this.wrapperElement.addEventListener('click', () => {
        this.editorElement.style.display = 'block'
        this.editorElement.focus()
      })
    }

    //Set invisible on blur (by clicking outside input)
    this.editorElement.addEventListener('blur', () => {
      if(this.editorElement.value){
        this.editorElement.style.display = 'none'
      }
    })
  }

}
