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
        <Repositories>
          <RepositoryContent v-for="repository in repositories" :key="repository.id">
              <img :src="repository.owner.avatar_url" :alt="repository.owner.login">
              <div>
                <strong>{{repository.full_name}}</strong>
                <p> {{repository.description}}</p>
              </div>
              <ChevronRightIcon  style="color: #cbcbd6" />
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
    localStoreRepositories: localStorage.getItem('@GithubExplorerVue:repositories'),
  }),
  created(): void {
    if (this.localStoreRepositories) {
      this.repositories = JSON.parse(
        localStorage.getItem('@GithubExplorerVue:repositories') || '{}',
      );
    }
  },
  methods: {
    async handlerAddRepository(): Promise<void> {
      try {
        const response = await axiosApi.get(`repos/${this.newRepository}`);

        this.repositories.push(response.data);

        this.saveRepositoryLocalStore();
      } catch (error) {
        console.log(error);
      }
    },
    saveRepositoryLocalStore(): void {
      const parsedRepositories = JSON.stringify(this.repositories);
      localStorage.setItem('@GithubExplorerVue:repositories', parsedRepositories);
    },
    // async handlerAddRepository(): Promise<void> {
    //   const response = await axiosApi.get(`repos/${this.newRepository}`);

    //   return console.log(response.data);
    // },
  },
});
</script>
