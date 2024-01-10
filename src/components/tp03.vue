<script setup>
import { ref, onMounted } from 'vue';
import navItem from './NavItem.vue'
import Spoiler from './Spoiler.vue';

const titles = ref([]);

function getArticle(){
    let articles = document.getElementsByTagName('article');
    let title = document.getElementsByTagName('h1');
    for (let i=0; i<articles.length;i++){
        titles.value.push({href: '#'+articles[i].getAttribute('id'), innerHTML: title[i].innerHTML})
    }
}
onMounted(()=>{
        getArticle()
    })

</script>
<template src="./template.html">
    
</template>

<style scoped>
.tp3, .tp3 * {
    font-family: Special Elite,cursive;
}
.tp3 {
    height: 100%;
    max-width: 800px;
    margin: auto;
    background: black;
    display: flex;
    flex-direction: column;
    font-size: 1em;
}

#main-content {
    width: 100%;
    overflow: auto;
}

#navbar{
    width: 180px;
    display: flex;
    flex-direction: column;
}

 #main-header {
    font-size: 4em;
    text-shadow: 1px 1px 2px black;
    height: 80px;
    padding: 10px;
    background: url(../assets/imgs/DS_sun.jpg);
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #fff;
}

#main-footer {
    height: 30px;
    background: url(../assets/imgs/DS_sun.jpg);
    background-size: cover;
    background-position: bottom;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .7em;
    color: #fff;
}

#main-wrapper {
    height: 100%;
    margin: 10px 0;
    overflow: hidden;
    background: url(../assets/imgs/DS_ashen_one.png);
    background-size: cover;
    background-position: 0 -400px;
    padding: 10px;
    display: flex;
    color: #fff;
}
 </style>