(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _modular = require('./modular.js');

var _modular2 = _interopRequireDefault(_modular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./modular.js":2}],2:[function(require,module,exports){
'use strict';

var _utils = require('./utils.js');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = new Vue({
  el: '.comment-widget',
  data: {
    comments_data: [{
      author_url: 'wuchengkai.com',
      author_avatar: 'http://q.qlogo.cn/qqapp/100229475/B5CA91B39BA23ABE80C306B5AD25FB04/100',
      author_name: 'ckwu',
      created_at: '2017-03-28T07:20:32.008Z',
      updated_at: '2017-03-28T07:20:32.008Z',
      message: '测试',
      author_email: '486433545@qq.com',
      post_id: '2efd3696-31ef-496a-bb28-62a33b52eb00',
      author_id: '25607593-63d5-46f3-81aa-7154cd0d24c0',
      thread_key: 'canvas-poster',
      parents: ['52b489e9-e9be-4582-b58f-414e1927d6bd']
    }],
    reply: {
      message: '',
      author_name: '',
      author_url: '',
      thread_key: '',
      author_avatar: ''
    }
  },
  computed: {
    comments: function comments() {
      return this.comments_data.map(function (v, i) {
        v.author_avatar = v.author_avatar || '';
        v.created_at = _utils2.default.convertTimestamp2Date(v.created_at);
        return v;
      });
    }
  },
  methods: {
    post: function post() {
      console.log(this.reply);
    }
  }
});

},{"./utils.js":3}],3:[function(require,module,exports){
'use strict';

module.exports = {
  convertTimestamp2Date: function convertTimestamp2Date(timestring) {
    try {
      var d = new Date(timestring);
      return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
    } catch (e) {}
  }
};

},{}]},{},[1]);
