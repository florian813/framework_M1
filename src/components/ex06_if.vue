<script setup>
import { ref } from 'vue'

const awesome = ref(true)
const show = ref(true)

const visible = ref(true)

function visible1(){
    visible.value = !visible.value
}

</script>

<template>
    <div class="exo">
        <h1 v-if="awesome">Ce div risque de disparaitre...</h1>
        <h1 v-else></h1>

        <button @click="awesome = !awesome" class="btn btn-dark">Visible : {{ awesome }}</button>

        <h1 v-show="show">Ce div risque de disparaitre...</h1>

        <button @click="show = !show" class="btn btn-dark">Visible : {{ show }}</button>

        <h1 class="display" :class="{ invisible: !visible }">Ce div risque de disparaitre...</h1>

        <button @click="visible1" class="btn btn-dark">Visible : {{ visible }}</button>
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

 h1{
    background-color: #adff2f;
    color: #a9a9a9;
 }

.invisible{
    display: none;
}

</style>