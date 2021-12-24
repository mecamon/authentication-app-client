import { mount } from '@vue/test-utils';
import Layout from './Layout.vue';
import CustomHeader from '../components/CustomHeader.vue';
import { i18n } from '../i18n/locales';

describe('Layout', () => {
  it('Renders the "CustomHeader" component within the layout', () => {
    const wrapper = mount(Layout, {
      slots: {
        header: CustomHeader
      },
      global: {plugins: [i18n]}
    });

    expect(wrapper.findComponent(CustomHeader)).toBeTruthy();

  });
});
