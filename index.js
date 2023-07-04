// console.log('hello');
const game = () => {
let pscore=0;
let cscore=0;
const computerturn = () =>{
    const computericon = document.querySelector("img.computericon");
    // console.log(computericon);
    const options = document.querySelectorAll(".options button");
    const computeroptions = ['rock','paper','scissor'];
    // console.log(computeroptions);
    const playericon = document.querySelector("img.playericon");
  
// console.log(options);
options.forEach(options => {
    options.addEventListener("click",function(){
        const computernumber = Math.floor(Math.random()*3);
        // console.log(computernumber);
        const computerchoice = computeroptions[computernumber];
        console.log(computerchoice);
        computericon.src = `./png/${computerchoice}.png`;
        playericon.src=`./png/${this.textContent}.png`;
        const playerchoice = this.textContent;
        console.log(playerchoice);
        winner(this.textContent,computerchoice);
        updatescore();
        reset();
    })


});

const winner = (playerchoice,computerchoice) =>{
    const won = document.querySelector("h4");

    if (playerchoice===computerchoice){
        // console.log(won);
        won.textContent="Its a tie";
        return;
        
    }
    //rock
    if(playerchoice==='rock'){
        if(computerchoice==='paper'){
            won.textContent="computer won";
            cscore++;
            return;
        }
        else{
            won.textContent="player won";
            pscore++;
            return;
        }
    }

    if(playerchoice === 'paper'){
        if(computerchoice==='rock'){
            won.textContent="player won";
            pscore++;
            return;
        }
        else{
            won.textContent="computer won";
            cscore++;
            return;
        }
    }
    if(playerchoice==='scissor'){
        if(computerchoice==='rock'){
            won.textContent="computer won";
            cscore++;
            return;
        }
        else{
            won.textContent="player won";
            pscore++;
            return;
        }
    }
}


}
const updatescore =()=>{
    const computerscore=document.querySelector(".computer-score p");
    const playerscore=document.querySelector(".player-score p");
    playerscore.textContent= pscore;
    computerscore.textContent= cscore;
    console.log(playerscore);
}


const reset =()=>{
let resetbutton = document.querySelector("button.reset")
resetbutton.addEventListener("click",function(){
    console.log('hello');
pscore=0;
cscore=0;
updatescore();
})

}

computerturn();
}

game();
