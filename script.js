let music =new Audio("music.mp3")
let mturn =new Audio("ting.mp3")
let gameover =new Audio("gameover.mp3")

let turn= "X"
let go = false;

const changeTurn = ()=>{
    return turn ==="X"?"0": "X"
}

const checkwin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && ((boxtext[e[2]].innerText !==""))){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won"
            go = true;
            music.pause()
            gameover.play()
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "250px"
        }
    })
}

//main logic
music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText ===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            mturn.play();
            checkwin();
            if(!go){
            document.getElementsByClassName('info')[0].innerText = "Turn for " +turn;
            }
        }
    })
})

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText = ""
        turn = "X";
        go = false
        music.play()
        document.getElementsByClassName('info')[0].innerText = "Turn for " +turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    });
})