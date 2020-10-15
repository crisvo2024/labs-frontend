<template>
  <div class="container-fluid mt-2">
    <h1>Bienvenido al dummy</h1>
    <div class="row">
      <Course
        v-for="course in CourseList"
        v-bind:key="course.id"
        v-bind:course-name="course.courseName"
        v-bind:duration-hours="course.durationHours"
        v-bind:grade="course.grade"
        v-bind:period-name="course.periodName"
        v-bind:role-id="course.roleId"
      />
    </div>
  </div>
</template>

<script>
  import Course from "@/components/Course";
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
    }
  }
</script>

<style>

</style>
