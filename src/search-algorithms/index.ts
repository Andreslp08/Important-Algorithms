import { generateNumberArray } from "../utils/utils";
import { binarySearch } from "./binary-search";

const main = ()=>{
    const arr = generateNumberArray(1,99999);
    console.time();
    const numberToFind = binarySearch(arr, 768);
    console.log(numberToFind);
    console.timeEnd();
}

main();