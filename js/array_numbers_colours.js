function high(array) {
    for (index = 0;
        index < array.length;
        index++) {
            array[index]*=2;
        }
        return 0;
}

let array_numbers = [1, 2, 4, 7];
let array_colours = ["green", "yellow", "red", "white"];


console.log(array_colours.length);

console.log(array_colours[3]);

array_colours.unshift("red");
console.log(array_colours);

array_colours.push("black");
console.log(array_colours);

array_colours.splice(0, 2);
console.log(array_colours);

console.log(array_numbers.length);

console.log(array_numbers[3]);

array_numbers.unshift(1);
console.log(array_numbers);

array_numbers.push(9);
console.log(array_numbers);

array_numbers.splice(1, 3);
console.log(array_numbers);

new_array = array_numbers.concat(array_colours);
console.log(new_array);

high(array_numbers);
console.log(array_numbers);

