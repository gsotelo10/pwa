<template>
  <div id="Servicios">
    <span class="title">
      <strong>Servicios</strong>
    </span>
    <div class="mdl-grid">
      <div v-for="picture in pictures" :key="picture.id" class="mdl-cell mdl-cell--4-col-desktop mdl-cell--6-col-phone mdl-cell--12-col-tablet">
        <div class="demo-card-square mdl-card mdl-shadow--2dp">
          <div class="mdl-card__title mdl-card--expand">
            <h2 class="mdl-card__title-text fontstyle">{{picture.title}}</h2>
          </div>
          <img :src="picture.url">
          <span class="fontstyle slogan">
            <strong>{{picture.slogan}}</strong>
          </span>
          <div class="mdl-card__supporting-text">
            <p>{{picture.info}}</p>
          </div>
        </div>
      </div>
    </div>
    <section class="about">
      <button @click="onNext" class=" mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
        <i class="material-icons">arrow_forward_ios</i>
      </button> 
    </section>
    
  </div>
</template>

<script>
  import data from '../data'

  export default {
    data () {
      return {
        'pictures': data.pictures
      }
    },
    methods: {
      onNext(){
        this.$router.push({name: 'contacto', params: 'Servicios'})
      }
    }
  }
</script>

<style scoped>
  #Servicios{
    width: 100%;
    margin-top: 60px;
  }
  .demo-card-square.mdl-card {
    border-radius: 15px;
    text-align: center;
  }
  .demo-card-square.mdl-card img {
    max-width: 100%;
    display: inline;
    justify-content: center;
    padding-bottom: 50px;
  }
  .demo-card-square{
    padding-left: 20px;
    padding-right: 20px;
  }

  .mdl-card__supporting-text{
    margin-top: none;
    text-align: justify;
    justify-content: center;
    padding: 20px;
  }
  .slogan{
    font-size: 14px;
  }

  .mdl-card{
    height: auto;
    max-height: 100vh;
  }
  .about {
    padding-top: 2vh;
    width: 80%;
    max-width: 960px;
    margin: 0 auto;
    box-shadow: 0 .5em 2em rgba(black, .3);
    margin-bottom: 3em;
  }
  .mdl-button--colored{
    background: #38579D  !important;
  }
  .mdl-button {
    margin-bottom: 20px;
    float: right;
  }

  @media only screen and (min-width: 950px){
    #Servicios{
      width: 100%;
      margin-top: 150px;
    }
    #Servicios .title{
      color: #1F354C;
      font-size: 35px;
      padding: 20px;
    }
    .mdl-card{
      height: 60vh;
      max-height: 80vh;
    }

  }


  

</style>
