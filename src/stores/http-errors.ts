import {defineStore} from "pinia";
import {useAuth} from "./auth";

interface State {
  statusCode: number | undefined
  msg: string | object
}

export const useHttpErrors = defineStore('http-errors', {
  state: (): State => ({
    statusCode: 0,
    msg: ''
  }),
  getters: {
    getHttpError: (state) => state
  },
  actions: {
    setError(statusCode: number | undefined, msg: any) {
      if (statusCode === 401) {
        const auth = useAuth()
        auth.setAuthentication(false)
      }
      this.statusCode = statusCode
      this.msg = msg
    },
    resetError() {
      this.statusCode = 0
      this.msg = ''
    }
  }
})
