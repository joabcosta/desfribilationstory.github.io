let statusEnergiaPotenciometro = false;
let i = 0;

export function startRotation(){
    console.log('contando');
    cronon = setInterval(()=>{loop();},1000);
    
}

export function mousedown(event){
    console.log('aciona mouse down');
    startRotation();
    //dispara outra
}

export function mouseup(event){
    console.log('aciona mouse up');
    clearInterval(cronon);
}

export function loop(){
    console.log('no loop: ' + i);
    i++;
}

export function getStartPotenciometer(){
    if(statusEnergiaPotenciometro===false){
        statusEnergiaPotenciometro = true;
    } else{
        statusEnergiaPotenciometro = false;
    }
}