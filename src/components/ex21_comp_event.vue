<script setup>
    import {ref} from 'vue'
    import input_text from './TextInput.vue'

    const text= ref('')

    let min = 10;

    function text_valid(t){
        if (t.length >= min){
            text.value=t;
        }
    }

</script>

<template>
    <div class="exo">
        <div>
            <input_text :min=min @text='text_valid'/>
        </div>
        <div class="valid">
            Texte validé : {{ text }}
        </div>
    </div>
    

</template>

<style scoped>
 .exo{
    margin: auto;
    width: 500px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 }
.valid {
  margin-top: .2em;
  width: 100%;
  color: #adff2f;
  text-align: left;
  font-size: 2em;
}
 </style>