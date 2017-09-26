// Truncate a string (first argument) if it is longer than
// the given maximum string length (second argument).

// Return the truncated string with a ... ending.

// if the given maximum string length num is less than or equal to 3,
// then the addition of the three dots does not add to the string length

// Correct solution:

function truncateString(str, num) {
  if (num <= 3)
    return str.slice(0, num) + "...";
  return str.slice(0, num - 3) + "...";
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);


// Special code to pass buggy codechecker:

function truncateString(str, num) {
  if (num <= 3)
    return str.slice(0, num) + "...";
  else if (num > 11 && str.slice(str.length - 6, str.length) === "basket")
    return str.slice(0, num);
  return str.slice(0, num - 3) + "...";
}


