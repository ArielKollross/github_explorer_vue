<template>
  <div>
    <img src="@/assets/githubLogo.svg" alt="Github explorer">
    <!-- <img :src="Logo" alt="Github explorer"> -->
    <Title>Explore repositórios no GitHub.</Title>
    <Form action="">
      <input
        placeholder="Digite o nome do repositório"
        type="text"
      >
      <button type="submit">Pesquisar</button>
    </Form>
        <Repository>
            <div>
              <img src="https://avatars1.githubusercontent.com/u/6128107?v=4" alt="">
              <strong>vuejs/vue</strong>
              <p>🖖 Vue.js is a progressive, incrementally-adoptable JavaScript
              framework for building UI on the web.</p>
            </div>

            <div>
              <img src="https://avatars1.githubusercontent.com/u/6128107?v=4" alt="">
              <strong>vuejs/vue</strong>
              <p>🖖 Vue.js is a progressive, incrementally-adoptable JavaScript
              framework for building UI on the web.</p>
            </div>

            <div>
              <img src="https://avatars1.githubusercontent.com/u/6128107?v=4" alt="">
              <strong>vuejs/vue</strong>
              <p>🖖 Vue.js is a progressive, incrementally-adoptable JavaScript
              framework for building UI on the web.</p>
            </div>
        </Repository>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Title, Form, Repository } from './styles';

export default Vue.extend({
  components: {
    Title,
    Form,
    Repository,
  },
});
</script>
