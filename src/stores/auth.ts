import { defineStore } from 'pinia'
import {AxiosError, AxiosResponse} from 'axios'
import {API} from "../data-source/API";
import { useHttpErrors } from "./http-errors";

interface State {
  isAuthenticated: boolean
  logState: {
    isLoading: boolean
  },
  githubLoginState: {
    isLoading: boolean,
    accessRequest: string,
    state: string,
    code: string,
  }
}

export const useAuth = defineStore('auth', {
  state: (): State => ({
    isAuthenticated: false,
    logState: {
      isLoading: false,
    },
    githubLoginState: {
      isLoading: false,
      accessRequest: '',
      state: '',
      code: '',
    }
  }),
  getters: {
  },
  actions: {
    setAuthentication(isAuth: boolean) {
      this.isAuthenticated = isAuth
    },
    async githubAccessRequest() {
      this.githubLoginState.isLoading = true
      const httpErrors = useHttpErrors()
      API.githubAccessRequest()
          .then((res: AxiosResponse) => {
            const { data } = res
            this.githubLoginState.accessRequest = data.requestURL
          })
          .catch((e: AxiosError) => {
            this.githubLoginState.isLoading = false
            this.githubLoginState.accessRequest = ''
            httpErrors.setError(e.response?.status, e.response?.data)
          })
          .finally(() => httpErrors.resetError())
    },
    setGithubStateAndCode(state: string | any, code: string | any) {
      this.githubLoginState.state = state
      this.githubLoginState.code = code
    },
    async githubLogin() {
      this.githubLoginState.isLoading = true
      const httpErrors = useHttpErrors()
      API.loginWithGithub(this.githubLoginState.state, this.githubLoginState.code)
          .then((res: AxiosResponse) => {
            const { data } = res
            localStorage.setItem('token', data.token)
            this.setAuthentication(true)
          })
          .catch((e: AxiosError) => {
            httpErrors.setError(e.response?.status, e.response?.data)
          })
          .finally(() => {
            this.resetGithubLogState()
            httpErrors.resetError()
          })
    },
    async registerWithEmail(email: string, password: string) {
      this.logState.isLoading = true
      const httpErrors = useHttpErrors()
      API.registerWithEmailAndPass(email, password)
          .then((res: AxiosResponse) => {
            const { data } = res
            localStorage.setItem('token', data.token)
            this.setAuthentication(true)
          })
          .catch((e: AxiosError) => {
            httpErrors.setError(e.response?.status, e.response?.data)
          })
          .finally(() => {
            this.resetLogState()
            httpErrors.resetError()
          })
    },
    async loginWithEmail(email: string, password: string) {
      this.logState.isLoading = true
      const httpErrors = useHttpErrors()
      API.loginWithEmailAndPass(email, password)
          .then((res: AxiosResponse) => {
            const { data } = res
            localStorage.setItem('token', data.token)
            this.setAuthentication(true)
          })
          .catch((e: AxiosError) => {
            httpErrors.setError(e.response?.status, e.response?.data)
          })
          .finally(() => {
            this.resetLogState()
            httpErrors.resetError()
          })
    },
    logOut() {
      localStorage.removeItem('token')
      this.setAuthentication(false)
    },
    resetLogState() {
      this.logState.isLoading = false
    },
    resetGithubLogState() {
      this.githubLoginState.isLoading = false
      this.githubLoginState.accessRequest = ''
      this.githubLoginState.state = ''
      this.githubLoginState.code = ''
    }
  }
})
