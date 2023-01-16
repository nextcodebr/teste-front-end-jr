<template>
  <div class="login-view">
    <div class="box-login center">
      <div class="logo center">
        <img src="../assets/nextcode.png" alt="Nextcode" />
      </div>
      <NxTextbox label="E-mail" v-model="email" placeholder="Digite seu email"/>
      <NxTextbox label="Senha" type="password" v-model="password" placeholder="Digite sua senha"/>
      <NxButton class="center" @click="login">Login</NxButton>
    </div>
  </div>
</template>

<script>
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
      // armazenando na constante os dados do input
      const dataForm = { email: this.email, password: this.password }
      // validando se o e-mail e senha são válidos
      if (dataForm.email === 'admin@nextcode.com.br' && dataForm.password === 'Next@123') {
        localStorage.setItem('acesso', true)
        window.location.href = 'http://localhost:8080/cadastros'
      } else {
        alert('Usuário ou senha incorretos')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.center{
  margin: 0 auto;
}

.box-login {
  width: 400px;
  height: 400px;
  padding: themeSpacings(xsmall);
  background-color: themeColor(mainBg);
  color: white;
  margin-top: 180px
}
.nx-button{
  margin-top: 20px;
  border: none;
}

.nx-button:hover {
  background-color: #ff2698;
}
</style>
