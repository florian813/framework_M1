<script setup>
import {ref,computed} from 'vue';

const props =defineProps({
  min: {
    type: Number,
    default: 10,
  },
  
})

const text=ref('')

const text_verif = computed(()=> {
        return text.value.length >= props.min;
});

const text_verif_button = computed(()=> {
    return text.value.length > 0;
});

function clear(){
    text.value='';
}

</script>

<template>
    <div class="text-input">
        <input class="form-control" v-model="text" type="text" placeholder="Entrez au moins 5 carateres (+ENTER)" :class="{'error':!text_verif}" @keypress.enter="$emit('text',text)">
        <button class="btn btn-secondary" @click="clear" :disabled="!text_verif_button">Clear</button>
    </div>
</template>

<style scoped>
.text-input{
    width: 100%;
    border: 1px solid darkgrey;
    border-radius: 5px;
    padding: 1em;
    display: flex;
    
}

input{
    width: 25em;
}

input::placeholder {
        color: #000;
        opacity: 0.65;
      }

button{
    margin-left: 1rem;
}

.error{
  background-color: pink;
  color: #000;
}


</style>