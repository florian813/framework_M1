<script setup>
    import { ref, onMounted ,watch,computed} from 'vue'
    import { countries } from "../assets/sample_countries.js";
    import { Modal } from 'bootstrap';
    
    const myModal =ref (null);
    const nickname = ref('')
    const nomComplet = ref ('Tony Stark')
    const nomCompletMaj = ref("Tony STARK")
    const adresse = ref ('666 Highway to Hell')
    const pays = ref(countries[0])
    const numero = ref("")
    let m = undefined

    onMounted(()=>{
        m = new Modal(myModal.value)
        nomCompletEnMaj();
    })

    function showModal(){
        m.show()
    }

    function clear() {
        nickname.value = ""
        nomComplet.value = ""
        adresse.value = ""
        numero.value =""
        nomCompletMaj.value = ""
    };

    const isDisabled = computed(()=> {
        return (nickname.value.length !== 1 || numero.value.length !== 9);
    });

    watch(numero, async (newNumero, oldNumero) =>{
        if (newNumero.replace(/\s/g,'').replace(/\D/g,'').length> 9) {
            numero.value = oldNumero;
        }
    });

    function nomCompletEnMaj(){
        const [prenom, nom] = nomComplet.value.split(' ');
        const nomMaj = nom.toUpperCase();
        nomCompletMaj.value = prenom +" "+ nomMaj;
    }


</script>
 
<template>
    <div class="exo">
       <div class="infos">
            <div class="entries">
                <div class="form-group">
                    <label>Nick Name</label>
                    <input class="form-control" :class="{'error': nickname == 0}" v-model="nickname">
                    <div class="error-msg" v-show="nickname.length == 0" >Ne doit pas être vide</div>
                </div>
                <div class="form-group">
                    <label>Nom complet <span style="font-size:0.70rem">(sera re-formatté)</span></label>
                    <input class="form-control" v-model="nomComplet">
                </div>
                <div class="form-group">
                    <label>Adresse</label>
                    <input class="form-control" v-model="adresse">
                </div>
                <div class="form-group">
                    <label>Pays</label>
                    <input class="form-control" v-model="pays.name" disabled>
                </div>
                <div class="form-group">
                    <label>Téléphone (+{{ pays.callingCodes[0] }})</label>
                    <input class="form-control" v-model="numero" :class="{'error': numero.replace(/\s/g,'').replace(/\D/g,'').length != 9}">
                    <div class="error-msg" v-show="numero.replace(/\s/g,'').replace(/\D/g,'').length < 9" >Doit comporter 9 chiffres</div>
                </div>
            </div>
            <div class="card" style="max-width: 18rem;">
                <div class="card-body" style="display: flex; flex-direction: column;">
                    <div class="card-body" style="display: flex; flex-direction: row;">
                        <div style="box-sizing: border-box ;margin-left: -1rem ;font-weight: 400;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-bounding-box" viewBox="0 0 16 16">
                                        <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            </svg>
                        </div>
                        <div class="info" style="display: flex; flex-direction: column;"></div>
                        <div class="nom-complet" style="margin-left: 1rem;">{{ nickname }} </div>
                        <div class="nom-complet" style="margin-left: 1rem;">{{ nomComplet }} </div>
                        </div>
                        <div style="display: flex;flex-direction: column;align-items:center" >
                            <div>{{ adresse }}</div>
                            <br>
                            <span>{{ pays.name }}</span>
                        </div>
                        <div style="display: flex;flex-direction: column;align-items:center" >
                            <div><span v-show="numero.length >0" id='card-callingCode'>(+{{ pays.callingCodes[0] }})</span>{{ numero }}</div>
                        </div>

                   
                    </div>
            </div>
        </div>
       <div>
        <button class="btn btn-primary" :disabled ="isDisabled" @click="showModal">Enregistrer</button>
        <button class="btn btn-secondary" style="margin-left: 1rem;" @click="clear">Effacer</button>
       </div>

       <div class="modal fade" ref="myModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Message Important</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>... cette fonctionnalité n'est pas encore implémentée !</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
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

 .entries{
    width: 240px;
 }
 .infos{
    width: 600px;
    height: 500px;
    padding: 2em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
 }
 .form-group {
  margin-bottom: 1.2em;
}

.card{
  padding: .3em 1em;
  display: flex;
  flex-direction: column;
  font-size: 1.2em;
}
.error-msg {
  position: absolute;
  font-size: .8em;
  color: red;
}
.error{
  background: lightpink;
  color: #000;
}


</style>