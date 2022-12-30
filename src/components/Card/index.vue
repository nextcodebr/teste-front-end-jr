<template>
  <div class="card" :tipo="tipo">
    <img :src="imagem">
    <strong>{{ titulo }}</strong>
    <p>{{ resumo }}</p>
    <nx-button type="danger" @click="handleExcluir">Excluir</nx-button>
  </div>
</template>

<script>
import NxButton from '@/components/Button'
export default {
  name: 'NxCard',
  props: {
    titulo: {
      type: String,
      default: ''
    },
    resumo: {
      type: String,
      default: ''
    },
    tipo: {
      type: String,
      default: ''
    },
    imagem: {
      type: String,
      default: ''
    }
  },
  components: {
    NxButton
  },
  methods: {
    handleExcluir () {
      this.$emit('excluir', this.titulo)
    }
  }
}
</script>

<style src="./styles.scss" scoped lang="scss" />
