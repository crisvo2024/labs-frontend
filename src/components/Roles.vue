<template>
  <div>
    <h2>Roles del usuario</h2>
    <ul>
      <li v-for="rol in Rol">
        <strong>Rol: </strong> {{ rol.roleName }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Roles",
  data() {
    return {
      Rol: []
    }
  },
  created() {
    axios.get(this.$store.state.backURL + "/usuario/getRoles",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        })
        .then((response) => {
          this.Rol = response.data
        }, (error) => {
          console.log(error)
        })
  }
}
</script>

<style scoped>

</style>