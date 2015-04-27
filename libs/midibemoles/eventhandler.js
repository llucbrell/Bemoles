/////////////////////////////////////////////////////////////
// EVENT HANDLER
//usado para construir un almacén de notas y luego dibujarlas
//
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




//recorremos el archivo en busca de eventos específicos

function almacenBemoles(midiFile) {
	var smallDelta=0;
	var bigDelta=0;
	var almaceneventos = [];
	var almacen=[];
	var obnota;
  var deltas= [];
	
	for (var i = 0; i < midiFile.tracks.length; i++) {
		for (var j=0; j<midiFile.tracks[i].length; j++){
			seleccionaEventos(midiFile.tracks[i][j]);
			
		}
		
	}
	


	

	function seleccionaEventos(evento) {
	//descartamos todos los eventos irrelevantes para la escritura
		switch (evento.type) {
			case 'meta':
				switch (evento.subtype) {
					case 'setTempo':
					//	beatsPerMinute = 60000000 / event.microsecondsPerBeat
				    
				}
				break;
			case 'channel':
				switch (evento.subtype) {
					case 'noteOn':
					    //console.log("almaceneventos");
					    almaceneventos.push(evento);
						break;
					case 'noteOff':
					    
						almaceneventos.push(evento);
						break;
					
				}

				break;
		}
	}





       function creaBemoles(almaceneventos){ 
        var deltaOff;
        var evento;
      //  console.log("creaBemoles");
        //console.log("delta "+ evento.deltaTime);
//console.log("almacen"+almaceneventos.deltaTime);
      
      for(var i=0; i<almaceneventos.length; i++){
        //console.log("creaBemoles");
        //var evento= almaceneventos[i];

        evento=almaceneventos[i];
        //console.log("delta "+ evento.deltaTime);

          
        
           
      
                switch(evento.subtype){                 
                  case 'noteOn':
                          
                          var notaon=almaceneventos[i].noteNumber;
                          deltaOff= buscaNoteOff(notaon, i);  //buscamos la nota correspondiente
                          

                          console.log("deltaOff"+deltaOff);
                          obnota= getObNota(almaceneventos[i], deltaOff); //conseguimos el objeto                                               
                          //almacen.push(obnota); //lo almacenamos                            
                          break;                        
                  case 'noteOff':
                        
                          
                          break;
                         






                }
                 




      }

   }    

        function buscaNoteOff(notaOn, indice){
        

           for(indice=indice+1; indice<almaceneventos.length; indice++){ 

                                if (almaceneventos[indice].subtype=="noteOff"){
                                      
                                           if(almaceneventos[indice].noteNumber== notaOn){
                                           addDelta(almaceneventos[indice].deltaTime);
                                           // console.log("EnviaD"+almaceneventos[indice].deltaTime);
                                           
                                           //bigDelta=almaceneventos[indice].deltaTime;
                                           //deltas.push(bigDelta);

                                           }
                     
                                          
                                           
                    
                                        return almaceneventos[indice].deltaTime;

                           }




          }
      }



    function addDelta(nuevodelta){
  
        deltas.push(nuevodelta);
      }       



    function getObNota(evento, deltaOff){
    	var delta= evento.deltaTime;
    	
    	var nota=getKeys(evento.noteNumber);
    	var alteracion;
    	var direccionplica=getPlica(evento.noteNumber);


    	//medida//figura
     	if(deltaOff==80){//redonda
           figura = 1;
    	}
        if(deltaOff==40){//blanca
           figura = 2;
        }
        if(deltaOff==20){//negra
           figura = 4;             
        }
        if(deltaOff==10){//corchea
           figura = 8; 
        }
        if(deltaOff==8){//semi
           figura = 16;
        }
        if(deltaOff==4){//fusa
           figura = 32;
        }
        if(deltaOff==2){//semif
          figura =  64;
        }
        if(deltaOff==1){//garrapatea
           figura = 128;
        }
   // 	console.log("fig"+ figura+"del"+delta+"big"+bigDelta);


        function getKeys(midinumber){
        var notatesitura=Math.floor(midinumber/12)+1;
        var notaname= midinumber-(12*(notatesitura-1));

//console.log("tesitura"+notaname);

        var arraynombres=["c","#","d","#","e","f","#","g","#","a","#","b"];
         //recorremos el array de notas hasta encontrar el nombre
        var retornable= arraynombres[notaname]+"/"+(notatesitura-2);//added -1 for a correct format in the canvas  
        if (arraynombres[notaname]=="#"){
        	//usar if else para cambiar a bemoles en función de los 
        	//metadatos introducidos en el midi... si la armadura es 
        	// con bemoles se usarán estos
          retornable= "#"+ arraynombres[notaname-1]+"/"+(notatesitura-2);


        	alteracion="#";
         
          console.log("retornable"+ retornable);
           return retornable;
        }
        else{alteracion="natural";}
          console.log("retornable"+ retornable);
        return retornable;
        }
function getPlica(midinumber){
        	var Bnote=58;
            if(midinumber<Bnote){return 1;}
            else{return -1;}
        }
        //keys//alturanota


   var object={nombre:"nota", keys:nota, alteracion:alteracion, duration:figura.toString(), stem_direction:direccionplica};
   almacen.push(object);
   //return object;
   //console.log("obnota "+obnota);

    }

//orden lógico de procesado del programa
creaBemoles(almaceneventos);
console.log("big"+bigDelta);
return almacen;
}


	