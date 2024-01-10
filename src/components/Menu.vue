<script setup>
    import {computed,watch} from 'vue'
    import {User} from "../assets/User"

    const props = defineProps({
  nickname: {
    type: String,
  },
  
})
</script>

<template>
    <div class="menu">
        <div class="brand">User Editor</div>
        <div style="flex: 1 1 0%;"></div>
        <div class="nick">
            {{ props.nickname }}</div>
    </div>
</template>

<style scoped>
.menu{
    margin-bottom: 3em;
}
.menu{
    width: 100%;
    background-color: var(--bs-body-bg);
    padding: 1em 2em;
    display: flex;
    align-items: center;
    justify-content: center;
}

.brand{
    font-size: 2em;
}

.nick {
    padding-left: 0;
    display: block;
    font-size: 1.5em;
    font-weight: 700;
    color: #adff2f;
}
</style>