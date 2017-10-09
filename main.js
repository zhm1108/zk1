// 方法1
function qc(arr){
    var newArr = [];
    for(var i=0;i<arr.length;i++){
        if(newArr.indexOf(arr[i])===-1){
            newArr.push(arr[i])
        }
    }
    return newArr;
}
console.log(qc([2,1,4,3,5,2,3]))
// 方法2
function sot(a){
    var arr = a.sort();
    var othArr = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i]!==arr[i+1]){
            othArr.push(arr[i]);
        }   
    }
    return othArr;
}
console.log(sot([2,1,4,3,5,2,3]))