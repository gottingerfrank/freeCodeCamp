
function reverseString(str) {
  strArray = str.split("");
  strArray.reverse();
  str = strArray.join("");
  return str;
}

reverseString("hello");

