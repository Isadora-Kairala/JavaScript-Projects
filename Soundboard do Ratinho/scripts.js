let audios = [
{caminho: 'audios/cavalo-ratinho.mp3', legenda: 'Cavalo'},    
{caminho: 'audios/grito.mp3', legenda: 'GRITO'},
{caminho: 'audios/jesus.mp3', legenda: 'Jesus'},
{caminho: 'audios/nao-e-o-pai.mp3', legenda: 'Não é o pai'},
{caminho: 'audios/pare.mp3', legenda: 'PARE'},
{caminho: 'audios/rapaiz.mp3', legenda: 'Rapaiz'},
{caminho: 'audios/ratinhoo.mp3', legenda: 'Ratinho'},
{caminho: 'audios/uepa.mp3', legenda: 'UEPA'},
{caminho: 'audios/vixi-ratinho.mp3', legenda: 'Vishi'},
];

let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p');

for(let i=0; i<9; i++){
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
}

let audioTag = document.querySelector('audio');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
     let som = audios[botao.getAttribute('data-item')];
     audioTag.setAttribute('src', som.caminho);
     
     audioTag.addEventListener('loadeddata', () => {
          audioTag.play();
     });
     
    });
});