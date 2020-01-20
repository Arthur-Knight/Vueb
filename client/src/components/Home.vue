<template>
  <div id="app">
    <div class="fixed-nav-bar">
      <div class="logo"><span>Placeholder</span>Studios</div>
    </div>
    <div style="position: relative; z-index: 99; background-color: #fff;height: 500px;">
      <h1 style="margin:0;height:50px"></h1>
      <parallax >
        <img src="~@/assets/img/1.jpg">
      </parallax>
    </div>
    <div style="background-color: #fff; height: 100vh;"></div>
    <h1>Parallax fixed position </h1>

    <div style="position: relative;height: 500px;">
      <parallax :fixed="true">
        <img src="~@/assets/img/2.jpg">
      </parallax>
    </div>

    <div style="background-color: #fff; height: 100vh;"></div>
    <div id="footer"></div>
  </div>
</template>

<script>
import sea from "@/assets/img/sea.jpg";
import Parallax from 'vue-parallaxy';
import $ from 'jquery';
export default {
  name: "Home.vue",
  data() {
    return {
      sea: sea,
    }
  },
  components: {
    Parallax
  },
  created() {
    $(document).ready(function() {
      // Function to change the nav-bar on scroll
      $(window).scroll(function() {
        ($(window).scrollTop() >= 50) ? (
          $('.fixed-nav-bar').addClass('scrolled')
        ) : (
          $('.fixed-nav-bar').removeClass('scrolled')
        )
      });

    });
  }
}
</script>

<style scoped>
  body {
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: relative;
  }
  .fixed-nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    padding: 0 25px;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.02);
    box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.4);
    z-index: 100;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: 0.35s ease;
    transition: 0.35s ease;
  }
  .fixed-nav-bar .logo {
    position: absolute;
    left: 40px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    text-transform: uppercase;
    color: #ccc;
    font-size: 28px;
    font-weight: 300;
  }
  .fixed-nav-bar .logo span {
    color: #e78533;
    font-weight: 600;
  }
  .fixed-nav-bar.scrolled {
    height: 60px;
    background-color: #fdfdfd;
    box-shadow: 0 0 30px 3px rgba(0, 0, 0, 0.6);
  }
  .fixed-nav-bar.scrolled .logo {
    color: #000;
  }
  #footer{
    height:150px;
    background-color: black;
  }
</style>
