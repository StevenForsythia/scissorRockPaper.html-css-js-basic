Swal.fire('WOULD YOU LIKE TO USE MUSIC?')

// container
const mode = document.querySelector(".mode")
const imageMode = document.getElementById("imageMode")
const wallpaper = document.getElementById("home")

// audio
const suara = document.getElementById("suara")
const music = document.querySelector(".music")
const audio = document.getElementById("section")

let bgm = new Audio("./assets/music/music.mp3")
let beep = new Audio("./assets/music/beep.mp3")
let beep2 = new Audio("./assets/music/beep.mp3")
let win = new Audio("./assets/music/you_win.mp3")
let lose = new Audio("./assets/music/you_lose.mp3")
let draw = new Audio("./assets/music/seri.mp3")
let ngocok = new Audio("./assets/music/ngocok.mp3")


// result
const container = document.querySelector(".container")
const result = document.querySelector(".result")
const hasil = document.getElementById("hasil")
const cuitan = document.getElementById("cuitan")
const retry = document.getElementById("retry")
const reload = document.getElementById("reload")


// box
const gunting = document.querySelector("#gunting")
const batu = document.querySelector("#batu")
const kertas = document.querySelector("#kertas")

const tandaPlayer = document.getElementById("tandaPlayer")
const tandaBot = document.getElementById("tandaBot")

// score
let scorePlayer = 1
let scoreBot = 1
let playerScore = document.getElementById("playerScore")
let botScore = document.getElementById("botScore")



// button untuk mode malam dan pagi
toggle = true
mode.addEventListener("click", function() {
    toggle = !toggle
    if(toggle) {
        imageMode.src = "./assets/img/mode/sun.png"
        mode.style.border = ("2px solid white")
        wallpaper.style.backgroundImage = "url(./assets/img/wallpaper/night.webp)"
        suara.src = "./assets/img/musicIcon/sound100%White.png"

    }else{
        imageMode.src = "./assets/img/mode/moon.png"
        mode.style.border = ("2px solid white")
        wallpaper.style.backgroundImage = "url(./assets/img/wallpaper/morning.webp)"
        suara.src = "./assets/img/musicIcon/sound100%White.png"
    }
    
    
})

// function score
function scoreP() {
    playerScore.innerHTML = scorePlayer
    ++scorePlayer
}

function scoreB() {
    botScore.innerHTML = scoreBot
    ++scoreBot
}

bgm.loop = true;
let udahAda = false;
function playMusic(){

    udahAda == false;
    if(udahAda == false) {
        udahAda = true
        bgm.play();
    }
}

const roulette = ["gunting", "batu", "kertas"]

function putarPlayer() {
    let putar = 0

    const waktuMulai = new Date().getTime()

    setInterval(function() {

        if(new Date().getTime() - waktuMulai > 2200) {
            clearInterval
            return
        }

        tandaPlayer.src = "./assets/img/item/" + roulette[putar++] + ".png"
        tandaPlayer.style.width = "120px"
        tandaPlayer.style.height = "auto"
        if(putar == roulette.length) {
            putar = 0
        }
    }, 200)
}

function putarBot() {
    let putar = 0

    const waktuMulai = new Date().getTime()


    setInterval(function() {

        if(new Date().getTime() - waktuMulai > 2200) {
            clearInterval
            return
        }

        tandaBot.src = "./assets/img/item/" + roulette[putar++] + ".png"
        tandaBot.style.width = "120px"
        tandaBot.style.height = "auto"
        tandaBot.style.transform = "scaleX(-1)"
        if(putar == roulette.length) {
            putar = 0
        }
    }, 200)
}

audio.addEventListener("mouseenter", function(){
    playMusic();
})

music.addEventListener("click", function(){
    toggle = !toggle
    if(toggle){
        suara.src = "./assets/img/musicIcon/sound100%White.png"
        bgm.muted = false
    }else{
        suara.src = "./assets/img/musicIcon/sound_off.png"
        bgm.muted = true
    }
})

gunting.addEventListener("mouseenter", function (){
    tandaPlayer.src = "./assets/img/item/gunting.png"
    tandaPlayer.style.transform = "rotate(-20deg)"
    tandaPlayer.style.width = "120px"
    tandaPlayer.style.height = "auto"
    beep.play()
})

gunting.addEventListener("mouseleave", function(){
    tandaPlayer.src = "./assets/img/item/question_mark.png"
    tandaPlayer.style.width = "150px"
    tandaPlayer.style.height = "150px"
    tandaPlayer.style.transform = "rotate(0deg)"
})

batu.addEventListener("mouseover", function(){
    tandaPlayer.src = "./assets/img/item/batu.png"
    tandaPlayer.style.transform = "rotate(-10deg)"
    tandaPlayer.style.width = "120px"
    tandaPlayer.style.height = "auto"
    beep2.play()
})

batu.addEventListener("mouseout", function(){
    tandaPlayer.src = "./assets/img/item/question_mark.png"
    tandaPlayer.style.width = "150px"
    tandaPlayer.style.height = "150px"
    tandaPlayer.style.transform = "rotate(0deg)"})

kertas.addEventListener("mouseover", function(){
    tandaPlayer.src = "./assets/img/item/kertas.png"
    tandaPlayer.style.transform = "rotate(75deg)"
    tandaPlayer.style.width = "120px"
    tandaPlayer.style.height = "auto"
    beep.play()
})

kertas.addEventListener("mouseout", function(){
    tandaPlayer.src = "./assets/img/item/question_mark.png"
    tandaPlayer.style.width = "150px"
    tandaPlayer.style.height = "150px"
    tandaPlayer.style.transform = "rotate(0deg)"
})

function resultSeri() {
    hasil.src = "./assets/img/gif/seri.gif"
    result.style.zIndex = "1"
    result.style.top = "12%"
    result.style.left = "39%"
    hasil.style.width = "auto"
    hasil.style.height = "300px"

    cuitan.innerHTML = "YOU DRAW!"
    cuitan.style.top = "105%"
    cuitan.style.left = "19%"
    cuitan.style.fontSize = "60px"
    cuitan.style.textShadow = "4px 2px black"

    retry.src = "./assets/img/item/retry_you_draw.png"
    retry.style.top = "125%"
    retry.style.left = "35%"

    bgm.muted = true
    draw.play()
}

function resultKalah() {
    hasil.src = "./assets/img/gif/you_lose.gif"
    result.style.zIndex = "1"
    result.style.top = "2%"
    result.style.left = "21.5%"
    hasil.style.width = "auto"
    hasil.style.height = "450px"

    cuitan.innerHTML = "YOU LOSE!"
    cuitan.style.top = "85%"
    cuitan.style.left = "42%"
    cuitan.style.fontSize = "60px"
    cuitan.style.textShadow = "4px 2px red"

    retry.src = "./assets/img/item/retry_you_lose.png"
    retry.style.top = "99%"
    retry.style.left = "47%"
    
    scoreB()

    bgm.muted = true
    lose.play()
}

function resultMenang() {
    hasil.src = "./assets/img/gif/you_win.gif"
    result.style.zIndex = "1"
    result.style.top = "2%"
    result.style.left = "23%"
    hasil.style.width = "auto"
    hasil.style.height = "450px"

    cuitan.style.textShadow = "4px 2px blue"
    cuitan.innerHTML = "YOU WIN!"
    cuitan.style.top = "95%"
    cuitan.style.left = "38.5%"
    cuitan.style.fontSize = "60px"

    retry.src = "./assets/img/item/retry_you_win.png"
    retry.style.top = "107%"
    retry.style.left = "43%"

    bgm.muted = true
    win.play()
    
    scoreP()
}


const gambarPlayer = document.getElementById("gambarPlayer")
const gambarBot = document.getElementById("gambarBot")

function blur() {
    container.style.filter = "blur(20px)"
    container.style.zIndex = "-1"
    playerScore.style.filter = "blur(20px)"
    botScore.style.filter = "blur(20px)"

}

gunting.addEventListener("click", function(){
    let comp = Math.floor((Math.random() * 3) + 1);
    
    putarPlayer()
    putarBot()
    ngocok.play()
    container.style.pointerEvents = "none"

    setTimeout(function(){
        if(comp == 1){
            blur()
            resultSeri()
    
            // player gunting
            gambarPlayer.src = "./assets/img/item/gunting.png"
            gambarPlayer.style.zIndex = "1"
            gambarPlayer.style.top = "35%"
            gambarPlayer.style.transform = "rotate(-70deg)"
    
            // bot gunting
            gambarBot.src = "./assets/img/item/gunting.png"
            gambarBot.style.zIndex = "2"
            gambarBot.style.transform = "rotate(220deg)"
            gambarBot.style.top = "32%"
    
        }else if(comp == 2){
            blur()
            resultKalah()
    
            // player gunting
            gambarPlayer.src = "./assets/img/item/gunting.png"
            gambarPlayer.style.zIndex = "1"
            gambarPlayer.style.top = "35%"
            gambarPlayer.style.transform = "rotate(-70deg)"
    
            // bot batu
            gambarBot.style.zIndex = "1"
            gambarBot.style.transform = "rotate(230deg)"
            gambarBot.src = "./assets/img/item/batu.png"
            gambarBot.style.top = "32%"
    
        }else if(comp == 3){
            blur()
            resultMenang()
    
            // player gunting
            gambarPlayer.src = "./assets/img/item/gunting.png"
            gambarPlayer.style.zIndex = "1"
            gambarPlayer.style.top = "35%"
            gambarPlayer.style.transform = "rotate(-70deg)"
    
            // bot kertas
            gambarBot.style.zIndex = "1"
            gambarBot.style.transform = "rotate(-45deg)"
            gambarBot.src = "./assets/img/item/kertas.png"
            gambarBot.style.top = "30%"
        }
    }, 2200)
})

batu.addEventListener("click", function(){
    let comp = Math.floor((Math.random() * 3) + 1);

    putarPlayer()
    putarBot()
    ngocok.play()
    container.style.pointerEvents = "none"

    setTimeout(function(){
        if(comp == 1){
            blur()
            resultMenang()
    
            // player batu
            gambarPlayer.style.zIndex = "1"
            gambarPlayer.style.transform = "rotate(-60deg)"
            gambarPlayer.src = "./assets/img/item/batu.png"
            gambarPlayer.style.top = "35%"
    
            // bot gunting
            gambarBot.src = "./assets/img/item/gunting.png"
            gambarBot.style.zIndex = "2"
            gambarBot.style.transform = "rotate(220deg)"
            gambarBot.style.top = "39%"

        }else if(comp == 2){
            blur()
            resultSeri()
    
            // player batu
            gambarPlayer.style.zIndex = "1"
            gambarPlayer.style.transform = "rotate(-60deg)"
            gambarPlayer.src = "./assets/img/item/batu.png"
            gambarPlayer.style.top = "35%"
    
            // bot batu
            gambarBot.style.zIndex = "1"
            gambarBot.style.transform = "rotate(230deg)"
            gambarBot.src = "./assets/img/item/batu.png"
            gambarBot.style.top = "38%"

        }else if(comp == 3){
            blur()
            resultKalah()
    
            // player batu
            gambarPlayer.style.zIndex = "1"
            gambarPlayer.style.transform = "rotate(-60deg)"
            gambarPlayer.src = "./assets/img/item/batu.png"
            gambarPlayer.style.top = "35%"
    
            // bot kertas
            gambarBot.style.zIndex = "1"
            gambarBot.style.transform = "rotate(-45deg)"
            gambarBot.src = "./assets/img/item/kertas.png"
            gambarBot.style.top = "33%"
        }
    }, 2200)

})

kertas.addEventListener("click", function(){
    let comp = Math.floor((Math.random() * 3) + 1);

    putarPlayer()
    putarBot()
    ngocok.play()
    container.style.pointerEvents = "none"

    setTimeout(function(){
        if(comp == 1){
            blur()
            resultKalah()
    
            // player kertas
            gambarPlayer.style.zIndex = "1"
            gambarPlayer.style.transform = "rotate(20deg)"
            gambarPlayer.src = "./assets/img/item/kertas.png"
            gambarPlayer.style.top = "30%"
    
            // bot gunting
            gambarBot.src = "./assets/img/item/gunting.png"
            gambarBot.style.zIndex = "2"
            gambarBot.style.transform = "rotate(220deg)"
            gambarBot.style.top = "40%"

        }else if(comp == 2){
            blur()
            resultMenang()
            
            // player kertas
            gambarPlayer.style.zIndex = "1"
            gambarPlayer.style.transform = "rotate(20deg)"
            gambarPlayer.src = "./assets/img/item/kertas.png"
            gambarPlayer.style.top = "30%"
    
            // bot batu
            gambarBot.style.zIndex = "1"
            gambarBot.style.transform = "rotate(230deg)"
            gambarBot.src = "./assets/img/item/batu.png"
            gambarBot.style.top = "36%"

        }else if(comp == 3){
            blur()
            resultSeri()
    
            // player kertas
            gambarPlayer.style.zIndex = "1"
            gambarPlayer.style.transform = "rotate(20deg)"
            gambarPlayer.src = "./assets/img/item/kertas.png"
            gambarPlayer.style.top = "30%"
    
            // bot kertas
            gambarBot.style.zIndex = "1"
            gambarBot.style.transform = "rotate(-45deg)"
            gambarBot.src = "./assets/img/item/kertas.png"
            gambarBot.style.top = "33%"
        }
    }, 2200)
    
})

reload.addEventListener("click", function(){
    container.style.zIndex = "1"
    result.style.zIndex = "-1"
    container.style.pointerEvents = "auto"
    container.style.filter = "blur(0px)"
    
    win.pause()
    win.currentTime = 0

    lose.pause()
    lose.currentTime = 0

    draw.pause()
    draw.currentTime = 0

    bgm.muted = false

    gambarPlayer.style.zIndex = "-1"
    gambarBot.style.zIndex = "-1"

    playerScore.style.filter = "blur(0px)"
    botScore.style.filter = "blur(0px)"

    tandaPlayer.src = "./assets/img/item/question_mark.png"
    tandaPlayer.style.width = "150px"
    tandaPlayer.style.height = "150px"
    tandaPlayer.style.transform = "rotate(0deg)"

    tandaBot.src = "./assets/img/item/question_mark.png"
    tandaBot.style.width = "150px"
    tandaBot.style.height = "150px"
    tandaBot.style.transform = "rotate(0deg)"
})



