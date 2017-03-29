import utils from './utils.js';

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
      post_id : '2efd3696-31ef-496a-bb28-62a33b52eb00',
      author_id : '25607593-63d5-46f3-81aa-7154cd0d24c0',
      thread_key : 'canvas-poster',
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
      this.reply.created_at = Date.now();
      this.reply.updated_at = Date.now();
      this.comments_data.push( JSON.parse(JSON.stringify(this.reply)) );
      setTimeout(() => { this.reply.message = ''; }, 0);
    }
  }
});
