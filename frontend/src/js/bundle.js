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

Vue.component('reply-box', {
  template: '\n    <form v-on:submit.prevent="post">\n      <div class="textarea-wrapper">\n        <textarea required="" v-model.trim="message" @keyup.enter.ctrl="post" placeholder="\u8BF4\u70B9\u4EC0\u4E48\u5427\u2026"></textarea>\n      </div>\n      <div class="post-toolbar">\n        <div class="post-options">\n        </div>\n        <button class="post-button" type="submit">\u53D1\u5E03</button>\n      </div>\n    </form>\n  ',
  data: function data() {
    return {
      message: '',
      author_name: 'wck',
      author_url: '',
      thread_key: 'canvas',
      author_avatar: '',
      author_email: '486433545@qq.com'
    };
  },
  methods: {
    post: function post() {
      var _this = this;

      Object.assign(this.$data, { message: this.message, post_id: this.post_id });
      var params = _utils2.default.handleVueData(this.$data);
      _request2.default.postOrAlter(params, function (res) {
        setTimeout(function () {
          _this.message = '';_request2.default.lists();
        }, 0);
      });
    }
  },
  props: ['message', 'post_id']
});

var main = new Vue({
  el: '.comment-widget',
  data: {
    comments_data: []
  },
  computed: {
    comments: function comments() {
      return this.comments_data.map(function (v, i) {
        v.author_avatar = v.author_avatar || 'https://fe.ele.me/content/images/2016/12/6f061d950a7b0208c56357fe65d9f2d3572cc803.jpeg';
        v.created_at = _utils2.default.convertTimestamp2Date(v.created_at);
        v.updated_at = _utils2.default.convertTimestamp2Date(v.updated_at);
        return v;
      });
    }
  },
  methods: {
    editComment: function editComment(index) {
      this.comments[index].editing_mode = !this.comments[index].editing_mode;
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
			res.data.forEach(function (v, i) {
				v.editing_mode = false;
			});
			main.comments_data = res.data;
		});
	},
	postOrAlter: function postOrAlter(params, cb) {
		var path = params.post_id === undefined ? 'post' : 'alter';
		fetch('http://127.0.0.1:3000/' + path, {
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
