/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const args = [...fields]
  const newArr2 = []
  for (o = 0 ; o < Object.entries(obj).length ; o++ ){
    for(j = 0 ; j < args.length ; j++ ){
      if(Object.entries(obj)[o][0] !== args[j]){
        newArr2.push(Object.entries(obj)[o])
      }
    }
  }
  return Object.fromEntries(newArr2)
};
