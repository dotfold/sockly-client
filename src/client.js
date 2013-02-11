


(function($socket) {

	var Sockly = function() {
		this.socket = $socket;
	};

	Sockly.version = '0.1.0-henceforth-sock-puppet';

	// sockly

	Sockly.prototype = {
		
		/**
		 * [connect description]
		 * @return {[type]} [description]
		 */
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

		// send to socket
		/**
		 * [send description]
		 * @param  {[type]} message [description]
		 * @return {[type]}         [description]
		 */
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

	(function(sockly) {



	})(window.Sockly);

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

(function (Sockly) {

	// augment for building in the communication
	// socket, or img tracking pixel, or...

})(window.Sockly);

