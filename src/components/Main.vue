<template>
  <div id="Main" >
    <h2 class="fontstyle">¡ Bienvenido !</h2>
    <img width="300" alt="Angular Logo" src="../assets/logo1.png">
    <section class="about">
      <h4>¡La innovación es lo que distingue a un líder de los demás!</h4> 
      <button @click="onNext" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
        <i class="material-icons">arrow_forward_ios</i>
      </button> 
               
    </section>
  </div>
</template>
<script>
export default {
  methods:{
    onNext(){
      this.$router.push({name: 'servicios'})
    }
  }
}
</script>


<style>
  @import url('https://fonts.googleapis.com/css?family=Poppins');

  #Main{
    width: 100%;
    margin-top: 60px;
    text-align: center;
    
  }
  
  #Main h2 p{
    color: #1F354C;
  }

  #Main img{
    width: 35vh;
  }

  .about {
    padding-top: 2vh;
    width: 80%;
    max-width: 960px;
    margin: 0 auto;
    box-shadow: 0 .5em 2em rgba(black, .3);
    margin-bottom: 3em;
  }
  .about p{
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    text-align: center;
    line-height: 25pt;
  }
  .about h4{
    font-family: 'Poppins', sans-serif;
  }

  .mdl-button--colored{
    background: #38579D  !important;
  }
  .mdl-button {

    margin-top: 20px;
    margin-bottom: 20px;
    float: right;

  }

  @media only screen and (min-width: 1000px){
    #Main img{
      width: 45vh;
    }
  }
  
</style>
