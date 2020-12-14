import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router/router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    datosApi: [],
    opiniones: [],
    favorito: [],
    
  },
  getters: {
    //----HOME----
    infoAmiibo(state){
      return state.datosApi;
    },

    //----Getters Opinion----
    enviarOpiniones(state){
      return state.opiniones;
    },

    //----Getters Favs----
    enviarFavoritos(state){
      return state.favorito;
    },

    //----Getters Administracion----
    enviarDatosAdmin(state){
      return state.opiniones;
    },
  },
  mutations: {
    //----HOME (y favs)----
    mutAmiibo(state,datos){
      for (let index = 0; index < datos.length; index++) {
        datos[index].favorito = false;
      }
      state.datosApi = datos;
    },

    //----Mutaciones Opinion----
    mutOpinion(state,opinion){
      state.opiniones.push(opinion)
    },

    //----Mutaciones Favs----
    mutFavoritos(state,favs){
      let resultado = state.datosApi.find(result => result.name == favs.name);
      state.favorito.push(resultado)
    },

    mutAmiiboFavs(state, index){
      state.favorito.splice(index, 1);
    },

    //----Mutaciones Admin----
    mutAdminDelete(state, index){
      state.opiniones.splice(index, 1);
    },

    mutAdminOpinion(state, opinion){ 
      let opiniones = state.opiniones.find(result => result.id == opinion.id)
      opiniones.nombre = opinion.nombre;
      opiniones.comentario = opinion.comentario;
      opiniones.namePersonaje = opinion.namePersonaje;
      opiniones.id = opinion.id;

    }
  },
  actions: {
    //----Llamando a la API----
    async llamadoAmiibo({commit}){
      try {
        let result = await fetch('https://amiiboapi.com/api/amiibo/?character=link')
        //let result = await fetch('https://amiiboapi.com/api/amiibo/')
        let datos = await result.json();
        console.log(datos);
        commit('mutAmiibo', datos.amiibo);
      } catch (error) {
        console.error(error);
      }
    },

    //----Acciones Opinion----
    addOpin({commit}, opinion){
      commit('mutOpinion', opinion)
    },

    //----Acciones Favs----
    addFavs({commit},favs){
      commit('mutFavoritos',favs)
      router.push({name: 'Favoritos'})
    },

    borrandoAmiiboFavs({commit}, index){
      commit('mutAmiiboFavs', index);
    },

    //----Acciones Admin----
    borrandoOpinion({commit}, index){
      commit('mutAdminDelete', index)
    },

    guardarCorreccion({commit}, opinion){
      commit('mutAdminOpinion', opinion)
    }
  }
})
