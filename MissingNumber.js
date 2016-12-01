// MissingElement in the array of 1 to n natural numbers.

// ********************* Reference : http://www.geeksforgeeks.org/find-the-missing-number/ ********************************

/*

1. Get the sum of numbers 
    total = n*(n+1)/2
2  Subtract all the numbers from sum and
   you will get the missing number.

*/

// ******************************** Implemented by @angularboy on 1/12/2016  *********************************************

function missingElement(arr) {
  
  var n = arr.length,
     naturalsum = ((n+1)*(n+2))/2,
     sum = 0;
   
  for(var i=0; i< n ; i++) {
     sum = sum + arr[i];
  }

  var missingNumber = naturalsum - sum;

  if(missingNumber > 0) {
    return missingNumber;
  }
  else {
       return "No missing number";
   }
  
}