
// Trying Polyfill for Push function in JS 

// Replaced push function with custom Push function for multiple element

/* Created by @angularboy on 8/12/2016 */

Array.prototype.Push = function (el) {
  var self = this;
  if(arguments.length==1) {
     push(el);
   }
   else {
   	for( var i=0;i<arguments.length;i++) {
   		push(arguments[i]);
   	}
   }

   function push(el){
   	 self.length ++;
     self[self.length-1]=el;
   }    
   return self.length;

}

// To use : [1,3,5,9,3].Push(4,2,1)
// [1,3,5,9,3,4,2,1]