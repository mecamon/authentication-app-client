import { mount } from '@vue/test-utils';
import Layout from './Layout.vue';
import CustomHeader from '../components/CustomHeader.vue';

describe('Layout', () => {
  it('Renders the "CustomHeader" component within the layout', () => {
    const wrapper = mount(Layout, {
      slots: {
        header: CustomHeader
      }
    });

    expect(wrapper.findComponent(CustomHeader)).toBeTruthy();

  });
});
