const add = function(a, b) {
    console.log(arguments);
    return a + b;
};

const addArrow = (a, b) => a + b;

console.log(addArrow(44, 1));

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    placesLived() {
        return this.cities.map((city) => {
            return this.name + ' lived in ' + city;
        });
    }
};

console.log(user.placesLived());

const multiplier = {
    numbers: [1,4,6],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((x) => x * this.multiplyBy)
    }
};

console.log(multiplier.multiply());