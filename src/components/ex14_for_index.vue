<script setup>
import {ref} from 'vue';
import { countries } from "../assets/sample_countries.js";
const selected = ref(countries[0])
</script>
 
<template>
    <div class="exo">
        <div style="width: 80%;">
                <table class="table">
                    <tr>
                        <th></th>
                        <th class="country">Country</th>
                        <th class="calling-code">Calling Code</th>
                    </tr>
                    <tr v-for="(countrie,i) in countries" :key="countrie.name">
                        <th>{{ i }}</th>
                        <td>{{ countrie.name }}</td>
                        <td>{{ countrie.callingCodes[0] }}</td>
                    </tr>
                </table>
        </div>
        <div class="editor" >
            <legend>Editor</legend>
            <div class="group-form" style="display: flex; flex-direction: row;width: 100%;">
                <select class="form-select" style="width: 95%;" v-model="selected">
                    <option v-for="(countrie) in countries" :value="countrie">{{countrie.name}}</option>
                </select>
                <input class="form-control" style="width: 8%;margin-left: 1%;" v-model="selected.callingCodes[0]" type="text" >
            </div>
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

 .group-form{
    width: 93%;
 }

 .input{
    margin-top: 1.2rem;
    width: 93%;
 }

 .editor{
    border: 1px solid grey;
    border-radius: 5px;
    padding: 10px;
    width: 80%;
 }
.table{
    border: 1px solid grey;
    text-align: center;
    border-color: inherit;
}

.table tr {
    border: 1px solid grey;
    text-align: center;
    border-color: inherit;

}

.table td{
    border: 1px solid grey;
    text-align: center;
    border-color: inherit;
}

.table th{
    border: 1px solid grey;
    text-align: center;
    border-color: inherit;
}

</style>