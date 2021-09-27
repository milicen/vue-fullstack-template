<template>
  <form @submit.prevent>
    <h2>Register</h2>
    <h3>Details</h3>
    <label for="username">Username :</label>
    <input type="text"
      placeholder="username"
      v-model="user.details.username">
    <br>
    <h3>Address</h3>
    <label for="street">Street :</label>
    <input type="text"
      placeholder="street"
      v-model="user.address.street">
    <br>
    <label for="zip_code">Zip code :</label>
    <input type="text"
      placeholder="zip_code"
      v-model="user.address.zip_code">
    <br>
    <label for="city">City :</label>
    <input type="text"
      placeholder="city"
      v-model="user.address.city">
    <br>
    <h3>Contacts</h3>
    <label for="phone">Phone :</label>
    <input type="text"
      placeholder="phone"
      v-model="user.details.phone">
    <br>
    <label for="email">Email :</label>
    <input type="text"
      placeholder="email"
      v-model="user.details.email">
    <br>
    <h3>Security</h3>
    <label for="password">Password :</label>
    <input type="password"
      placeholder="password"
      v-model="user.details.password">
    <br>
    <br>

    <button @click="register">Register</button>
  </form>
</template>

<script>
import Api from '@/api'
export default {
  data() {
    return {
      user: {
        details: {
          username: null,
          email: null,
          phone: null,
          password: null
        },
        address: {
          street: null,
          zip_code: null,
          city: null
        }
      }
    }
  },
  methods: {
    async register() {
      const createUser = await Api.post('/register', this.user)
      
      if(createUser.data.success) {
        console.log('user created')
      }
    }
  }
}
</script>

<style>

</style>