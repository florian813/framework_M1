<script setup>
    import { ref,reactive } from 'vue'

    const button_text = ref('Update Data')

    const running = ref(false)

    let mon_interval = undefined;
    
    const time = reactive({
        hours: "??",
        minutes: "??",
        seconds:"??"
    })

    function changeButtonText(msg,event){
        button_text.value = msg
        event.target.style.color = 'red'
    }

    function updatedate(){
        const date = new Date()
        time.hours = date.getHours()
        time.minutes = date.getMinutes()
        time.seconds = date.getSeconds()
      }

    function start(){
        if(mon_interval != undefined) return
        updatedate()
        mon_interval = setInterval(()=>{
            updatedate()
        },1000)
        running.value=true
    }

    function stop(){
        if(mon_interval == undefined) return
        clearInterval(mon_interval)
        mon_interval = undefined
        running.value = false
    }
    
    start()

</script>

<template>
    <div class="exo">
            <h1 class="timer " :class="{started: running}">Il est {{ time.hours }}: {{ time.minutes }}: {{ time.seconds }}</h1>
            <button @click="start()"
                    class="btn btn-dark" id="button">start</button>
            <button @click="stop()"
                    class="btn btn-dark" id="button">stop</button>
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

 .started{
    display: flex;
    background-color: #adff2f;
    color: #a9a9a9;
 }

 .timer{
    display: flex;
    background-color: dark;
    color:#a9a9a9;
 }

</style>