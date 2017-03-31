import utils from './utils.js';
import request from './request.js';

const main = new Vue({
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
    comments: function() {
      return this.comments_data.map((v, i) => {
        v.author_avatar = v.author_avatar || 'https://fe.ele.me/content/images/2016/12/6f061d950a7b0208c56357fe65d9f2d3572cc803.jpeg';
        v.created_at = utils.convertTimestamp2Date( v.created_at );
        return v;
      });
    }
  },
  methods: {
    post: function(){
      request.post(this.reply, (res) => {
        console.log( res );
        setTimeout(() => { this.reply.message = ''; request.lists(); }, 0);
      })
    }
  }
});

self.main = main;

module.exports = main;