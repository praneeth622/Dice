var randomVariable1 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice" + randomVariable1 + ".png";

var RandomImage = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",RandomImage);

// Secound dice

var randomVariable2 = Math.floor(Math.random()*6);
var randomDiceImage2 = "images/"+"dice"+randomVariable2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

if (randomVariable1>randomVariable2){
    document.querySelector("h1").innerHTML="1st Player Wins!!"
}
else if(randomVariable1<randomVariable2){
    document.querySelector("h1").innerHTML="2nd Player Wins!!"
}
else if(randomVariable1===randomVariable2){
    document.querySelector("h1").innerHTML="Draw!!!"
}
