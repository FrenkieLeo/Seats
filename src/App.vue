<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Seats from './components/Seats.vue'
</script>

<template>
  <div id="container">
    <Seats msg="Seats" />
  </div>
  
</template>

<style scoped>
#container{
  background: #002F43;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
</style>
