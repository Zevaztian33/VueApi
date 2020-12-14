<template>
  <div id="app">
    <div id="nav">
      <NavBar />
    </div>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
  },
  created(){
    this.$store.dispatch('llamadoAmiibo');
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

*{
  font-family: 'Righteous', cursive;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
