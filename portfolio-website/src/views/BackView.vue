<script setup lang="ts">
import HelloWorld from "@/App.vue";
</script>

<template>
  <div class="about">
    <h1 class = "green">Back End Projects</h1>
      <ul>
    <li><router-link to="/back/mood-music"> 'Mood Music' Generative Adversarial Network</router-link> &#8594; Created an AI which produced music capable of projecting a mood onto a user </li>
        <li><a class = "green" > SupremeNewYork.com Auto Purchase Bot</a> </li>
    <li>Milk</li>
    </ul>
  </div>
</template>



<style scoped>
@media (min-width: 1024px) {
  .about {
    align-items: center;
  }.colour{
       display: flex;
       align-items: center;
       color: hsla(160, 100%, 37%, 1);
     }
}
</style>