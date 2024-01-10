<script setup>
    import { countries } from "../assets/sample_countries.js";
    import country from './Country.vue'
</script>

<template>
    <div class="exo">
        <h3>Countries Codes</h3>  
        <div class="country-list">
            <country v-for="(countrie,i) in countries" :key="countrie.name" :country_name="countrie.name" :country_code="countrie.callingCodes[0]"/>
        </div>
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
 .country-list{
    box-sizing: border-box;
    margin: 0;
    font-weight: 400;
}
 </style>