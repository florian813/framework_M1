<script setup>
    import {watch,ref,computed} from 'vue'
    import {User} from "../assets/User"

    const props =defineProps({
  user: {
    type: User,
  },
  
})

const phone =ref(props.user.phone)

function filterPhone(phoneValue){
    return phoneValue.trim().replaceAll(' ','')
}

watch(phone, (newPhone, oldPhone) => {
    let p = filterPhone(newPhone)
    if (p.length > 9){
        props.user.phone = oldPhone
        phone.value = oldPhone
    } 
    else {
        props.user.phone = newPhone
        phone.value = newPhone
    }
})

const phoneOk = computed(() => {
    let regex = RegExp('^[0-9]{9}$')
    let _phone = filterPhone(props.user.phone)
    let regOk = regex.test(_phone)
    return regOk
})

const nNameOk = computed(() => {
    return props.user.nick !== ''
})

</script>

<template>
        <div class="infos">
            <div class="entries">
                <div class="form-group">
                    <label>Nick Name</label>
                    <input class="form-control" v-model = "props.user.nick" :class="{ error: !nNameOk}">
                    <div class="error-msg" v-if="!nNameOk">Ne doit pas être vide</div>
                </div>
                <div class="form-group">
                    <label>Nom complet <span style="font-size: 0.75em">(sera re-formatté)</span></label>
                    <input class="form-control" v-model="props.user.fullname">
                </div>
                <div class="form-group">
                    <label>Adresse</label>
                    <input class="form-control" v-model="props.user.address">
                </div>
                <div class="form-group">
                    <label>Pays</label>
                    <input class="form-control custom-control" disabled v-model="props.user.country.name">
                </div>
                <div class="form-group">
                    <label>Téléphone (+{{ props.user.country.callingCodes[0] }})</label>
                        <input class="form-control" v-model="phone" :class="{ error: !phoneOk }">
                    <div class="error-msg" v-if="!phoneOk">Doit comporter 9 chiffres</div>
                </div>
            </div>
        </div>
</template>

<style scoped>

.infos {
    width: 300px;
    height: 300px;
    padding: 2em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.form-group {
    margin-bottom: 1.2em;
}
.error{
  background: lightpink;
  color: #000;
}
.error-msg{
  position: absolute;
  font-size: 0.8em;
  color: red;
}

</style>