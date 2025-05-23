import { PizzaOrder } from '@/types/index'
import { OrderStatus } from '@/types/index'

export const mockPizzaOrders: PizzaOrder[] = [
  {
    id: 'PZA001',
    customerName: 'John Doe',
    customerEmail: 'john.doe@email.com',
    customerPhone: '+1-555-0123',
    pizzaType: 'Margherita',
    quantity: 2,
    orderDate: '2024-05-23T14:30:00',
    estimatedDelivery: '2024-05-23T15:15:00',
    status: 'Delivered',
    total: 28.50,
    notes: 'Extra cheese requested',
    address: '123 Main St, New York, NY 10001'
  },
  {
    id: 'PZA002',
    customerName: 'Jane Smith',
    customerEmail: 'jane.smith@email.com',
    customerPhone: '+1-555-0124',
    pizzaType: 'Pepperoni',
    quantity: 1,
    orderDate: '2024-05-23T15:45:00',
    estimatedDelivery: '2024-05-23T16:30:00',
    status: 'Out for Delivery',
    total: 16.99,
    address: '456 Oak Ave, Brooklyn, NY 11201'
  },
  {
    id: 'PZA003',
    customerName: 'Mike Johnson',
    customerEmail: 'mike.johnson@email.com',
    customerPhone: '+1-555-0125',
    pizzaType: 'Veggie Supreme',
    quantity: 3,
    orderDate: '2024-05-23T16:20:00',
    estimatedDelivery: '2024-05-23T17:05:00',
    status: 'Preparing',
    total: 45.75,
    notes: 'No olives please',
    address: '789 Pine Rd, Queens, NY 11354'
  },
  {
    id: 'PZA004',
    customerName: 'Sarah Wilson',
    customerEmail: 'sarah.wilson@email.com',
    customerPhone: '+1-555-0126',
    pizzaType: 'Hawaiian',
    quantity: 1,
    orderDate: '2024-05-23T17:10:00',
    estimatedDelivery: '2024-05-23T17:55:00',
    status: 'Pending',
    total: 18.50,
    address: '321 Elm St, Bronx, NY 10456'
  },
  {
    id: 'PZA005',
    customerName: 'David Brown',
    customerEmail: 'david.brown@email.com',
    customerPhone: '+1-555-0127',
    pizzaType: 'Meat Lovers',
    quantity: 2,
    orderDate: '2024-05-23T18:00:00',
    status: 'Cancelled',
    total: 0,
    notes: 'Customer requested cancellation',
    address: '654 Maple Dr, Staten Island, NY 10301'
  },
  {
    id: 'PZA006',
    customerName: 'Emily Davis',
    customerEmail: 'emily.davis@email.com',
    customerPhone: '+1-555-0128',
    pizzaType: 'BBQ Chicken',
    quantity: 1,
    orderDate: '2024-05-23T19:15:00',
    estimatedDelivery: '2024-05-23T20:00:00',
    status: 'Delivered',
    total: 19.99,
    address: '987 Cedar Ln, Manhattan, NY 10002'
  },
  {
    id: 'PZA007',
    customerName: 'Alex Rodriguez',
    customerEmail: 'alex.rodriguez@email.com',
    customerPhone: '+1-555-0129',
    pizzaType: 'Four Cheese',
    quantity: 2,
    orderDate: '2024-05-23T20:30:00',
    estimatedDelivery: '2024-05-23T21:15:00',
    status: 'Preparing',
    total: 32.98,
    notes: 'Light sauce',
    address: '147 Birch Ave, Brooklyn, NY 11215'
  },
  {
    id: 'PZA008',
    customerName: 'Lisa Garcia',
    customerEmail: 'lisa.garcia@email.com',
    customerPhone: '+1-555-0130',
    pizzaType: 'Mediterranean',
    quantity: 1,
    orderDate: '2024-05-23T21:45:00',
    estimatedDelivery: '2024-05-23T22:30:00',
    status: 'Pending',
    total: 21.75,
    address: '258 Willow St, Queens, NY 11377'
  },
  {
    id: 'PZA009',
    customerName: 'Robert Taylor',
    customerEmail: 'robert.taylor@email.com',
    customerPhone: '+1-555-0131',
    pizzaType: 'Buffalo Chicken',
    quantity: 2,
    orderDate: '2024-05-22T19:20:00',
    estimatedDelivery: '2024-05-22T20:05:00',
    status: 'Delivered',
    total: 37.50,
    address: '369 Spruce Ct, Bronx, NY 10467'
  },
  {
    id: 'PZA010',
    customerName: 'Michelle Lee',
    customerEmail: 'michelle.lee@email.com',
    customerPhone: '+1-555-0132',
    pizzaType: 'White Pizza',
    quantity: 1,
    orderDate: '2024-05-22T20:15:00',
    estimatedDelivery: '2024-05-22T21:00:00',
    status: 'Delivered',
    total: 17.25,
    notes: 'Extra garlic',
    address: '741 Ash St, Manhattan, NY 10003'
  }
]

export const pizzaTypes = [
  'Margherita',
  'Pepperoni', 
  'Veggie Supreme',
  'Hawaiian',
  'Meat Lovers',
  'BBQ Chicken',
  'Four Cheese',
  'Mediterranean',
  'Buffalo Chicken',
  'White Pizza'
]

export const orderStatuses: OrderStatus[] = [
  'Pending',
  'Preparing', 
  'Out for Delivery',
  'Delivered',
  'Cancelled'
]