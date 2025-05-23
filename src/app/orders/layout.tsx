import { auth } from "@/lib/auth"
import Navigation from "@/components/Navigation"
import { redirect } from "next/navigation"
import { Suspense } from "react"
import { TableSkeleton } from "@/components/LoadingSkeleton"

export default async function OrdersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  if (!session) {
    redirect('/auth/signin')
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navigation session={session} />
      
      {/* Enhanced Breadcrumb Navigation */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-gray-500 dark:text-gray-400">Dashboard</span>
              <span className="text-gray-300 dark:text-gray-600">/</span>
              <span className="text-gray-900 dark:text-white font-medium">Orders</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Last updated: {new Date().toLocaleTimeString()}
              </div>
              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Suspense fallback={<TableSkeleton />}>
          <div className="animate-fade-in">
            {children}
          </div>
        </Suspense>
      </main>

      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F97316' fill-opacity='0.05'%3E%3Cpath d='M30 30m-15 0a15 15 0 1 1 30 0a15 15 0 1 1 -30 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
    </div>
  )
}