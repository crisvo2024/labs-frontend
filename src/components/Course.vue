<template>

</template>

<script>
export default {
  name: "Course",
  props:{
    courseName:{
      Type:String,
      required: true
    },
    durationHours:{
      Type:Number,
      required: true
    },
    grade:{
      Type:Number,
      required: true
    },
    periodName:{
      Type:String,
      required: true
    },
    roleId:{
      Type:Number,
      required: true
    }
  },
  computed:{
    roleName(){
      return (this.roleId === 1) ? "Estudiante" : "Profesor";
    }
  }
}

</script>

<style scoped>

</style>