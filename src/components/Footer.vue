<template>
    <div>
        <footer class="bg-dark">
            <div class="d-flex justify-content-around align-items-center">
                <p class="text-light">Página Creada por Sebastian Araos</p>
                <router-link class="nav-link" to="/"><img src="../assets/logo.png" alt="logo"></router-link>
                <div class="social">
                    <a  class="iconos text-light" href="https://github.com/Zevaztian33" target="_blank"><font-awesome-icon :icon="['fab', 'github-square']"></font-awesome-icon></a>
                    <a  class="iconos text-light" href="https://www.facebook.com/zevaztian.araoz" target="_blank"><font-awesome-icon :icon="['fab', 'facebook-square']"></font-awesome-icon></a>
                    <a  class="iconos text-light" href="https://artbookzeta.tumblr.com" target="_blank"><font-awesome-icon :icon="['fab', 'tumblr-square']"></font-awesome-icon></a>
                    <a  class="iconos text-light" href="https://twitter.com/zevaraoz" target="_blank"><font-awesome-icon :icon="['fab', 'twitter-square']"></font-awesome-icon></a>
                </div>
                
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style>
    footer{
        padding: 0 auto;
    }

    footer p{
       margin: auto 0;
    }

    footer img{
        width: 200px;
        padding-top: 10px;
    }

    footer a{
        text-decoration: none;
    }

    footer .iconos{
        margin-left: 10px;
        font-size: 50px;
    }
</style>