import Hello from './Hello.vue';
import {mount} from '@vue/test-utils';

describe('Home.vue', () => {
  it('Renders Home Page title', () => {
    const wrapper = mount(Hello);
    const title = wrapper.find('h1').text();

    expect(title).toBe('Hello message');
  })
});


