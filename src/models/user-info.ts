export class UserInfo {
  name?: string
  bio?: string
  email?:  string
  telephone?: string
  photoURL?:  string

  constructor(
      name: string,
      bio: string,
      email: string,
      telephone: string,
      photo_url: string,
      ) {
    this.name = name
    this.bio = bio
    this.email = email
    this.telephone = telephone
    this.photoURL = photo_url
  }
}

export class UserInfoEdit {
  name?: string
  bio?: string
  email?:  string
  password?: string
  telephone?: string
  photoURL?:  string
  file?: File | null

  constructor(
      name: string,
      bio: string,
      email: string,
      password: string,
      telephone: string,
      photoURL: string,
      file: File | null
  ) {
    this.name = name
    this.bio = bio
    this.email = email
    this.password = password
    this.telephone = telephone
    this.photoURL = photoURL
    this.file = file
  }

  static empty(): UserInfoEdit {
    return new UserInfoEdit("", "", "", "", "", "", null)
  }

}
