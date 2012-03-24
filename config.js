var CONFIG = module.exports = {
	
	/*
	 *
	 * Development config
	 *
	 */
	'dev' : {
	
		'server' : {
			'host' : '127.0.0.1',
			'port' : 8080
		},
		
		'log' : {
			'level' : 3
		}
	
	},
	
	/*
	 *
	 * Production config
	 *
	 */
	'prod' : {
	
		'server' : {
			'host' : '184.107.167.229',
			'port' : 80
		},
		
		'log' : {
			'level' : 1
		}
	
	}
	
	
};