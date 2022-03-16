import { axiosJsonIns, axiosMultiPartIns} from "../helpers/axios-instances";

export class API {
    static loginWithEmailAndPass(email: string, password: string) {
        return axiosJsonIns.post('/api/auth/login', {email, password})
    }
    static registerWithEmailAndPass(email: string, password: string) {
        return axiosJsonIns.post('/api/auth/register', {email, password})
    }
    static updateUserInfo(fd: FormData) {
        return axiosMultiPartIns.put('/api/users/update', fd)
    }
    static getUserInfo() {
        return axiosJsonIns.get('/api/users/info')
    }
    static githubAccessRequest() {
        return axiosJsonIns.get('/api/auth/github-access')
    }
    static loginWithGithub(state: string, code: string) {
        return axiosJsonIns.post('/api/auth/github-login', {state, code})
    }
}
