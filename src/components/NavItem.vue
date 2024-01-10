<script setup>
import {ref,onMounted} from 'vue'
  const props =defineProps({
    href:{
      type: String,
    }
  }
  )
  </script>

<template>
  <div class="nav-item">
    <a :href="href"><slot></slot></a>
  </div>
  </template>

<style scoped>

.nav-item {
    display: block;
    margin-bottom: 5px;
    font-size: 1.1em;
    color: inherit;
}
</style>
