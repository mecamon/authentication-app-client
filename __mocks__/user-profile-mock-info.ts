import {UserProfileInfo} from '../src/models/user-profile-info';

export const userProfileMockInfo = UserProfileInfo.filled({
  id: 'qweqeqw',
  name: 'Jonh',
  photo: 'https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_960_720.jpg',
  bio: 'This is my biography',
  phone: '1234567890',
  email: 'jonh@mail.com',
  password: 'some-password1234'
})
