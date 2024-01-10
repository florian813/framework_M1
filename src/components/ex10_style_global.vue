<script setup>
import { ref } from 'vue'

const style_tester = ref('background: black ;\ncolor: greenyellow;\nfont-size: 1.2rem ;\nfont-weight: bold ;\n')

function clear(){
    style_tester.value = ''
}

</script>
 
<template>
    <div class="exo">
        <div style="width: 91%;">
            <h3>Global Style Tester</h3>
        </div>
        <div style="width: 93%;height: 15%; display: flex;">
            <textarea class="form-control input-sm" v-model="style_tester"></textarea>
            <button @click="clear" class="btn btn-warning" style="margin-left: 1rem;">Clear</button>
        </div>
        <div class="div_style" :style="style_tester">
           <span style="margin-left: 1.2rem;">un div qui a du style !</span>
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

 .div_style{
    margin-top: 2rem;
    width: 93%; 
    border: var(--bs-border-width) solid var(--bs-border-color);
    border-radius: var(--bs-border-radius);
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
 }


</style>