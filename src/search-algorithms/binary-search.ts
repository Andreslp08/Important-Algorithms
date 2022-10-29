
export const binarySearch = (sortedArray = [], value )=>{
    if(Array.isArray(sortedArray)===false){
        throw new Error('Binary Search: sortedArray must be a integer array')
    }
    let result:any = false;
    let left = 0;
    let right = sortedArray.length - 1;

    while(left <= right){
        let middle = Math.floor((left + right)/2);
        if(sortedArray[middle] > value){
            right = middle - 1;
        }
        else if(sortedArray[middle] < value){
            left = middle + 1;
        }
        else{
            result= {
                index:middle,
                value:sortedArray[middle]
            }
            break;
        }
    }

    return result;
}
