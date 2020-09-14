export default class SortableTable {
  element
  subElements

  constructor(header = [] , {data = []} = {} ){
    this.header = header
    this.data = data
    this.render()

    this.sort('title','asc')
  }
  initEventListener(){
    this.subElements.header.addEventListener("pointerdown",(event) => {this.onMouseClick(event)}
    )
  }
  onMouseClick(event){
    const column =  event.target.closest('[data-sortable]')
    if(column){
      this.getSortChange(event)
    }
  }
  getSortChange(event){
    const column = event.target.closest('[data-sortable = "true"]')
    const arrow = column.querySelector('.sortable-table__sort-arrow')
    if(!arrow){
      event.target.closest('[data-sortable]').append(this.subElements.arrow)
    }
    if(column){
      const {id, order } = column.dataset
      this.sort(id, order === 'asc' ? 'desc' : 'asc')
      column.setAttribute('data-order',order === 'asc' ? 'desc' : 'asc' )
    }
  }
  render(){
    const element = document.createElement("div")
    element.innerHTML = this.getTemplate()
    const templ = element.firstElementChild
    this.element = templ
    this.subElements = this.getSubElements(templ)
    this.initEventListener()
    }
  getSubElements(element) {
    const elements = element.querySelectorAll('[data-element]');
    return [...elements].reduce((accum, subElement) => {
      accum[subElement.dataset.element] = subElement;
      return accum;
    },{});}
  sort(fieldValue ,orderValue){
    const sortedData = this.arrSort(fieldValue ,orderValue)
    this.subElements.body.innerHTML = this.getBody(sortedData)
  }
  getHeader(data){
    const changeArr  = [...data]
    return changeArr.map( elem => {
      if(elem['id'] === "title"){
      return `<div class="sortable-table__cell" data-id="${elem['id']}" data-sortable="${elem['sortable']}" data-order="asc">
        <span>${elem['title']}</span>
        <span data-element="arrow" class="sortable-table__sort-arrow">
          <span class="sort-arrow"></span>
        </span>
        </div>`
      }else{
        return `<div class="sortable-table__cell" data-id="${elem['id']}" data-sortable="${elem['sortable']}" data-order="asc">
        <span>${elem['title']}</span>
        </div>`

      }}
    ).join('')
  }
  getBody(data){
    const changeArr = [...data]
    const changeHeader = [...this.header]
    return changeArr.map( elem => {
      return `<a href="/products/dvd/blu-ray-pleer-sony-bdp-s5500" class="sortable-table__row">${changeHeader.map((item) => {
        if(item.id === "images") {
          return item.template(elem['images'])
        }else{
          return `<div class="sortable-table__cell">${elem[item.id]}</div>`
        }}).join('')}</a>`}
    ).join('')
  }
  getTemplate(){
    return `<div class="sortable-table">
    <div data-element="header" class="sortable-table__header sortable-table__row">
    ${this.getHeader(this.header)}
    </div>
    <div data-element="body" class="sortable-table__body">
    ${this.getBody(this.data)}
    </div>`
  }
  arrSort(field, order){
    const arr = [...this.data]
    let dir = order === "asc" ? 1 : -1
    const column = this.header.find(elem => elem.id === field ? elem.sortType : false)
    return arr.sort((a,b) => {
      switch(column.sortType){
        case "number" :
          return dir*(a[field] - b[field]);
        case "string" :
          return dir*a[field].localeCompare(b[field],"ru");
        default :
          return dir*a[field].localeCompare(b[field],"ru");
      }})}

  remove(){
    this.element.remove()
  }
  destroy(){
    this.remove()
    this.subElements = {}
  }
}
