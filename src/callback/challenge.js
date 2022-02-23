import { XMLHttpRequest } from 'xmlhttprequest';

let API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {
	let xhttp = new XMLHttpRequest();
	xhttp.open('GET', url_api, true);
	//* Check if the staate change
	//? Values from 1 to 4 are the states of the XMLHttpRequest object
		//? 1. Opened
		//? 2. Sent
		//? 3. Loading
		//? 4. Done
	xhttp.onreadystatechange = function (event) {
		
		if (xhttp.readyState === 4) {																																		//$ The request is completed
			if (xhttp.status === 200) {																																		//$ The request is successful
				callback(null, JSON.parse(xhttp.responseText));
			} else {																																											//! The request is not successful
				const error = new Error('Error' + url_api);
				return callback(error, null);
			}
		}
	}
	xhttp.send();
}

fetchData(API, function (error1, data1) {
	if (error1) return console.error(error1);
	fetchData(API + data1.results[0].id, function (error2, data2) {
		if (error2) return console.error(error2);
		fetchData(data2.origin.url, function (error3, data3) {
			if (error3) return console.error(error3);
			console.log(data1.info.count);
			console.log(data2.name);
			console.log(data3.dimension);
		});
	});
});
