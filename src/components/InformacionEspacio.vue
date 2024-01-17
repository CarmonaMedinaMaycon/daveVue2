<template>
  <div>
      <b-container>
          <b-breadcrumb :items="items"></b-breadcrumb>
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
              to: {name:'rentaEspacio'}
            },
            {
              text: 'Informacion de espacio',
              active:true
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