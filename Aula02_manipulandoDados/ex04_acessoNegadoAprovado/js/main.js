let acessarSistema = confirm("Para acessar o Sistema pressione OK");

if(acessarSistema){
    window.location.href = "acessoPermitido.html"
}else{
    window.location.href = "acessoNegado.html"
}