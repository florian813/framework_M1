<script setup>
import {ref,watchEffect,computed,watch} from 'vue';
const datakg = ref(null)
const datag = ref(null)
const message = computed(() => {
    return datakg.value < 100 ? "Trop léger..." : "Wow, c'est lourd !"
});

const showMessage= ref(false);

watchEffect(() => {
  if (datakg.value) {
    datag.value = datakg.value * 1000;
  }
  if (datakg.value == 0) {
    datag.value = 0;
  }
})

watch(message, async (newMessage) =>{
    if (message != newMessage) {
        showMessage.value = true;
        setTimeout(()=>{
            showMessage.value=false;
        },2000);
    }
})

watchEffect(() => {
  if (datag.value) {
    datakg.value = datag.value / 1000;
  }
  if (datag.value == 0) {
    datakg.value = 0;
  }
})


</script>
 
<template>
    <div class="exo">
        <div style="width: 90%;">
            <div class="input-group">
                <label class="input-group-text">
                    kg
                </label>
                <input class ="form-control" type="number" step=1 v-model="datakg">
            </div>
            <div class="input-group" style="margin-top: 1rem;">
                <label class="input-group-text">
                    g
                </label>
                <input class="form-control" type="number" step=1 v-model="datag">
            </div>
        </div>
        <div class="conclusion" style="margin-top:1rem">
            <div data-v-9f25f208="" :style="{opacity:showMessage ? 1 : 0}">{{ message }}</div>
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

 .conclusion{
    width: 90%;
    border: 1px solid darkgray;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #adff2f;
    font-size: 4em;
 }  

 .message {
    transition: opacity 0.8s;
 }

</style>