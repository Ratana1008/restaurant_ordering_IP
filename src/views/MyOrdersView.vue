<script setup lang="ts">
import { computed, ref } from 'vue'
import { orders as sampleOrders } from '@/data/orders'
import { menuItems } from '@/data/menuItems'
import { currentCustomerId } from '@/data/users'
import { canCancel } from '@/utils/orderStatus'
import OrderCard from '@/components/OrderCard.vue'

// State owned here: the list of orders. Story 4: a customer sees only their own.
const orders = ref(sampleOrders.map((o) => ({ ...o })))
const myOrders = computed(() => orders.value.filter((o) => o.userId === currentCustomerId))

function cancelOrder(orderId: number) {
  const order = orders.value.find((o) => o.id === orderId)
  if (order && canCancel(order.status)) order.status = 'cancelled'
}
</script>

<template>
  <h1>My orders</h1>
  <p v-if="myOrders.length === 0" class="empty">You have not placed an order yet.</p>
  <div v-else class="order-list">
    <OrderCard
      v-for="order in myOrders"
      :key="order.id"
      :order="order"
      :menu-items="menuItems"
      mode="customer"
      @cancel="cancelOrder"
    />
  </div>
</template>
