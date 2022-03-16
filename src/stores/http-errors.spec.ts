import { setActivePinia, createPinia } from 'pinia'
import {useHttpErrors} from "./http-errors";

const error = { statusCode: 400, msg: 'bad user information' }
describe('http-errors Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('ACTION: setError', function () {
    const httpError = useHttpErrors()
    httpError.setError(error.statusCode, error.msg)
    expect(httpError.statusCode).toStrictEqual(error.statusCode)
    expect(httpError.msg).toStrictEqual(error.msg)
  });
  it('ACTION: ', function () {
    const httpError = useHttpErrors()
    httpError.setError(error.statusCode, error.msg)
    httpError.resetError()
    expect(httpError.statusCode).toStrictEqual(0)
    expect(httpError.msg).toStrictEqual('')
  });
})
