<template>
  <div id="app" >
    <!-- <nav>
      <router-link to="/">Home</router-link>
    </nav> -->
    <!-- <side-bar :sideBarClosed="sideBarClosed" @toggleSideBar="updatevalue($event)"></side-bar> -->
    <router-view/>
  </div>
</template>
<script>
import sideBar from './components/sideBar.vue'
export default {
  components: { sideBar },
  data(){
    return{
      sideBarClosed:false,
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}

nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//  //   color: #2c3e50;
//     text-decoration: none;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
  }
</style>
