<template>
  <div>
    <img src="@/assets/githubLogo.svg" alt="Github explorer">
    <Title>Explore repositórios no GitHub.</Title>
    <Form @submit.prevent="handlerAddRepository">
      <input
        placeholder="Digite o nome do repositório"
        type="text"
        v-model.lazy.trim="newRepository"
      >
      <button type="submit">Pesquisar</button>
    </Form>
        <Repositories v-for="repository in repositories" :key="repository.id">
          <!-- <RepositoryContent>
              <img src="https://avatars1.githubusercontent.com/u/6128107?v=4" alt="">
              <div>
                <strong>vuejs/vue</strong>
                <p>🖖 Vue.js is a progressive, incrementally-adoptable JavaScript
                framework for building UI on the web.</p>
              </div>
              <ChevronRightIcon  style="color: #cbcbd6"/>
          </RepositoryContent> -->

          <RepositoryContent>
              <img :src="repository.owner.avatar_url" :alt="repository.owner.login">
              <div>
                <strong>{{repository.full_name}}</strong>
                <p> {{repository.description}}</p>
              </div>
              <ChevronRightIcon  style="color: #cbcbd6"/>
          </RepositoryContent>
        </Repositories>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ChevronRightIcon } from 'vue-feather-icons';
import axiosApi from '@/services/axios';
import {
  Title, Form, Repositories, RepositoryContent,
} from './styles';

interface RepositoryDTO {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export default Vue.extend({
  components: {
    Title,
    Form,
    Repositories,
    RepositoryContent,
    ChevronRightIcon,
  },
  data: () => ({
    newRepository: '',
    repositories: [] as RepositoryDTO[],
  }),
  methods: {
    async handlerAddRepository(): Promise<void> {
      try {
        const response = await axiosApi.get(`repos/${this.newRepository}`);

        this.repositories.push(response.data);

        console.log(this.repositories);
      } catch (error) {
        console.log(error);
      }
    },
    // async handlerAddRepository(): Promise<void> {
    //   const response = await axiosApi.get(`repos/${this.newRepository}`);

    //   return console.log(response.data);
    // },
  },
  computed: {
    setRepositoryLocalStore(): void {
      return localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(this.repositories));
    },
  },
});
</script>
