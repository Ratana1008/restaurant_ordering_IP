<script setup lang="ts">
import { computed, ref } from 'vue'
import { orders as sampleOrders } from '@/data/orders'
import { menuItems } from '@/data/menuItems'
import { nextStatus } from '@/utils/orderStatus'
import OrderCard from '@/components/OrderCard.vue'

// State owned here: all orders. The chef sees orders that are still active.
const orders = ref(sampleOrders.map((o) => ({ ...o })))
const activeOrders = computed(() =>
  orders.value.filter((o) => ['pending', 'preparing', 'ready'].includes(o.status)),
)

function advance(orderId: number) {
  const order = orders.value.find((o) => o.id === orderId)
  if (!order) return
  const next = nextStatus(order.status)
  if (next) order.status = next
}
</script>

<template>
  <h1>Chef queue</h1>
  <p v-if="activeOrders.length === 0" class="empty">No orders to cook right now.</p>
  <div v-else class="order-list">
    <OrderCard
      v-for="order in activeOrders"
      :key="order.id"
      :order="order"
      :menu-items="menuItems"
      mode="chef"
      @advance="advance"
    />
  </div>
</template>
