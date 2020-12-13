<template>
  <div>
    <img src="@/assets/githubLogo.svg" alt="Github explorer">
    <!-- <img :src="Logo" alt="Github explorer"> -->
    <Title>Explo repositórios no GitHub.</Title>
    <Form action="">
      <input type="text">
      <button type="submit">Pesquisar</button>
    </Form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Title, Form } from './styles';

export default Vue.extend({
  components: {
    Title,
    Form,
  },
});
</script>
