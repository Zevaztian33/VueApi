<template>
  <div class="home">
      <!-- Card -->
      <div class="row">
          <div class="d-flex" v-for="(amiibo,index) in infoAmiibo" :key="index">
            <div class="card text-center m-5 bg-dark border-light" style="width: 18rem;">
              <img :src="amiibo.image" class="card-img-top" :alt="amiibo.name">
                <div class="card-body ">
                  <h5 class="card-title text-light">{{amiibo.name}}</h5>
                  <button type="button" class="btn btn-success ml-4" data-toggle="modal" :data-target="'#opinion'+amiibo.head+amiibo.tail">Opinión <font-awesome-icon icon="edit"></font-awesome-icon></button>
                  <button type="button" class="btn btn-primary ml-4" data-toggle="modal" :data-target="'#verMas'+amiibo.head+amiibo.tail">Ver <font-awesome-icon icon="plus"></font-awesome-icon></button>
                </div>
            </div>
          </div>
      </div>
    
      <!-- Modal Opinion -->
      <div v-for="(amiibo,index) in infoAmiibo" :key="index">
        <div class="modal fade" :id="'opinion'+amiibo.head+amiibo.tail" tabindex="-1" aria-labelledby="opinionLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" style="color: orange;" id="opinionLabel">{{amiibo.name}}</h5>
              </div>
              <hr>
              <div class="modal-body">
                <p class="text-success">Tu nombre:</p>
                <input type="text" placeholder="Ingresa tu nombre" v-model="nombre">
                <p class="text-success">Tu opinión:</p>
                <textarea name="comentarios" rows="10" cols="45" placeholder="Ingresa tu opinión aquí" v-model="comentario"></textarea>
              </div>
              <hr>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close"><font-awesome-icon icon="times"></font-awesome-icon></button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" @click="guardarOpinion(amiibo)"><font-awesome-icon icon="save"></font-awesome-icon></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <!-- Modal Ver Más -->
      <div v-for="(amiibo,index) in infoAmiibo" :key="index">
        <div class="modal fade" :id="'verMas'+amiibo.head+amiibo.tail" tabindex="-1" aria-labelledby="verMasLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h3 class="modal-title" style="color: orange;" id="verMasLabel">{{amiibo.name}}</h3>
              </div>
              <hr>
              <div class="modal-body d-flex">
                <div class="imagen"><img style="height: 350px;" :src="amiibo.image" class="card-img-top" :alt="amiibo.name"></div>
                <div class="ml-4 ficha">
                  <h5 class="text-success">Game Series:</h5>
                  <p>{{amiibo.gameSeries}}</p>
                  <h5 class="text-success">Amiibo Series:</h5>
                  <p>{{amiibo.amiiboSeries}}</p>
                  <h5 class="text-success">Fecha de lanzamiento:</h5>
                  <p>JP: {{amiibo.release.jp}}</p>
                  <p>EU: {{amiibo.release.eu}}</p>
                  <p>NA: {{amiibo.release.na}}</p>
                  <p>AU: {{amiibo.release.au}}</p>
                </div>
              </div>
              <hr>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close"><font-awesome-icon icon="times"></font-awesome-icon></button>
                <button type="button" class="btn btn-success" data-dismiss="modal" @click="addFavs(amiibo)" :disabled="amiibo.favorito" ><font-awesome-icon icon="heart"></font-awesome-icon></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      

  </div>
</template>

<script>
import {mapGetters, mapActions } from 'vuex';
import Swal from 'sweetalert2';

  export default {
    name: 'Home',
    data(){
      return{
        nombre: '',
        comentario: '',
      }
    },

    computed:{
      ...mapGetters (['infoAmiibo']),
    },

    methods: {
      ...mapActions(['addFavs', 'addOpin']),

      guardarOpinion(amiibo){
        let idCacho = amiibo.head+amiibo.tail
        if (this.nombre && this.comentario){
          let opinion = {
            id: idCacho,
            nombre: this.nombre,
            comentario: this.comentario,
            name: amiibo.name
          }
          this.$store.dispatch('addOpin', opinion);
          this.nombre = '',
          this.comentario= '',
          this.$router.push({name: 'Opiniones'});
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Comentario guardardo con éxito',
            showConfirmButton: true,
          })
        } else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Tiene que ingresar un nombre y comentario.',
            showConfirmButton: true,
          })
        }
      },
    },
  }

</script>

<style>
  .home {
    background-image: url('../assets/mosaico.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .card img{
    width: 220px;
    height: 350px;
    margin: 10px auto;
  }

</style>