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
            active:true
          },
          {
            text: 'Renta tu espacio',
            to: {name:'rentaEspacio'}
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
        items2:[
        {
            text: 'Inicio',
            active:true
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
            to: {name:'detallesEspacios'}
          },
        ]
      }
    }
  }

</script>

<style>

</style>