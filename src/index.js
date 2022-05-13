//6
let user = 'John Doe';
console.log(user);
let student = 'Darya';
console.log(student);
user = student; // user = 'Darya';
console.log(user);

//7
let test = 1;
test += 1;
test += '1'; // test = '21'
console.log(test);
test = Boolean(test); // true
console.log(test);

//8
{
  console.log('Multiplication of elements in array');
  let result = 1;
  let arr = [2, 3, 5, 8];
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  console.log(result);
}
//9
{
  console.log('Elements from arrow which >5 and <10');
  let arr = [2, 5, 8, 15, 0, 6, 20, 3];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5 && arr[i] < 10) {
      console.log(arr[i]);
    }
  }
}
//10
{
  console.log('Even elements');
  let arr = [2, 5, 8, 15, 0, 6, 20, 3];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      console.log(arr[i]);
    }
  }
}
