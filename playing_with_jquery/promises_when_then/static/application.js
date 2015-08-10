console.log('got loaded!');

var randomWait = function(word) {
	setTimeout(
		function() {
			console.log("Non-promise: " + word);
		}, Math.random() * 5000
	);
}

var words = [
	'some',
	'ajax',
	'calls',
	'take',
	'longer',
	'than',
	'others',
	'which',
	'why',
	'jquery',
	'when',
	'then',
	'is',
	'so',
	'important'
]

words.forEach(
	function(word) {
		randomWait(word);
	}
)

var deferredPromises = []
words.forEach(
	function(word) {
    var p = $.Deferred()
		setTimeout(
			function() {
				p.resolve(word);
			}, Math.random() * 5000
		);
		deferredPromises.push(p);
	}
)

$.when.apply(this, deferredPromises).then(
	function() {
		console.log("Promised:");
		for (var i = 0; i < arguments.length; i++) {
			console.log(arguments[i]);
		}
	}
);
