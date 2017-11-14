const square = function(x) {
    return x * x;
};

const squareArrow = (x) => { return x * x };

console.log(square(8));
console.log(squareArrow(8));

const name = 'Igor Kolomiyets';

const getFirstNameFull = (x) => {
    return x.split(' ')[0];
};

const getFirstName = (x) => x.split(' ')[0];
console.log(getFirstNameFull(name));
console.log(getFirstName(name));