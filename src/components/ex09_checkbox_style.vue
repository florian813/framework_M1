<script setup>
import { ref } from 'vue'

const hilighted = ref(true)
const big = ref(false)

</script>
 
<template>
    <div class="exo">
        <div class="tester" style="width: 91%;">
            <h3>Class Tester</h3>
        </div>
        <div style="width: 91%;">
            <span>Hilighted</span>
            <input type="checkbox" id="checkbox" v-model="hilighted" style="margin-left:3px"/>
            <span style="margin-left:25px">Big</span>
            <input type="checkbox" id="checkbox" v-model="big" style="margin-left:3px" />
        </div>
        <div class="h1" :class="{ hiligh: hilighted , big1 : big}">
           <span>un div qui a du style!</span>
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
    margin-top: 8px;
    background-color: #000000;
   
    width: 93%;
    font-weight: bolder;
    font-size: 1rem;
    border: var(--bs-border-width) solid var(--bs-border-color);
    border-radius: var(--bs-border-radius);
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    
 }

 .hiligh{
    color: #adff2f;
 }

 .big1{
    font-size: 2.2rem;
 }
 .h1 span {
    margin-left: 1.5%;
 }

</style>