import { shallowMount } from '@vue/test-utils'
import Logo from '@/components/Logo'

const factory = (propsData) => {
  return shallowMount(Logo, { propsData })
}
describe('Check isStickable Props', () => {
  it('Prop isStickable is true when we pass true', () => {
    const propsData = { isStickable: true }
    const wrapper = factory(propsData)
    expect(wrapper.props('isStickable')).toBe(true)
  })

  it('Prop isStickable is false when we pass nothing', () => {
    const wrapper = factory()
    expect(wrapper.props('isStickable')).toBe(false)
  })

  it('Prop isStickable is false when we pass null', () => {
    const wrapper = factory()
    expect(wrapper.props('isStickable')).toBe(false)
  })
})
describe('Check isSticky Props', () => {
  it('isSticky is false when nothing is passed', () => {
    const wrapper = factory()
    expect(wrapper.props('isSticky')).toBe(false)
  })
  it('isSticky is false when null is passed', () => {
    const wrapper = factory()
    expect(wrapper.props('isSticky')).toBe(false)
  })
  it('isSticky is true when true is passed', () => {
    const propsData = { isSticky: true }
    const wrapper = factory(propsData)
    expect(wrapper.props('isSticky')).toBe(true)
  })
})
// Check computed function directly from the component
describe('Check classList computed', () => {
  it("If isStickable is false, must return 'text-orange-600'", () => {
    const assertion = Logo.computed.classList.call({ isStickable: false })
    expect(assertion).toBe('text-orange-600')
  })
  it("If isStickable is true and isSticky is false, must return 'text-white'", () => {
    const assertion = Logo.computed.classList.call({ isStickable: true, isSticky: false })
    expect(assertion).toBe('text-white')
  })
  it("If isStickable is true and isSticky is true, must return 'text-gray-800'", () => {
    const assertion = Logo.computed.classList.call({ isStickable: true, isSticky: true })
    expect(assertion).toBe('text-gray-800')
  })
})
// Check computed function directly from the DOM
describe('Check classList computed from DOM', () => {
  it("If isStickable is false, must return 'text-orange-600'", () => {
    const wrapper = factory()
    const getDOM = wrapper.find('a')
    expect(getDOM.classes('text-orange-600')).toBe(true)
  })
})