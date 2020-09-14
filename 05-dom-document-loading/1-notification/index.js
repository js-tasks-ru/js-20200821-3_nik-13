export default class NotificationMessage {
  element = {}
  static activeNot

  constructor(message, {duration = 0, type = " "} = {}){
    if(NotificationMessage.activeNot){
      NotificationMessage.activeNot.remove()
    }
    this.message = message
    this.duration = parseInt(duration)
    this.type = type
    this.render()
  }

  get template(){
    return `
  <div class="notification ${(this.type === "success")? "success" : "error"}" style="--value:${parseInt(this.duration/1000)}s">
    <div class="timer"></div>
    <div class="inner-wrapper">
      <div class="notification-header">${this.type}</div>
        <div class="notification-body">
        ${this.message}
        </div>
       </div>
    </div>
  `
  }

  render(){
    const element = document.createElement("div")
    element.innerHTML = this.template
    this.element = element.firstElementChild
    NotificationMessage.activeNot = this.element
  }
  show(parent = document.body){
    parent.append(this.element)
    setTimeout(()=> {this.remove()}, this.duration)
      }
  remove(){
    this.element.remove();
  }
  destroy(){
    this.remove();
  }
}
