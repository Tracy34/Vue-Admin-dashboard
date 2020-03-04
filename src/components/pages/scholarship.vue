<template>
  <form>
    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Logo</label><br />
        <input type="file" @change="onFileChanged" />

      </div>

      <div class="form-group">
        <label>CompanyName</label>
        <input type="text"
               placeholder="Name"
               v-model="name"
               v-validate="'required'"
               name="name"
               :class="{'form-control': true, 'error': errors.has('name') }" />
        <span class="small text-danger" v-show="errors.has('name')">Add Company Name</span>
      </div>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Logo</label>
        <input type="text"
               lass="form-control"
               placeholder="Logo"
               v-model="logo"
               v-validate="'required|url'"
               name="image"
               :class="{'form-control': true, 'error': errors.has('logo') }" />
        <span class="small text-danger"
              v-show="errors.has('logo')">Image is required and must be a valid URL</span>
      </div>
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
      <div class="form-group">
        <label>Location</label>
        <textarea type="number"
                  class="form-control"
                  placeholder="location"
                  rows="5"
                  v-model="location"
                  v-validate="'required'"
                  name="location"
                  :class="{'form-control': true, 'error': errors.has('location') }"></textarea>
        <span class="small text-danger"
              v-show="errors.has('location')">Add the city or country </span>
      </div>
     <div class="form-group new-button">
  <button @submit.prevent="saveScholarship">Add Scholarship </button>
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
    saveInternship() {
      axios.post('http://str.eventsaviour.com/scholarships , this.scholarshipship');
      axios.post('http://str.eventsaviour.com/companies');
    },
  },
};
</script>

