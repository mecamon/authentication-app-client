import {mount, VueWrapper} from '@vue/test-utils';
import AuthForm from './AuthForm.vue';

let wrapper: VueWrapper;

describe('AuthForm', () => {

  beforeEach(() => {
    if(wrapper) wrapper.unmount();
  })

  it('Renders an email and a password input fields', () => {
    wrapper = mount(AuthForm);
    const emailInput = wrapper.find('[data-testid="email-input"]');
    const passwordInput = wrapper.find('[data-testid="password-input"]');

    expect(emailInput.attributes('type')).toBe('email');
    expect(passwordInput.attributes('type')).toBe('password');
  });

  it('Emit the event "log-with-email-pass" when pressing the login button and isLogin "true"', async () => {
    wrapper = mount(AuthForm, {props: {isLogin: true}});
    await wrapper.find('[data-testid="email-input"]').setValue('some@email.com');
    await wrapper.find('[data-testid="password-input"]').setValue('p4$$word');
    await wrapper.find('[data-testid="log-or-sign-button"]').trigger('click');

    expect(wrapper.emitted()).toHaveProperty('log-with-email-pass');
  });

  it('Emit the event "sign-with-email-pass" when pressing the login button and isLogin "false"', async () => {
    wrapper = mount(AuthForm, {props: {isLogin: false}});
    await wrapper.find('[data-testid="email-input"]').setValue('some@email.com');
    await wrapper.find('[data-testid="password-input"]').setValue('p4$$word');
    await wrapper.find('[data-testid="log-or-sign-button"]').trigger('click');

    expect(wrapper.emitted()).toHaveProperty('sign-with-email-pass');
  });

  it('Does not emit the event when fields are empty', async () => {
    wrapper = mount(AuthForm);
    await wrapper.find('[data-testid="log-or-sign-button"]').trigger('click');
    expect(wrapper.emitted()).not.toHaveProperty('log-with-email-pass');
  });
})
