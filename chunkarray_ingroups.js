// Write a function that splits an array (first argument)into groups
// the length of size (second argument)
// and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var output = [];
  var start = 0;
  var end = size;
    while (start <= arr.length && start != end) {
      output.push(arr.slice(start, end));
      start += size;
      if (start > arr.length-size) {
        end = arr.length;
      } else {
        end += size;
      }
    }
  return output;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
