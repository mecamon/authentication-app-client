import { setActivePinia, createPinia } from 'pinia'
import {useAuth} from "./auth";
import {API} from "../data-source/API";
import {commonAxiosRes} from "../../__mocks__/fixtures";

jest.mock('../data-source/API')
const mockedAPI = API as jest.Mocked<typeof API>
const accessRequestData = {requestURL: 'https://someurl.com'}
const userData = {
  name: 'Charles',
  email: 'charles@mail.com',
  password: 'SOMEpassw0rd12'
}

describe('Auth Store', () => {
  beforeAll(() => {
    mockedAPI.githubAccessRequest.mockResolvedValue({
      ...commonAxiosRes, data: accessRequestData
    })
    mockedAPI.loginWithGithub.mockResolvedValue({
      ...commonAxiosRes, data: userData
    })
    mockedAPI.registerWithEmailAndPass.mockResolvedValue({
      ...commonAxiosRes, data: userData
    })
    mockedAPI.loginWithEmailAndPass.mockResolvedValue({
      ...commonAxiosRes, data: userData
    })
  })
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('ACTION: setAuthentication',  () => {
    const auth = useAuth()
    expect(auth.isAuthenticated).toEqual(false)
    auth.setAuthentication(true)
    expect(auth.isAuthenticated).toEqual(true)
  });
  it('ACTION: githubAccessRequest', async () => {
    const auth = useAuth()
    expect(auth.githubLoginState.accessRequest).toStrictEqual('')
    await auth.githubAccessRequest()
    expect(auth.githubLoginState.accessRequest).toStrictEqual(accessRequestData.requestURL)
  });
  it('ACTION: setGithubStateAndCode',  () => {
    const initialState = {state: '', code: ''}
    const mutatedState = {state: '213124sdad', code: 'asdfa3423423'}
    const auth = useAuth()
    expect(auth.githubLoginState.code).toEqual(initialState.code)
    expect(auth.githubLoginState.state).toEqual(initialState.state)
    auth.setGithubStateAndCode(mutatedState.state, mutatedState.code)
    expect(auth.githubLoginState.code).toEqual(mutatedState.code)
    expect(auth.githubLoginState.state).toEqual(mutatedState.state)
  });
  it('ACTION: githubLogin', async () => {
    const auth = useAuth()
    expect(auth.isAuthenticated).toEqual(false)
    await auth.githubLogin()
    expect(auth.isAuthenticated).toEqual(true)
  });
  it('ACTION: registerWithEmail', async () => {
    const auth = useAuth()
    expect(auth.isAuthenticated).toEqual(false)
    await auth.registerWithEmail(userData.email, userData.password)
    expect(auth.isAuthenticated).toEqual(true)
  });
  it('ACTION: loginWithEmail', async () => {
    const auth = useAuth()
    expect(auth.isAuthenticated).toEqual(false)
    await auth.loginWithEmail(userData.email, userData.password)
    expect(auth.isAuthenticated).toEqual(true)
  });
  it('ACTION: logOut', () => {
    const auth = useAuth()
    auth.isAuthenticated = true
    auth.logOut()
    expect(auth.isAuthenticated).toEqual(false)
  });
  it('ACTION: resetLogState', () => {
    const auth = useAuth()
    auth.logState.isLoading = true
    auth.resetLogState()
    expect(auth.logState.isLoading).toEqual(false)
  });
  it('ACTION: resetGithubLogState', () => {
    const auth = useAuth()
    auth.githubLoginState.isLoading = true
    auth.githubLoginState.accessRequest = 'https://someurl'
    auth.githubLoginState.state = 'qwertyuias'
    auth.githubLoginState.code = '1245463342133000'

    auth.resetGithubLogState()

    expect(auth.githubLoginState).toStrictEqual({
      isLoading: false,
      accessRequest: '',
      state: '',
      code: ''
    })
  });
})
