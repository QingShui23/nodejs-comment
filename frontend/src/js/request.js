import utils from './utils.js';

module.exports = {
	lists: () => {
		fetch('http://127.0.0.1:3000/lists', {
			method: 'POST',
			headers: new Headers({'Content-Type': 'application/json'}),
			body: JSON.stringify({'thread_key': 'canvas'})
		}).then((res) => {
			return res.json();
		}).then((res) => {
			main.comments_data = res.data;
		});
	},
	post: ( params, cb ) => {
		fetch('http://127.0.0.1:3000/post', {
			method: 'POST',
			headers: new Headers({'Content-Type': 'application/json'}),
			body: JSON.stringify( params )
		}).then((res) => {
			return res.json();
		}).then((res) => {
			cb( res );
		});
	}
};