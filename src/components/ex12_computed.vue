<script setup>
import { reactive, computed } from 'vue'

const msg = reactive({
  msg: 'Hello World',
  short_limit: 5 
})

const type = computed(() => {
  return msg.msg.length > msg.short_limit ? 'long' : 'short'
})
</script>
 
<template>
    <div class="exo">

        <div class="input">
            <span>Message </span>
            <input class="form-control" id="Input1" v-model="msg.msg" >
        </div>
        <div class="input">
            <span>Short limit </span>
            <input class="form-control" id="Input1" v-model="msg.short_limit" >
        </div>
        <div style="margin-top: 1.2rem;color:#adff2f;width: 92%;font-size: 1.5rem;">
           <span>Computed type: {{type}}</span>
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
</style>