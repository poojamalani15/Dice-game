
var button = document.querySelector("#btn");
var img1 = document.querySelector("#p1");
var img2 = document.querySelector("#p2");
var head = document.querySelector("h3");
var r1,r2;

function random(){
	var r = Math.floor(Math.random() * 6) +1 ;
	return "dice" + r + ".png";
}

button.addEventListener("click", function(){
        img1.setAttribute("src" ,  r1 = random());
        img2.setAttribute("src" ,  r2 = random());
         if(r1[4] > r2[4]){
         	head.textContent = "Player 1 Wins"
         }
         else if(r1[4] < r2[4]){
         	head.textContent = "Player 2 Wins"
         }
         else if(r1[4] == r2[4]){
         	head.textContent = "It's a tiee"
         }
 });