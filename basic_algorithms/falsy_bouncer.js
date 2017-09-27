// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
  var clean = arr.filter(function(item) {
    return item;
  });
  // Don't show a false ID to this bouncer.
  return clean;
}

bouncer([7, "ate", "", false, 9]);
