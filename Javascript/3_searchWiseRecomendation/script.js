input = document.querySelector("input")

var data = [
    {
        name: "Ruturaj",
        src: "https://images.unsplash.com/photo-1718962984312-4766cfa1edb0?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Snehal",
        src: "https://images.unsplash.com/photo-1728028254879-2d7b4a276cf1?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Sakshi",
        src: "https://images.unsplash.com/photo-1728287031290-b4b0a0843c91?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Rushi",
        src: "https://plus.unsplash.com/premium_photo-1727976490037-a4f7c7341e7b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Sneha",
        src: "https://images.unsplash.com/photo-1727782401872-bcc55bcf2cc4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Sasha",
        src: "https://images.unsplash.com/photo-1727743595559-425d95dbe3c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

var pers = "";

data.forEach( function ( elem ) {
    pers += `<div class="person">
        <img src=${elem.src} alt="">
        <h2>${elem.name}</h2>
    </div>`;
} );


document.querySelector(".people").innerHTML = pers

var matching ;

input.addEventListener("input",function() {
    matching =  data.filter(function(e){
        return e.name.toLowerCase().startsWith(input.value.toLowerCase())
    })

    var newUsers = "";

    matching.forEach( function ( elem ) {
        newUsers += `<div class="person">
            <img src=${elem.src} alt="">
            <h2>${elem.name}</h2>
        </div>`;
    } );
    
    document.querySelector(".people").innerHTML = newUsers
})