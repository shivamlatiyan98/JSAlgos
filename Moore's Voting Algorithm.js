
// Moore Voting Problem

/*
findCandidate(a[], size)
1.  Initialize index and count of majority element
      maj_index = 0, count = 1
2.  Loop for i = 1 to size – 1
     (a) If a[maj_index] == a[i]
         count++
     (b) Else
         count--;
     (c) If count == 0
        maj_index = i;
        count = 1
3.  Return a[maj_index]

4.  Now check if a[maj_index] appears more than n/2.
*/

// To check if an element occurs inside the array more than half of the array size of the array.


function checkMajority(array) {
    var maj_index = 0; count =1;
    for( var i =0 ; i< array.length; i++ ) {
        if(array[i] == array[maj_index]) {
            count ++;

        }
        else {
            count--;
        }
        if (count == 0) {
            maj_index = i;
            count = 1;
        }

    }

    function finalpass(pass) {

        console.log(array.length);
        var flag =0;
        for( var j =0;j<array.length;j++) {
            if(pass == array[j]) {
                flag++;
            }

        }
        if (flag > (array.length/2)) {

            return 1;
        }
        else {
            return 0;
        }
    }

    if( finalpass(array[maj_index])) {
        return array[maj_index];
    }
    else {
        return "None";

    }

}