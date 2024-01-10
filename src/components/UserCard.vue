<script setup>
    import {computed,watch} from 'vue'
    import {User} from "../assets/User"

    const props =defineProps({
  user: {
    type: User,
  },
  
})
</script>

<template>
<div class="card">
                <div style="display: flex ; flex-direction: row ; align-items: center">
                    <div>
                        <i class="bi bi-person-bounding-box" style="font-size: 2.2em;"></i>
                    </div>
                    <div style="flex: 1"></div>
                    <div class="info">
                        <div>
                            <span class="pseudo">{{ props.user.nick }}</span>
                        </div>
                        <div>
                            {{props.user.firstName()}} {{ props.user.lastName() }}
                        </div>
                    </div>
                </div>
                <div class="details">
                    <div>{{ props.user.address }} <br><span v-if="user.country.name">{{ props.user.country.name }}</span></div>
                    <div v-if="user.phone">(+{{props.user.country.callingCodes[0]}}) {{ props.user.phone }}</div>
                </div>
            </div>

</template>

<style scoped>

.card {
    width: 300px;
    height:200px;
}

.card {
    padding: 0.3em 1em ;
    margin-top: 3em;
    display: flex ; 
    flex-direction: column ; 
    justify-content: center ;
    font-size: 1.2em;
}

.pseudo {
    font-size: 1.2em;
    font-weight: bold;
}

.details {
  margin: 15px 10px;
  text-align: center;
  font-size: 0.8em;
}
</style>