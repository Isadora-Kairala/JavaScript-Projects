function atualizarTempinho(){

let display = document.querySelector('.display');

let agora = new Date();

let horario = corrigindoHorariozinho(agora.getHours()) + ':' + 
corrigindoHorariozinho(agora.getMinutes()) + ':' + corrigindoHorariozinho(agora.getSeconds());

display.textContent = horario;
}

function corrigindoHorariozinho(numero){
    if(numero < 10){
        numero = '0' + numero;
    }
    return numero;
}
atualizarTempinho(); /*começar o script ja chamando a funcao*/
setInterval(atualizarTempinho, 1000);

console.log(horario)