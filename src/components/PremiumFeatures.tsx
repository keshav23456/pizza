'use client'

import { useState } from 'react'
import { 
  Calculator, 
  FileText, 
  MessageSquare, 
  Bell, 
  Calendar,
  TrendingUp,
  Users,
  Settings,
  HelpCircle,
  Zap
} from 'lucide-react'
import toast from 'react-hot-toast'

export function QuickCalculator() {
  const [isOpen, setIsOpen] = useState(false)
  const [calculation, setCalculation] = useState('')
  const [result, setResult] = useState('')

  const calculate = () => {
    try {
      // Simple calculation - in production, use a proper math library
      const evalResult = Function('"use strict"; return (' + calculation + ')')()
      setResult(evalResult.toString())
      toast.success('Calculation completed!')
    } catch (error) {
      toast.error('Invalid calculation')
      setResult('Error')
    }
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-40 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      >
        <Calculator className="w-5 h-5" />
      </button>
    )
  }

  return (
    <div className="fixed bottom-24 right-6 z-40 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 w-64">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900 dark:text-white">Quick Calculator</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Enter calculation..."
          value={calculation}
          onChange={(e) => setCalculation(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          onKeyDown={(e) => e.key === 'Enter' && calculate()}
        />
        
        {result && (
          <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <span className="text-sm text-gray-600 dark:text-gray-400">Result: </span>
            <span className="font-semibold text-gray-900 dark:text-white">{result}</span>
          </div>
        )}
        
        <button
          onClick={calculate}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-colors"
        >
          Calculate
        </button>
      </div>
    </div>
  )
}

export function NotificationCenter() {
  const [isOpen, setIsOpen] = useState(false)
  
  const notifications = [
    {
      id: 1,
      title: "New Order Received",
      message: "Order #PZA009 - Margherita pizza",
      time: "2 minutes ago",
      type: "success"
    },
    {
      id: 2,
      title: "Payment Processed",
      message: "Payment for order #PZA008 completed",
      time: "5 minutes ago", 
      type: "info"
    },
    {
      id: 3,
      title: "Delivery Update",
      message: "Order #PZA007 out for delivery",
      time: "10 minutes ago",
      type: "warning"
    }
  ]

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="relative p-2 rounded-lg text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus-ring"
      >
        <Bell className="h-5 w-5" />
        <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">
          {notifications.length}
        </span>
      </button>
    )
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="relative p-2 rounded-lg text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus-ring"
      >
        <Bell className="h-5 w-5" />
        <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">
          {notifications.length}
        </span>
      </button>

      {/* Notification Panel */}
      <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-900 dark:text-white">Notifications</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ×
            </button>
          </div>
        </div>
        
        <div className="max-h-96 overflow-y-auto">
          {notifications.map((notification) => (
            <div key={notification.id} className="p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  notification.type === 'success' ? 'bg-green-500' :
                  notification.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                }`} />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                    {notification.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {notification.message}
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
                    {notification.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button className="w-full text-center text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 text-sm font-medium">
            Mark all as read
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className="fixed inset-0 z-40"
        onClick={() => setIsOpen(false)}
      />
    </>
  )
}


export function QuickActions() {
    const actions = [
      { icon: FileText, label: "Generate Report", action: () => toast.success("Report generated!") },
      { icon: MessageSquare, label: "Send Message", action: () => toast("Message feature coming soon!") },
      { icon: Calendar, label: "Schedule Event", action: () => toast("Calendar integration coming soon!") },
      { icon: TrendingUp, label: "View Analytics", action: () => toast.success("Analytics updated!") },
      { icon: Users, label: "Manage Team", action: () => toast("Team management coming soon!") },
      { icon: Settings, label: "Settings", action: () => toast("Settings panel coming soon!") }
    ]
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {actions.map((action, index) => {
        const Icon = action.icon
        return (
          <button
            key={index}
            onClick={action.action}
            className="group p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl
                     border border-gray-200 dark:border-gray-700 transition-all duration-300
                     transform hover:scale-105 active:scale-95"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-xl group-hover:from-orange-200 group-hover:to-red-200 dark:group-hover:from-orange-800/30 dark:group-hover:to-red-800/30 transition-colors">
                <Icon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                {action.label}
              </span>
            </div>
          </button>
        )
      })}
    </div>
  )
}

export function KeyboardShortcuts() {
  const [isOpen, setIsOpen] = useState(false)
  
  const shortcuts = [
    { key: "Ctrl + K", description: "Open quick search" },
    { key: "Ctrl + N", description: "New order" },
    { key: "Ctrl + D", description: "Dashboard" },
    { key: "Ctrl + O", description: "Orders page" },
    { key: "Ctrl + /", description: "Show shortcuts" },
    { key: "Esc", description: "Close modals" }
  ]

  // Listen for Ctrl+/ to toggle shortcuts
  useState(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === '/') {
        e.preventDefault()
        setIsOpen(!isOpen)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  })

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <HelpCircle className="w-5 h-5" />
      </button>
    )
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Keyboard Shortcuts</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-4">
            {shortcuts.map((shortcut, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">{shortcut.description}</span>
                <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm font-mono text-gray-800 dark:text-gray-200">
                  {shortcut.key}
                </kbd>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Press <kbd className="px-1 bg-gray-100 dark:bg-gray-700 rounded">Ctrl + /</kbd> to toggle this panel
            </p>
          </div>
        </div>
      </div>
    </>
  )
}