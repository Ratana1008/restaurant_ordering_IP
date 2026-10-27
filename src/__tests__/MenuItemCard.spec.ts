import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import MenuItemCard from '@/components/MenuItemCard.vue'
import { menuItems } from '@/data/menuItems'

describe('MenuItemCard', () => {
  it('shows the item and emits add with the item', async () => {
    const item = menuItems[0]
    const wrapper = mount(MenuItemCard, { props: { item } })

    expect(wrapper.text()).toContain(item.name)
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('add')?.[0]).toEqual([item])
  })
})
