let video = document.querySelector("#video01")  //chama a tag do video

function skip_back(){
    video.currentTime -= 10   /// Importante notar que para as 4 proximas funções é necessário usar o += ou -= para que a variavel receba p valor da soma
}
function skip_forward(){
    video.currentTime += 10
}
function decrease(){
    video.playbackRate -= 0.5
    currentVel(-0.5)
}
function increase(){
    video.playbackRate += 0.5
    currentVel(0.5)
}

function play(){                                                        

    let playBtn = document.querySelector("#play")

    if(playBtn.getAttribute("src") === "./assets/btns/play-circle.png"){ //Se o icone/btn "play" for clicado...
    video.play()                                                         //(aciona o play no video)
        playBtn.setAttribute("src", "./assets/btns/pause-circle.png")    //...troca para icone/btn de pause.        
    } else{
        playBtn.setAttribute("src", "./assets/btns/play-circle.png")     //caso contrário, vice-versa        
    video.pause()                                                        //(aciona o pause no video)
    }    

}
function stop(){
    video.pause()
    video.currentTime = 0
}

let velocidade = 1                  // velocidade padrão inicial

function currentVel(e){             //mostra na barra de conrtole qual a velocidade atual
    let vel = document.querySelector("#vel")  // elemento html referente ao span que mostra a velocidade
    velocidade = velocidade + e               // adiciona à velocidade inicial o valor de 0.5 ou -0.5 dependendo se o clique foi para acelerar ou diminuir a velocidade
    vel.innerHTML = velocidade + "x"          // coloca o valor da velocidade no element html   
    console.log(velocidade)
}


let videoBg = document.querySelector("#videoBg") // video de fundo mais lento
videoBg.playbackRate = 0.6


