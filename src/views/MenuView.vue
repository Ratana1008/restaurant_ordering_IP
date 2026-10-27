<script setup lang="ts">
import { computed, ref } from 'vue'
import type { CartLine, MenuItem } from '@/types'
import { categories } from '@/data/categories'
import { menuItems } from '@/data/menuItems'
import CategoryFilter from '@/components/CategoryFilter.vue'
import MenuItemCard from '@/components/MenuItemCard.vue'
import CartSummary from '@/components/CartSummary.vue'

// State owned here: the selected category and the cart.
const selectedCategoryId = ref<number | null>(null)
const cart = ref<CartLine[]>([])
const confirmation = ref('')

const visibleItems = computed(() =>
  menuItems.filter(
    (item) =>
      item.isAvailable &&
      (selectedCategoryId.value === null || item.categoryId === selectedCategoryId.value),
  ),
)

function addToCart(item: MenuItem) {
  confirmation.value = ''
  const line = cart.value.find((l) => l.menuItem.id === item.id)
  if (line) line.quantity += 1
  else cart.value.push({ menuItem: item, quantity: 1 })
}

function removeFromCart(menuItemId: number) {
  cart.value = cart.value.filter((l) => l.menuItem.id !== menuItemId)
}

function placeOrder() {
  // M1 only: no backend yet. Later this becomes POST /orders.
  confirmation.value = 'Order placed. Follow it under My orders.'
  cart.value = []
}
</script>

<template>
  <h1>Menu</h1>
  <p v-if="confirmation" class="notice" role="status">{{ confirmation }}</p>
  <div class="menu-layout">
    <section>
      <CategoryFilter
        :categories="categories"
        :selected-id="selectedCategoryId"
        @select="selectedCategoryId = $event"
      />
      <p v-if="visibleItems.length === 0" class="empty">No items in this category.</p>
      <div v-else class="item-grid">
        <MenuItemCard v-for="item in visibleItems" :key="item.id" :item="item" @add="addToCart" />
      </div>
    </section>
    <CartSummary :lines="cart" @remove="removeFromCart" @place="placeOrder" />
  </div>
</template>
