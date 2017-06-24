/**
 * Created by aayusharora on 6/24/17.
 */

/* Documentation for Find

   The function is the simplest polyfill of Array.find method of JS
 */

Array.prototype.find =  function (def) {
    var array = this;
    var newArray = [];
    array.forEach(function(y) {

        if(def(y)) {
           newArray.push(y);
        }
    });

    return newArray;
};

// Test Case 1
var y = [1,2,3,4,9,11].find(function(x){return x>2});
console.log(y);


// Syntax to Execute:

[/* Put your array here */].find(/* Put your function here */)