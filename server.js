var app = require('http').createServer(webServer),
	io = require('socket.io').listen(app),
	fs = require('fs'),
	os = require('os');


if(os.type() == 'Darwin') {
	var CONFIG = require('./config').dev;
} else {
	var CONFIG = require('./config').prod;
}


io.set('log level', CONFIG.log.level);
app.listen(CONFIG.server.port,CONFIG.server.host);

function webServer(req, res) {
	
	function displayPage(path) {
		fs.readFile(__dirname + '/web/'+path, function (err, data) {
			if (err) {
				res.writeHead(500);
				return res.end('nothing');
			}
			
			res.writeHead(200);
			res.end(data);
		});
	}
	
	var url = req.url.toLowerCase();
	
	switch(url) {
	
		case '/styles.css':
			displayPage('styles.css');
		break;
	
		case '/scripts.js':
			displayPage('scripts.js');
		break;
	
		case '/overlay.js':
			displayPage('overlay.js');
		break;
		
		case '/thumb.png':
			displayPage('thumb.png');
		break;
	
		case '/index.html':
		case '/':
			displayPage('index.html');
		break;
		
		default:
			var flowersMatch = url.match(/^\/?flowers\/([0-9a-z]+)\.(gif|jpg|png)/i);
			var imgMatch = url.match(/^\/?img\/([0-9a-z\_]+)\.(gif|jpg|png)/i);
			if(flowersMatch) {
				displayPage('flowers/'+flowersMatch[1]+'.'+flowersMatch[2]);
			} else if(imgMatch) {
				displayPage('img/'+imgMatch[1]+'.'+imgMatch[2]);
			} else {
				res.writeHead(500);
				res.end('nothing');
			}
		break;
	}
}

var Canvas = require('./canvas');

io.sockets.on('connection', function (socket) {
	
	socket.on('getPoints', function(bounds,zoom,cb) {
		var points = Canvas.getPointsInBounds(bounds,zoom);
		var items = [];
		for(var i = 0; i < points.length; i++) {
			items.push([points[i].lat,points[i].lng,points[i].brush]);
		}
		cb(items);
	});
	socket.on('addPoints', function (points) {
		
		for(var i = 0; i < points.length; i++) {
			var point = points[i];
			Canvas.addPoint(new Canvas.point(point.lat,point.lng,point.brush));
		}
		socket.broadcast.emit('drawPoints',points);
	});
});