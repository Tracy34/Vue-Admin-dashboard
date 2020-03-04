<template>
  <div id="app">
    <!--<nav>-->

    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Student Recruiter</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
              <b-nav-item right>
             <router-link to="/index">Home</router-link>
             <router-link to="/internship">Internship</router-link>
             <router-link to="/scholarship">Scholarship</router-link>
             <router-link to="/tips">Career Tips</router-link>
              </b-nav-item>
          </b-navbar-nav>
           </b-navbar>
    </div>

    <!--</nav>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
font-family: 'Avenir', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}
</style>
