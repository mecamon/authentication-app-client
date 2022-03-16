import {mount} from '@vue/test-utils'
import NotificationCard from './NotificationCard.vue'
import {ErrorInfo} from "../models/error-info";

const error: ErrorInfo = {
  statusCode: 403,
      msg: {
        problem: 'there is a problem',
        anotherProblem: 'there is another problem'
      }
}

describe('NotificationCard', () => {
  it('Shows to the UI the information pass by the props', () => {
    const wrapper = mount(NotificationCard, {props: {error}})
    const head = wrapper.find('[data-testid="head"]')
    const title = wrapper.find('[data-testid="title-value"]')
    const messages = wrapper.findAll('[data-testid="message-value"]')

    expect(head.classes()).toContain('error-bg')
    expect(title.text()).toStrictEqual('Error')

    const messageValues = Object.values(error.msg)
    const domValues = messages.map(domItem => domItem.text())

    messageValues.forEach((item, index) => {
      expect(item).toStrictEqual(domValues[index])
    })
  });
});
