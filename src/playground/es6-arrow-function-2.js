const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}
console.log(add(55, 1, 1001));

const user = { 
    name: 'Jon',
    cities: ['Austin', 'Salt Lake City', 'Seoul'],
    printPlacesLived() {
        // const that = this;

        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

// Challenge

const multiplier = {
    numbers: [1, 3, 5, 7],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());