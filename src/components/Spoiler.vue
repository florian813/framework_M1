<script setup>
import {ref} from 'vue'

const show = ref(false)

function show_to_false(){
    show.value = true;
}

</script>

<template>

<div class="spoiler">
    <button v-if="!show" class="btn btn-sm btn-dark" @click="show_to_false">spoiler</button>
    <slot v-if="show"></slot>
</div>
 
</template>

<style scoped>
.spoiler{
    display: inline-block;
    color: #adff2f;
}
</style>