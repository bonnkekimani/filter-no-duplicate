const numbers = [1,2,3,4,5,6,7,8,9,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8];
 const nums = numbers.filter((value, index, arr) =>{
    return arr.indexOf(value) === index;
 }
 );

 console.log(nums);