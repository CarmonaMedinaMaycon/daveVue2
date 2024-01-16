<template>
 
  <b-container>
         <p class="text-center">apocosi pinche prieto Tercero</p>
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
            active:"true"
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