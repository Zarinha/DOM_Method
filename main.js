/* 
a <p> with red text that says “Hey I’m red!”
an <h3> with blue text that says “I’m a blue h3!”
a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.
*/ 

const container = document.querySelector('#container');
const btn = document.getElementById('btn');
const pRed = document.createElement('p');
const h3Blue = document.createElement('h3');
const div = document.createElement('div');
const myH1 = document.createElement('h1');
const p2 = document.createElement("p");



pRed.innerHTML = "Hey, I'm red!";
pRed.style.color = "red";
container.appendChild(pRed);

h3Blue.innerText = "Hey i m a blue H3";
h3Blue.style.color = "blue";
container.appendChild(h3Blue);

myH1.innerHTML = "Im inside a div";
p2.innerHTML = "Me TOO!";
div.appendChild(myH1);
div.appendChild(p2);

div.style.backgroundColor = "pink";
div.style.border = "1px solid"; 
container.appendChild(div);

btn.addEventListener('click', (e) => {
    console.log(e);
});