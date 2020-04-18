function taskGame(number) {
    let count = 1;
    let gameArray = [];
while(count<=number) {
    if((count%2 == 0) && (count%3 != 0)  && (count%5 != 0) ) {
        gameArray.push("yu");
        
    }
    else if ((count%2 != 0) && (count%3 == 0)  && (count%5 != 0)) {
        gameArray.push("gi");
        
    }
    else if((count%2 != 0) && (count%3 != 0) && (count%5 == 0)) {
        gameArray.push("oh");
        
    }
    else if((count%2 == 0)  && (count%3 == 0) && (count%5 != 0)) {
        gameArray.push("yu-gi");
    }
    else if((count%2 == 0) && (count%3 != 0) && (count%5 == 0)) {
        gameArray.push("yu-oh");
    }
    else if((count%2 != 0) && (count%3 == 0) && (count%5 == 0)) {
        gameArray.push("gi-oh");
        
    }
    
    else if((count%2 == 0) && (count%3 == 0) && (count%5 == 0)) {
        gameArray.push("yu-gi-oh");
    }

    else {
        gameArray.push(count)
    }
    count++;
}
console.log(gameArray);
return gameArray;

}

taskGame(100);
taskGame(250);
