// Repeat a given string (first argument) num times (second argument).
// Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  var count = 0;
  var repeated = [];
  while (num > 0 && count < num) {
    repeated.push(str);
    count += 1;
  }
  return repeated.join("");
}

repeatStringNumTimes("abc", 3);
