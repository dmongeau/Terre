// JavaScript Document

var socket;

$(function() {
	
	
	var currentZoom = 10;
	
	var map = new google.maps.Map(document.getElementById("map"), {
		center: new google.maps.LatLng(45.5,-73.6),
		zoom: currentZoom,
		maxZoom: 15,
		minZoom: 7,
		mapTypeId : google.maps.MapTypeId.ROADMAP,
		overviewMapControl: false,
		streetViewControl: false
	});
  
	var overlay = new DrawOverlay(map,{
		'brushes' : {
			'flower' : ['flowers/red.png','flowers/blue.png','flowers/pink.png']
		}
	}); 
	
	var mouseIsDown = false;
	
	var drawTimer;
	function drawFlower(latLng) {
		
		if(!drawTimer) {
		
			drawTimer = window.setTimeout(function(latLng) {
				return function() {
					overlay.addPointAndDraw({
						'latLng' : latLng,
						'brush' : 'flower'
					});
					drawTimer = null;
				}
			}(latLng),75);
			
		}
	}
	
	
	google.maps.event.addListener(map, 'mousedown', function(e) {
		mouseIsDown = true;
	});
	google.maps.event.addListener(map, 'mouseup', function(e) {
		mouseIsDown = false;
	});
	
	google.maps.event.addListener(map, 'mousemove', function(e) {
		
		drawFlower(e.latLng);
		
	});
	google.maps.event.addListener(map, 'mouseover', function(e) {
		
		drawFlower(e.latLng);
		
	});
	
	
	
});