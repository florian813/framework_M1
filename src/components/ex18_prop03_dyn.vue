<script setup>
import {ref} from 'vue'
import BasicCard from './BasicCard.vue';


const _name = ref('')
</script>

<template>
    <div class ="exo"> 
        <input class="input-sm" type="text" placeholder="entrez votre nom" v-model="_name">
        <BasicCard :name="_name" />
    </div>

</template>

<style scoped>
 .exo{
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 }

</style>