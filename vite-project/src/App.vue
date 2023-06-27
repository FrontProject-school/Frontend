<script setup>
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'

components: {
  PageHeader,
  PageFooter
}
</script>

<template>
  <PageHeader/>
  <div style="min-height: 600px;">
    <router-view></router-view>
  </div>
  <PageFooter/>
</template>

<style>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
