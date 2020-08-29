/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const newArr = [...arr]
  function arrSort(changArr, dir){
    return changArr.sort((a,b) => {return dir*a.localeCompare(b,"ru",{caseFirst:"upper"})})
  }
  switch (param){
    case "asc" :return  arrSort(newArr , 1);
    case "desc" :return  arrSort(newArr , -1);
    default : console.log("err")
  }
}
