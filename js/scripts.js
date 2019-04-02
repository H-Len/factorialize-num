var num = prompt("What number for which do you want to find a factorial?")
function factorialize(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

console.log(factorialize(num));





// var num = 5;



// for(number)
// numberList = ();
// numberArray = [];
//
// var number = 5;
//
// for (i = 0; i <= number; i++) {
//   numberList = [];
//   numberList.push(number[i]);
// }
//
// console.log(numberList[]);
//
//
//
// for (var i = 0; i < numberList.length; i++){
//   numberList.push(number[0]);
// }
// console.log(numberList);
//
//
//
//
//
// var number = 5;
//
// for (i = 0; i <= number; i++) {
//     var numExpo(number[i]);
// }
//
//
