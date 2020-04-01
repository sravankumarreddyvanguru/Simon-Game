var gamePattern=[];
var userClickedPattern=[];
var buttonColors=["red","blue","green","yellow"]
var level=0;
var started=false;

$(".start").click(function(){
    if(!started){
    $("#level-title").text("Level " + level);
    nextSequence();
    started=true;
  }


});

$(".btn").click(function(){
  var userChosenColor=this.id;
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length-1);

});

function checkAnswer(currentLevel)
{
if(userClickedPattern[currentLevel]==gamePattern[currentLevel]){

  if (userClickedPattern.length === gamePattern.length){

    setTimeout(function () {
      nextSequence();
    }, 1000);

  }


}
else
{
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },300);
    $("h1").text("Game Over, Press click on start to restart  the game");
    startOver();


}
}


function nextSequence(){
  userClickedPattern=[];
  level++;
  $("#level-title").text("Level " + level);
  $("h1").text("Level "+level);
  var randomNumber=Math.floor((Math.random() *4));
  var randomChoosenColor=buttonColors[randomNumber];
  gamePattern.push(randomChoosenColor);
  $("."+randomChoosenColor).fadeOut().fadeIn();
  playSound(randomChoosenColor);

}

function playSound(color){
  var sound=color+".mp3";
  var audio = new Audio(sound);
   audio.play();
}
function animatePress(color){
  $("#"+color).addClass("pressed");
  setTimeout(function(){
    $("#"+color).removeClass("pressed");
  },300);

}
function startOver(){
started=false;
  gamePattern=[];
  level=0;
}
