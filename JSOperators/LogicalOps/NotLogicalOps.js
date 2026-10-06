// The Logical NOT operator (!)

var eligible = false,
required = true;
console.log(!eligible);   ///true
console.log(!required);   ///false
console.log(!undefined);  /// true
console.log(!null);  ///true
console.log(!20);  ///false
console.log(!0);   ///true
console.log(!NaN);   ///true
console.log(!{});   ///false
console.log(!"");   ///true
console.log(!"OK");   ///false
console.log(!false);   ///true
console.log(!true);   ///false


//The !! uses the logical NOT operator twice to convert a value to its real boolean
// The result is tha same as using the Boolean() function


var eligible = false,
required = true;
console.log(!!eligible);   ///false
console.log(!!required);   ///true
console.log(!!undefined);  /// false
console.log(!!null);  ///false
console.log(!!20);  ///true
console.log(!!0);   ///false
console.log(!!NaN);   ///false
console.log(!!{});   ///true
console.log(!!"");   ///false
console.log(!!"OK");   ///true
console.log(!!false);   ///false
console.log(!!true);   ///true