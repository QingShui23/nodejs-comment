import utils from './utils.js';
import request from './request.js';


Vue.component('reply-box', {
  template: `
    <form v-on:submit.prevent="post">
      <div class="textarea-wrapper">
        <textarea required="" v-model.trim="message" @keyup.enter.ctrl="post" placeholder="说点什么吧…"></textarea>
      </div>
      <div class="post-toolbar">
        <div class="post-options">
        </div>
        <button class="post-button" type="submit">发布</button>
      </div>
    </form>
  `,
  data: () => {
    return {
      message: '',
      author_name: 'wck',
      author_url: '',
      thread_key: 'canvas',
      author_avatar: '',
      author_email: '486433545@qq.com'
    }
  },
  methods: {
    post: function(){
      Object.assign( this.$data, { message: this.message, post_id: this.post_id } );
      let params = utils.handleVueData( this.$data );
      request.postOrAlter(params, (res) => {
        setTimeout(() => { this.message = ''; request.lists(); }, 0);
      });
    }
  },
  props: ['message', 'post_id']
})


const main = new Vue({
  el: '.comment-widget',
  data: {
    comments_data: []
  },
  computed: {
    comments: function() {
      return this.comments_data.map((v, i) => {
        v.author_avatar = v.author_avatar || 'https://fe.ele.me/content/images/2016/12/6f061d950a7b0208c56357fe65d9f2d3572cc803.jpeg';
        v.created_at = utils.convertTimestamp2Date( v.created_at );
        v.updated_at = utils.convertTimestamp2Date( v.updated_at );
        return v;
      });
    }
  },
  methods: {
    editComment: function( index ) {
      this.comments[ index ].editing_mode = !this.comments[ index ].editing_mode;
    }
  }
});

self.main = main;

module.exports = main;