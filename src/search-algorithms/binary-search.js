
const binarySearch = (sortedArray = [], value )=>{
    if(!sortedArray &&  typeof sortedArray !== 'sortedArray'){
        console.log("invalid parameter type or is null");
        return false;
    }
    let result = false;
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

module.exports ={
    binarySearch
}

