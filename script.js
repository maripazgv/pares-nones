//
document.getElementById("no").onclick=function(){
    document.getElementById("quieresjugar").style.display="none";
    document.getElementById("nojuego").style.display="block";
}
//a pantala elegir pares o nones
document.getElementById("si").onclick=function(){
    document.getElementById("sijuego").style.display="none";
    document.getElementById("paroimpar").style.display="block";
    document.getElementById("quieresjugar").style.display="none";
}

document.getElementById("par").onclick=function(){
    document.getElementById("eligenum").style.display="block";
    document.getElementById("paroimpar").style.display="none";
}
document.getElementById("impar").onclick=function(){
    document.getElementById("eligenum").style.display="block";
    document.getElementById("paroimpar").style.display="none";
}
document.getElementById("jugar").onclick=function(){
   
    document.getElementById("eligemaquina").style.display="block";
    window.setTimeout(resultado,2000);
}
function resultado(){
    document.getElementById("resultado").style.display="block";
}
document.getElementById("botonresul").onclick=function(){
    document.getElementById("total").style.display="block";
    document.getElementById("eligenum").style.display="none";
    document.getElementById("eligemaquina").style.display="none";
    document.getElementById("resultado").style.display="none";
}
document.getElementById("volver").onclick=function(){
    document.getElementById("paroimpar").style.display="block";
    document.getElementById("total").style.display="none";
}

//aqui empieza el código del juego
