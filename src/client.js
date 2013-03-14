


(function($socket) {

	var Sockly = function() {
		this.socket = $socket;
		this.prefix = '';
	};

	Sockly.version = '0.1.0-a-sock-appears';

	Sockly.prototype = {
		
		//
		// ### function connect
		// Create a WebSocket and attempt a connection using the
		// supplied host and port details.
		// 
		connect: function() {
			var socketURL = 'ws://localhost:3000';
			this.socket = new WebSocket(socketURL);

			console.log('connecting...');

			this.socket.onopen = function() {
				console.log('[client] onopen received');

				this.send('hello');
			};

			this.socket.onmessage = function(data) {
				var str = JSON.stringify(data.data);
				console.log('[client] onmessage', str);
			}
		},

		// extract to own module
		setPrefix: function(value) {
			this.prefix = value;
		},


		timing: function(metric) {
			var timingBuffer = this.prefix + metric + '|ms';
			this.socket.send(timingBuffer);
		},

		guage: function() {

		},

		set: function() {

		},

		//
		// ### function send message
		// #### @message string the message to transmit over the socket
		// 
		send: function(message) {
			this.socket.send(message);
		},

		// subscribe to a message with a handler
		/**
		 * [on description]
		 * @param  {[type]} message [description]
		 * @param  {[type]} handler [description]
		 * @return {[type]}         [description]
		 */
		subscribe: function(message, handler) {

		}

	};

/**
	// socket setup
	var socketURL = 'ws://192.168.20.86:8124'
	var socket = new WebSocket(socketURL);

	// socket handlers
	socket.onopen = function() {
		console.log('[client] onopen received');
	};

	socket.onmesseage = function() {
		console.log('[client] onmesseage received');
	};

	socket.onclose = function() {
		console.log('[client] onclose received');
	};
*/

	window.Sockly = Sockly;

})();


