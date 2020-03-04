<template>
  <form>
    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Image</label><br />
        <input type="file" @change="onFileChanged" />

      </div>

      <div class="form-group">
        <label>Title</label>
        <input type="text"
               placeholder="Title"
               v-model="title"
               v-validate="'required'"
               name="title"
               :class="{'form-control': true, 'error': errors.has('') }" />
        <span class="small text-danger" v-show="errors.has('title')">Add a title</span>
      </div>

    </div>

    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">

      <div class="form-group">
        <label>Description</label>
        <textarea type="number"
                  class="form-control"
                  placeholder="Description"
                  rows="5"
                  v-model="description"
                  v-validate="'required'"
                  name="description"
                  :class="{'form-control': true, 'error': errors.has('description') }"></textarea>
        <span class="small text-danger"
              v-show="errors.has('description')">Description is required</span>
      </div>
      <div class="form-group new-button">
        <button @submit.prevent="saveTips">Add Tips </button>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      selectedFile: null,
    };
  },

  methods: {

    onFileChanged(event) {
      this.selectedFile = event.target.files[0];
    },
    saveTips() {
      axios.post('http://str.eventsaviour.com/careertips , this.careertips');
    },
  },
};
</script>
