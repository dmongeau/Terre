// JavaScript Document

var socket;

$(function() {
	
	
	var currentZoom = 10;
	
	var map = new google.maps.Map(document.getElementById("map"), {
		center: new google.maps.LatLng(45.5,-73.6),
		zoom: currentZoom,
		maxZoom: currentZoom,
		minZoom: currentZoom,
		mapTypeId : google.maps.MapTypeId.SATELLITE,
		overviewMapControl: false,
		streetViewControl: false,
		zoomControl : false,
		rotateControl : false,
		panControl : false,
	});
  
	var overlay = new DrawOverlay(map,{
		'brushes' : {
			'flower' : [
				'flowers/1.gif',
				'flowers/2.gif',
				'flowers/3.gif',
				'flowers/4.gif',
				'flowers/5.gif',
				'flowers/6.gif',
				'flowers/7.gif',
				'flowers/8.gif',
				'flowers/9.gif',
				'flowers/10.gif',
				'flowers/11.gif',
				'flowers/12.gif'
			]
		}
	}); 
	
	
	
	
});