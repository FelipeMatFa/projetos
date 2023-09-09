var primeiraSessao = document.querySelector(".primeira-sessao");

function Navbotao1(){
  primeiraSessao.style.backgroundImage = 'url(assets/Mundo_trabalho.png)';
}

function Navbotao2(){
  primeiraSessao.style.backgroundImage = 'url(assets/programa.jpg)';
}

function Navbotao3(){
  primeiraSessao.style.backgroundImage = 'url(assets/ms-dos.jpg)';
}

var btn = document.getElementById('btn-astro');
var astro = document.querySelector('.astro');

btn.addEventListener('click', function (event) {
  event.preventDefault();
  if (astro.style.display === 'none') {
    astro.style.display = 'flex';
    ciencia.style.display = 'none';
    mat.style.display = 'none';
  } else {
    astro.style.display = 'none';
  }
});

var btn = document.getElementById('btn-mat');
var mat = document.querySelector('.mat');


btn.addEventListener('click', function (event) {
  if (mat.style.display === 'none') {
    mat.style.display = 'flex';
    astro.style.display = 'none';
    ciencia.style.display = 'none';
  } else {
    mat.style.display = 'none';
  }
});

var btn = document.getElementById('btn-cienc');
var ciencia = document.querySelector('.ciencia');


btn.addEventListener('click', function (event) {
  if (ciencia.style.display === 'none') {
    ciencia.style.display = 'flex';
    astro.style.display = 'none';
    mat.style.display = 'none';
  } else {
    ciencia.style.display = 'none';
  }
});

const displays = [
  document.querySelector(".display1"),
  document.querySelector(".display2"),
  document.querySelector(".display3"),
  document.querySelector(".display4"),
  document.querySelector(".display5"),
  document.querySelector(".display6"),
  document.querySelector(".display7"),
  document.querySelector(".display8")
];

let i = 0;

function tela() {
  for (let j = 0; j < displays.length; j++) {
    if (i === j) {
      displays[j].style.display = 'flex';
    } else {
      displays[j].style.display = 'none';
    }
  }
}

function voltar(){
    if (i >= 1){
      i -= 1;
    }
    else{
      i = 7;
    }
    tela();
}

function proximo(){
    if (i <= 6){
      i += 1;
    }
    else{
      i = 0;
    }
    tela();
}