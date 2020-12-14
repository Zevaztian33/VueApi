<template>
    <div class="favs" data-dismiss="modal">
        <h2 class="text-light p-5">Favoritos de los Usuarios:</h2>
            <div class="row" v-if="enviarFavoritos.length > 0">
            <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3" v-for="(amiibo,index) in enviarFavoritos" :key="index">
                <div class="card text-center m-5 bg-dark" style="width: 18rem;">
                    <img :src="amiibo.image" class="card-img-top" :alt="amiibo.name">
                    <div class="card-body ">
                        <h5 class="card-title text-light">{{amiibo.name}}</h5>
                        <button type="button" class="btn btn-danger" @click="borrarFavs(index)">Eliminar <font-awesome-icon icon="trash-alt"></font-awesome-icon></button>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="p-5">
                <div class="alert alert-warning text-center" role="alert">Aún no existen favoritos seleccionados por el usuario.</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Swal from 'sweetalert2';

export default {
    name: 'Favoritos',
    
    computed: {
        ...mapGetters(['enviarFavoritos'])
    },

    methods: {
        borrarFavs(index){
            Swal.fire({
                title: 'Estas seguro?',
                text: "Este amiibo ya no es tú favorito?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Borrar'
            }).then((result) => {
                if (result.isConfirmed) {
                this.$store.dispatch('borrandoAmiiboFavs',index);
                    Swal.fire(
                    'Borrado.',
                    'Puedes volver a seleccionarlo como favorito cuando quieras.',
                    'success'
                    )
                }
            })
        },
    }
}
</script>

<style>
    .favs {
        background-image: url('../assets/fondo.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100%;
    }
    .alert{
        margin: 200px 0;
    }

</style>