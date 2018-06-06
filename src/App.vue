<template>
  <div id="app">
    <Header></Header>
    <div class="mdl-layout__content content">
      <router-view ></router-view>
    </div>
   
  </div>
</template>

<script>
  import Header from './components/Header.vue';

  export default {
    name: 'app',
    components: {
      Header
    }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css'); 
  
  .content{
    display: grid;
    margin: 0 auto;
    max-width: 65%
  }
  .fontstyle {
    font-family: 'Montserrat', sans-serif;
  }

   @media only screen and (max-width: 900px){
    .content{
      align-items: center;
      display: grid;
      justify-content: center;
      margin-left: auto;
      margin-right: auto;
      max-width: 100%
    }
   }

</style>
