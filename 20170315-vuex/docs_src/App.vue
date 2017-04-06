<template>
  <div>
    <p>{{ message }}</p>
    <Counter/>
    <Counter/>
  </div>
</template>

<script>
import Counter from './Counter.vue';

export default {
  components: {
    Counter,
  },
  data() {
    return {
      message: 'こんにちは！',
    }
  },
};
</script>
