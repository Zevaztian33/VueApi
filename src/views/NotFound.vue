<template>
    <div class="notFound">
        <div class="container">
            <div class="p-5">
                <h2 class="text-center text-light py-4">Error 404</h2>
                <div class="alert alert-warning text-center" role="alert">Página ingresada incorrectamente, vuelva a intentarlo.</div>
            </div> 
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Administracion'
    }
</script>

<style>
    .notFound {
        background-image: url('../assets/fondo.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
    }
</style>