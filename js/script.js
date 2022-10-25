//Declaração de Variáveis
var altura = 0
var largura = 0
var tempo = 50
var vida = 3
var tempoCriaMosca = 0
//Fim Declaração Variáveis
//Verifica Nível e seta valores
var nivel =  window.location.search
nivel = nivel.replace('?', '')
if(nivel == 'normal'){
    tempoCriaMosca = 1500
}else if(nivel== 'medio'){
    tempoCriaMosca = 1000
}else if(nivel == 'chucknorris' ){
    tempoCriaMosca = 750
}


function iniciarJogo(){
    var nivel =  document.getElementById('nivel').value
    if(nivel == ""){
        alert('Selecione um nível para iniciar o jogo!')
        return false
    }
    //Carrega Página do Jogo  - jogo.html, passando o nível como parâmetro
    window.location.href = "jogo.html?" + nivel

}

//Função para delimitar o tamanho da tela
function ajustaTamanhoTelaJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}
ajustaTamanhoTelaJogo()

//calcular nosso tempo, decrementar o mesmo, escrever no HTML
var cronometro = setInterval(function(){
    //Decrementando o valor da variável
    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosca)       
        window.location.href = "vitoria.html"
        
    }else {
        document.getElementById('cronometro').innerHTML = tempo
    } 
}, 1000)

function posicaoRandomica(){

    //Remove o mosquito se ele existir
    if(document.getElementById('mosq')){
        document.getElementById('mosq').remove()
        
        //Verifica a quantidade de vidas e remove 1 vida 
        if(vida <= 0){
            window.location.href = 'gameOver.html'
        }else{
            document.getElementById('v' + vida).src = 'imagens/cora_vazio.png'
            vida -= 1
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90
    //Operador Ternário ? - Então  : Senão
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY 
    
    var mosquito = document.createElement('img')
    mosquito.id = 'mosq'
    mosquito.src = 'imagens/mosq.png'
    mosquito.className = tamanhoMosquito() + ' ' + lado()
    mosquito.style .left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.onclick = function(){
        this.remove()
    }
    
    document.body.appendChild(mosquito)
}

function tamanhoMosquito(){
    var aleatorio = Math.floor(Math.random() * 3)
    switch(aleatorio){
        case 0:
            return 'mosq1'
        case 1: 
            return 'mosq2'
        case 2:
            return 'mosq3'    
    }
}

function lado(){
    var lado = Math.floor(Math.random() * 2)
    lado = lado == 0 ? 'lado1' : 'lado2'   
    return lado

}


