// function square (x) {
//     return x * x;
// }

// console.log(square(3));

// // const squareArrow = (x) => {
//     // return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(9));

// Challenge - Use arrow functions
// getFirstName

const getFirst = (name) => name.split(' ')[0];
console.log(getFirst('Jon Lim'));

function getFirstRegular (name) {
    return name.split(' ')[0];
}
console.log(getFirstRegular('Jon Lim'));