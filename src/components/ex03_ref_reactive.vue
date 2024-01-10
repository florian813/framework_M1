<script setup>
    import { ref,reactive } from 'vue'

    const message = ref("")

    const time = reactive({
        hours: "??",
        minutes: "??",
        seconds:"??"
    })

    message.value="HELLO WORLD"

    const date = new Date()
    time.hours = date.getHours()
    time.minutes = date.getMinutes()
    time.seconds = date.getSeconds()

</script>

<template>
    <div class="exo">
            <h1>{{message}}</h1>
            
            <h1>Il est {{ time.hours }}h {{ time.minutes }}m {{ time.seconds }}s</h1>
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
</style>