<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ time }}</p>

    <!-- 2つのカウンターは連動する -->
    <Counter/>
    <Counter/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Counter from './Counter.vue';

export default {
  components: {
    Counter,
  },
  computed: {
    ...mapGetters(['time']),
  },
  data() {
    return {
      message: 'こんにちは！',
    }
  },
};
</script>
