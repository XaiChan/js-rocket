var timer = null;
var coutdownNumber = 10;



var changeState = function(state){
    document.body.className = 'body-state' + state;
    coutdownNumber = 10;
    clearInterval(timer);
    if(state == 2){
        timer = setInterval(function(){
            coutdownNumber = coutdownNumber - 1;
            document.getElementById('countDown').innerHTML = coutdownNumber;
            if ( coutdownNumber <= 0 ){
                changeState(3);
            };
        }, 300 );
    }
    else if (state == 3){
        var success = setTimeout(function(){
            var randomNumber = Math.round(Math.random()*10);
            if (randomNumber > 6){
                changeState(4);
            }
            else{
                changeState(5);
            }
        },2000);
    };
} ;

    






//My Code Here..

/*

var timer = null;
var coutdownNumber = 10;

var flyMode = function(){
    changeState(2); 
}

var changeState = function(state){
    document.body.className = 'body-state' + state;
    if(state == 2){
        timer = setInterval(function(){
            document.getElementById('countDown').innerHTML = coutdownNumber;
            if (document.body.className == 'body-state2'){
                    coutdownNumber = coutdownNumber - 1;
                    if (coutdownNumber == -1){
                    startRocket();
                 }
            }
            else if(document.body.className == 'body-state1'){
                var flyer = document.getElementById("rocketID");
                flyer.className = "rocket"; 
                abortMission();
            }           
        }, 300 );
    }
    else if(state == 1){
        var flyer = document.getElementById("rocketID");
        flyer.className = "rocket";        
    }
 }

        
var startRocket = function (){
    coutdownNumber = 10;
    var flyer = document.getElementById("rocketID");
    flyer.className = "rocket flying";
    clearInterval(timer);    
} 


var abortMission = function(){
    coutdownNumber = 10;
    changeState(1);
    clearInterval(timer);  
}
*/



