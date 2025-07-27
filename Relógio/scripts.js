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
atualizarTempinho(); /*começar o script ja chamando a funcao para quando atualizar a pagina*/  
setInterval(atualizarTempinho, 1000); /* 1000 mm são 1 segundo, ou seja, atualiza de 1 em 1 segundo*/

console.log(horario)