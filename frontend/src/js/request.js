
module.exports = {
	lists: () => {
		fetch('http://127.0.0.1:3000/lists', {method: 'POST'}).then((res) => {
			return res.json();
		}).then((data) => {
			console.log( data );
		});
	}
};