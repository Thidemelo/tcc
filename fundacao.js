function mostrarImagem(img){
	const imagemGrande=document.getElementById("imagemGrande");
	imagemGrande.src=img.src;
	// if(imagemGrande.src == '') {
	// 	imagemGrande.src == './10.jpg'
	// }
	console.log()
	imagemGrande.parentElement.style.display="block";
}