/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const newArr = path.split(".")
  return function (obj){
    if(Object.keys(obj).length){
      for(let i = 0 ; i< newArr.length ; i++ ){
          obj = obj[newArr[i]]
      }
      return  obj
    }
  }
}
