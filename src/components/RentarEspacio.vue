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
              active:true
            },
            {
              text: 'catalogo de espacios',
              to: {name:'catalogoEspacios'}
            },
            {
              text: 'detalles de espacios',
              to: {name:'detallesEspacios'}
            },
          ]
        }
      }
    }
  
  </script>
  
  <style>
  
  </style>