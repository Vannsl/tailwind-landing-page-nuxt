import { shallowMount } from '@vue/test-utils'
import TheTitle from '@/components/TheTitle'

const factory = () => {
  return shallowMount(TheTitle)
}

describe('TheTitle', () => {
  it('is a Vue instance', () => {
    const wrapper = factory()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders properly', () => {
    const wrapper = factory()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
