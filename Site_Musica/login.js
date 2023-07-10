const form = document.getElementById('Login');
const nome = document.getElementById('nome');
const senha = document.getElementById('senha');

form.addEventListener('submit', function(e){
    e.preventDefault()
    if(nome.value === localStorage.getItem('nomeUsuario') && senha.value === localStorage.getItem('senhaUsuario')){
        window.location.href = "index.html"
    }
    else{
        alert("Usuario ou senha não correspondem")
    }
});