function login(){
	var email = document.getElementById("email");
	var senha = document.getElementById("senha");
	var sen0 = document.getElementById("sen0");



if(email.value == ""){
	alert("E-mail nao informado");
	email.focus();
	return;
}

if(senha.value == ""){
	alert("Senha nao informada");
	senha.focus();
	return;
}



if(senha.value != sen0.value) {
	alert("Senhas nao coincidem");
	return;
  

  }



window.location.href = "logado.html";
}