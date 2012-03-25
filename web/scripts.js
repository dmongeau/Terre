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
				'flowers/1.png',
				'flowers/2.png',
				'flowers/3.png',
				'flowers/4.png',
				'flowers/5.png',
				'flowers/6.png',
				'flowers/7.png',
				'flowers/8.png',
				'flowers/9.png',
				'flowers/10.png',
				'flowers/11.png',
				'flowers/12.png'
			]
		}
	}); 
	
	
	
	
});