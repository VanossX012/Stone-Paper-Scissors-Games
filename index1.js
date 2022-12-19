const gameChoice = ["Stone","Paper","Scissors"];
var aiChoice = Math.floor(Math.random()*3);
console.log(aiChoice);
console.log(gameChoice[aiChoice]);
var aiChoiceInGame = gameChoice[aiChoice];
for(var i = 0;i<document.querySelectorAll(".game").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function()
    {
        
        var inputChoice = this.innerHTML;
        switch (inputChoice) {
            case "Stone":
                alert("Stone was clicked");
                result(inputChoice);
                break;
            case "Paper":
                alert("Paper was clicked");
                result(inputChoice);
                break;
            case "Scissors":
                alert("Scissors were clicked");
                result(inputChoice);
                break;    
            default:
                break;
        }

    
});
}
function result (keypressed)  {
    if(keypressed == "Scissors" && aiChoiceInGame == "Paper"){
    document.querySelector(".rslt").innerHTML = "Player Wins AI chose " + aiChoiceInGame}
    else if(keypressed == "Scissors" && aiChoiceInGame == "Stone"){
    document.querySelector(".rslt").innerHTML = "AI Wins AI chose " + aiChoiceInGame}
    else if(keypressed == "Scissors" && aiChoiceInGame == "Scissors"){
    document.querySelector(".rslt").innerHTML = "TIE AI chose " + aiChoiceInGame}
    else if(keypressed == "Stone" && aiChoiceInGame == "Scissors"){
    document.querySelector(".rslt").innerHTML = "Player Wins AI chose " + aiChoiceInGame} 
    else if(keypressed == "Stone" && aiChoiceInGame == "Paper"){
    document.querySelector(".rslt").innerHTML = "AI Wins AI chose " + aiChoiceInGame} 
    else if(keypressed == "Stone" && aiChoiceInGame == "Paper"){
    document.querySelector(".rslt").innerHTML = "TIE AI chose " + aiChoiceInGame}   
    else if(keypressed == "Paper" && aiChoiceInGame == "Paper"){
    document.querySelector(".rslt").innerHTML = "TIE AI chose " + aiChoiceInGame}
    else if(keypressed == "Paper" && aiChoiceInGame == "Scissors"){  
    document.querySelector(".rslt").innerHTML = "AI Wins AI chose " + aiChoiceInGame} 
    else if(keypressed == "Paper" && aiChoiceInGame == "Stone"){  
    document.querySelector(".rslt").innerHTML = "Player Wins AI chose " + aiChoiceInGame}   
    
}

