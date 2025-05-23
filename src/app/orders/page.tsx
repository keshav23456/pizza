import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import OrdersTable from "@/components/OrdersTable"
import Navigation from "@/components/Navigation"

export default async function OrdersPage() {
  const session = await auth()
  
  if (!session) {
    redirect('/auth/signin')
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation session={session} />
      <main className="container mx-auto px-4 py-8">
        <OrdersTable />
      </main>
    </div>
  )
}