


const {binarySearch} = require('./search-algorithms/binary-search');
const {generateNumberArray} = require('./utils/utils');

const app = ()=>{
  //------ BINARY SEARCH -------------
  const arr = generateNumberArray(1,99999);
  console.time();
  const numberToFind = binarySearch(arr, 768);
  console.log(numberToFind);
  console.timeEnd();
}


app();