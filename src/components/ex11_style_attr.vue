<script setup>
import { ref } from 'vue'

const color_tester= ref('greenyellow')
const background_tester= ref('darkslategray')

function clear(){
    color_tester.value = ''
    background_tester.value=''
}

</script>
 
<template>
    <div class="exo">
        <div style="width: 93%;">
            <h3>Props Style Tester</h3>
        </div>
        <div class="input">
            <span>Color </span> <span class="square" :style="{background:color_tester}"></span>
            <input class="form-control" id="Input1" v-model="color_tester" >
        </div>
        <div class="input">
            <span>Background </span> <span class="square" :style="{background:background_tester}"></span>
            <input class="form-control" id="Input1" v-model="background_tester" >
        </div>
        <div class="div_style" :style="{background:background_tester, color:color_tester}">
           <span style="margin-left: 1.2rem;">un div qui a du style !</span>
        </div>
        <div>
            <button class="btn btn-dark" style="width:100%;margin-top: 1.5rem;" @click="clear">Clear</button>
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

 .input{
    margin-top: 1.2rem;
    width: 93%;
 }
 .div_style{
    margin-top: 2rem;
    width: 93%;
    border: var(--bs-border-width) solid var(--bs-border-color);
    border-radius: var(--bs-border-radius);
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
 }
.square {
    display: inline-block;
    height: .7em;
    width: 1em;
    margin: 0 5px;
    border: 1px solid darkgray;
}
</style>