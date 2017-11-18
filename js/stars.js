var s0 = document.getElementById('s0');

var s1 = document.getElementById('s1');
var s2 = document.getElementById('s2');
var s3 = document.getElementById('s3');
var s4 = document.getElementById('s4');
var s5 = document.getElementById('s5');

var starmax = 5;
var ratingStar = 0;
var color0 = 'grey';
var color1 = 'red';
var color2 = 'green';
var color3 = 'yellow';
var color4 = 'blue';
var colorx = color4;
/*var imgStarEmpty = '&#E83A;'
var imgStarHover = '$#E838;'
var imgStarClick = '$#E838;*/

s1.addEventListener("click", function () {starClick(1);});
s2.addEventListener("click", function () {starClick(2);});
s3.addEventListener("click", function () {starClick(3);});
s4.addEventListener("click", function () {starClick(4);});
s5.addEventListener("click", function () {starClick(5);});

s0.addEventListener("mouseout", function () {if (ratingStar === 0) starReset(5);}); 

s1.addEventListener("mouseover", function () {starMouseover(1);});
s2.addEventListener("mouseover", function () {starMouseover(2);});
s3.addEventListener("mouseover", function () {starMouseover(3);});
s4.addEventListener("mouseover", function () {starMouseover(4);});
s5.addEventListener("mouseover", function () {starMouseover(5);});

function starReset(nr) {
	'use strict';
	ratingStar = 0;

	for (var i = 1; i <= nr; i++) {
		$('#s' + i).html('star_border');
		$('#s' + i).css({'filter':'brightness(1)',
						 'color' : color0,
						 'transition' : 'all .1s ease-in-out'});
	}
}

function starMouseover(nr) {
	'use strict';
	if (ratingStar === 0) {
		for (var j = 1; j <= nr; j++) {
			$('#s' + j).css('color',colorx);
			}
		for (var i = nr + 1; i <= starmax; i++) {
			$('#s' + i).css({ 'color' : color0,
							  'filter' : 'brightness(1)',
							  'transition' : 'all .2s ease-in-out'});
			}
	}
}

function starClick(nr) {
	'use strict';
	starReset(starmax);
	
	for (var i = 1; i <= nr; i++) {
		$('#s' + i).html('star');
		$('#s' + i).css({'filter':'brightness(1)',
						 'color' : colorx,
						 'transition': 'all .3s ease-in-out'});
	}
	ratingStar = nr;
	//console.log(ratingStar);
}
