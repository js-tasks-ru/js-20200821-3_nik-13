class Tooltip {
  element
  static initialized
  tooltipMess
  constructor( ){
    if(Tooltip.initialized){
      Tooltip.initialized.remove();
    }
    Tooltip.initialized = this
  }
  initEventListener(){
    document.addEventListener("pointerover",event => this.getTooltip(event))
    document.addEventListener("pointerout",event => this.removeTooltip(event))
  }
  getTooltip = (event) => {
    const element = event.target.closest('[data-tooltip]')
    if(element) {
      this.tooltipMess = event.target.dataset.tooltip
      this.render()
      this.setPosition(event)
      document.addEventListener("pointermove", this.setPosition)
    }
  }
  setPosition(event){
    const offset = 10
    this.element.style.left = event.clientX + offset  + "px"
    this.element.style.top = event.clientY + offset  + "px"
  }
  removeTooltip(){
    this.remove()
  }
  initialize(){
    this.initEventListener();
  }
  render(){
    const element = document.createElement("div")
    element.className = "tooltip"
    element.style.position = "absolute"
    element.innerHTML = this.tooltipMess
    this.element = element
      document.body.append(element)
  }
  remove(){
    this.element.remove()
    document.removeEventListener("pointerover",event => this.getTooltip(event))
  }
  destroy(){
  this.remove()
    document.removeEventListener("pointerover",event => this.getTooltip(event))
    document.removeEventListener("pointerout",event => this.removeTooltip(event))
  }
}



const tooltip = new Tooltip();

export default tooltip;
