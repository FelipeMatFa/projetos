const form = document.getElementById('NovaConta');
const usuario = document.getElementById('usuario');
const senha = document.getElementById('senha1');
const confirmSenha = document.getElementById('senha2');


form.addEventListener('submit', function(e){
    e.preventDefault()
    if (usuario.value === window.localStorage.getItem('nomeUsuario')){
        alert("Não é possivel usar esse e-mail");
    }
    else if(senha.value === confirmSenha.value){
        window.localStorage.setItem('nomeUsuario', usuario.value);
        window.localStorage.setItem('senhaUsuario', senha.value);
        window.location.href = "login.html"
    }
    else{
        alert("Senhas não condizem")
    }
});