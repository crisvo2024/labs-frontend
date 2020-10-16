<template>
  <div class="container-fluid mt-2">
    <h1>Bienvenido al dummy</h1>
    <div class="col">
      <router-view/>
      <h2>Lista de cursos</h2>
      <ul>
        <Course
          v-for="assosiation in CourseList"
          v-bind:key="assosiation.id"
          v-bind:course-name="assosiation.course.courseName"
          v-bind:duration-hours="assosiation.course.durationHours"
          v-bind:period-name="assosiation.period.periodName"
          v-bind:role-id="assosiation.role.id"
        />
      </ul>
    </div>
  </div>
</template>

<script>
  import Course from "@/components/Course";
  import axios from "axios";
  export default{
    name: "Home",
    beforeCreate( ){
      if( !localStorage.getItem( 'token' ) ){
        this.$router.push( {name: 'login'} )
      }
    },
    components:{
      Course
    },
    data(){
      return{
        CourseList : []
      }
    },
    created() {
      axios.get(this.$store.state.backURL + "/usuario/courses",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token")
            }
          })
      .then((response) => {
        this.CourseList = response.data
      }, (error) => {
        console.log(error)
      })
    }
  }
</script>

<style>

</style>
