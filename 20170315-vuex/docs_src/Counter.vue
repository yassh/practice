<template>
  <div>
    <span>{{ count }}</span>
    <button type="button"
            @click="increment">+</button>
    <button type="button"
            @click="decrement">-</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['count']),
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    decrement() {
      this.$store.commit('decrement');
    },
  },
};
</script>
