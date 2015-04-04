//GENERADOR DE COMPASES POR BOTÓN/ stave button creator
function nuevaPartitura(id, mDiv){
    mDiv.innerHTML="<div id=\""+id+"\" class= \"partituras\" onclick=\"clickeoEnPartitura(event, this.id)\"></div>";
}


function nuevoCanvas(numerocompas, id){
//	var partitura= document.getElementById(id);
 //partitura.innerHTML= partitura+ "<canvas width=\"38\" height=\"150\" id=\"c" +numerocompas +"\" class=\"compas\" ></canvas>";
   $("#"+id).append("<canvas width=\"38\" height=\"150\" id=\"c" +numerocompas +"\" class=\"compas\" ></canvas>");   
   //retiraremos  el height y width para darle formato desde fuera
    
}
  
function nuevoCompas(id){
	 var idcompas= "c"+id;
    
   

  var canvas = document.getElementById(idcompas);
  var renderer = new Vex.Flow.Renderer(canvas, Vex.Flow.Renderer.Backends.CANVAS);

  var ctx = renderer.getContext();
  var stave = new Vex.Flow.Stave(valinivexstave,valaltvexstave, valfinvexstave);
  stave.setContext(ctx).draw();



//creamos el array como almacén de las notas del compás en cuestión


//sumamos para llevar la cuenta de los compases



}
