// Selection of elements

// var btn =  document.querySelector('button')  by tagName

// var btnId = document.querySelector('#download')  by id 

// var btncls = document.querySelector('.dwnld')  by class

// ---------other selectors----------
// document.getElementsByClassName('dwnld')
// document.getElementById('download')
// document.getElementsByTagName('button')


// dom manipulaytion -  textContent , innerHTML
document.querySelector('button').addEventListener('click' , (e)=>{
    // document.querySelector('button').textContent = 'Starting....'
    document.querySelector('button').textContent += ' Starting....'
})

var h1 = document.querySelector('h1');
h1.innerHTML = '<i>Starting...</i>'
h1.innerHTML += '<i>Soon</i>'


// styling elements using js 
h1.style.color = "red"
// h1.style.display = "inline"
h1.style.backgroundColor = "black"
h1.style.padding = "5px"

// removing and adding classes using JS
h1.classList.add("textContainer")
h1.classList.remove("textContainer")

