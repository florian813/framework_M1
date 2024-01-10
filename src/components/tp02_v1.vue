<script setup>
import {ref,onMounted,computed} from 'vue';
import { User } from '../assets/User';
import UserForm from './UserForm.vue';
import UserCard from './UserCard.vue';
import { countries } from "../assets/sample_countries.js";
import { Modal } from 'bootstrap';

const modalElement = ref(null)
let modal = undefined

onMounted(()=>{
    modal = new Modal(modalElement.value)
})

const user = ref(new User({
    nick: '',
    fullname: 'tony stark',
    address: '666 Highway to Hell',
    country: countries[0],
    phone: ''}));

function save(){
    modal.show()
}

function reset(){
    user.value = new User({
    nick: '',
    fullname: 'tony stark',
    address: '666 Highway to Hell',
    country: countries[0],
    phone: ''});
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
    <div class="exo">
        <div style='display: flex; flex-direction: row;'>
            <UserForm :user="user"/>
            <UserCard :user="user"/>
        </div>
        <div style='display: flex; flex-direction: row;margin-top: 5em;'>
            <button class="btn btn-primary" :disabled="!formOk" @click="save">Enregistrer</button>
                &nbsp;
            <button class="btn btn-secondary" @click="reset">Effacer</button>
        </div>
    </div>

     <!-- Modal -->
    <div ref="modalElement" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Enregistrement de <span style="    color: red;font-weight: 700;">{{ user.nick }}</span></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
            <p class="my-4">... cette fonctionnalité n'est pas encore implémentée !</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
        </div>
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