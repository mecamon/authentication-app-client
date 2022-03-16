import {mount} from '@vue/test-utils';
import ProfileInfo from './ProfileInfo.vue';
import {userProfileMockInfo} from '../../__mocks__/user-profile-mock-info';
import { i18n } from '../i18n/locales';


describe('ProfileInfo', () => {
  it('Renders the profile information passed in the props', () => {
    const wrapper = mount(ProfileInfo, {
      props: {userProfileInfo: userProfileMockInfo},
      global: {plugins: [i18n]}
    });

    const name = wrapper.find('[data-testid="name"]');
    const photo = wrapper.find('[data-testid="photo"]');
    const bio = wrapper.find('[data-testid="bio"]');
    const phone = wrapper.find('[data-testid="phone"]');
    const email = wrapper.find('[data-testid="email"]');

    expect(name.text()).toBe(userProfileMockInfo.name);
    expect(photo.attributes().src).toContain(userProfileMockInfo.photoURL);
    expect(bio.text()).toBe(userProfileMockInfo.bio);
    expect(phone.text()).toBe(userProfileMockInfo.telephone);
    expect(email.text()).toBe(userProfileMockInfo.email);
  });
})
