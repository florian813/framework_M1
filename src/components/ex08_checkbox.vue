<script setup>
import { ref } from 'vue'

const checked = ref(true)
</script>
 
<template>
    <div class="exo">
        <div class="mb-1" style="">
            <input type="checkbox" id="checkbox" v-model="checked" /> Visible
        </div>
        <div v-if="checked">
            <h1 class="h1" >Ce div risque de disparaitre ...</h1>
        </div>
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

 .h1{
    background-color: #adff2f;
    color: #a9a9a9;
 }


</style>