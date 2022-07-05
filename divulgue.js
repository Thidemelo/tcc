function send() {

var email = document.getElementById("email");
var projeto = document.getElementById("projeto");
var endereço = document.getElementById("endereço");
var bairro = document.getElementById("bairro");





if(email.value == ""){
	alert("Nome não informado");
	nome.focus();
	return;
}

if(projeto.value == ""){
	alert("Nome não informado");
	nome.focus();
	return;
}

if(endereço.value == ""){
	alert("Nome não informado");
	nome.focus();
	return;
}

if(bairro.value == ""){
	alert("Nome não informado");
	nome.focus();
	return;
}

alert("Fomulário enviado!");
}