  <template>
  <internship @save-internship="addInternship"
  :model="model" :internships="internships"></internship>
  </template>

<script>
import Internship from '../components/pages/internship';


export default {
  data() {
    return {
      model: {},
    };
  },
  created() {
    this.$store.dispatch('allInternship');
  },
  computed: {
    categories() {
      return this.$store.getters.allInternships;
    },
  },
  methods: {
    addInternship(model) {
      // console.log('model', model);
      this.$store.dispatch('addInternship', model);
    },
  },
  components: {
    internship: Internship,
  },
};
</script>
