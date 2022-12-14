var pipe1_hg;
var hole1_hg;
var pipe2_hg;

setInterval(() => {
    pipe1_hg=Math.floor(Math.random()*10)+30;
    hole1_hg=Math.floor(Math.random()*20)+20;
    document.getElementById("pipe1").style.height=pipe1_hg+"%";
    document.getElementById("pipe2").style.top=pipe1_hg+hole1_hg+"%";
    document.getElementById("pipe2").style.height=100-(pipe1_hg+hole1_hg)+"%";

}, 4000);

var elements=document.getElementById("bird");

//gravity function

setInterval(() => {
    var x=parseInt(window.getComputedStyle(elements).getPropertyValue("top"));
    if(x<=510){
        elements.style.top=(x+3)+"px";
    }
    else{
        alert("Game Over !! your score is: "+score);
        elements.style.top=100+"px";
        window.location.reload();
    }
}, 30);


//fly function

function jump(){
    var fly=parseInt(window.getComputedStyle(elements).getPropertyValue("top"));
    if(fly>=14){
        elements.style.top=(fly-40)+"px";
    }
}
document.addEventListener('keyup', event =>{
    if(event.code==='Space'){
        jump();
    }
})

//score function

var score=0;
setInterval(() => {
    score++;
    document.getElementById("scr").innerHTML=score;
    if(score ===  20){
        document.getElementById("game").style.backgroundImage='images/fb-game-background1.png';
    }
}, 500);


//obstacle functionality

function checkcollision(element1,element2){
    var elm1Rect=element1.getBoundingClientRect();
    var elm2Rect=element2.getBoundingClientRect();

    return(elm1Rect.right >= elm2Rect.left && 
        elm1Rect.left <= elm2Rect.right) && 
        (elm1Rect.bottom>=elm2Rect.top && 
            elm1Rect.top<=elm2Rect.bottom);
}

setInterval(() => {
    if(checkcollision(document.getElementById("bird"),document.getElementById("pipe1"))){
        elements.style.top=513+"px";
        setTimeout(() => {
            return false;
        }, 5);
       
       
    }
    else if(checkcollision(document.getElementById("bird"),document.getElementById("pipe2"))){
        elements.style.top=513+"px";
        setTimeout(() => {
            return false;
            
        }, 5);
       
       
   
    }
}, 100);
