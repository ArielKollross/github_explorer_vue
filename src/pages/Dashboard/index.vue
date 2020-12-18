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
        <Repositories>
          <RepositoryContent>
              <img src="https://avatars1.githubusercontent.com/u/6128107?v=4" alt="">
              <div>
                <strong>vuejs/vue</strong>
                <p>🖖 Vue.js is a progressive, incrementally-adoptable JavaScript
                framework for building UI on the web.</p>
              </div>
              <ChevronRightIcon  style="color: #cbcbd6"/>
          </RepositoryContent>

          <RepositoryContent>
              <img src="https://avatars1.githubusercontent.com/u/6128107?v=4" alt="">
              <div>
                <strong>vuejs/vue</strong>
                <p> Descrição do repo</p>
              </div>
              <ChevronRightIcon  style="color: #cbcbd6"/>
          </RepositoryContent>
        </Repositories>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ChevronRightIcon } from 'vue-feather-icons';
import {
  Title, Form, Repositories, RepositoryContent,
} from './styles';

export default Vue.extend({
  components: {
    Title,
    Form,
    Repositories,
    RepositoryContent,
    ChevronRightIcon,
  },
});
</script>
