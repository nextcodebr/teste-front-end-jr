<template>
  <div class="cadastros-view">
    <nav class="nav-list">
      <ul class="nav-itens">
        <li><a href="#"><img src="@/assets/nextcode.png" alt="Logo" /></a></li>
        <li><a href="/login">Sair</a></li>
      </ul>
    </nav>
  <section class="cadastro-container">
    <h2>Cadastro de tópicos para discussão</h2>
    <div class="cadastro-form">
      <div class="cadastro-input">
        <NxTextbox label="titulo" v-model="titulo" required />
        <NxTextbox label="url da imagem" v-model="imagem" required />
      </div>
      <NxTextbox label="resumo" v-model="resumo" line />
    </div>
    <div class="container-radio">
      <input type="radio" name="tipo" v-model="tipo" value=false />
      <label for="publicar">Publicar</label>
      <input type="radio" name="tipo" v-model="tipo" value=true />
      <label for="rascunho">Rascunho</label>
    </div>
    <NxButton @click="cadastrar" v-on:click="addTopico">Salvar</NxButton>
    <h3>Tópicos cadastrados</h3>
    <div class="card-topicos">
      <div v-for="(topico, index) in topicos" :key="topico.titulo">
        <NxCard
          v-bind:class="{rascunho:JSON.parse(topico.tipo)}"
          :tipo= 'topico.tipo'
          :titulo= 'topico.titulo'
          :resumo= 'topico.resumo'
          :imagem= 'topico.imagem'
          @removerCard= 'removerCard(index)'
        >
        <h1>{{ topico.titulo }}</h1>
        </NxCard>
      </div>
    </div>
  </section>
  </div>
</template>

<script>

export default {
  components: {
    NxTextbox: () => import('@/components/Textbox'),
    NxButton: () => import('@/components/Button'),
    NxCard: () => import('@/components/Card')
  },
  data () {
    return {
      topicos: [],
      titulo: '',
      resumo: '',
      imagem: ''
    }
  },
  methods: {
    addTopico () {
      if (this.titulo.trim() === '' || this.resumo.trim() === '' || this.imagem.trim() === '' || this.tipo.trim() === '') {
        alert('Preencha todos os campos')
        return
      }
      this.topicos.push({
        titulo: this.titulo,
        resumo: this.resumo,
        imagem: this.imagem,
        tipo: this.tipo
      })
      localStorage.setItem('topicos', JSON.stringify(this.topicos))
      this.titulo = ''
      this.resumo = ''
      this.imagem = ''
      this.tipo = ''
    },
    removerCard (index) {
      this.topicos.splice(index, 1)
      console.log('estou aqui')
    }
  },
  computed: {}
}
</script>
<style lang="scss" scoped>

</style>
