
var scal = 20;

var xrange = [-1, 20];
var yrange = [-1, 14];


function xscale(x) {
	return  map(x,  xrange[0],  xrange[1], 0,  width);
}

function yscale(y) {
	return  map(y,  yrange[0],  yrange[1],  height, 0);
}

function xinvscale(x) {
	return  map(x, 0,  width,  xrange[0],  xrange[1]);
}

function yinvscale(y) {
	return  map(y,  height, 0,  yrange[0],  yrange[1]);
}

function draw_axes() {
	 stroke(0, 0, 0);
	 strokeWeight(1);

	// x axis
	//  line(xscale( xrange[0]), yscale(0), xscale( xrange[1]), yscale(0));
	 line(0, yscale(0),  width, yscale(0));
	// ticks
	for (var i = Math.floor(xrange[0]); i <  xrange[1]; i++) {
		 line(xscale(i), yscale(0) - 0.1 * scal, xscale(i), yscale(0) + 0.1 * scal);
	}

	// y axis
	//  line(xscale(0), yscale(yrange[0]), xscale(0), yscale(yrange[1]));
	 line(xscale(0), 0, xscale(0),  height);
	// ticks
	for (var i = Math.floor(yrange[0]); i <  yrange[1]; i++) {
		 line(xscale(0) - 0.1 * scal, yscale(i), xscale(0) + 0.1 * scal, yscale(i));
	}
}
