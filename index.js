function sub(a, b) {
  // write your code here
   return   a - b ;
}
console.log(sub(4, 2))

function num_elements(my_array) {
  // write your code here
  return my_array.length;
}

console.log(num_elements([5, 12, 3, 51]))




  // write your code here
  function repetitions(s) {
    // write your code here
    let count = 0;
    let leteer = "";
    let all = [];
    for (let i of s){
    if(i === leteer){
      //console.log(s)
      //console.log(i)
     // console.log(leteer)
    count++;
    all.push(count);
    } else {
        count = 0;
        leteer = i;
        count++;
        all.push(count);
    }
}
return Math.max(...all);
}
console.log(repetitions("aaagggghhhhhhhhhhass"))



function find_element(elements_array, element) {
  // write your code here
    return elements_array.includes(element);

}
console.log(find_element([1, 2, 35], 35));


function area_of_rectangle(width, height) {
  // write your code here
    return height * width;
}
console.log(area_of_rectangle(7, 4));

function max_element(arr) {
  // write your code here
  return Math.max(...arr);
  return Math.min(...arr);

}
console.log(max_element([32, 35, 23, 59, 20, 88]))

function equal_check(num1, num2) {
  // write your code here
    return num1 === num2
}

console.log(equal_check(5, 5))





