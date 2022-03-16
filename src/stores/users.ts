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
      this.userInfo.isLoading = true
      API.getUserInfo()
          .then((res: AxiosResponse<UserInfo, any>) => {
            this.userInfo.data = res.data
          })
          .catch((e: AxiosError) => {
            const httpErrors = useHttpErrors()
            httpErrors.setError(e.response?.status, e.response?.data)
            this.userInfo.data = null
          })
          .finally(() => this.userInfo.isLoading = false)
    },
    async updateUserInfo(fd: FormData) {
      this.userInfo.isLoading = true
      API.updateUserInfo(fd)
          .then((_: AxiosResponse) => {
            this.fetchUserInfo()
          })
          .catch((e: AxiosError) => {
            const httpErrors = useHttpErrors()
            httpErrors.setError(e.response?.status, e.response?.data)
          })
          .finally(() => this.userInfo.isLoading = false)
    }
  },
})
