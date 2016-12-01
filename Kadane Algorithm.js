// Kadane's Algorithm

/* Algorithm Source : http://www.geeksforgeeks.org/largest-sum-contiguous-subarray/

// Find sum of largest-contiguous sub-array

 Initialize:
 max_so_far = 0
 max_ending_here = 0

 Loop for each element of the array
 (a) max_ending_here = max_ending_here + a[i]
 (b) if(max_ending_here < 0)
 max_ending_here = 0
 (c) if(max_so_far < max_ending_here)
 max_so_far = max_ending_here
 return max_so_far

 */

/* Implementation by @angularboy on 1/12/2016 */

function maxSum (arr) {

    var flag = 0,
        max  = arr[0];

    for( var j=0 ;j< arr.length; j++) {  // Will check if the whole array is negative : Modified Kadane's algo
        if(arr[j] > 0) {
           flag = 1;      // To check if array has atleast one positive element
           break;
        }
        else {
            if(arr[j] > max) {
                max = array[j];
            }
        }
    }

    if (flag) {                         // Optimization step
        var max_so_far = 0, current = 0;

        for(var i=0 ; i < arr.length ; i++) {
            current = current + arr[i];
            if(current < 0) {
                current = 0;
            }
            if(current > max_so_far) {
                max_so_far = current;
            }


        }

        return max_so_far;  // keep track for maximum till now and update it if sum increases
    }
    else {
        return max; // return maximum of negative numbers
    }

}