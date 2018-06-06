<template>
  <div id="Contacto" class="Contact">
    <span class="title">
      <strong>Contactanos</strong>
    </span>
    <div class="grid">
      <form action="#">
        <div class="mdl-textfield mdl-js-textfield style-input">
          <label class="">Nombre</label>
          <input class="mdl-textfield__input " v-model="name" type="text" id="nombre">
        </div>
        <div class="mdl-textfield mdl-js-textfield style-input">
          <label class="">E-mail</label>
          <input class="mdl-textfield__input" v-model="email" type="email" id="email">
          
        </div>
        <div class="mdl-textfield mdl-js-textfield style-input">
          <label class="">Empresa</label>
          <input class="mdl-textfield__input " v-model="company" type="text" id="empresa">
        </div>
        <div class="mdl-textfield mdl-js-textfield style-input">
          <label class="">Telefono</label>
          <input class="mdl-textfield__input " v-model="number" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="numero">
        </div>
        <div class="mdl-textfield mdl-js-textfield style-input">
          <label class="">¿En que estas interesado?</label>
          <mdl-select class="" id="serv" v-model="serv" :options="servs"></mdl-select>
        </div>
        <div class="mdl-textfield mdl-js-textfield style-textarea style-input">
          <label class="">Cuentanos un poco más de tu proyecto</label>
          <textarea class="mdl-textfield__input " type="text" rows= "3" id="sample5" ></textarea>
        </div>
      </form>
    </div>
    <div class="botonsend">
      <button @click="sendEmail()" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
        Enviar
      </button>
    </div>
   <mdl-snackbar display-on="sendEmail"></mdl-snackbar>
  </div>
</template>
<script>
  
  export default {
  
    data() {
      return {
        infoEmail: [],
        name: '',
        email: '',
        company: '',
        number: '',
        serv: '',
        servs: ["PWA", "Desarrollo Web", "Inboud Marketing"]
      };
    },
    methods: {
      sendEmail() {       
        this.infoEmail = [
          {name: this.name},
          {email: this.email}
        ]
        console.log(this.infoEmail)
      },
    }
  }
</script>


<style scoped>
#Contacto {
  width: 100%;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  justify-content: center;

}
.grid {
  border-radius: 15px;
  justify-content: center;
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
  max-height: auto;
}
.style-input label{
  line-height: 30px;
  font-family: 'Montserrat', sans-serif  !important;
  color:#1f354c  !important;
  font-size: 16px !important;
}

.style-textarea{
  width: 100%;
  height: auto;
}

.title {
  float: left;
  text-align: left;
  width: 100%;
}
.botonsend{
  justify-content: center;
  width: 100%;
}
.mdl-button{
  justify-content: center ;
  float: initial !important;
}

@media only screen and (min-width: 950px) {
  #Contacto {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 150px;
    text-align: center;
  }
  .title {
    margin-top: none;
    color: #1f354c;
    font-size: 35px;
    padding: 10px;
  }
  .grid{
    max-height: auto;
    margin-top: 60px;
  }
  .style-textarea{
    width: 70%;
  }
}
</style>
