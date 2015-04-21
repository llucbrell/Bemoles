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