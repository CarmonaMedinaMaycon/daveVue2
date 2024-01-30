<template>
  <div>
      <b-container>
          <b-breadcrumb :items="items"></b-breadcrumb>
          <b-breadcrumb :items="items2"></b-breadcrumb>
      </b-container>
  </div>
  </template>
  
  <script>
  export default {
      data() {
        return {
          items: [
          {
              text: 'Inicio',
              to:{name:'inicio'}
            },
            {
              text: 'Renta tu espacio',
              active:true
            },
            {
              text: 'Informacion de espacio',
              to: {name:'informacionEspacio'}
            },
            {
              text: 'Ofertar espacio',
              to: {name:'ofertarEspacio'}
            },
          ],
        }
      }
    }
  
  </script>
  
  <style>
  
  </style>