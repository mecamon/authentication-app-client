import { setActivePinia, createPinia } from 'pinia'
import { useUsers } from './users'
import { API } from '../data-source/API'
import {commonAxiosRes} from "../../__mocks__/fixtures";

jest.mock('../data-source/API')
const mockedAPI = API as jest.Mocked<typeof API>
const userData = {
  name: 'Charles',
  email: 'charles@mail.com'
}

describe('Users Store', () => {

  beforeAll(() => {
    mockedAPI.getUserInfo.mockResolvedValue({...commonAxiosRes, data: userData})
    mockedAPI.updateUserInfo.mockResolvedValue({...commonAxiosRes, data: userData})
  })
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('GETTER: getUserInfo', () => {
    const users = useUsers()
    const userData = users.getUserInfo
    expect(userData).toStrictEqual(users.userInfo)
  });

  it('ACTION: fetchUserInfo', async () => {
    const users = useUsers()
    await users.fetchUserInfo()
    expect(users.userInfo.data).toStrictEqual(userData)
    expect(users.userInfo.isLoading).toBe(false)
  })

  it('ACTION: updateUserInfo', async () => {
    const users = useUsers()
    const fd = new FormData()
    await users.updateUserInfo(fd)
    expect(users.userInfo.data).not.toBe(null)
    expect(users.userInfo.isLoading).toBe(false)
  });
})
