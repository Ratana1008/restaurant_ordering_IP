import type { Order } from '@/types'

export const orders: Order[] = [
  {
    id: 101, userId: 1, status: 'pending', total: 11.5, createdAt: '2026-10-27T11:40:00',
    items: [
      { id: 1, orderId: 101, menuItemId: 3, quantity: 1, unitPrice: 7.5 },
      { id: 2, orderId: 101, menuItemId: 2, quantity: 1, unitPrice: 4 },
    ],
  },
  {
    id: 102, userId: 2, status: 'preparing', total: 13, createdAt: '2026-10-27T11:32:00',
    items: [
      { id: 3, orderId: 102, menuItemId: 4, quantity: 1, unitPrice: 8 },
      { id: 4, orderId: 102, menuItemId: 6, quantity: 2, unitPrice: 2.5 },
    ],
  },
  {
    id: 103, userId: 1, status: 'ready', total: 7, createdAt: '2026-10-27T11:10:00',
    items: [{ id: 5, orderId: 103, menuItemId: 1, quantity: 2, unitPrice: 3.5 }],
  },
  {
    id: 104, userId: 1, status: 'completed', total: 5.5, createdAt: '2026-10-26T12:05:00',
    items: [
      { id: 6, orderId: 104, menuItemId: 8, quantity: 1, unitPrice: 3.5 },
      { id: 7, orderId: 104, menuItemId: 7, quantity: 1, unitPrice: 2 },
    ],
  },
]
