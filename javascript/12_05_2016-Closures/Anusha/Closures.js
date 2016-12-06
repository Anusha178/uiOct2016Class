/* Closures is the concept of creating implicit permanent link between scope and its chain.*/

var Mathematics = function(x,y){

    this.sum =  function(){
    return x+y;
};

    this.difference = function(){
    return x-y;
};

    this.multiplication = function(){
    return x*y;
};

    this.division = function(){
    return x/y;
};

// define total class
     var total = function(){
       var addition,subtract,product,dividend;
       addition = sum();
       subtract = difference();
       product = multiplication();
       dividend = division();
       console.log("addition is:  " +  addition);
       console.log("subtract is:  " +  subtract);
       console.log("product is:  " +  product);
       console.log("dividend is:  " +  dividend);
      }

  // return total class
   return total;
}

// get total class
var totObj = Mathematics(20,30);

/* When we invoke total class methods of Mathermatics class are invoked using the concept of closures*/
totObj()