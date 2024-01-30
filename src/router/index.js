import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes =[
    //ruta base
    {
        path: '/',
        redirect:'/inicio'
    },
    //ruta asociada a los componentes
    {
        path:'/',
        component:{
            render(h) {
                return h('router-view')
            },
        },
        //componentes que se renderizan a partir de router view
        children:[
            {
                path:'/inicio',
                name:'inicio',
                component:()=> import('../components/Inicio.vue')
            },
            {
                path:'/rentaEspacio',
                name:'rentaEspacio',
                component:()=> import('../components/RentaEspecio.vue')
            },
            {
                path:'/informacionEspacio',
                name:'informacionEspacio',
                component:()=> import('../components/InformacionEspacio.vue')
            },
            {
                path:'/ofertaEspacio',
                name:'ofertarEspacio',
                component:()=> import('../components/OfertarEspacio.vue')
            },
            {
                path:'/rentarEspacio',
                name:'rentarEspacio',
                component:()=> import('../components/RentarEspacio.vue')
            },
            {
                path:'/catalogoEspacios',
                name:'catalogoEspacios',
                component:()=> import('../components/CatalogoEspacio.vue')
            },
            {
                path:'/detallesEspacio',
                name:'detallesEspacio',
                component:()=> import('../components/DetallesEspacio.vue')
            }
        ]
    }
]
const router = new VueRouter({routes})
export default router;