<template>
  <div>
    <img src="@/assets/githubLogo.svg" alt="Github explorer" />
    <Title>Explore repositórios no GitHub.</Title>
    <Form @submit.prevent="handlerAddRepository" :hasError="handlerError">
      <input
        placeholder="Digite o nome do repositório"
        type="text"
        v-model.lazy.trim="newRepository"
      />
      <button type="submit">Pesquisar</button>
    </Form>

    <Error v-show="handlerError">{{ messageErro }}</Error>

    <Repositories>
      <RepositoryContent
        v-for="repository in repositories"
        :key="repository.id"
      >
        <router-link :to=" {name: 'Repository'}">
          <img :src="repository.owner.avatar_url" :alt="repository.owner.login" />
          <div>
            <strong>{{ repository.full_name }}</strong>
            <p>{{ repository.description }}</p>
          </div>
          <ChevronRightIcon style="color: #cbcbd6" />
        </router-link>
      </RepositoryContent>
    </Repositories>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ChevronRightIcon } from 'vue-feather-icons';
import axiosApi from '@/services/axios';
import {
  Title, Form, Repositories, RepositoryContent, Error,
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
    Error,
  },
  data: () => ({
    newRepository: '',
    repositories: [] as RepositoryDTO[],
    localStoreRepositories: localStorage.getItem(
      '@GithubExplorerVue:repositories',
    ),
    handlerError: false,
    messageErro: '',
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
        this.handlerError = true;
        this.messageErro = 'Erro na busca por este repositórios';
        console.log(error);
      }
    },
    saveRepositoryLocalStore(): void {
      const parsedRepositories = JSON.stringify(this.repositories);
      localStorage.setItem(
        '@GithubExplorerVue:repositories',
        parsedRepositories,
      );
    },
  },
});
</script>
