var container2 = document.querySelector('.container2'),
    listCat = document.querySelector('#listCat');
    var courses = [{
        image: 'images/javascriptDef.png',
        title: 'what is javascript?',
        category: 'JS',
        price: 9.9
    },
    {
        image: 'images/htmlBasics.PNG',
        title: 'basics of HTML',
        category: 'HTML',
        price: 5.9
    },
    {
        image: 'images/htmlElements.png',
        title: 'HTML elements and tags',
        category: 'HTML',
        price: 9.9
    },
    {
        image: 'images/cssSelectors.jpg',
        title: 'CSS selectors',
        category: 'CSS',
        price: 69.9
    },
    {
        image: 'images/javascriptVariables.png',
        title: 'variables and data type of javascript',
        category: 'JS',
        price: 19.9
    },
    {
        image: 'images/javascriptOperators.png',
        title: 'Javascript operators and conditions',
        category: 'JS',
        price: 29.9
    },
    {
        image: 'images/htmlAttrVal.jpg',
        title: 'HTML attributes and values',
        category: 'HTML',
        price: 19.9
    },
    {
        image: 'images/cssProperties.png',
        title: 'CSS properties',
        category: 'CSS',
        price: 29.9
    },
    {
        image: 'images/javascriptObjects.png',
        title: 'Javascript objects and arrays',
        category: 'JS',
        price: 39.9
    },
    {
        image: 'images/cssMesures.png',
        title: 'mesures and unites of CSS',
        category: 'CSS',
        price: 19.9
    },
    {
        image: 'images/cssAnimation.png',
        title: 'CSS animations',
        category: 'CSS',
        price: 19.9
    },
    {
        image: 'images/javascriptFunctions.png',
        title: 'The basics of javascript',
        category: 'JS',
        price: 29.9
    },
    {
        image: 'images/javascriptEvents.png',
        title: 'javascript events',
        category: 'JS',
        price: 59.9
    },
    {
        image: 'images/cssColors.png',
        title: 'css colors',
        category: 'CSS',
        price: 29.9
    },
    {
        image: 'images/phpBasics.png',
        title: 'getting started with php',
        category: 'PHP',
        price: 15.9
    },
    {
        image: 'images/javascriptFunctions2.png',
        title: 'functions and loops with javascript',
        category: 'JS',
        price: 19.9
    },
    {
        image: 'images/phpDataBase.png',
        title: 'connecting to database using PHP',
        category: 'PHP',
        price: 29.9
    },
    {
        image: 'images/phpCRUD.png',
        title: 'manipulating crud using php',
        category: 'PHP',
        price: 45.9
    },
    {
        image: 'images/javascriptDOM.png',
        title: 'DOM the power of javascript',
        category: 'JS',
        price: 23.9
    }
]


function creationCours(image, titre, prix) {
    let div = document.createElement('div');
    div.setAttribute('class', 'card col-3 me-2 mb-2 h-');
    let img = document.createElement('img');
    img.src = image;

    let p = document.createElement('p');
    p.setAttribute('class', 'card-title');
    let contenu = document.createTextNode(titre);
    p.appendChild(contenu);

    let span = document.createElement('span');
    span.setAttribute('class', 'card-text');
    span.appendChild(document.createTextNode(prix + '$'));

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);
    container2.append(div)
}


courses.forEach((e) => {
    creationCours(e.image, e.title, e.price);
})

function creationCategories(cat) {
    let a=document.createElement("a");
    a.id=cat;
    a.style.cursor="pointer";
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(cat));
    li.setAttribute('class', 'list-group-item');
    a.appendChild(li);
    listCat.append(a);
}

var category = ['ALL', ...new Set(courses.map((v) => v.category))]

category.forEach((v) => {
    creationCategories(v);
})



//function search
let search=document.getElementById("search");

search.addEventListener("keyup",()=>{
        container2.innerHTML="";
    let c=0;
    courses.forEach((e) => {
        if(e.title.toLowerCase().search(search.value.toLowerCase())>=0){
            creationCours(e.image, e.title, e.price);
            c++;
        }
    })
    if(c===0)
        container2.innerHTML="<h1>THER IS NO COURSES WITH THIS NAME!!!</h1>";
    }


)


let all=document.getElementById("ALL");
let js=document.getElementById("JS");
let html=document.getElementById("HTML");
let css=document.getElementById("CSS");
let php=document.getElementById("PHP");

all.addEventListener("click",()=>{
    container2.innerHTML="";
    courses.forEach((e) => {
        creationCours(e.image, e.title, e.price);
    })
})
js.addEventListener("click",()=>{
    container2.innerHTML="";
    courses.forEach((e) => {
        if(e.category==="JS")
            creationCours(e.image, e.title, e.price);
    })
})
html.addEventListener("click",()=>{
    container2.innerHTML="";
    courses.forEach((e) => {
        if(e.category==="HTML")
            creationCours(e.image, e.title, e.price);
    })
})
css.addEventListener("click",()=>{
    container2.innerHTML="";
    courses.forEach((e) => {
        if(e.category==="CSS")
            creationCours(e.image, e.title, e.price);
    })
})
php.addEventListener("click",()=>{
    container2.innerHTML="";
    courses.forEach((e) => {
        if(e.category==="PHP")
            creationCours(e.image, e.title, e.price);
    })
})


let price=document.getElementById("price");
let pricevalue=document.getElementById("pricevalue");
pricevalue.innerHTML=price.value;

price.addEventListener("change",()=>{
    pricevalue.innerHTML=price.value;
    container2.innerHTML="";
    let c=0;
    courses.forEach((e) => {
        if(e.price<price.value){
            creationCours(e.image, e.title, e.price);
            c++;
        }
    })
    if(c===0)
        container2.innerHTML="<h1>THERE IS NO COURSES WITH THIS PRICE!!</h1>";


})