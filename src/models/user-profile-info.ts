interface UserInfo {
  id?: string;
  photo: any;
  name: string;
  bio: string;
  phone: string;
  email: string;
  password: string;
}

export class UserProfileInfo {
  id?: string;
  photo: any;
  name: string;
  bio: string;
  phone: string;
  email: string;
  password: string;

  private constructor(userInfo: UserInfo) {
    this.id = userInfo.id || undefined,
    this.photo = userInfo.photo,
    this.name = userInfo.name,
    this.bio = userInfo.bio,
    this.phone = userInfo.phone,
    this.email = userInfo.email,
    this.password = userInfo.password
  }

  static empty(): UserProfileInfo {
    const userInfo = {
      photo: '',
      name: '',
      bio: '',
      phone: '',
      email: '',
      password: ''
    } as UserInfo

    return new UserProfileInfo(userInfo);
  }

  static filled({id, photo, name, bio, phone, email, password }: UserInfo): UserProfileInfo {
    const userInfo = {id, photo, name, bio, phone, email, password} as UserInfo

    return new UserProfileInfo(userInfo);
  }
}