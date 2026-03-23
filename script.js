let links = document.querySelectorAll("ol a");

links.forEach(function(link){

link.addEventListener("click", function(event){

event.preventDefault();

let ziel = document.querySelector(link.getAttribute("href"));

if(ziel){

ziel.scrollIntoView({
behavior:"smooth"
});

}

});

});

document.getElementById("topBtn").onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}