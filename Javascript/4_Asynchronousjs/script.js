setTimeout( () => {
    console.log( "champ" );
}, 1000 )


count = 0 
const hamaraInterval =  setInterval ( ()=> {
    console.log( count );
    count++;
    if (count === 5) clearInterval(hamaraInterval)
} , 10)


// fetching API
fetch("https://fakestoreapi.com/users")
.then(raw => raw.json())
.then(readable => console.log(readable[0].email))
.catch(err => console.error(err))


// Promise

const parchi =  new Promise(function(resolve , reject){
    fetch("https://fakestoreapi.com/users")
    .then ( raw => raw.json())
    .then( result => {
        if (  result[0].id === 1 ) resolve()
        else reject()
    })
})

parchi.then(()=> console.log("Parchi hai"))
.catch(()=> console.log("parchi nahi hai"))


// callback function

function getData( url , callback) {
    fetch(url)
    .then( raw => raw.json())
    .then ( result => {
        callback(result)
    }
    )
}

getData("https://fakestoreapi.com/users" , function ( result){
    console.log( result[0].name.firstname  , result[0].email , result[0].password )
})


// async await

async function fetchData() {
    let data =  await fetch(`https://fakestoreapi.com/users`);
    data = await data.json()

    console.log(data);
}
fetchData()



async function getUsers( url) {
    let data = await fetch(url)
    data = await data.json()

    return data
}

async function users() {
    let users = await getUsers(`https://fakestoreapi.com/users`)
    console.log(users[0]);
}
users()


// generators
function* printNums () {
    for ( let i = 1 ; i<11 ; i++) {
        yield i;
    }
}

let gen = printNums();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);