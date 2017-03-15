import Vue from 'vue';

const app = new Vue({
  data: {
    message: 'こんにちは！',
  },
  template: '<div>{{ message }}</div>',
});

app.$mount('#app');
