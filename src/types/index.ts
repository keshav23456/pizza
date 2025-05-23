export interface PizzaOrder {
    id: string
    customerName: string
    customerEmail?: string
    customerPhone?: string
    pizzaType: string
    quantity: number
    orderDate: string
    estimatedDelivery?: string
    status: 'Pending' | 'Preparing' | 'Out for Delivery' | 'Delivered' | 'Cancelled'
    total: number
    notes?: string
    address?: string
  }
  
  export type OrderStatus = PizzaOrder['status']
  
  export interface FilterState {
    status: OrderStatus | 'All'
    sortBy: 'id' | 'date' | 'status' | 'total' | 'customer'
    sortOrder: 'asc' | 'desc'
    searchTerm: string
    dateRange: {
      start: string | null
      end: string | null
    }
  }
  
  export interface OrderStats {
    total: number
    pending: number
    preparing: number
    outForDelivery: number
    delivered: number
    cancelled: number
    revenue: number
  }
  
  export interface ThemeContextType {
    theme: 'light' | 'dark'
    toggleTheme: () => void
  }