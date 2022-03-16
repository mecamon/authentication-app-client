import {defineStore} from "pinia";
import {API} from '../data-source/API'
import {AxiosError, AxiosResponse} from "axios";
import {UserInfo} from "../models/user-info";
import {useHttpErrors} from "./http-errors";

interface State {
  userInfo: {
    isLoading: boolean
    data: UserInfo | null
  }
}

export const useUsers = defineStore('users', {
  state: (): State => ({
    userInfo: {
      isLoading: false,
      data: null
    },
  }),
  getters: {
    getUserInfo: (state) => state.userInfo
  },
  actions: {
    async fetchUserInfo() {
      const httpErrors = useHttpErrors()
      this.userInfo.isLoading = true
      API.getUserInfo()
          .then((res: AxiosResponse<UserInfo, any>) => {
            this.userInfo.data = res.data
          })
          .catch((e: AxiosError) => {
            httpErrors.setError(e.response?.status, e.response?.data.message)
            this.userInfo.data = null
          })
          .finally(() => {
            this.userInfo.isLoading = false
            httpErrors.resetError()
          } )
    },
    async updateUserInfo(fd: FormData) {
      const httpErrors = useHttpErrors()
      this.userInfo.isLoading = true
      API.updateUserInfo(fd)
          .then((_: AxiosResponse) => {
            this.fetchUserInfo()
          })
          .catch((e: AxiosError) => {
            httpErrors.setError(e.response?.status, e.response?.data.message)
          })
          .finally(() => {
            httpErrors.resetError()
            this.userInfo.isLoading = false
          } )
    }
  },
})
