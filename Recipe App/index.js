const form = document.querySelector('form');
const searchResult = document.querySelector('.search')
const container = document.querySelector('.container');
let userQuery = '';

var i = 0;
var txt = 'Live, love, eat...';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
//https://api.edamam.com/search

const ID = "491c0a25";
const key = "90f6192735aad01f8dc20fb18ee53869";

form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    userQuery = e.target.querySelector('input').value;
    console.log(userQuery);
    fetchData();
})

async function fetchData(){
 const baseURL = `https://api.edamam.com/search?q=${userQuery}&app_id=${ID}&app_key=${key}`;
 const response = await fetch(baseURL);
 const data = await response.json();
 createContent(data.hits);
 console.log(data);
}

function createContent(results){
    let initialContent = '';
    results.map(result => {
        initialContent += 

        `<div class="item">
        <img src="${result.recipe.image}" alt="">
        <div class="flex-container">
            <h1 class='title'>${result.recipe.label}</h1>
            <a class='view-btn' href='${result.recipe.url}'>View Recipe</a>
        </div>
        <p class='recipe-desc'>Calories : ${result.recipe.calories.toFixed(2)}</p>
    </div>`


    })

    searchResult.innerHTML = initialContent;
}