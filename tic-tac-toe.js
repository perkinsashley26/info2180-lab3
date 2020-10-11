window.onload = function(){
    var board = document.getElementById("board").children;
    var symbols = [];
    var gamestate = [[],[],[]];
    var playnum = 0 ;
    for (var a=0; a<board.length; a++){
        board[a].className= "square";
        addHover(board[a]); 
        addSymbol(board[a]);
    }
function addSymbol(child){
    console.log(child);
            child.addEventListener("click", function(){
            var currentmove = null;
                if (playnum ===0){
                    currentmove = "X";
                    playnum++;
                    symbols.push("X");
                    placeSymbol("X", child);
                    console.log(symbols);
                }
                else{
                    currentmove = nextSymbol(symbols,playnum);
                    playnum++;
                    symbols.push(currentmove);
                    placeSymbol(currentmove,child);
        }
    });
}
function nextSymbol(symbols,symbolNumber){
    if (symbols[symbolNumber-1]=="O"){
        return "X";
    }
    return "O";    
}
function placeSymbol(symbol,childdiv){
    if ( symbol==="X"){
        childdiv.classList.add("X");
        childdiv.innerHTML= "X";
    }
    else{
        childdiv.classList.add("O");
        childdiv.innerHTML= "O";
    }
    
}
function addHover(child){
    console.log(child);
        child.addEventListener("mouseover",function(){
            child.classList.add("hover");
        });

        child.addEventListener("mouseout",function(){
            child.classList.remove("hover");
        });
    }
}    
function gamestatus(gamestate, currentmove){
    }

function checkcolumn(gamestate, currentmove){
    if(gamestate[0][0]===currentmove &&
       gamestate[1][0]===currentmove &&
       gamestate[2][0]===currentmove){
           return true;
       }
    else if(gamestate[0][1]===currentmove &&
            gamestate[1][1]===currentmove &&
            gamestate[2][1]===currentmove){
                return true;
            }
    else if(gamestate[0][2]===currentmove &&
        gamestate[1][2]===currentmove &&
        gamestate[2][2]===currentmove){
            return true;
        }
    else{
        return false;
    }
}
function checkdiag(gamestate,currentmove){
    if(gamestate[0][0]===currentmove &&
       gamestate[1][1]===currentmove &&
       gamestate[2][2]===currentmove){
        return true;
}
    else if
        (gamestate[0][2]===currentmove &&
        gamestate[1][1]===currentmove &&
        gamestate[2][0]===currentmove){
        return true;
    }
    else{
        return false;
    }
}
function checkrows(gamestate,currentmove){
    if(gamestate[0][0]===currentmove &&
       gamestate[0][1]===currentmove &&
       gamestate[0][2]===currentmove){
          return true;
    }
    else if(
       gamestate[1][0]===currentmove &&
       gamestate[1][1]===currentmove &&
       gamestate[1][2]===currentmove){
          return true;
    }
    else if(
       gamestate[2][0]===currentmove &&
       gamestate[2][1]===currentmove &&
       gamestate[2][2]===currentmove){
          return true;
    }
    else{
        return false;
    }
}
