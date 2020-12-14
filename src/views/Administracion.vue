<template>
    <div class="admin">
        <h2 class="text-light p-5">Sala de administración:</h2>
            <div class="container" v-if="enviarDatosAdmin.length > 0">
                <table class="table table-success table-striped text-center">
                    <thead>
                        <tr style="color: teal;">
                        <th scope="col">#</th>
                        <th scope="col">Personaje</th>
                        <th scope="col">Usuario</th>
                        <th scope="col">Opinión</th>
                        <th scope="col">Eliminar</th>
                        <th scope="col">Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(amiibo, index) in enviarDatosAdmin" :key="index">
                        <th>{{index + 1}}</th>
                        <td>{{amiibo.name}}</td>
                        <td>{{amiibo.nombre}}</td>
                        <td>{{amiibo.comentario}}</td>
                        <td><button type="button" class="btn btn-danger" @click="borrarOpinion(index)"><font-awesome-icon icon="trash-alt"></font-awesome-icon></button></td>
                        <td><button type="button" class="btn btn-primary" @click="editarOpinion(amiibo)"><font-awesome-icon icon="edit"></font-awesome-icon></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        <div v-else>
            <div class="p-5">
                <div class="alert alert-warning text-center" role="alert">Aún no existen datos para administrar.</div>
            </div>
        </div>
    </div>
    
</template>

<script>
import { mapGetters } from "vuex";
import Swal from 'sweetalert2';

export default {
    name: 'Administracion',

    computed: {
        ...mapGetters(['enviarDatosAdmin'])
    },

    methods: {
        borrarOpinion(index){
        Swal.fire({
            title: 'Estas seguro?',
            text: "Este acción es irreversible",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',                
            confirmButtonText: 'Borrar'
        }).then((result) => {
            if (result.isConfirmed) {
            this.$store.dispatch('borrandoOpinion', index);
                Swal.fire(
                'Borrado.',
                'Lamentamos lo ocurrido.',
                'success'
                )
            }
        })
        },

        editarOpinion(amiibo){
            this.$router.push({name: 'EditarOpinion', params: {idLista: amiibo.id}});
        },
    },
}
</script>

<style>
    .admin {
        background-image: url('../assets/fondo.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
    }
</style>