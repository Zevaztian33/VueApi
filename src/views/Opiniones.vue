<template>
  <div class="opin">
    <h2 class="text-light p-5">Opinión de los Usuarios:</h2>
    <div class="container" v-if="enviarOpiniones.length > 0">
      <div class="accordion bg-light" id="accordion" v-for="(amiibo,index) in enviarOpiniones" :key="index">
      <div class="accordion-item">
        <h3 class="accordion-header text-center" id="headingOne">
          <button class="accordion-button p-2" style="width: 100%;" type="button" data-toggle="collapse" :data-target="`#collapse-${index}`" aria-expanded="true" aria-controls="collapse">
            <strong class="text-danger">Opinión sobre: </strong>{{amiibo.name}} / <strong class="text-danger">Realizado por: </strong>{{amiibo.nombre}}
          </button>
        </h3>
        <div :id="`collapse-${index}`" class="accordion-collapse collapse" aria-labelledby="headingOne" data-parent="#accordion">
          <div class="accordion-body text-center p-2">
            {{amiibo.comentario}}
          </div>
        </div>
      </div>
      </div>

    </div>
    
    <div v-else>
      <div class="p-5">
        <div class="alert alert-warning text-center" role="alert">Aún no existen opiniones seleccionados por el usuario.</div>
      </div>
    </div>
  </div>
  
</template>

<script>
import { mapGetters } from "vuex";

  export default {
    name: 'Opiniones',

    computed: {
      ...mapGetters(['enviarOpiniones'])
    },
  }
</script>

<style>
  .opin {
    background-image: url('../assets/fondo.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
  }

</style>