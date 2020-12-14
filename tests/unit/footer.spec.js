import { shallowMount } from '@vue/test-utils';
import Footer from '@/components/Footer.vue';

describe('Prueba al componente Footer.vue', () => {
    it('Tercer Testing', () => {
      const wrapper = shallowMount(Footer);

    expect(wrapper.find("p").text()).toBe("Página Creada por Sebastian Araos");
    })
})