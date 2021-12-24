import { mount } from '@vue/test-utils';
import EditProfileForm from '../components/EditProfileForm.vue';
import { i18n } from '../i18n/locales';

describe('EditProfileForm', () => {
  it('Expect to find the personal information input fields and a clicked buttton', async () => {
    const wrapper = mount(EditProfileForm, {
      global: {
        plugins: [i18n]
      }
    });

    const photoInputField = wrapper.find('[data-testid="photo"]');
    const nameInputField = wrapper.find('[data-testid="name"]');
    const bioInputField = wrapper.find('[data-testid="bio"]');
    const phoneInputField = wrapper.find('[data-testid="phone"]');
    const emailInputField = wrapper.find('[data-testid="email"]');
    const passwordInputField = wrapper.find('[data-testid="password"]');
    const submitButton = wrapper.find('[data-testid="save-button"]');

    await nameInputField.setValue('Some random name');
    await bioInputField.setValue('this is a bio');
    await phoneInputField.setValue('1234567890');
    await emailInputField.setValue('random@mail.com');
    await passwordInputField.setValue('password');
    await submitButton.trigger('click');
    
    expect(photoInputField.attributes('type')).toBe('file');
    expect(passwordInputField.attributes('type')).toBe('password');
    expect(wrapper.emitted()).toHaveProperty('save-user-info');

  });

  it('Does not trigger the "save-user-info" when fields are not completed', async () => {
    const wrapper = mount(EditProfileForm, {
      global: {
        plugins: [i18n]
      }
    });

    const submitButton = wrapper.find('[data-testid="save-button"]');

    await submitButton.trigger('click');
    
    expect(wrapper.emitted()).not.toHaveProperty('save-user-info');
  });

});
