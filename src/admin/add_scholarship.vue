<template>
<scholarship @save-scholarship="addScholarship"
      :model="model" :scholarships="scholarships"></scholarship>
</template>

<script>
import Scholarship from '../components/pages/scholarship';


export default {
  data() {
    return {
      model: {},
    };
  },
  created() {
    this.$store.dispatch('allScholarships');
  },
  computed: {
    categories() {
      return this.$store.getters.allScholarship;
    },
  },
  methods: {
    addTips(model) {
      // console.log('model', model);
      this.$store.dispatch('addScholarship', model);
    },
  },
  components: {
    scholarship: Scholarship,
  },
};
</script>
