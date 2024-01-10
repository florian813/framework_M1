<script setup>
import {ref,onMounted,computed} from 'vue';
import { User } from '../assets/User';
import UserForm from './UserForm.vue';
import UserCard from './UserCard.vue';
import Menu from './Menu.vue'
import { countries } from "../assets/sample_countries.js";

onMounted(()=>{
    save()
})

const user = ref(new User({
    nick: 'Ironman',
    fullname: 'tony stark',
    address: '666 Highway to Hell',
    country: countries[0],
    phone: '123456789'}));

const user_save = ref(user.value.clone())

function save(){
    user_save.value = user.value.clone();
}

function reset(){
    user.value = user_save.value.clone()
}

const fNameOk = computed(() => {
    return user.firstName() !== ''
})

const lNameOk = computed(() => {
    return user.lastName() !== ''
})

const fullNameOk = computed(() => {
    return fNameOk && lNameOk
})

const nNameOk = computed(() => {

    return user.value.nick !== ''
})

function filterPhone(phoneValue){
    return phoneValue.trim().replaceAll(' ','')
}

const phoneOk = computed(() => {
    let regex = RegExp('^[0-9]{9}$')
    let phone = filterPhone(user.value.phone)
    let regOk = regex.test(phone)
    return regOk
})

const formOk = computed(()=>{
    return nNameOk.value && fullNameOk.value && phoneOk.value
})

</script>

<template>
    <Menu :nickname="user_save.nick"/>
    <div class="exo">
        
        <div style='display: flex; flex-direction: row;'>
            <UserForm :user="user"/>
            <UserCard :user="user"/>
        </div>
        <div style='display: flex; flex-direction: row;margin-top: 5em;'>
            <button class="btn btn-primary" :disabled="!formOk" @click="save">Enregistrer</button>
                &nbsp;
            <button class="btn btn-secondary" @click="reset">Reset</button>
        </div>
    </div>
</template>

<style scoped>
.exo{
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>