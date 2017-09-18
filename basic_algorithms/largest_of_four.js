// Return an array consisting of the largest number from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop,
// and access each member with array syntax arr[i].


function largestOfFour(arr) {
  largest_of_four = [];
  for (i = 0; i < arr.length; i++) {
    max = 0;
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }
    largest_of_four.push(max);
  }
  return largest_of_four;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
