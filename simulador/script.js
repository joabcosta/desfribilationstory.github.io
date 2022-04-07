let ledStatusEnergia = document.getElementById('nivelDeCarga');
let loadCharge = document.getElementById('loadCharge');
let botaoLigar = document.getElementById('ligar');
let img = document.querySelector('#upHeart');

let ponteiroDeCarga = 60 ;
let statusEnergiaDoSistema = false;
let statusCargaEletrica = false;

clock(0);

function ligar(){
    if (statusEnergiaDoSistema === false){
        
        console.log('ligou');
        botaoLigar.style.backgroundColor = 'rgb(95, 255, 255)';
        //for(let i = 0; i<480;i++) setTimeout(()=>{i<=240? clock(i) : clock(480-i);},3000);
        let i = 0;
        //simular o estado de checagem de aparelho e acionamento de energia geral
        let timer = setInterval(()=>{
            i++;
            i<=240? clock(i) : clock(480-i);
            480-i == 0 ? clearInterval(timer):'';
        },2);
        setTimeout(()=>{
            acenderIndicadorDeEnergia();
            statusEnergiaDoSistema=true;
            loadCharge.innerHTML = 'Carregar.'
        },1750);
    }else{
        console.log('desligou');
        botaoLigar.style.backgroundColor = 'rgba(185, 179, 183, 0.521)';
        acenderIndicadorDeEnergia();
        statusEnergiaDoSistema=false;
        loadCharge.style.backgroundColor = 'rgb(29, 28, 28)';
        loadCharge.innerHTML = 'Sem energia.'
        statusCargaEletrica = false;
        let i = ponteiroDeCarga;
        let timer = setInterval(()=>{
            i--;
            i<=0?clearInterval(timer):clock(i) ;
        },10);
    }
}
function acenderIndicadorDeEnergia(){
    if (statusEnergiaDoSistema === false){
        console.log (statusEnergiaDoSistema);
        ledStatusEnergia.style.backgroundColor='rgb(49, 250, 23)';
        ledStatusEnergia.style.boxShadow = '0 0 20px rgb(0, 255, 149),0 0 20px rgb(0, 255, 149)';
    }else{
        ledStatusEnergia.style.backgroundColor='rgba(32, 32, 32, 0.37)';
        ledStatusEnergia.style.boxShadow = '';
    }
}
//------------------função para simular o carregamento de energia para a operação de choque elétrico
function loadcharge(){
    if(statusCargaEletrica === false && statusEnergiaDoSistema===true){
        statusCargaEletrica = true;
        let i = 0;
        let timer = setInterval(()=>{
            i++;
            i<=60? clock(i) : clearInterval(timer);
            
        },30);
        setTimeout(()=>{
            loadCharge.style.backgroundColor = 'red';
            loadCharge.innerHTML = 'Carregado - Afastar'
        },1750);
        
    } else if(statusCargaEletrica === true && statusEnergiaDoSistema===true) {
        console.log('verificando ativação');
        loadCharge.style.backgroundColor = 'rgb(29, 28, 28)';
        loadCharge.innerHTML = 'Carregar.'
        statusCargaEletrica = false;
        let i = ponteiroDeCarga;
        let timer = setInterval(()=>{
            i--;
            i<=0?clearInterval(timer):clock(i) ;
        },10);
    }
}

function aplyCharge(){
    if(statusCargaEletrica === true && statusEnergiaDoSistema===true){
        console.log('carga aplicada - checar batimento');
        loadcharge();
        if(ponteiroDeCarga>=200){
            loadCharge.innerHTML = 'Acertou na veia!'
            img.setAttribute('src','image/h-3.gif');
            statusCargaEletrica = false;
            statusEnergiaDoSistema = true;
            ligar();
        }else{
            loadCharge.innerHTML = 'Coloca + carga!'
            img.setAttribute('src','image/h-2.gif');
            setTimeout(()=>{
                img.setAttribute('src','image/h-1.jpg');
            },5000);
        }
        
    }else{
        console.log('sem carga');
    }
}
/*---------------- lógica II : verificação da direção--------------------------------------------------
@author: engenharia.joab@gmail.com 
@recursos principais: canvas e documentação canvas 
correções a serem feitas: mover para outro arquivo js : verificar limitações es dos navegadores antes! 
-------------------------------------------------------------------------------------------------------*/
let isDrawing = false;
let x = 0;
let y = 0;

const myPics = document.getElementById('canva-identifyMouseDirection');
const context = myPics.getContext('2d');
myPics.addEventListener('mousedown', e =>{
    if(statusCargaEletrica === true && statusEnergiaDoSistema===true){
        x = e.offsetX;
        y = e.offsetY;
        isDrawing = true;
        console.log(' mouse down');
    }
});

myPics.addEventListener('mousemove', e=>{
    if(isDrawing===true){
        if(statusCargaEletrica === true && statusEnergiaDoSistema===true){
            verificarDirecao(x,y,e.offsetX,e.offsetY); 
            x = e.offsetX;
            y = e.offsetY;
        }
    }
});

window.addEventListener('mouseup', e => {
    if(isDrawing===true){
        x = 0;
        y = 0;
        isDrawing = false;
        console.log(' mouse up');
    }
});
function verificarDirecao( x1, y1, x2, y2){
    if(x2>x1 && y2>=y1){
        console.log('aumentar potencia para direita');
        ponteiroDeCarga = parseInt(ponteiroDeCarga + x2/50);
        ponteiroDeCarga >= 240 ? ponteiroDeCarga=240 : ponteiroDeCarga = ponteiroDeCarga;
        console.log(ponteiroDeCarga);
        clock(ponteiroDeCarga);
    }else if(x2<x1 && y2>=y1) {
        console.log('aumentar potencia para esquerda');
        ponteiroDeCarga = ponteiroDeCarga - x2/20;
        ponteiroDeCarga < 0 ? ponteiroDeCarga=0 : ponteiroDeCarga = ponteiroDeCarga;
        clock(ponteiroDeCarga);
        console.log(ponteiroDeCarga);
    }else{
        console.log('nada');
    }
}

/*---------------- lógica III : Desenha o gyroscope--------------------------------------------------
@author: engenharia.joab@gmail.com 
@recursos principais: canvas e documentação canvas : tutorial "make a clicktimmer" da documentação
correções a serem feitas: mover para outro arquivo js : verificar limitações es dos navegadores antes! 
----------------------------------------------------------------------------------------------------------*/

function clock(ponteiroDeCarga){
    var ctx = document.getElementById('canva-gyroscope').getContext('2d');
    ctx.save();
    ctx.clearRect(0,0,150,150); //limpa
    ctx.translate(75,75);
    ctx.scale(0.4,0.4);
    ctx.rotate((150)*(Math.PI/180)); // rotate é em radianos. equivale a 180 graus
    ctx.strokeStyle = "black";
    ctx.fillStyle = "white";
    ctx.lineWidth = 8;
    ctx.lineCap = "round";
    ctx.save();
    // marks: 1
    for (var i=0;i<9;i++){
        ctx.beginPath();        // seta o início do desenho
        ctx.moveTo(110,0);      //move a ponta da caneta para o ponto desejado
        ctx.lineTo(140,0);      //seta para onde a ponta da caneta irá
        ctx.stroke();        //efetua o risco/desenho definido por moveTo e lineTo
        ctx.rotate((30)*Math.PI/180);  // configura um angulo de rotação, a cada iteração varia este angulo - /180 converte para graus
      }
    ctx.restore();
    // marks: 2
    ctx.save();
    ctx.lineWidth = 5;
    for (i=0;i<41;i++){
        if (i%5!=0) {
          ctx.beginPath();
          ctx.moveTo(117,0);
          ctx.lineTo(120,0);
          ctx.stroke();
        }
        ctx.rotate((6)*Math.PI/180);
      }
    ctx.restore();
    ctx.fillStyle = "black";
    // level potenciometro 
    ctx.save();
    ctx.rotate(ponteiroDeCarga * Math.PI/180);
    ctx.strokeStyle = "#D40000";
    ctx.fillStyle = "#D40000";
    ctx.lineWidth =2;
    ctx.beginPath();
    ctx.moveTo(-30,0);
    ctx.lineTo(120,0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0,0,10,0,Math.PI*2,true);
    ctx.fill();
    ctx.restore();
    //----define borda externa
    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.strokeStyle = '#325FA2';
    ctx.arc(0,0,142,0,Math.PI*2,true);
    ctx.stroke();
  
    ctx.restore();
  }

  //init()
  
  function chargeLevel(){
    var ctx = document.getElementById('canva-identifyMouseDirection').getContext('2d');
    ctx.save();
    ctx.beginPath();
    ctx.arc(169,75, 69, 0, 361*Math.PI/180, true); // Círculo exterior
    ctx.moveTo(0,0);
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.save();
    ctx.globalAlpha = 0.5;
    for(let i = 1; i<10;i++){
        ctx.beginPath();
        ctx.arc(169,75,i*7.1,0,361*Math.PI/180,true);
        ctx.fill();
    }
    var radgrad = ctx.createRadialGradient(160,73,10,0,-100,360);
    radgrad.addColorStop(0, 'rgba(141, 139, 139, 0.815)');
    radgrad.addColorStop(0.5, '#060707');
    ctx.fillStyle = radgrad;
    ctx.fill();

    for(let i = 1; i<10;i++){
        ctx.beginPath();
        ctx.arc(171,72,i*7.2,0,361*Math.PI/180,true);
        ctx.stroke();
    }
    ctx.save();

  }

  chargeLevel();


  document.querySelector('body').addEventListener('keydown', function(event) {
	var tecla = event.keyCode;
	if(tecla == 65 || tecla == 76 ) { //teclas a ou l
        aplyCharge();
	} 
});