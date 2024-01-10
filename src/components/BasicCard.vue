<script setup>
defineProps({
  name: {
    type: String,
  },
  
})

</script>

<template>

<div class="basic-card card">
    <div class="card-body" style="width: 300px ;height: 140px;;">
        <div data-v-35501482="">
            <h4 data-v-35501482="" v-show="name.length >0">{{ name }}</h4>
            <p data-v-35501482="">
                <p data-v-35501482="" v-show="name.length >0">Nickname : {{name}} The Terrible</p>
            <p data-v-35501482="" v-show="name.length >0">Mail : {{name}}@truc.fr </p>
            </p>
            </div>
            </div>
            <div data-v-35501482="" style="flex: 1 1 0%;">
            </div>
            <div data-v-35501482="" class="card-footer" style="background: white none repeat scroll 0% 0%;color: #a9a9a9;"> Fiche de {{name.length <=0 ? "???" : name}}</div>
            </div>
</template>

<style scoped>

.basic-card[data-v-19a116ec] {
  width: 300px;
  height: 190px;
}

.basic-card[data-v-35501482] {
  border-color: #a9a9a9;
}
</style>