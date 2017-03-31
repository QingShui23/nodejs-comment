(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _modular = require('./modular.js');

var _modular2 = _interopRequireDefault(_modular);

var _request = require('./request.js');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_request2.default.lists();

},{"./modular.js":2,"./request.js":3}],2:[function(require,module,exports){
'use strict';

var _utils = require('./utils.js');

var _utils2 = _interopRequireDefault(_utils);

var _request = require('./request.js');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var main = new Vue({
  el: '.comment-widget',
  data: {
    comments_data: [{
      "_id": "58de82c1f9e12c0614ef416f",
      "message": "1",
      "author_name": "wck",
      "thread_key": "canvas",
      "author_email": "486433545@qq.com",
      "post_id": "88d97e4b-373c-422f-9e6d-1f7071d04d48",
      "author_id": "4ba97974-0c1b-44ed-8921-1c707dc5ba16",
      "__v": 0,
      "author_url": "",
      "parents": [],
      "ip": "::ffff:127.0.0.1",
      "updated_at": "2017-03-31T16:20:24.664Z",
      "created_at": "2017-03-31T16:20:24.664Z"
    }],
    reply: {
      message: '',
      author_name: 'wck',
      author_url: '',
      thread_key: 'canvas',
      author_avatar: '',
      author_email: '486433545@qq.com'
    }
  },
  computed: {
    comments: function comments() {
      return this.comments_data.map(function (v, i) {
        v.author_avatar = v.author_avatar || 'https://fe.ele.me/content/images/2016/12/6f061d950a7b0208c56357fe65d9f2d3572cc803.jpeg';
        v.created_at = _utils2.default.convertTimestamp2Date(v.created_at);
        return v;
      });
    }
  },
  methods: {
    post: function post() {
      var _this = this;

      _request2.default.post(this.reply, function (res) {
        console.log(res);
        setTimeout(function () {
          _this.reply.message = '';_request2.default.lists();
        }, 0);
      });
    }
  }
});

self.main = main;

module.exports = main;

},{"./request.js":3,"./utils.js":4}],3:[function(require,module,exports){
'use strict';

var _utils = require('./utils.js');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	lists: function lists() {
		fetch('http://127.0.0.1:3000/lists', {
			method: 'POST',
			headers: new Headers({ 'Content-Type': 'application/json' }),
			body: JSON.stringify({ 'thread_key': 'canvas' })
		}).then(function (res) {
			return res.json();
		}).then(function (res) {
			main.comments_data = res.data;
		});
	},
	post: function post(params, cb) {
		fetch('http://127.0.0.1:3000/post', {
			method: 'POST',
			headers: new Headers({ 'Content-Type': 'application/json' }),
			body: JSON.stringify(params)
		}).then(function (res) {
			return res.json();
		}).then(function (res) {
			cb(res);
		});
	}
};

},{"./utils.js":4}],4:[function(require,module,exports){
'use strict';

module.exports = {
  convertTimestamp2Date: function convertTimestamp2Date(timestring) {
    try {
      var d = new Date(timestring);
      return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
    } catch (e) {}
  },
  handleVueData: function handleVueData(data) {
    return JSON.parse(JSON.stringify(data));
  }
};

},{}]},{},[1]);
