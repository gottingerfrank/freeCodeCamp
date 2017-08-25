
function palindrome(str) {
  
  var cleaned = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
  var flipped = cleaned.split("").reverse().join("");

  if (cleaned === flipped) {
    return true;
  } 
  return false;
}

palindrome("eye");
