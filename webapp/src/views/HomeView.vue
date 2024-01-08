<template>
  <div class="app-body">
    <LeftMenu />
    <div class="main-content-container">
      <main class="main-content">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import LeftMenu from '@/components/LeftMenu.vue'
</script>

<style></style>