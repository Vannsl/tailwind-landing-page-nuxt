import { shallowMount } from '@vue/test-utils'
import TeaserCard from '@/components/TeaserCard'

const factory = () => {
  return shallowMount(TeaserCard, {
    propsData: {
      action: 'Action'
    }
  })
}

describe('TeaserCard', () => {
  it('is a Vue instance', () => {
    const wrapper = factory()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders properly', () => {
    const wrapper = factory()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('has the property action', () => {
    const wrapper = factory()
    expect(wrapper.props('action')).toBe('Action')
  })

  describe('when the user clicks on the button', () => {
    it('emits the event', () => {
      const wrapper = factory()
      wrapper.find('button').trigger('click')
      expect(wrapper.emitted().clicked).toBeTruthy()
    })
  })

  describe('when the property action is not an empty string', () => {
    it('renders the button', () => {
      const wrapper = factory()
      expect(wrapper.find('button').exists()).toBe(true)
    })
  })

  describe('when the property action is an empty string', () => {
    it('renders the button', () => {
      const wrapper = factory()
      wrapper.setProps({ action: '' })
      expect(wrapper.find('button').exists()).toBe(false)
    })
  })
})
