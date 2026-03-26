document.querySelectorAll("a").forEach(link => {

link.onclick = function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({behavior:"smooth"});

}

});

document.getElementById("topBtn").onclick = function(){

window.scrollTo({top:0, behavior:"smooth"});

};