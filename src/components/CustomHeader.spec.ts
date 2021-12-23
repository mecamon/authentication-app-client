import {mount} from '@vue/test-utils';
import CustomHeader from './CustomHeader.vue';

describe('CustomHeader', () => {
  it('Renders the logo', () => {
    const wrapper = mount(CustomHeader);

    const element = wrapper.find('[data-testid="logo"]');

    expect(element.element.tagName).toContain('IMG');
  })

  it('Shows the dropdown menu after clicking the menu uparrow', async () => {
    const wrapper = mount(CustomHeader);
    const menuButton = wrapper.find('[data-testid="menu-button"]');

    await menuButton.trigger('click');
    const profile = wrapper.find('[data-testid="profile-menu-item"]');
    const groupChat = wrapper.find('[data-testid="group-chat-menu-item"]');
    const logout = wrapper.find('[data-testid="logout-menu-item"]');

    expect(profile.isVisible()).toBeTruthy();
    expect(groupChat.isVisible()).toBeTruthy();
    expect(logout.isVisible()).toBeTruthy();
  });

  it('Does NOT show the menu items in the drop if you have not clicked the menu button', async () => {
    const wrapper = mount(CustomHeader);

    const profile = wrapper.find('[data-testid="profile-menu-item"]');
    const groupChat = wrapper.find('[data-testid="group-chat-menu-item"]');
    const logout = wrapper.find('[data-testid="logout-menu-item"]');

    expect(profile.isVisible()).toBeFalsy();
    expect(groupChat.isVisible()).toBeFalsy();
    expect(logout.isVisible()).toBeFalsy();
  });
})
