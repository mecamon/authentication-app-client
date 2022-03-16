import {mount} from '@vue/test-utils';
import Socials from './Socials.vue';

describe('Socials', () => {
  it('Emits the "github-login" when clicking the github icon', async ()  => {
    const wrapper = mount(Socials);
    const githubIcon = wrapper.find('[data-testid="social-github-icon"]');

    await githubIcon.trigger('click');

    expect(wrapper.emitted()).toHaveProperty('github-login');
  });
})
