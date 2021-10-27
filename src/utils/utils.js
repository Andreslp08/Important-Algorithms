const generateNumberArray = (start = 0, end = 100)=>{
    let array = [];
    let startNumber = start;
    let endNumber = end;
    const length = end - start;
    if(start > end){
        console.error("start number can't be greater than end number.") ;
        return [];
    }

    for (let i = 0; i <= length; i++) {
        array.push(startNumber);
        startNumber++;
    }
    return array;
}

module.exports = {
    generateNumberArray
}