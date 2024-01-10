<script setup>
    const props = defineProps({
        bg: {
           type: String
        }
    })

</script>

<template>
        <div class="post-it" :style="{ background: props.bg }">
        <div style="font-size:1.8em;text-decoration:underline;"><slot name="title"></slot></div>
        
            <slot></slot>
        </div>

</template>

<style scoped>

.post-it {
    width: 160px;
    height: 160px;
    border: 1px dolid black solid;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #000;
    font-family: Courier New,Courier,monospace;
    font-size: .7em;
}
.post-it {
    margin: 5px;
}

</style>