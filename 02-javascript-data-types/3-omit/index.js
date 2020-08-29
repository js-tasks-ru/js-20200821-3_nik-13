/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const newArr2 = []
  Object.entries(obj).forEach((elem)=>{
    if(!fields.includes(elem[0],0)){
      newArr2.push(elem)
    }})
  const newObj = Object.fromEntries(newArr2)
  return newObj
};
