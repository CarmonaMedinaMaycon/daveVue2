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
          items2:[
          {
              text: 'Inicio',
              to:{name:'inicio'}
            },
            {
              text: 'Rentar tu espacio',
              to: {name:'rentarEspacio'}
            },
            {
              text: 'catalogo de espacios',
              to: {name:'catalogoEspacios'}
            },
            {
              text: 'detalles de espacios',
              active:true
            },
          ]
        }
      }
    }
  
  </script>
  
  <style>
  
  </style>