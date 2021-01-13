<template>
  <div>
      <Header>
        <img src="@/assets/githubLogo.svg" alt="Github explorer" />
        <router-link :to="{ name: 'Home'}">
        <ChevronLeftIcon style="color: #cbcbd6" />
            <span>
            voltar
            </span>
          </router-link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
          :src="repository.owner.avatar_url" :alt="repository.owner.login">

          <div>
            <strong>{{  repository.full_name }}</strong>
            <p>{{ repository.description }}</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>{{ repository.stargazers_count }}</strong>
            <span>Stars</span>
          </li>

          <li>
            <strong>{{ repository.forks_count }}</strong>
            <span>Forks</span>
          </li>

          <li>
            <strong>{{  repository.open_issues_count }}</strong>
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
import api from '@/services/axios';
import {
  Header, RepositoryInfo, Issues, IssuesContent,
} from './styles';

interface RepositoryDTO {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

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
    await this.getRepository();
  },
  methods: {
    async getIssues(): Promise<void> {
      try {
        const response = await api.get(`repos/${this.$route.params.repo_name}/issues`);

        this.issues.push(response.data);
      } catch (error) {
        this.handlerError = true;
        this.messageErro = 'Erro ao buscar isses do repositório';
      }
    },
    async getRepository(): Promise<void> {
      try {
        const response = await api.get(`repos/${this.$route.params.repo_name}`);

        this.repository = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
</script>
