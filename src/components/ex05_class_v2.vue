<script setup>

import { ref, reactive } from 'vue'

const time = reactive({
    hour: '??',
    min: '??',
    sec: '??'
})

const running = ref(false)


let interval = undefined ;

function update(){
    let date = new Date()
    time.hour = date.getHours(),
    time.min = date.getMinutes(),
    time.sec = date.getSeconds()
}

function start(){
    
    // pour eviter d'en lancer plusieurs en //
    if (interval != undefined) return 

    update()
    running.value = true ;
    interval = setInterval(()=>{
        update()
    }, 1000)
}
 
function stop(){

    if (interval == undefined) return

    clearInterval(interval)
    interval = undefined 
    running.value = false
}

start()

</script>

<template >
<div class="exo">

    <h1 class=timer :class="{ started: running }">
        Il est {{ time.hour }} : {{ time.min }} : {{ time.sec }}
    </h1>
    <br>
    <div class="buttons">
        <button class="btn btn-dark" :class="{invisible: running}" @click="start">Start</button>
        <button class="btn btn-dark" :class="{invisible: !running}" @click="stop">Stop</button>
    </div>
</div>
</template>

<style scoped>
.exo {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.timer {
    border-radius: 5px;
    background-color: black;
    padding: 15px;
    color: darkgray ;
}
.started {
    background-color: greenyellow;
}
.invisible{
    display: none;
}

</style>
