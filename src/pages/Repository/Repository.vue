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
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ChevronLeftIcon } from 'vue-feather-icons';
import { Header, RepositoryInfo } from './styles';

export default Vue.extend({
  components: {
    ChevronLeftIcon,
    Header,
    RepositoryInfo,
  },
  created(): void {
    console.log(this.$route);
  },
});
</script>
