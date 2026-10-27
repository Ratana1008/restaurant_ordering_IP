import type { MenuItem } from '@/types'

export const menuItems: MenuItem[] = [
  { id: 1, name: 'Fresh spring rolls', description: 'Rice paper, herbs, prawn, peanut dip.', price: 3.5, categoryId: 1, isAvailable: true },
  { id: 2, name: 'Green mango salad', description: 'Shredded mango, dried shrimp, lime.', price: 4, categoryId: 1, isAvailable: true },
  { id: 3, name: 'Fish amok', description: 'Steamed fish curry in banana leaf with rice.', price: 7.5, categoryId: 2, isAvailable: true },
  { id: 4, name: 'Beef lok lak', description: 'Wok-seared beef, pepper-lime dip, fried egg.', price: 8, categoryId: 2, isAvailable: true },
  { id: 5, name: 'Chicken fried rice', description: 'Egg, garlic, spring onion.', price: 5, categoryId: 2, isAvailable: false },
  { id: 6, name: 'Iced coffee', description: 'Strong coffee, condensed milk, ice.', price: 2.5, categoryId: 3, isAvailable: true },
  { id: 7, name: 'Fresh coconut', description: 'Served in the shell.', price: 2, categoryId: 3, isAvailable: true },
  { id: 8, name: 'Sticky rice with mango', description: 'Coconut cream, sesame.', price: 3.5, categoryId: 4, isAvailable: true },
]
