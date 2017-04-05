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
			res.data.forEach((v, i) => { v.editing_mode = false; });
			main.comments_data = res.data;
		});
	},
	postOrAlter: ( params, cb ) => {
		let path = params.post_id === undefined ? 'post' : 'alter';
		fetch(`http://127.0.0.1:3000/${path}`, {
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