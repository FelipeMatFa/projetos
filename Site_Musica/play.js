const clickUsuario = document.querySelector('#nome_usuario');
const nome_usuario = document.getElementById('nome_usuario');
const imagensClicaveis = document.querySelectorAll('#listeneds-sounds');
const video = document.querySelector("#video1");
const inicio = document.getElementById('pagina');

video.addEventListener("play", function(a){
  video.style.backgroundImage = 'url(videos/neverGonna.jpg)';
});

clickUsuario.addEventListener('click', function(e){
  e.preventDefault()
  window.location.href = "login.html"
});

inicio.addEventListener('click', function(t){
  t.preventDefault()
  window.location.href = "index.html"
});

if(localStorage.getItem('nomeUsuario')){
  nome_usuario.textContent = localStorage.getItem('nomeUsuario');
}
else if(localStorage.getItem('nomeUsuario') === null){
  nome_usuario.textContent = "Criar conta"
}

imagensClicaveis.forEach(function(imagem) {
  imagem.addEventListener('click', function() {
    window.location.href = 'play.html';
  });
});