var cuadro = document.getElementById("areaDibujo");
var papel = cuadro.getContext("2d");
var boton = document.getElementById("b_enviar");
var alto = document.getElementById("alto_canvas");
var ancho = document.getElementById("ancho_canvas");
var c_canvas = document.getElementById("color_canvas");
var color;
var x, y, xf, yf;
var estado;


boton.addEventListener("click", dibujarCanvas);
cuadro.addEventListener("mousedown", presionarMouse);
cuadro.addEventListener("mousemove", dibujarMouse);
cuadro.addEventListener("mouseup", levantarMouse);


function dibujarCanvas(evento)
{
  cuadro.width = parseInt(ancho.value);
  cuadro.height = parseInt(alto.value);
  var w = cuadro.width;
  var h = cuadro.height;
  color = c_canvas.value;
  console.log(color);
  dibujarLinea(color, 1, 1, w-1, 1, papel);
  dibujarLinea(color, 1, 1, 1, h-1, papel);
  dibujarLinea(color, w-1, 1, w-1, h-1, papel);
  dibujarLinea(color, 1, h-1, w-1, h-1, papel);

}

function presionarMouse(evento)
{
  estado = true;
  x = evento.layerX;
  y = evento.layerY;
  dibujarLinea(color, x, y, x+1, y+1, papel);
}

function dibujarMouse(evento)
{
  if(estado == true)
  {
    xf = evento.layerX;
    yf = evento.layerY;
    dibujarLinea(color, x, y, xf, yf, papel);
    x = xf;
    y = yf;
  }
}

function levantarMouse(evento)
{
  estado = false;
}

function dibujarLinea(color_linea, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 2;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
