function arrayPivot(arr, catIndex, valIndex) {
    let pivot = [];
    arr.forEach((item, itemIndex) => {
        if(pivot.some((element) => element[0] === item[catIndex])) {
            pivot.forEach((category, i) => {
                if(category.includes(item[catIndex])) {
                    pivot[i][1] += item[valIndex];
                }
            })
        } else {
            pivot.push([arr[itemIndex][catIndex], arr[itemIndex][valIndex]])
            return;
        }
    })
    console.table(pivot);
} 

export default arrayPivot;