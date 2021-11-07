


const {binarySearch} = require('./search-algorithms/binary-search');
const {generateNumberArray} = require('./utils/utils');
const {bubbleSort} = require('./sort/bubble-sort');

const app = ()=>{
  //------ BINARY SEARCH -------------
  // const arr = generateNumberArray(1,99999);
  // console.time();
  // const numberToFind = binarySearch(arr, 768);
  // console.log(numberToFind);
  // console.timeEnd();
  //------ BUBBLE SORT -------------
  const arr = [5,10,20,3,6,1 ,1];
  const sort = bubbleSort(arr);
  console.log(sort)

  
}


app();