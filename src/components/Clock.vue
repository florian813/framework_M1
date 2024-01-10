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
    <div class = "clock">
    <h1 class=timer :class="{ started: running }">
        Il est {{ time.hour }} : {{ time.min }} : {{ time.sec }}
    </h1>
    <br>
    <div class="button">
        <button class="btn btn-dark" :class="{invisible: running}" @click="start"><svg xmlns="http://www.w3.org/2000/svg" width="2.6rem" height="2.6rem" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
</svg></button>
        <button class="btn btn-dark" :class="{invisible: !running}" @click="stop"><svg xmlns="http://www.w3.org/2000/svg" width="2.6rem" height="2.6rem" fill="currentColor" class="bi bi-pause-btn" viewBox="0 0 16 16">
  <path d="M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/>
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
</svg></button>
    </div>
    </div>
</div>
</template>

<style scoped>
.exo {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

.button{
    margin-left: 1rem;
    margin-top: -0.5rem;
}
button{
    width: 4.8rem;
    height: 4.8rem;
}

.clock{
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>
