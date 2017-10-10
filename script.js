//
document.getElementById("no").onclick=function(){
    document.getElementById("quieresjugar").style.display="none";
    document.getElementById("nojuego").style.display="block";
}
//a pantala elegir pares o nones
document.getElementById("si").onclick=function(){
    document.getElementById("quieresjugar").style.display="none";
    document.getElementById("sijuego").style.display="block";
    
}
/////
document.getElementById("bienvenido").onclick=function(){
    document.getElementById("parOimpar").style.display="block";
    document.getElementById("sijuego").style.display="none";
    
    
}

document.getElementById("inicioJugada").onclick=function(){
    document.getElementById("parOimpar").style.display="none";
    document.getElementById("eligenum").style.display="block";
    
    
}

document.getElementById("jugar").onclick=function(){
   jugar();
    document.getElementById("eligenum").style.display="none";
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


//aqui empieza el código del juego
function jugar(){
 var par = document.getElementById('par');
var impar = document.getElementById('impar');
    if(par.checked){ 
        var jugador = par.value;
        var maquina = impar.value;
      
    }   
    if(impar.checked) {
        var jugador = impar.value;
        var maquina = par.value;
    }
    /*console.log(jugador);
    console.log(maquina);*/
    
    
var numeroElegido = document.getElementById('numero').value;
    console.log(numeroElegido);
  var numeroMaquina = Math.floor(Math.random()*11);
    document.getElementById("numeroMaquina").innerHTML= numeroMaquina;
    
  var suma =   Number(numeroElegido) + Number(numeroMaquina);      document.getElementById("totales").innerHTML= suma;
    
    if(suma%2===0){
       var  resultado = 'pares'; 
        console.log(resultado)
    }
     if(suma%2===1){
       var  resultado = 'nones';
         console.log(resultado)
    }
    if (resultado===jugador){
        document.getElementById('ganaJugador').style.display="block";
    }else{
       document.getElementById('ganaMaquina').style.display="block";
    }
  

}


  
    
    


