import {BlockTool, BlockToolData} from '@editorjs/editorjs';

interface ImageData extends BlockToolData {
  path: string
}

export default class ImagePathBlock implements BlockTool {

  imageData: ImageData = {
    path: ''
  }
  wrapperElement = document.createElement('div')
  imageContainerElement = document.createElement('div')
  imageElement = document.createElement('img')
  pathElement = document.createElement('input')
  pathContainerElement = document.createElement('div')
  buttonElement = document.createElement('button')
  IMG_PATH = 'assets/data/image/'

  readonly readOnly: boolean

  static get toolbox() {
    return {
      icon: 'I',
      title: 'Image'
    }
  }

  static get isReadOnlySupported(): boolean {
    return true
  }

  constructor({data,readOnly}: {data: ImageData, readOnly: boolean}) {

    //Assign initial data if there is old data
    if(data && data.path) {
      this.pathElement.value = data.path
      this.imageData.path = data.path
    }else{
      this.pathElement.value = ''
    }

    this.readOnly = readOnly
  }

  render(): HTMLElement {

    //Clear container
    this.wrapperElement.innerHTML = ''

    this.addStyle()

    if(this.pathElement.value.length) {
      this.imageElement.src = this.IMG_PATH + this.imageData.path
      this.pathContainerElement.style.display = 'none'
    }

    this.buttonElement.addEventListener('click', () => {
      if(!this.pathElement.value.length) return
      this.imageData.path = this.pathElement.value
      this.imageElement.src = this.IMG_PATH + this.imageData.path
      this.pathContainerElement.style.display = 'none'
    })
    this.imageElement.addEventListener('error', () => {
      this.imageElement.src = this.IMG_PATH + 'no-image.svg'
    })

    this.pathContainerElement.appendChild(this.pathElement)
    this.pathContainerElement.appendChild(this.buttonElement)

    this.wrapperElement.appendChild(this.imageContainerElement)
    this.wrapperElement.appendChild(this.pathContainerElement)

    return this.wrapperElement;
  }

  save(block: HTMLElement): BlockToolData {
    return {
      path: this.imageData.path
    };
  }

  addStyle() {
    this.wrapperElement.style.padding = '4px'

    this.imageContainerElement.style.display = 'flex'
    this.imageContainerElement.style.justifyContent = 'center'
    this.imageElement.style.width = '75%'
    this.imageContainerElement.appendChild(this.imageElement)

    this.pathContainerElement.style.display = 'flex'
    this.pathContainerElement.style.gap = '16px'

    this.pathElement.style.flexGrow = '1'
    this.pathElement.addEventListener('focus', () => {
      this.pathElement.style.outline = 'none'
    })
    this.pathElement.style.border = '1px gray solid'
    this.pathElement.style.padding = '4px 8px'
    this.pathElement.style.borderRadius = '4px'

    this.buttonElement.innerText = 'Add'
    this.buttonElement.style.padding = '4px 8px'
    this.buttonElement.style.color = 'white'
    this.buttonElement.style.background = 'green'
    this.buttonElement.style.borderRadius = '4px'
  }

}
