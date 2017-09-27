// Return true if the string in the first element of the array contains
// all of the letters of the string in the second element of the array.

function mutation(arr) {
  var first = arr[0].toLowerCase();
  var second = arr[1].toLowerCase();
  for (var i=0; i < second.length; i++) {
    if (first.indexOf(second[i]) === -1) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
