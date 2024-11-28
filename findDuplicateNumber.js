const arr = [1, 1, 3,8,9,3];

// process 1
// const result=arr.filter((item,index)=>arr.indexOf(item)!==index);
// console.log(result);

// const result=arr.filter(function(item,index,array){
//     return arr.indexOf(item)!==index;
// })
// console.log(result)

// process 2
// *********************try for house******************************************
arr.forEach(function (item, index) {
  for (let i = 0; i < arr.length; i++) {
    if (i !== index && item === arr[i]) {
      console.log(item);
    }
  }
});
