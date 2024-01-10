<script setup>
    import PostIt from './PostIt.vue';

    const yellow = "yellow"
    const lightpink = "lightpink"
    const lightblue = "lightblue"
</script>

<template>
        <div class="exo">
            <PostIt :bg=lightpink>
                    TP FWF à rendre ! 
            </PostIt>
            <PostIt :bg=yellow>
                <template #title>
                    Courses:
                </template>
                <ul>
                    <li>poulet</li>
                    <li>maroilles</li>
                    <li>crème fraiche</li>
                    <li>frites au four</li>
                </ul>
            </PostIt>
            <PostIt :bg=lightblue>
                    Anniv Flo 07/01/2024
            </PostIt>
        </div>
</template>

<style scoped>
 .exo{
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
 }

</style>