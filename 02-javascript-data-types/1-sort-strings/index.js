/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let newArr = arr.slice(0,arr.length)
  switch(param){
    case "asc" : return newArr.sort((a, b) => {return a.localeCompare(b,"ru",{caseFirst:"upper"});})
    case "desc" : return newArr.sort((b, a) => {return a.localeCompare(b,"ru",{caseFirst:"upper"});})
    default : console.log("err")
  }
}
