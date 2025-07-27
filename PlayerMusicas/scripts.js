let musicas = [
    {titulo: 'Gnarly', artista: 'KATSEYE', src:'musicas/KATSEYE 캣츠아이.mp3', img: 'imagens/gnarly.jpg'},

    {titulo: 'Strategy', artista: 'TWICE', src:'musicas/Strategy [nmbiBVPe5bY].mp3', img: 'imagens/strategy.jpg'},

    {titulo: 'Tail', artista: 'SUNMI', src:'musicas/SUNMI TAIL .mp3', img: 'imagens/tail.jpg'}
    
];




let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

reenderizarMusica(indexMusica); // chamada da função ao iniciar para carregar a primeira música corretamente

duracaoMusica.textContent = segundosparaMinutos(Math.floor(musica.duration));// deveria carregar a duração do audio 
// porém adicionei o reenderizarmusica antes para nao dar problema


//Eventos!!
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click',() => {
    indexMusica--; 
    reenderizarMusica(indexMusica);

});

document.querySelector('.proxima').addEventListener('click',() => {
   indexMusica++
   reenderizarMusica(indexMusica);
});



// funções!!!
function reenderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
    nomeMusica.textContent = musicas[index].titulo;
    nomeArtista.textContent = musicas[index].artista;
    imagem.src = musicas[index].img;
      duracaoMusica.textContent = segundosparaMinutos(Math.floor(musica.duration));
    });

}

function tocarMusica() {
    musica.play();
    
    document.querySelector('.botao-pause').style.display = 'block'; 
    document.querySelector('.botao-play').style.display = 'none';
}
function pausarMusica() {
    musica.pause();
      
    document.querySelector('.botao-pause').style.display = 'none'; 
    document.querySelector('.botao-play').style.display = 'block';

}

function atualizarBarra() {
    let barra = document.querySelector('progress');
    barra.style.width = (musica.currentTime / musica.duration) * 100 + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosparaMinutos(Math.floor(musica.currentTime));

}

function segundosparaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos +':'+campoSegundos;
}

