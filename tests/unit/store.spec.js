import Vue from 'vue';
import Vuex from 'vuex';
import store from '@/store/store';

describe('Prueba al store.vue', () => {
  beforeAll(() => {
    Vue.use(Vuex);
    store = new Vuex.Store(store);
  })
});

describe('Primer Testing', () => {
  it('Testing a Action y Mutation', () => {

  store.dispatch('addOpin', 'Primera prueba - Action')
  expect(typeof store.state.datosApi);

  store.dispatch('mutOpinion', 'Segunda prueba - Mutation')
  expect(store.mutations).toBe(undefined);

  })
})
