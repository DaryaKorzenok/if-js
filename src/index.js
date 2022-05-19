let user = 'John Doe';
console.log(user);
const student = 'Darya';
console.log(student);
user = student; // user = 'Darya';
console.log(user);

let test = 1;
test += 1;
test += '1'; // test = '21'
console.log(test);
test = Boolean(test); // true
console.log(test);
{
  let result = 1;
  const arr = [2, 3, 5, 8];
  for (let i = 0; i < arr.length; i += 1) {
    result *= arr[i];
  }
  console.log('Multiplication of elements in array =', result);
}
{
  const arr = [2, 5, 8, 15, 0, 6, 20, 3];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > 5 && arr[i] < 10) {
      console.log('Element from arrow which > 5 and < 10:', arr[i]);
    }
  }
}
{
  const arr = [2, 5, 8, 15, 0, 6, 20, 3];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 === 0) {
      console.log('Even element:', arr[i]);
    }
  }
}
