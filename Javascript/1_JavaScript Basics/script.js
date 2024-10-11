var a = 52;

// confirm("heyy")

var b = 34; // this is a primitive value


// reference values are defined using this () {} []
var arr = [1, 2, 3, 4, 5]
// to copy an arr into arr1
//  here is how we can copy reference datatypes
var arr1 = [...arr]

// ------------conditionals---------
// for loop
// for( start ; end ; change) {

// }

// while loop
// start 
// while ( end) {
//     change
// }


// ----------functions----------

function abcd ( name ) {
    // the imported "name" variable is called as parameter
    console.log( name );
}

// the provided value to the function is called as argument of function
abcd( "this is argument" )



// ------------Arrays------------

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// for ( let i = 0 ; i < arr.length ; i= i+1) {
//     console.log( arr[i] );
// }



// ----------Values of this keyword----------

// global scoped - window
console.log( this );

// function scoped - window
function abc () {
    console.log( this );
}
abc()

// method scoped -object
const obj = {
    name: function () {
        console.log( this );
        // console.log(this.rollno);    this will return a roll no from the parent object
    },
    email: "ruturaj",
    rollno: 6
}
obj.name()

// function inside method (es5)  - window
const obj1 = {
    name: function () {
        function abc () {
            console.log( this );   // this will return a window
        }
        abc()
    },
    email: "ruturaj",
    rollno: 6
}
obj1.name()

// function inside method (es6)  - object
const obj2 = {
    name: function () {
        const abc = () => {
            console.log( this );   // this will return a window
        }
        abc()
    },
    email: "ruturaj",
    rollno: 6
}
obj2.name()


// call apply bind in functions

const obj3 = {
    name: "ruturaj"
}
function greet () {
    console.log( this );   // here value of this will be type of passed argument
}
greet.call( obj3 )

function what ( a, b, c ) {
    console.log( this, a, b, c );
}

what.apply( obj3, [2, 3, 5] )


function how() {
    console.log(this);
}

const thisIsBindFunction =  how.bind(obj3);

thisIsBindFunction();