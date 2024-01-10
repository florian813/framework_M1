<script setup>
    import {computed} from 'vue'
    const props = defineProps({name: String})
    
    const localName= computed(() => props.name)

</script>

<template>
        <div data-v-7ed0f7e4="">
            <label >(fils->props) props.name :</label>
            <input :value="localName">
        </div>

</template>

<style scoped>
input{
    margin-left: 2rem;
}

</style>