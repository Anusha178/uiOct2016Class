//IIFE Construct to avoid extra memory allocation to the global variable.
(function(){
    var hotelName='Resto'; //string primitive dt
    var noOfAvailableRooms=21;// integer number primitive dt
    var isBookingAvailable=true; //boolean dt
    var C = null; //NULL Primitive dt & I have initialized variable C to null to have no value.
    var D = undefined; //UNDEFINED Primitive dt and variable D is un defined and no memory allocated to this.
    var E = {
        hotelLocation:'Frisco,Texas',
        rating:4,
        gym:true,
        F: {
            anotherBranchLocation:'California',
            rating:4.2,
            G: {
                totalNoOfHotels:2,
                avgRating:4.1 //dont put , for the ending property value pair.
               }
        }
    };
    // updating or changing the object's any property values using dot(.) notation
    E.rating=5; //updating rating from 4 to 5
    E.F.rating=4.7; // updating rating of property F from 4.2 to 4.7.
    E.F.G.avgRating=4.5; // updating rating of property G from 4.1 to 4.5.

    //result AFTER dot dotation.
    console.log(E);
    console.log(E.F.rating);
    console.log(E.F.G.avgRating);

    console.log(hotelName);
    console.log(noOfAvailableRooms);
    console.log(isBookingAvailable);
    console.log(C);
    console.log(D);

    // defining a function
    function division(a, b){
        var div = a / b;

        return div;
    };

    // calling a function
    var result = division(20, 10);

    console.log(result);





})();