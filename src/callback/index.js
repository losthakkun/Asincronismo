function sum(a, b) {
	return a + b;
}

function calc(a, b, callback) {
	return callback(a, b);
}

console.log(calc(1, 2, sum));

function date(callback) {
	console.log(new Date());
	setTimeout(function () {
		let date = new Date();
		callback(date);
	}, 3000);
}

function printDate(date) {
	console.log(date);
}

date(printDate);