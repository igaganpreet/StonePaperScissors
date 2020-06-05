// Initialise user choice and score
var userIcon=0;
var score1=0;
var score2=0;

// On-Click funtion over icons
$(".game-icon").click(function(){
    var clickedIcon=this.innerHTML;
    switch(clickedIcon){
        case '👊':
            userIcon=1;
            // Display user's choice
            $("#user").html("Stone"); 
            break;
        case '🤚':
            userIcon=2;
            $("#user").html("Paper");
            break;
        case '✌':
           userIcon=3;
           $("#user").html("Scissors");
            break;
        default:
            console.log("unspecified case");
    }

    // Random icon choice
    var number=Math.random();
    var computerIcon=Math.floor(number*3)+1;
    computerSelect(computerIcon);
    checkResult(userIcon,computerIcon);
})


// Display random selection by computer
function computerSelect(computerIcon){
    switch(computerIcon){
        case 1 :
            $("#computer").html("Stone");
            break;
        case 2 :
            $("#computer").html("Paper");
            break;
        case 3 :
            $("#computer").html("Scissors");
            break;
        default:
            console.log("unspecified case");
    }
}

// Result generation 
function checkResult(userIcon, computerIcon){
    if(userIcon==computerIcon){
        $(".displayResult").html("🚩Draw🚩");
        score1++;
        score2++;
    }
    else if(userIcon==1 && computerIcon==2 ){
        $(".displayResult").html("Paper covers stone: So computer wins🚩");
        score2++;
    }
    else if(userIcon==1 && computerIcon==3 ){
        $(".displayResult").html("🚩Stone breaks scissors: So you win");
        score1++;
    }
    else if(userIcon==2 && computerIcon==1 ){
        $(".displayResult").html("🚩Paper covers stone: So you win");
        score1++;
    }
    else if(userIcon==2 && computerIcon==3 ){
        $(".displayResult").html("Scissors cut paper: So computer wins🚩");
        score2++;
    }
    else if(userIcon==3 && computerIcon==1 ){
        $(".displayResult").html("Stone breaks scissors: So computer wins🚩");
        score2++;
    }
    else if(userIcon==3 && computerIcon==2 ){
        $(".displayResult").html("🚩Scissors cut paper: So you win");
        score1++;
    }

    // Display new score
    $(".score1").html(score1);
    $(".score2").html(score2);
}