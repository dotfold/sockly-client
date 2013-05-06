
// TODO: browserifyify
// TODO: <img> fallback

(function($socket) {

	var Sockly = function() {
		// default metric prefix
		this.prefix = '';

		// default connection properties
		this.defaultHost = 'ws://localhost';
		this.defaultPort = 3000;

		// statsd metric types
		// https://github.com/etsy/statsd/blob/master/docs/metric_types.md
		this.types = {
			COUNT:	'c',
			TIMING: 'ms',
			GUAGE:	'g',
			SET:	's'
		}
	};

	Sockly.version = '0.1.0-a-sock-appears';

	Sockly.prototype = {
		
		//
		// ### function detect
		// #### returns Boolean
		// Detects if the environment supports WebSocket.
		//
		detect: function() {

		},

		//
		// ### function connect
		// #### socketUrl {String} full URL and port of the ws host
		// Example: `ws://localhost:3000`
		// Create a WebSocket and attempt a connection using the
		// supplied host and port details.
		// 
		connect: function(socketUrl, callback) {
			var socketURL = socketUrl || (this.defaultHost + ':' + this.defaultPort);
			this.socket = new WebSocket(socketURL);

			console.log('connecting...');

			// set timeout for connect

			this.socket.onopen = function() {
				console.log('[client] onopen received');

				// emit connect
				callback.call(null, 'connected');
			};

			this.socket.onmessage = function(data) {
				var str = JSON.stringify(data.data);
				console.log('[client] onmessage', str);
			}
		},

		//
		// ### function setPrefix value
		// #### value {String} prefix for statsd metrics
		//
		setPrefix: function(value) {
			this.prefix = value;
		},

		//
		// ### function count metric, prefix
		// #### @metric Value of the timing metric
		// #### @prefix (Optional) override default prefix
		// Creates a counting metric and sends via the socket.
		//
		count: function(metric, prefix) {
			var buffer = formatMessage(metric, prefix, this.types[count]);
			send(buffer);
		},

		//
		// ### function timing metric
		// #### metric Value of the timing metric
		// #### @prefix (Optional) override default prefix
		// Creates a timing metric and sends via the socket.
		//
		timing: function(metric, prefix) {
			var buffer = this.formatMessage(metric, prefix, this.types.TIMING);
			this.send(buffer);
		},

		//
		// ### function guage metric
		// #### metric Value of the guage metric
		// #### @prefix (Optional) override default prefix
		// Creates a guage metric and sends via the socket.
		//
		guage: function(metric, prefix) {
			var buffer = formatMessage(metric, prefix, this.types[guage]);
			send(buffer);
		},

		//
		// ### function timing metric
		// #### metric Value of the timing metric
		// #### @prefix (Optional) override default prefix
		// Creates a set metric and sends via the socket.
		//
		set: function(metric, prefix) {
			var buffer = formatMessage(metric, prefix, this.types[set]);
			send(buffer);
		},

		//
		// ### function send message
		// #### @message string the message to transmit over the socket
		// Sends a message over the socket. Only statsd formatted
		// messages will be read by the host.
		// 
		send: function(message) {
			this.socket.send(message);
		},

		//
		// ### function formatMessage metric, prefix, type
		// #### @metric the metric value
		// #### @prefix a prefix for the metric, if any
		// #### @type Corresponds to the types enumerator
		//
		formatMessage: function(metric, prefix, type) {
			var pre = (prefix !== undefined) ? prefix : this.prefix;
			if (pre !== '') {
				pre = pre + ':';
			}
			return pre + metric + '|' + type;
		}

	};

	window.Sockly = Sockly;

})();


