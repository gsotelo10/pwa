import Main from './components/Main.vue';
import Servicios from './components/Servicios.vue';
import Contacto from './components/Contacto.vue';
import Nosotros from './components/Nosotros.vue';

const routes = [
    { path: '/', component: Main, name: 'inicio' },
    { path: '/servicios', component: Servicios, name: 'servicios' },
    { path: '/contacto', component: Contacto, name: 'contacto' },
    { path: '/nosotros', component: Nosotros, name: 'nosotros' }
]

export default routes

