//
function double(array) {
  array.forEach(function (obj) {
    for (var key in obj) {
      obj[key] *= 2;
    }
  });
  return array;
}

// Given the array, implement a function for generating a new array which contains item
// quantity > 2 and price > 300 only
function filter(array) {
  return array.filter(function (item) {
    return item.quantity > 2 && item.price > 300;
  });
}

// Given the array, implement a function to calculate the total value of the items
function total(array) {
  var acc = 0;
  return array.reduce(function (acc, item) {
    return acc + item.price;
  }, acc);
}

// Given the string, implement a function to remove all the non-alphabet characters and
// extra space in the string and convert the string to all lowercase
function convert(string) {
  const acc = "";
  const result = string.split("").filter(function (i) {
    return (i >= "a" && i <= "z") || (i >= "A" && i <= "Z");
  });
  return result.join("").toLowerCase();
}

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

const string =
  "Perhaps The Easiest-to-understand   case   For Reuduce  is    to Return The Sum Of    All the Elements in   An Array   ";

//console.log(double(itemsObject))
//console.log(filter(itemsObject))
//console.log(total(itemsObject));
//console.log(convert(string));
