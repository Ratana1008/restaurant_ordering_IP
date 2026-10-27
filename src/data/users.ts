import type { User } from '@/types'

export const users: User[] = [
  { id: 1, name: 'Sokha', email: 'sokha@example.com', role: 'customer' },
  { id: 2, name: 'Dara', email: 'dara@example.com', role: 'customer' },
  { id: 3, name: 'Chef Vanna', email: 'vanna@example.com', role: 'chef' },
  { id: 4, name: 'Ratana', email: 'ratana@example.com', role: 'admin' },
]

// Until login is built, the front end pretends this customer is signed in.
export const currentCustomerId = 1
