<template>
<div class="editar">    
    <div class="container text-light">
        <h2 class="pt-5">Editando la opinión de: {{namePersonaje}}</h2>
        <form @submit.prevent="guardarEditar">
            <div class="mb-3">
                <label for="codigo" class="form-label">Nombre del Usuario</label>
                <input type="text" class="form-control" v-model="nombre">
            </div>
            <div class="mb-3">
                <label for="codigo" class="form-label">Opinión</label>
                <input type="text" class="form-control" v-model="comentario">
            </div>
            <button type="submit" class="btn btn-success">Guardar</button>
            <button type="button" class="btn btn-primary mx-4" @click="$router.go(-1)">Regresar</button>
        </form>
    </div>
</div>
        
</template>

<script>
import Swal from 'sweetalert2';

export default {
    name: 'EditarOpinion',
    data() {
        return {
            nombre: '',
            comentario: '',
            namePersonaje: '',
        }
    },

    props: {
        idLista: {
            type: String,
            required: true
        }
    },

    mounted(){
        let comentarios = this.$store.getters.enviarOpiniones.find(result => result.id == this.idLista);
            this.nombre = comentarios.nombre;
            this.comentario = comentarios.comentario;
            this.namePersonaje = comentarios.name;
            this.idAmiibo = comentarios.id
    },

    methods: {
        guardarEditar(){
            if(this.namePersonaje && this.nombre && this.comentario){
                let comentario = {
                nombre: this.nombre,
                comentario: this.comentario,
                namePersonaje: this.namePersonaje,
                id: this.idAmiibo
            }
                this.$store.dispatch('guardarCorreccion',comentario);
                Swal.fire({
                    title: 'Estas seguro?',
                    text: "Este acción es irreversible",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',                
                    confirmButtonText: 'Editar'
                }).then (() =>{
                    this.$router.push({name: 'Administracion'});
                    Swal.fire(
                        'Editado.',
                        'El comentario ha sido actualizado.',
                        'success'
                    )
                })
            }    
        }
    },
}
</script>

<style>
    .editar {
        background-image: url('../assets/mosaico.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 72vh;
    }

</style>