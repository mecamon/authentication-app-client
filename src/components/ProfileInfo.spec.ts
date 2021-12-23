import {mount} from '@vue/test-utils';
import ProfileInfo from './ProfileInfo.vue';
import {userProfileMockInfo} from '../../__mocks__/user-profile-mock-info';


describe('ProfileInfo', () => {
  it('Renders the profile information passed in the props', () => {
    const wrapper = mount(ProfileInfo, {
      props: {userProfileInfo: userProfileMockInfo}
    });

    const name = wrapper.find('[data-testid="name"]');
    const photo = wrapper.find('[data-testid="photo"]');
    const bio = wrapper.find('[data-testid="bio"]');
    const phone = wrapper.find('[data-testid="phone"]');
    const email = wrapper.find('[data-testid="email"]');
    const password = wrapper.find('[data-testid="password"]');

    expect(name.text()).toBe(userProfileMockInfo.name);
    expect(photo.attributes().src).toContain(userProfileMockInfo.photo);
    expect(bio.text()).toBe(userProfileMockInfo.bio);
    expect(phone.text()).toBe(userProfileMockInfo.phone);
    expect(email.text()).toBe(userProfileMockInfo.email);
    expect(password.text()).toBe(userProfileMockInfo.password);
  });
})
