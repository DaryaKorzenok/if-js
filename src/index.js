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

let result = 1;
const arrTask1 = [2, 3, 5, 8];
for (let i = 0; i < arrTask1.length; i += 1) {
  result *= arrTask1[i];
}
console.log('Multiplication of elements in array =', result);

const arrTask2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arrTask2.length; i += 1) {
  if (arrTask2[i] > 5 && arrTask2[i] < 10) {
    console.log('Element from arrow which > 5 and < 10:', arrTask2[i]);
  }
}

const arrTask3 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arrTask3.length; i += 1) {
  if (arrTask3[i] % 2 === 0) {
    console.log('Even element:', arrTask3[i]);
  }
}
//palindrome
const palindrome = (string) => string === string.split('').reverse('').join('');
console.log(palindrome('hello'));
console.log(palindrome('noon'));

//find min
function min(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}
console.log(min(4, 5));

//find min ternary function
const minSecond = (a, b) => (a < b ? a : b);
console.log(minSecond(0, 10));

//find max
function max(a, y) {
  if (a > y) {
    return a;
  }
  return y;
}
console.log(max(4, 5));

//find max ternary function
const maxSecond = (a, y) => (a > y ? a : y);
console.log(maxSecond(0, 10));

//replacing 0 with zero
const arrayWithZero = [1, 10, 24, 32, 90, 39, 11, 75, 100, 89];
const replaceZero = () => String(arrayWithZero).replaceAll('0', 'zero');
console.log(replaceZero(arrayWithZero));
