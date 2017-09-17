
function findLongestWord(str) {
  str_array = str.split(" ");                    
  max = 0;                                   
  for (var i = 0; i < str_array.length; i++) {       
    if (str_array[i].length > max) {  
      max = str_array[i].length;
      }                                         
    }
  return max;                      
}

findLongestWord("The quick brown fox jumped over the lazy dog");
