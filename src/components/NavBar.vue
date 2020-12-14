<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link class="nav-link" to="/"><img src="../assets/logo.png" alt="logo"></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto mr-5">
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'Opiniones'}">Opiniones</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'Favoritos'}">Favoritos</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'Administracion'}">Administración</router-link>
                </li>
            </ul>
        </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'NavBar'
    }
</script>

<style>
    .navbar img{
        width: 200px;
    }
    ul{
        font-size: 20px;
    }
    
</style>