// Quick-Find Algorithm
/*
  Union operation is costly. if we do n Union operations on N array elements.
  Time complexity : O(n^2)
 */

 function QuickFind(array) {
 	// Initialisation 
  	this.array = array;
  	return this.array;

 }

QuickFind.union = function(p,q) {

// Traverse array get p and q.

  for(var i=0 ;i< array.length; i++) {
    //console.log(array[i]);
  	// if array[i] == p make array[i] => q
  	// Making Connection between p and q
  	//if array's element is same as the element to be merged 
     if(array[i] == array[p]) {
     	array[i] = array[q];
     }
  }

}

QuickFind.find = function(p,q) {

	// Checking if there is a connection between p and q
	return array[p] == array[q];
}

// Test :

QuickFind([12,3,4,5,3,21,1]);
QuickFind.union(4,5);
QuickFind.union(3,5);
QuickFind.find(4,3); //true