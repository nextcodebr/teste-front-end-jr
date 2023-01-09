<template>
  <div class="login-view">
    <div class="box-login">
      <img src="../assets/nextcode.png" alt="Nextcode" />
      <NxTextbox label="E-mail" v-model="email" placeholder="Digite seu email"/>
      <NxTextbox label="Senha" type="password" v-model="password" placeholder="Digite sua senha"/>
      <NxButton @click="login">Login</NxButton>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  components: {
    NxTextbox: () => import('@/components/Textbox'),
    NxButton: () => import('@/components/Button')
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const dataForm = { email: this.email, password: this.password }
      console.log(dataForm)
      const response = axios.post('http://localhost:8080/login', {
        email: dataForm.email,
        password: dataForm.password
      })
      if (response.status === 200) {
        localStorage.setItem('user', response.data.user)
      }
      console.log(response)
    }
  }
}
</script>
<style lang="scss" scoped>
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.box-login {
  width: 400px;
  height: 400px;
  padding: 1.8rem;
  margin: 0 auto;
  background-color: themeColor(mainBg);
  color: white;
}

</style>
