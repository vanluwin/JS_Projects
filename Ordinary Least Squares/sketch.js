var data = [];
var m = 1;
var b = 0;
var xmean;
var ymean;

function setup(){
  var canvas = createCanvas(666,500);
  canvas.parent('main');
  background(114, 112, 112);
}

function escreverTexto(){
  removeElements();
  var reta = createP("Reta de regreção: "+m+"*x + "+b);
  reta.parent('reg_line');
  var mediaX,mediaY;
  mediaX = createP("Media em x: "+xmean);
  mediaX.parent('reg_line');
  mediaY = createP("Media em y: "+ymean);
  mediaY.parent('reg_line');
}

function mousePressed(){
  var x = map(mouseX, 0, width, 0, 1);
  var y = map(mouseY, 0, height, 1, 0);
  var pontos = createVector(x,y);
  data.push(pontos);
}

function mmq(){
  var xsum = 0;
  var ysum = 0;
  for(var i=0; i < data.length; i++){
    xsum += data[i].x;
    ysum += data[i].y;
  }
   xmean = xsum / data.length;
   ymean = ysum / data.length;

  var num = 0;
  var den = 0;
  for (var i = 0; i < data.length; i++) {
    num += (data[i].x - xmean)*(data[i].y - ymean)
    den += pow((data[i].x - xmean), 2);
  }

  m = num / den;
  b = ymean - m * xmean;
}

function Linha(){
  var x1 = 0;
  var y1 = m * x1 +b;
  var x2 = 1;
  var y2 = m * x2 +b;

  x1 = map(x1, 0, 1, 0, width);
  y1 = map(y1, 0, 1, height, 0);
  x2 = map(x2, 0, 1, 0, width);
  y2 = map(y2, 0, 1, height, 0);

  stroke(255,100,10);
  strokeWeight(2);
  line(x1,y1,x2,y2);
  escreverTexto();
}


function draw(){
  background(114, 112, 112);
  draw_axes();
  for(var i=0; i < data.length; i++){
    var x = map(data[i].x, 0, 1, 0, width);
    var y = map(data[i].y, 0, 1, height, 0);
    fill(255);
    stroke(255);
    ellipse(x, y, 10, 10);
  }

  if(data.length > 1){
    mmq();
    Linha();
  }

}
