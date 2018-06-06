<template>
    <div id="Header">
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header class="header mdl-layout__header">
                <div class="mdl-layout__header-row">
                <strong class="mdl-layout-title fontstyle">G R {{ simbol }} V I T H</strong>
                <!-- Add spacer, to align navigation to the right -->
                <div class="mdl-layout-spacer mdl-layout--large-screen-only"></div>
                <!-- Navigation -->
                <nav class="mdl-navigation fontstyle mdl-layout--large-screen-only">
                    <router-link class="mdl-navigation__link" to="/">Inicio</router-link>
                    <router-link class="mdl-navigation__link" to="/servicios">Servicios</router-link>
                    <router-link class="mdl-navigation__link" to="/contacto">Contacto</router-link>
                    <router-link class="mdl-navigation__link" to="/nosotros">Nosotros</router-link>
                </nav>
                </div>
            </header>
            <div class="mdl-layout__drawer">
                <span class="mdl-layout-title fontstyle">G R {{ simbol }} V I T H</span>
                <nav class="mdl-navigation fontstyle">
                    <router-link class="mdl-navigation__link" to="/"  @click.native="hideMenu"><img class="icons" src="../assets/icons/earth.png">Inicio</router-link>
                    <router-link class="mdl-navigation__link" :to="{ name: 'servicios' }"  @click.native="hideMenu"><img class="icons" src="../assets/icons/servs.png">Servicios</router-link>
                    <router-link class="mdl-navigation__link" :to="{ name: 'contacto' }"  @click.native="hideMenu"><img class="icons" src="../assets/icons/contact.png">Contacto</router-link>
                    <router-link class="mdl-navigation__link" :to="{ name: 'nosotros' }"  @click.native="hideMenu"><img class="icons" src="../assets/icons/ingravity.png">Nosotros</router-link>
                </nav>
            </div>
        </div>
    </div>
</template>
<script>
export default {
	data (){
      return{
        simbol: 'Λ'
      }
    },
    methods: {
    hideMenu: function () {
      document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
      document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
    }
  }
}
</script>

<style>
	.header{
    position: fixed;
		overflow: visible;
  }

  .mdl-layout__drawer {
    position: fixed;
  }
  .mdl-layout__obfuscator.is-visible{
    position: fixed;
  }

  .fontstyle a{
    font-size: 18px;
  }
	
  .mdl-layout__header{
    background: #1F354C !important;
  }
  .demo-layout-transparent .mdl-layout__header,
  .demo-layout-transparent .mdl-layout__drawer-button {
    color: white;
  }
  .icons{
    width: 4vh;
    margin-right: 15px;
  }
</style>

