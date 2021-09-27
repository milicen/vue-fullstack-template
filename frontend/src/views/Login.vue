<template>
  <form @submit.prevent>
    <h2>Login</h2>
    <label for="email">Email :</label>
    <input type="text"
      placeholder="email"
      v-model="credentials.email">
    <br>
    <label for="password">Password :</label>
    <input type="password"
      placeholder="password"
      v-model="credentials.password">
    <br>
    <br>

    <button @click="login">Login</button>
  </form>
</template>

<script>
import Api from '@/api'
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      credentials: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    ...mapMutations([
      'setUser',
      'setToken'
    ]),
    async login() {
      const loginUser = await Api.post('/login', this.credentials)
      
      if(loginUser.data.success) {
        console.log('user logged in')

        this.setUser(loginUser.data.payload)
        this.setToken(loginUser.data.token)

        Api.defaults.headers.common['Authorization'] = `Bearer ${loginUser.data.token}`
        
        this.$router.push('/')
      }
    }
  }
}
</script>

<style>

</style>