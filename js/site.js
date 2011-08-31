$(function(){
	// start the bouncing
	start();
	// title flashing
	title();
	
	$('#content img').hover(function(){
		zoom(this);
	}).mouseout(function(){
		out();
	}).jrumble({
		rangeX: 4,
		rangeY: 4,
		rangeRot: 1,
		rumbleSpeed: 25
	});
});


var upDownHeight = '50px';
var upDownSpeed = 550;
var sideWidth = '';
var sideSpeed = '';
var defaultTitle ='The Hipstelitists!!!!';

var odd = $('.odd');
var even = $('.even');

// hand rolled goodness
function start()
{
	// up down
	down(odd);
	up(even);
	
	setTimeout('zoom()', 1000);
}

function title()
{
	color = random_color('hex');
	$('#title').animate({
		color: color
	}, 500, '', function(){
		title();
	});
}

function down(el)
{
	$(el).animate({
		'margin-top': upDownHeight
	}, upDownSpeed, '', function()
	{	
		up(this);
	});
}

function up(el)
{
	$(el).animate({
		'margin-top': 0
	}, upDownSpeed, '', function()
	{	
		down(this);
	});
}

function random_color(format)
{
	var rint = Math.round(0xffffff * Math.random());
	switch(format)
	{
		case 'hex':
			return ('#0' + rint.toString(16)).replace(/^#0([0-9a-f]{6})$/i, '#$1');
			break;
  
		case 'rgb':
			return 'rgb(' + (rint >> 16) + ',' + (rint >> 8 & 255) + ',' + (rint & 255) + ')';
			break;
  
		default:
			return rint;
			break;
	}
}

function zoom(el)
{
	$('#title').text(el.title);
}

function out()
{
	$('#title').text(defaultTitle);
}