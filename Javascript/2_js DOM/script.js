// Selection of elements

// var btn =  document.querySelector('button')  by tagName

// var btnId = document.querySelector('#download')  by id 

// var btncls = document.querySelector('.dwnld')  by class

// ---------other selectors----------
// document.getElementsByClassName('dwnld')
// document.getElementById('download')
// document.getElementsByTagName('button')


// dom manipulaytion -  textContent , innerHTML
document.querySelector( 'button' ).addEventListener( 'click', ( e ) => {
    // document.querySelector('button').textContent = 'Starting....'
    document.querySelector( 'button' ).textContent += ' Starting....'
} )

var h1 = document.querySelector( 'h1' );
h1.innerHTML = '<i>Starting...</i>'
h1.innerHTML += '<i>Soon</i>'


// styling elements using js 
h1.style.color = "red"
// h1.style.display = "inline"
h1.style.backgroundColor = "black"
h1.style.padding = "5px"

// removing and adding classes using JS
h1.classList.add( "textContainer" )
h1.classList.remove( "textContainer" )


// --------Creating elements and adding it in html ----------

var span = document.createElement( "span" );

span.textContent = "This is a new heading"
span.style.display = "block";

document.querySelector( "body" ).appendChild( span )
document.querySelector( "body" ).removeChild( span )



// -----------event listeners -----------

var button2 = document.getElementById( "eventBtn" )

button2.addEventListener( "click", function () {
    // alert("eventBtn clicked")
    button2.textContent = "Starting"
} )



// -----------form handling ----------
var inp1 = document.querySelector( "#inpItem" );
var btn1 = document.querySelector( "#btnAdd" );
var btn2 = document.querySelector( "#btnRemove" );
var ul1 = document.querySelector( "ul" );
var li;

btn1.addEventListener( "click", function ( e ) {
    e.preventDefault();
    if ( inp1.value.trim() === "" ) { }
    else {
        li = document.createElement( "li" );
        li.textContent = inp1.value
        ul1.appendChild( li );
        inp1.value = "";
    }
} )

btn2.addEventListener("click", function(e){
    e.preventDefault();
    ul1.removeChild(li);
})


// set interval

var timerStart = document.querySelector( "#timerStart" );
var timerStop = document.querySelector( "#timerStop" );
var timer = document.querySelector( "#timer" );
let interval;

timerStart.addEventListener("click" , function(){
    var count = 0;
    if ( count === 0 ) {
        interval = setInterval(() => {
            timer.textContent = count;
            count++;
        }, 1000);
    }
})

timerStop.addEventListener("click", function(){
    clearInterval(interval)
})