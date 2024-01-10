<script setup>
    import { ref,reactive } from 'vue'

    const button_text = ref('Update Data')
    
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

</script>

<template>
    <div class="exo">
            <h1>Il est {{ time.hours }}h {{ time.minutes }}m {{ time.seconds }}s</h1>
            <button @click="updatedate" 
                    @mouseenter="changeButtonText('clique !',$event)"
                    @mouseout="changeButtonText('reviiennnss !',$event)" 
                    class="btn btn-dark" id="button">{{ button_text }}</button>
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