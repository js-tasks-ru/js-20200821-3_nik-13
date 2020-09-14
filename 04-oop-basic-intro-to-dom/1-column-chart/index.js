export default class ColumnChart {
  element = {}
  chartHeight = 50
  constructor( {data = [],label = "",value = 0,link = ""} = {}) {
    this.data = this.getDataMod(data)
    this.label = label
    this.value = value
    this.link = link
    this.render()
  }
  getDataMod(data) {
      const maxValue = Math.max(...data);
      const scale = this.chartHeight / maxValue;

      return data.map(item => {
        return {
          percent: (item / maxValue * 100).toFixed(0) + '%',
          value: Math.floor(item * scale)
        };
      });
  }
  update(newData){
    const newArr =  this.getDataMod(newData)
    const changeData =  this.element.querySelector(".column-chart__chart")
    changeData.innerHTML =  newArr.map( elem => {
      return `<div style="--value:${elem['value']}" data-tooltip="${elem['percent']}"></div>`}).join()
  }
  getLink(){
    if(this.link){
      return `<a href="${this.link}" class="column-chart__link"></a>`
    }
  }
  getColumn(){
    const arr = [... this.data]
    return arr.map(elem => {
     return  `<div style="--value:${elem['value']} ; --chart-height: ${this.chartHeight}" data-tooltip="${elem['percent']}"></div> `}
     ).join("")

  }
  getTemplate(){

   return       `<div class="column-chart ${(this.data.length)? "" : "column-chart_loading"}">
           <div class="column-chart__title">${this.label}   ${this.getLink()} </div>
          <div class="column-chart__container">
               <div class="column-chart__header">${this.value}</div>
               <div class="column-chart__chart">${this.getColumn()}</div>
           </div>           
            </div>`

  }
  render(){
    const element = document.createElement("div")
    element.innerHTML = this.getTemplate()
    this.element = element.firstElementChild
  }
  remove(){
    this.element.remove()
  }
  destroy(){
    this.remove()
  }
}
