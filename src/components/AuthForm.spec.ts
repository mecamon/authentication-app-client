import {mount, VueWrapper } from '@vue/test-utils';
import AuthForm from './AuthForm.vue';
import { i18n } from '../i18n/locales';

let wrapper: VueWrapper;

describe('AuthForm', () => {

  beforeEach(() => {
    if(wrapper) wrapper.unmount();
  })

  it('Renders an email and a password input fields', () => {
    wrapper = mount(AuthForm, {
      global: {plugins: [i18n]} 
    });
    const emailInput = wrapper.find('[data-testid="email-input"]');
    const passwordInput = wrapper.find('[data-testid="password-input"]');

    expect(emailInput.attributes('type')).toBe('email');
    expect(passwordInput.attributes('type')).toBe('password');
  });

  it('Emit the event "log-with-email-pass" when pressing the login button and isLogin "true"', async () => {
    wrapper = mount(AuthForm, {
      props: {isLogin: true}, global: {plugins: [i18n]} 
    });
    await wrapper.find('[data-testid="email-input"]').setValue('some@email.com');
    await wrapper.find('[data-testid="password-input"]').setValue('p4$$word');
    await wrapper.find('[data-testid="log-or-sign-button"]').trigger('click');

    expect(wrapper.emitted()).toHaveProperty('log-with-email-pass');
  });

  it('Emit the event "sign-with-email-pass" when pressing the login button and isLogin "false"', async () => {
    wrapper = mount(AuthForm, {
      props: {isLogin: false}, global: {plugins: [i18n]} 
    });
    await wrapper.find('[data-testid="email-input"]').setValue('some@email.com');
    await wrapper.find('[data-testid="password-input"]').setValue('p4$$word');
    await wrapper.find('[data-testid="log-or-sign-button"]').trigger('click');

    expect(wrapper.emitted()).toHaveProperty('sign-with-email-pass');
  });

  it('Does not emit the event when fields are empty', async () => {
    wrapper = mount(AuthForm, {
      global: {plugins: [i18n]}
    });
    await wrapper.find('[data-testid="log-or-sign-button"]').trigger('click');
    expect(wrapper.emitted()).not.toHaveProperty('log-with-email-pass');
  });

  it('Emit the event "switch-to-register" when clicking on "register"', async () => {
    wrapper = mount(AuthForm, {
      props: {isLogin: true}, global: {plugins: [i18n]}
    });
    await wrapper.find('[data-testid="register"]').trigger('click');
    expect(wrapper.emitted()).toHaveProperty('switch-to-register');
  });

  it('Emit the event "switch-to-login" when clicking on "login"', async () => {
    wrapper = mount(AuthForm, {
      props: {isLogin: false}, global: {plugins: [i18n]}
    });
    await wrapper.find('[data-testid="login"]').trigger('click');
    expect(wrapper.emitted()).toHaveProperty('switch-to-login');
  });
})
