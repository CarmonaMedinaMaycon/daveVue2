<template>
  <div>
      <b-container>
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
              active:true
            },
            {
              text: 'detalles de espacios',
              to: {name:'detallesEspacio'}
            },
          ]
        }
      }
    }
  
  </script>
  
  <style>
  
  </style>