const clickUsuario = document.querySelector('#nome_usuario');
const barraSubmit = document.querySelector('#barra-p-submit');
const iframe = document.getElementById('video2');
const video = document.getElementById('video1');
const inicio = document.getElementById('pagina');

let lista = [0,1,2,3];
var i = 1;

clickUsuario.addEventListener('click', function(e){
    e.preventDefault()
    window.location.href = "login.html"
})
inicio.addEventListener('click', function(t){
    t.preventDefault()
    window.location.href = "index.html"
});

video.addEventListener('ended', function(u) {
    u.preventDefault()  
    if (i <= 2){
          video.src = `videos/Video${lista[i]}.mp3`;
          video.style.backgroundImage = `url(videos/imagem${lista[i]}.jpg)`;
          // `videos/imagem${lista[i]}.jpg`
          video.style.backgroundSize = 'cover';
          i+=1
      }
      else if (i === 3){
          video.src = `videos/Video${lista[i]}.mp3`;
          video.style.backgroundImage = `url(videos/imagem${lista[i]}.jpg)`;
          i=0
      }  
});

const nome_usuario = document.getElementById('nome_usuario');
const nome_bemV = document.getElementById('nome-usuario-bemV');

if(localStorage.getItem('nomeUsuario')){
    nome_usuario.textContent = localStorage.getItem('nomeUsuario');
    nome_bemV.textContent = localStorage.getItem('nomeUsuario');
}
else if(localStorage.getItem('nomeUsuario') === null){
    nome_usuario.textContent = "Criar conta"
}

// else if(localStorage.length === 0){



const imagensClicaveis = document.querySelectorAll('#listeneds-sounds');

imagensClicaveis.forEach(function(imagem) {
  imagem.addEventListener('click', function() {
    window.location.href = 'play.html';
  });
});

const imagensClicaveis2 = document.querySelectorAll('#playlists-list');

imagensClicaveis2.forEach(function(imagem2) {
  imagem2.addEventListener('click', function() {
    window.location.href = 'play.html';
  });
});

barraSubmit.addEventListener('submit', function(event) {
  event.preventDefault()
  console.log("Não escuto nada")
  const linkVideo = document.getElementById('link_content').value;
  iframe.src = linkVideo;
  document.getElementById('link_content').value = '';
})