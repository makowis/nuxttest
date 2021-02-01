import { mount, RouterLinkStub } from '@vue/test-utils'
import DefaultLayout from '@/layouts/default.vue';

describe('index.vue', () => {
  const NuxtMock  = {
    template: '<div>Nuxt</div>'
  }
  const vm = mount(DefaultLayout, {
    stubs: {
      NuxtLink: RouterLinkStub,
      Nuxt: NuxtMock,
    }
  }).vm;  

  it('should match the snapshot', () => {
    expect(vm.$el).toMatchSnapshot();
  });
});
