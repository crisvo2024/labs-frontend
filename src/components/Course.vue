<template>
  <li>
    <ul>
      <li>
        <strong>Nombre del curso: </strong> {{courseName}}
      </li>
      <li>
        <strong>Duración en horas: </strong> {{durationHours}}
      </li>
      <li>
        <strong>Periodo: </strong> {{periodName}}
      </li>
      <li>
        <strong>Rol: </strong> {{roleId === 1 ? "Estudiante" : "Profesor"}}
      </li>
    </ul>
  </li>
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