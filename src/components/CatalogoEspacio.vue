<template>
 
  <b-container>
    <p class="text-center">
   apoco si pinche prieto Main
  </p>
     <b-breadcrumb :items="items"></b-breadcrumb>
 </b-container>
</template>

<script>
export default {
    data() {
      return {
        items: [
          {
            text: 'Inicio',
            to: {name:'inicio'}
          },
          {
            text: 'Tercero',
            to: {name:'tercero'}
          },
          {
            text: 'Main',
            to: {name: 'main'}
          }
        ]
      }
    }
  }

</script>

<style>

</style>