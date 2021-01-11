<template>
  <div>
      <Header>
        <img src="@/assets/githubLogo.svg" alt="Github explorer" />
        <ChevronLeftIcon style="color: #cbcbd6" />
        <router-link :to="{ name: 'Home'}">
            <span>
            voltar
            </span>
          </router-link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
          src="https://avatars2.githubusercontent.com/u/21115260?v=4" alt="">

          <div>
            <strong>Nome/nome_repo</strong>
            <p>descrição de repo</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>13</strong>
            <span>Stars</span>
          </li>

          <li>
            <strong>5</strong>
            <span>Forks</span>
          </li>

          <li>
            <strong>4</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>

      </RepositoryInfo>

      <Issues>
        <IssuesContent
          v-for="(issue, index) in issues[0]" :key="index"
        >
          <router-link to="/" :href="issue.html_url">
            <div >
              <strong>{{ issue.title }}</strong>
              <p>{{ issue.user.login }}</p>
            </div>
            <ChevronRightIcon style="color: #cbcbd6" />
          </router-link>
        </IssuesContent>
      </Issues>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ChevronLeftIcon, ChevronRightIcon } from 'vue-feather-icons';
import axiosApi from '@/services/axios';
import {
  Header, RepositoryInfo, Issues, IssuesContent,
} from './styles';

interface IssueDTO {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

export default Vue.extend({
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
    Header,
    RepositoryInfo,
    Issues,
    IssuesContent,
  },
  data: () => ({
    issues: [] as IssueDTO[],
    repository: '',
    handlerError: false,
    messageErro: '',
  }),
  async created(): Promise<void> {
    await this.getIssues();
  },
  methods: {
    async getIssues(): Promise<void> {
      try {
        const response = await axiosApi.get(`repos/${this.$route.params.repo_name}/issues`);

        this.issues.push(response.data);
      } catch (error) {
        this.handlerError = true;
        this.messageErro = 'Erro ao buscar isses do repositório';
      }
    },
  },
});
</script>
