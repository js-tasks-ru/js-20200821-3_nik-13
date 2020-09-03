/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if(obj){
  const newObj = Object.fromEntries(Object.entries(obj).map(elem => elem.reverse()))
  return newObj}else {return undefined}
}
