<template>
    <div>
        <p>INICIO</p>
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
                active:true
              },
              {
                text: 'Tercero',
                to: {name:'tercero'}
              },
              {
                text: 'Main',
                to: {name:'main'}
              },
            ]
          }
        }
      }
    
    </script>
    
    <style>
    
    </style>