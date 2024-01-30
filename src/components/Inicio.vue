<template>
  <div class="container">
    <b-container>
        <b-breadcrumb :items="items"></b-breadcrumb>
    </b-container>

    <form @submit.prevent="submitForm" class="form">
      <label for="nombreCompleto">Nombre Completo:</label>
      <input v-model="nombreCompleto" type="text" id="nombreCompleto" required />

      <label for="direccion">Dirección:</label>
      <div class="direccion">
        <input v-model="direccion.cp" type="text" placeholder="Código Postal" required />
        <input v-model="direccion.calle" type="text" placeholder="Calle" required />
        <input v-model="direccion.numero" type="text" placeholder="Número" required />
        <input v-model="direccion.ciudad" type="text" placeholder="Ciudad" required />
      </div>

      <label for="fechaNacimiento">Fecha de Nacimiento:</label>
      <input v-model="fechaNacimiento" type="date" required :max="maxFechaNacimiento" />

      <label for="correoElectronico">Correo Electrónico:</label>
      <input v-model="correoElectronico" type="email" required />

      <label for="numeroTelefonico">Número Telefónico:</label>
      <input v-model="numeroTelefonico" type="tel" pattern="[0-9]{10}" required />

      <label for="fotografia">Fotografía (PNG):</label>
      <input type="file" accept="image/png" @change="handleFileChange" required />

      <button type="submit">Enviar</button>
    </form>

    <div v-if="formularioInvalido" class="mensaje-error">
      <p>completa bien los campos</p>
    </div>



</div>

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
        ],
      nombreCompleto: '',
      direccion: {
        cp: '',
        calle: '',
        numero: '',
        ciudad: ''
      },
      fechaNacimiento: '',
      maxFechaNacimiento: new Date(new Date().getFullYear() - 18, 11, 31).toISOString().split("T")[0],
      correoElectronico: '',
      numeroTelefonico: '',
      fotografia: null,
      formularioInvalido: false
    };
  },
  methods: {
    submitForm() {
      if (this.validarFormulario()) {
        console.log('todo good');
      } else {
        this.formularioInvalido = true;
      }
    },
    validarFormulario() {
      return true;
    },
    handleFileChange(event) {
      this.fotografia = event.target.files[0];
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
}

.direccion {
  display: grid;
  gap: 10px;
}

button {
  margin-top: 20px;
  padding: 10px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.mensaje-error {
  margin-top: 20px;
  color: #FF0000;
}
</style>
