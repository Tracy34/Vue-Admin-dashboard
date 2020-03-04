<template>
<form>
  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">

    <div class="form-group">
      <label>Logo</label><br/>
      <input type="file" @change="onFileChanged" />

    </div>
    <div class="form-group">
      <label>Job Title</label>
      <input type="text"
             placeholder="Job Title"
             v-model="title"
             v-validate="'required'"
             name="title"
             :class="{'form-control': true, 'error': errors.has('title') }" />
      <span class="small text-danger" v-show="errors.has('title')">Title of the job</span>
    </div>
    <div class="form-group">
      <label>CompanyName</label>
      <input type="text"
             placeholder="CompanyName"
             v-model="companyname"
             v-validate="'required'"
             name="companyname"
             :class="{'form-control': true, 'error': errors.has('companyname') }" />
      <span class="small text-danger" v-show="errors.has('companyname')">Add Company Name</span>
    </div>
       <div class="form-group">

      <label>Category</label>
      <input type="text"
             v-model="category"
             v-validate="'required'"
             name="category"
             :class="{'form-control': true, 'error': errors.has('category') }">
      <span class="small text-danger" v-show="errors.has('category')">category is required</span>
    </div>
  </div>

  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
    <div class="form-group">
      <label>Application Deadline</label>
      <input type="datetime-local"
             placeholder="date"
             v-model="date"
             v-validate="'required'"
             name="duration"
             :class="{'form-control': true, 'error': errors.has('date') }" />
      <span class="small text-danger" v-show="errors.has('date')">Enter date for application</span>
    </div>

    <div class="form-group">
      <label>Description</label>
      <textarea type="number"
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
      <input type="text"
             placeholder="location"
             rows="5"
             v-model="location"
             v-validate="'required'"
             name="location"
             :class="{'form-control': true, 'error': errors.has('location') }">
      <span class="small text-danger"
            v-show="errors.has('location')">Add the city or country </span>
    </div>
    <div class="form-group new-button">
      <button @submit.prevent="saveInternship">Add Internship </button>
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
      axios.post('http://str.eventsaviour.com/internships , this.internship');
      axios.post('http://str.eventsaviour.com/categories');
      axios.post('http://str.eventsaviour.com/companies');
    },
  },
};
</script>
