<template>
  <tips @save-tips="addTips"
              :model="model" :tips="tips"></tips>
</template>

<script>
import Tips from '../components/pages/tips';

export default {
  data() {
    return {
      model: {},
    };
  },
  created() {
    this.$store.dispatch('allTips');
  },
  computed: {
    categories() {
      return this.$store.getters.allTips;
    },
  },
  methods: {
    addTips(model) {
      // console.log('model', model);
      this.$store.dispatch('addTips', model);
    },
  },
  components: {
    tips: Tips,
  },
};
</script>
