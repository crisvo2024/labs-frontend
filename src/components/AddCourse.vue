<template>
  <div class="col-12 col-sm-10 col-md-8 offset-sm-1 offset-md-2">
    <div class="mt-5">
      <form class="border border-primary rounded form-inline" @submit="addCourse">

        <h2 class="col-12 text-center text-primary mt-3 mb-5">Añadir un nuevo curso</h2>

        <div class="form-group col-12">
          <label for="course-name" class="custom-label col-md-3">Nombre del curso</label>
          <input id="course-name" class="form-control col-12 col-sm-10 col-md-7 offset-sm-1" type="text"
                 placeholder="Nombre" v-model="courseName" required/>
        </div>

        <div class="form-group col-12">
          <label for="durationHours" class="custom-label col-md-3">Duración en horas</label>
          <input id="durationHours" class="form-control col-12 col-sm-10 col-md-7 offset-sm-1" type="number"
                 placeholder="Duración" v-model="durationHours" required/>
        </div>

        <div class="col-12 mb-3">
          <button class="col-sm-6 col-md-4 offset-sm-5 offset-md-7 btn btn-primary" type="submit">
            Crear curso
          </button>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "AddCourse",
    data( ){
      return {
        courseName: '',
        durationHours: ''
      }
    },
    methods: {
      addCourse( event ){
        axios
          .post( this.$store.state.backURL + "/profesor/crear-curso", {
              courseName: this.courseName,
              durationHours: this.durationHours
            }, {
              headers: {
                Authorization: "Bearer " + localStorage.getItem( "token" )
              }
            }
          ).then( response => {
            if( response.status !== 200 ){
              alert( "Error en la petición. Intente nuevamente" );
            }else{
              alert( "Curso creado exitósamente" );
            }
          }).catch( response => {
              alert( "No es posible conectar con el backend en este momento" );
          });
        event.preventDefault( );
      }
    }

  }
</script>

<style scoped>
  .form-inline .form-group{
    margin-bottom: 1rem;
  }
</style>
