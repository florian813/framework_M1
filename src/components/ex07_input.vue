<script setup>
import { ref } from 'vue'
const message = ref('Du Texte à Stylizer')
function clear(){
    message.value=""
}

</script>
 
<template>
    <div class="exo">
        <div class="mb-1" style="">
            <input class="form-control" id="Input1" v-model="message" >
        </div>
        <div class="" style="color:#adff2f;background:#000000">
            <h1>StyliZator</h1>
            <p>original > {{ message }}</p>
            <p>upper-case > {{ message.toUpperCase() }}</p>
            <p>lower-case > {{ message.toLowerCase() }}</p>
            <p>reverse > {{ message.split('').reverse().join('') }}</p>
        </div>
        <div>
            <button class="btn btn-dark" style="width:100%" @click="clear">Clear</button>
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

 .exo div {
    width: 95%
 }


</style>