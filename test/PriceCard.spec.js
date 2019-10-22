import { shallowMount } from '@vue/test-utils'
import PriceCard from '@/components/PriceCard'

const factory = () => {
  return shallowMount(PriceCard, {
    propsData: {
      name: 'Pro',
      features: ['Thing', 'Thing', 'Thing', 'Thing'],
      price: '29,99 €',
      priceLabel: 'for one user',
      highlighted: true
    }
  })
}

describe('PriceCard', () => {
  it('is a Vue instance', () => {
    const wrapper = factory()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders properly', () => {
    const wrapper = factory()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('has the property name', () => {
    const wrapper = factory()
    expect(wrapper.props('name')).toBe('Pro')
  })

  it('has the property features', () => {
    const wrapper = factory()
    expect(wrapper.props('features')).toEqual([
      'Thing',
      'Thing',
      'Thing',
      'Thing'
    ])
  })

  it('has the property price', () => {
    const wrapper = factory()
    expect(wrapper.props('price')).toBe('29,99 €')
  })

  it('has the property priceLabel', () => {
    const wrapper = factory()
    expect(wrapper.props('priceLabel')).toBe('for one user')
  })

  it('has the property highlighted', () => {
    const wrapper = factory()
    expect(wrapper.props('highlighted')).toBe(true)
  })
})
