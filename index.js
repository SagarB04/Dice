var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomNumber2 = Math.floor(Math.random()*6 + 1);

var player1 = randomNumber1;
var player2 = randomNumber2;

document.querySelector(".img1").setAttribute("src","images/dice"+player1+".png");


document.querySelector(".img2").setAttribute("src","images/dice"+player2+".png");

if(player1 < player2)
{
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else if(player1 > player2)
{
    document.querySelector("h1").innerHTML= "Player 1 wins!";
}
else
{
    document.querySelector("h1").innerHTML= "Draw!";
}