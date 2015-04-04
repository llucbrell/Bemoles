/////////////////////////////////////////////////////////////
//DRAWBEMOLES
//
//usado para dibujar los diferentes símobolos sobre unos
//canvas, a partir del almacén generado por el handler
//
/////////////////////////////////////////////////////////////

/*
Copiright (C) 2014 by Lucas Cerveró Beltrán_LLuc Brell_Hobbes
  <llucbrell@gmail.com>
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/







function drawBemoles(almacen, id){
     for(var i=0; i<almacen.length; i++){
      //pintaCompas(i, id);
      nuevoCanvas(i, id);
      nuevoCompas(i)  
      seleccionaAccion(almacen[i], i);  

    
   }
//recorremos el objeto y lo vamos dibujando
}


function seleccionaAccion(objeto, id){
        switch (objeto.nombre) {
      case 'nota':
        //pintamos
        
        pintaNota(objeto, id);
        break;
      case 'ritmo':
      //pintamos
      case 'clave':
      //pinta

       
        }

      
  }
///////////////////////////////////////////////7
//funcion dd pintado de notas
//
//PAINT NOTES
//
///////////////////////////////////////////////7
function pintaNota(nota, id){

var compasid= "c"+id;
var nota;
var figura; 
//var alteracionesChecked;
var direccionplica= nota.stem_direction;    
var nota2="g/4";
var indice= compasid.slice(1);
//var compasanterior= +indice -1;
var arraynotas=[];
var arrayduracionnotas=[];
var arraynotasalteradas=[];
var iniciogruponotas;
var fingruponotas=indice;
//selección del compás

var canvas = document.getElementById(compasid);
var renderer = new Vex.Flow.Renderer(canvas, Vex.Flow.Renderer.Backends.CANVAS);
var ctxsel = renderer.getContext();
var stavesel = new Vex.Flow.Stave(valinivexstave,valaltvexstave, valfinvexstave);
  //stavesel.setContext(ctxsel).draw(); Con esto  podemos redibujar el compás




//comprobamos la duración que tiene la nota y le damos valor

figura=nota.duration;
nota=nota.keys;


//si son corcheas o mas pequeñas
if (figura>=8){

//comprobamos que la nota simple no tenga alteraciones
   if(nota[0]==="#"){
     dibujaNotaAlterada(nota, figura, accidenteSelected, direccionplica);
      
}
else{
  dibujaNota(nota, figura, direccionplica);
}

//averiguamos si las notas vecinas son también barrables
 for (i=+indice+1; i<almacenb.length; ++i){
   if (almacenb[i]!=undefined && almacenb[i].nombre!="silencio" && almacenb[i].duration && almacenb[i].duration>=8){
      fingruponotas=i;
   }
   else{
    fingruponotas=i-1;
    break;
   }

 }


 for (i=+indice-1; i>0; --i){
   if (almacenb[i]!=undefined && almacenb[i].nombre!="silencio" && almacenb[i].duration && almacenb[i].duration>=8){
      iniciogruponotas=i;
   }
   else{
      iniciogruponotas=i+1;
    break;
   }

 }

 //bucle que almacena las keys de todas las notas del grupo en un array
//para que luego lo usemos para repintar las notas con las barras
   
   if(iniciogruponotas!= fingruponotas){
    for (i=iniciogruponotas, j=0; i<=fingruponotas; i++){
        arraynotas[j]=almacenb[i].keys;
        ++j;
     }
     //también funciona
    
     for (i=iniciogruponotas, j=0; i<=fingruponotas; i++){
        arrayduracionnotas[j]=almacenb[i].duration;
        ++j;
     }

     for (i=iniciogruponotas, j=0; i<=fingruponotas; i++){
        arraynotasalteradas[j]=almacenb[i].alteracion;
        ++j;
     }
   // alert(arraynotas +"****"+ arraynotasalteradas);
  dibujaGrupoNotas(iniciogruponotas,fingruponotas,arraynotas, arrayduracionnotas, arraynotasalteradas);
     }

}


//si es una nota mayor de corchea
else{
  //si está clicakdo el checbox de las alteraciones

//si está clicakdo el checbox de las alteraciones

  if(nota[0]==="#"){
      dibujaNotaAlterada(nota, figura, accidenteSelected, direccionplica);
    }
   else{ 
      dibujaNota(nota, figura, direccionplica);
//llamamos a la función de pintado de notas
    }
}




////////////////////////////////////////////////////////////////////




//no deja un buen formato al mezclar notas alteradas y notas sin alterar
//de momento lo dejo así, xq mientras sean pocas notas, las dibuja bien

 function dibujaGrupoNotas(iniciogruponotas,fingruponotas,arraynotas, arrayduracionnotas, arraynotasalteradas){
var i;
var notes=[];
var nota;
var resto=0;
var formato=76;
var aumento=38;
var aumentof=0;

//recorremos el grupo de notas
      for (i=0; i<arraynotas.length; i++){
//si tiene alteraciones lo comprobamos aquí--- implementar
//si tiene alteración añadimos la nota alterada al array

if(arraynotasalteradas[i]==="natural"){
 nota= new Vex.Flow.StaveNote({ keys:[arraynotas[i]] , stem_direction:direccionplica, duration: arrayduracionnotas[i] });
 notes.push(nota);
}
else{
  nota= new Vex.Flow.StaveNote({ keys: [arraynotas[i]], stem_direction: direccionplica, duration: arrayduracionnotas[i] }).addAccidental(0, new Vex.Flow.Accidental(arraynotasalteradas[i]));
notes.push(nota);
}

     
     }   


//alert(notes);
//usado para comprobar el almacenamiento de las notas;
var numeronotas=arraynotas.length;

//usamos los condicionales para dar formato al grupo de notas

if (numeronotas===2){
     //aumento=38;
     formato=76;
    }

if (numeronotas===3){
     //aumento=38;
     formato=112;
    }

if (numeronotas===4){
     //aumento=38;
     formato=150;
}

if (numeronotas===5){
    //aumento=38;
    formato=188;
}

if (numeronotas===6){
    //aumento=38;
    formato=226;
}

if (numeronotas===7){
    //aumento=38;
    formato=264;
}

if (numeronotas===8){
    //aumento=38;
    formato=302;
}

if (numeronotas===9){
    //aumento=38;
    formato=340;
}

if (numeronotas===10){
    //aumento=38;
    formato=378;
}

if (numeronotas===11){
    //aumento=38;
    formato=416;
}

if (numeronotas===12){
    //aumento=38;
    formato=454;
}

if (numeronotas===13){
    //aumento=38;
    formato=492;
}

if (numeronotas===14){
    //aumento=38;
    formato=530;
}

if (numeronotas===15){
    //aumento=38;
    formato=568;
}

if (numeronotas===16){
    //aumento=38;
    formato=606;
}

//pintamos el grupo de notas

    for (i=iniciogruponotas; i<=fingruponotas; j++, i++, resto=resto+aumento){
 //seleccionamos el compas

       var compasid= "c" + i;        
       var canvas = document.getElementById(compasid);
       var ctx = canvas.getContext('2d');
       ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
       nuevoCompas(compasid);


//var compasid2= "c"+ i;


       var renderer = new Vex.Flow.Renderer(canvas, Vex.Flow.Renderer.Backends.CANVAS);
       var ctxsel = renderer.getContext();
       var stavesel = new Vex.Flow.Stave(valinivexstave-resto,valaltvexstave, valfinvexstave);
  

  

  
 var voice = new Vex.Flow.Voice({
          num_beats: 4,
          beat_value: 4,
          resolution: Vex.Flow.RESOLUTION
          });

       


          voice.setMode(Vex.Flow.Voice.Mode.SOFT);//funciona con menos notas en el compás, no es estricto.
          voice.addTickables(notes);


//interfaz de pintado de plicas y barrado de corcheas etc, funciona con un mínimo de notas

         var beam = new Vex.Flow.Beam(notes);


  // Format and justify the notes to 500 pixels
        var formatter = new Vex.Flow.Formatter().
        joinVoices([voice]).format([voice], formato);

 // Render voice

        voice.draw(ctxsel, stavesel);

//renderizado, mostrado de plicas en 
       beam.setContext(ctxsel).draw();
       
}
}



//////////////////////////////////////////////////////////////////



function dibujaNota(nota, figura, direccionplica){


var notes = [  new Vex.Flow.StaveNote({ keys: [nota], stem_direction: direccionplica, duration: figura }),];

// Create a voice in 4/4 AQUÍ INTRODUCIMOS LA FUNCION DEL COMPAS..

//puede que funcione añadir voces para realizar los acordes de manera sencilla

  var voice = new Vex.Flow.Voice({
    num_beats: 1,
    beat_value: 4,
    resolution: Vex.Flow.RESOLUTION
  });

  // Add notes to voice
  voice.setMode(Vex.Flow.Voice.Mode.SOFT);//funciona con menos notas en el compás, no es estricto.
  voice.addTickables(notes);
  
//interfaz de pintado de plicas y barrado de corcheas etc, funciona con un mínimo de notas
//usaremos beam sólo con corcheas y otras
//var beam = new Vex.Flow.Beam(notes); 

  // Format and justify the notes to 500 pixels
  var formatter = new Vex.Flow.Formatter().
    joinVoices([voice]).format([voice], 300);

  // Render voice
 
 voice.draw(ctxsel, stavesel);

//renderizado, mostrado de plicas en 
// beam.setContext(ctx).draw();


}


/////////////////////////////////////////////////////////////////////7




//función que dibuja las notas alteradas de figuras mayores a la corchea
function dibujaNotaAlterada(nota, figura, accidenteSelected, direccionplica){

//controlamos el formato de  las notas alteradas

//Vexflow... ¿por qué dibujar las cosas siempre de la misma manera, si puedo pintar donde me de la gana? XD
if (accidenteSelected==="#")
{
stavesel = new Vex.Flow.Stave(valinivexstave-12,valaltvexstave, valfinvexstave);
 } 
if (accidenteSelected==="n")
{
  stavesel = new Vex.Flow.Stave(valinivexstave-10,valaltvexstave, valfinvexstave);
}
if (accidenteSelected==="b")
{
  stavesel = new Vex.Flow.Stave(valinivexstave-10,valaltvexstave, valfinvexstave);
 }

//el doble bemol se corta un poco, en un futuro lo resolveré ganando 
//un pixel en cada canvas
if (accidenteSelected==="bb")
{
  stavesel = new Vex.Flow.Stave(valinivexstave-16,valaltvexstave, valfinvexstave);
 }
if (accidenteSelected==="##")
{
  stavesel = new Vex.Flow.Stave(valinivexstave-15,valaltvexstave, valfinvexstave);
 }




var notaAccidental=nota;
//usado pensando que era necesario introducir la alteración en el key
//object, pero parece que no... Hay que testearlo también en otros 
//navegadores
//var notaAccidental= nota[0]+accidenteSelected+nota[1]+nota[2];

var notes = [  new Vex.Flow.StaveNote({ keys: [notaAccidental], stem_direction: direccionplica, duration: figura }).addAccidental(0, new Vex.Flow.Accidental(accidenteSelected)),];



// Create a voice in 4/4 AQUÍ INTRODUCIMOS LA FUNCION DEL COMPAS..

//puede que funcione añadir voces para realizar los acordes de manera sencilla

  var voice = new Vex.Flow.Voice({
    num_beats: 1,
    beat_value: 4,
    resolution: Vex.Flow.RESOLUTION
  });

  // Add notes to voice
  voice.setMode(Vex.Flow.Voice.Mode.SOFT);//funciona con menos notas en el compás, no es estricto.
  voice.addTickables(notes);


  
//interfaz de pintado de plicas y barrado de corcheas etc, funciona con un mínimo de notas
//usaremos beam sólo con corcheas y otras
//var beam = new Vex.Flow.Beam(notes); 



  // Format and justify the notes to 500 pixels
  var formatter = new Vex.Flow.Formatter().
    joinVoices([voice]).format([voice], 300);

  // Render voice
 
 voice.draw(ctxsel, stavesel);

//renderizado, mostrado de plicas en 
// beam.setContext(ctx).draw();




    }

/////////////////////////////////////////////////////////////////////////









}

