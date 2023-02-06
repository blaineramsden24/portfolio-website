<script setup lang="ts">
defineProps<{
  age: string;
}>();
</script>

<template>
  <div class="about">
    <h1>A {{age}} year old full stack developer, Computer Science Masters</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
