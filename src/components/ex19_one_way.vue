<script setup>
import {ref} from 'vue'
import OneWayTest from './OneWayTest.vue';
const globalName= ref("Goon");

</script>

<template>
    <div class ="exo"> 
        <h3>One Way Binding</h3>
        <div data-v-7ed0f7e4="">
            <label data-v-7ed0f7e4="">(parent) globalName : </label>
            <input data-v-7ed0f7e4="" v-model="globalName">
            
        </div>
        <div class="one-way-test">
            <OneWayTest :name="globalName"/>
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
 .one-way-test {
  border: 1px solid darkgray;
  border-radius: 5px;
  padding: 10px;
}
.one-way-test{
  margin-top: 2em;
}

input{
    margin-top : 1rem;
    margin-left: 3.2rem;
}
</style>