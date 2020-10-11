window.onload = function(){
    let board = document.getElementById("board").children;
    let symbols = [];
    let gamestate = [[],[],[]];
    let playnum = 0 ;
    reset(gamestate,board);
    for (let a=0; a<board.length; a++){
        board[a].className= "square";
        addHover(board[a]); 
        addSymbol(board[a],a);   
    }
function addSymbol(child,index){
    console.log(child);
            child.addEventListener("click", function(){
            var currentmove = null;
                if (playnum ===0){
                    currentmove = "X";
                    playnum++;
                    symbols.push("X");
                    placeSymbol("X", child);
                    state(gamestate,index,currentmove);
                    console.log(symbols);
                }
                else{
                    currentmove = nextSymbol(symbols,playnum);
                    playnum++;
                    symbols.push(currentmove);
                    placeSymbol(currentmove,child);
                    state(gamestate,index,currentmove);
        }
        gamestatus(gamestate,currentmove);
        
    });
}
function nextSymbol(symbols,symbolNumber){
    if (symbols[symbolNumber-1]=="O"){
        return "X";
    }
    return "O";    
}
function placeSymbol(symbol,childdiv){
    if (nocheats(childdiv)===false){
        if ( symbol==="X"){
        childdiv.classList.add("X");
        childdiv.innerHTML= "X";
    }
    else{
        childdiv.classList.add("O");
        childdiv.innerHTML= "O";
    }
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
    console.log(gamestate);
    if(checkcolumn(gamestate,currentmove)===true){
        winner(currentmove);
    }
    else if(checkrows(gamestate,currentmove)===true){
        winner(currentmove);
    }
    else if(checkdiag(gamestate,currentmove)===true){
        winner(currentmove);
    }
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
function state(gamestate,currentsquare,symbol){
    switch (currentsquare){
        case 0:
            gamestate[0][0] = symbol;
            break;
        case 1:
            gamestate[0][1] = symbol;
            break;
        case 2:
            gamestate[0][2] = symbol;
            break;
        case 3:
            gamestate[1][0] = symbol;
            break;
        case 4:
            gamestate[1][1] = symbol;
            break;
        case 5:
            gamestate[1][2] = symbol;
            break;
        case 6:
            gamestate[2][0] = symbol;
            break;
        case 7:
            gamestate[2][1] = symbol;
            break;
        case 8:
            gamestate[2][2] = symbol;
            break; 
    }
}
function winner(symbol){
    var status = document.getElementById("status");
    status.innerHTML=`Congratulations! ${symbol} is the Winner!`;
    status.className="you-won";
}
function reset(gamestate,board){
    document.getElementsByClassName("btn")[0].onclick = function(){
        console.log("click");
        for (let a=0; a<board.length; a++){
            board[a].className= "square";
            board[a].innerHTML="";}
            console.log("before"+gamestate);
        gamestate=[[],[],[]];
            console.log("after"+ gamestate); 
        playnum = 0;
        symbol =[];
        let status=document.getElementById("status");
        status.classList.remove("you-won");
        status.innerHTML= 'Move your mouse over a square and click to play an X or an O.';
    }
}
function nocheats(childdiv){
    if (childdiv.classList.contains("X")|| childdiv.classList.contains("O")){
        return true;
    }
    else{
        return false;
    }
}
