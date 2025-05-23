'use client'

import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'
import { mockPizzaOrders } from '@/lib/data'
import { OrderStatus } from '@/types/index'

export function OrderStatusChart() {
  const statusData = [
    { name: 'Delivered', value: mockPizzaOrders.filter(o => o.status === 'Delivered').length, color: '#10B981' },
    { name: 'Preparing', value: mockPizzaOrders.filter(o => o.status === 'Preparing').length, color: '#3B82F6' },
    { name: 'Out for Delivery', value: mockPizzaOrders.filter(o => o.status === 'Out for Delivery').length, color: '#8B5CF6' },
    { name: 'Pending', value: mockPizzaOrders.filter(o => o.status === 'Pending').length, color: '#F59E0B' },
    { name: 'Cancelled', value: mockPizzaOrders.filter(o => o.status === 'Cancelled').length, color: '#EF4444' },
  ]

  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Order Status Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={statusData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {statusData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export function PizzaTypesChart() {
  const pizzaTypes = mockPizzaOrders.reduce((acc, order) => {
    acc[order.pizzaType] = (acc[order.pizzaType] || 0) + order.quantity
    return acc
  }, {} as Record<string, number>)

  const pizzaData = Object.entries(pizzaTypes).map(([name, quantity]) => ({
    name,
    quantity
  })).sort((a, b) => b.quantity - a.quantity)

  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Popular Pizza Types</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={pizzaData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            angle={-45}
            textAnchor="end"
            height={100}
            fontSize={12}
          />
          <YAxis />
          <Tooltip />
          <Bar dataKey="quantity" fill="#F97316" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function RevenueChart() {
  // Group orders by date and calculate daily revenue
  const dailyRevenue = mockPizzaOrders.reduce((acc, order) => {
    const date = new Date(order.orderDate).toISOString().split('T')[0]
    acc[date] = (acc[date] || 0) + order.total
    return acc
  }, {} as Record<string, number>)

  const revenueData = Object.entries(dailyRevenue)
    .map(([date, revenue]) => ({
      date: new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      revenue: revenue
    }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Daily Revenue</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={revenueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip 
            formatter={(value) => [`$${Number(value).toFixed(2)}`, 'Revenue']}
          />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke="#F97316" 
            strokeWidth={3}
            dot={{ fill: '#F97316', strokeWidth: 2, r: 6 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}