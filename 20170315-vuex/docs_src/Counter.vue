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
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
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
