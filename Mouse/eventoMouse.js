var cuadro = document.getElementById("areaDibujo");
var papel = cuadro.getContext("2d");
var x, y, xf, yf;
var color = "red";
var ancho = cuadro.width;
var estado;

cuadro.addEventListener("mousedown", presionarMouse);
cuadro.addEventListener("mousemove", dibujarMouse);
cuadro.addEventListener("mouseup", levantarMouse);

dibujarLinea(color, 1, 1, 1, ancho-1, papel);
dibujarLinea(color, 1, ancho-1, ancho-1, ancho-1, papel);
dibujarLinea(color, 1, 1, ancho-1, 1, papel);
dibujarLinea(color, ancho-1, 1, ancho-1, ancho-1, papel);


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
    console.log(x +" " + y + " " + xf + " " + yf);
    dibujarLinea(color, x, y, xf, yf, papel);
    x = xf;
    y = yf;

  }
}

function levantarMouse(evento)
{
  estado = false;
  //x = evento.layerX;
  //y = evento.layerY;
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
