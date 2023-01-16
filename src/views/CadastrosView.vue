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
      <div class="cadastro-campos">
        <NxTextbox label="Título" class="text-input" v-model="titulo" placeholder="Digite um título com até 100 caracteres" required />
        <NxTextbox label="URL da imagem" class="text-input" v-model="imagem" placeholder="Cole uma URL aqui" required />
      </div>
      <NxTextbox label="Resumo" v-model="resumo" placeholder="Fale sobre o tópico com até 300 caracteres" line />
    </div>
    <p>Você pode publicar agora ou deixar salvo como rascunho para depois.</p>

    <div class="container-radio">
      <input type="radio" name="tipo" v-model="tipo" value=false />
      <label for="publicar" class="text-radio">Publicar</label>
      <input type="radio" name="tipo" v-model="tipo" value=true />
      <label for="rascunho" class="text-radio">Salvar como rascunho</label>
      <NxButton class="btn-cadastro" @click="addCard">Salvar</NxButton>
    </div>
    <h3 v-if="hasTopicos">Tópicos cadastrados</h3>
    <h3 v-else>Nenhum tópico cadastrado</h3>
    <div class="card-topicos">
      <div v-for="(topico, index) in topicos" :key="topico.titulo">
        <NxCard
          :class="{rascunho: topico.tipo, publicacao: !topico.tipo}"
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
      imagem: '',
      tipo: false,
      data: {
        status: true,
        titulo: 'Tópicos cadastrados'
      }
    }
  },
  methods: {
    addCard () {
      if (this.titulo.trim() === '' || this.resumo.trim() === '' || this.imagem.trim() === '') {
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
      this.tipo = false
    },
    removerCard (index) {
      this.topicos.splice(index, 1)
    }
  },
  computed: {
    hasTopicos () {
      return this.topicos.length
    }
  }
}
</script>
<style lang="scss" scoped>
.nav-list{
  background-color: themeColor(mainBg);
  padding: themeSpacings(xxsmall);
}

.nav-itens {
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
  font-size: themeFontSize(medium);
  a{
    color: white;
    text-decoration: none;
  }
  a:hover{
    color: rgb(236, 153, 34);
  }
}

.cadastro-container{
  padding: 1.2rem;
  width: 1027px;
  margin: 0 auto;
  h2{
    padding-top: 2.6rem;
    margin-right: 27rem;
  }
}

.cadastro-form{
  margin-bottom: 30px;
  .cadastro-campos{
    display: flex;
    justify-content: space-between;
  }
  .text-input{
    width: 400px;
  }
}

.container-radio{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  .text-radio {
    margin-right: 30px;
    margin-left: 5px;
    font-weight: themeFontWeight(extraLight);
  }
  .btn-cadastro {
    margin-left: 500px;
    border: none;
  }
  .btn-cadastro:hover {
    background-color: #ff2698;
  }
}

.card-topicos{
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  h3{
    margin-right: 50.75rem;
    margin-top: 5rem;
    margin-bottom: 1.2rem;
  }
}

.card.rascunho {
  background-color: rgb(231, 148, 224);
}

.card.publicacao{
  background-color: rgb(186, 243, 255);
}
</style>
