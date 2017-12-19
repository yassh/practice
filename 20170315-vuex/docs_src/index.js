import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    date: new Date(),
    count: 0,
  },
  getters: {
    time(state) {
      return state.date.toLocaleTimeString();
    },
  },
  mutations: {
    updateDate(state) {
      state.date = new Date();
    },
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
  },
});

setInterval(() => {
  store.commit('updateDate');
}, 1000);

const app = new Vue({
  store,
  components: {
    App,
  },
  template: '<App/>',
});

app.$mount('#app');
