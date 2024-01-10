<script setup>
    const message = "HELLO WORLD"

    function decorate(txt){
        return "-->" + txt + "<--"
    }

    function mirror(txt){
        txt = txt.split('').reverse().join('')
        txt = decorate(txt)
        return txt
    }
</script>

<template>
    <div class="ex02-app">
        <div><h1>{{ message }}</h1></div>
        <div style="margin-top: 15rem;"><h1>{{"-->"+message.split('').reverse().join('')+"<--"}}</h1></div>
        <div style="margin-top: 25rem;"><h1>{{mirror(message)}}</h1></div>
    </div>
</template>

<style scoped>
.ex02-app{
    width:100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
}
</style>