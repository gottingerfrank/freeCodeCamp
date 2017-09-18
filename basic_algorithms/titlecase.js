// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.

// For the purpose of this exercise,
// you should also capitalize connecting words like "the" and "of".


function titleCase(str) {
  str_array = str.split(" ");
  caps = [];
  for (var i = 0; i < str_array.length; i++) {
    word = str_array[i].charAt(0).toUpperCase() + 
    str_array[i].slice(1, str_array[i].length).toLowerCase();
    caps.push(word);
  }
  return caps.join(" ");
}

titleCase("I'm a little tea pot");


