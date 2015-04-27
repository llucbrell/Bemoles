/////////////////////////////////////////////////////////////
//OCRinit
//
//inicialización del OCR para la identificación de notas
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


//lugar is the div id and i is an index.. the same functionality as we view on midiBemoles 
//in lib/cargaBemoles.js
function pngBemoles(file, lugar, i){
window.onload= function(){
var id= "OCR"+lugar;

console.log("lugar"+lugar);
var mDiv= document.getElementById(lugar);




nuevoPNG(id, mDiv, file, i);          
};


}



function nuevoPNG(id, mDiv, file, i){

mDiv.innerHTML="<canvas id=\""+id+"\"  class= \"ocr\" onclick=\"clickeoEnPNG(event, this.id,"+i+")\"></canvas>";

var canvas=document.getElementById(id);
var ctx = canvas.getContext('2d');
var img = new Image();
img.src = file;


img.onload = function() {
  ctx.drawImage(img, 0, 0);
  img.style.display = 'none';
};

canvas.width= img.width;
canvas.height= img.height;



}



