import { signIn } from "@/lib/auth"
import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import { Pizza, Shield, Zap, Users } from "lucide-react"

export default async function SignInPage() {
  const session = await auth()
  
  if (session) {
    redirect('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Features */}
        <div className="hidden lg:block space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Welcome to PizzaDash
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              The modern way to manage your pizza orders with powerful features and beautiful design.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: Shield,
                title: "Secure Authentication",
                description: "Sign in safely with Google OAuth 2.0 protection"
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Built with Next.js for optimal performance"
              },
              {
                icon: Users,
                title: "User Friendly",
                description: "Intuitive interface designed for everyone"
              }
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg">
                  <feature.icon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Sign in form */}
        <div className="glass rounded-2xl shadow-2xl p-8 w-full max-w-md mx-auto lg:mx-0">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-2xl w-fit mx-auto mb-6 shadow-lg">
              <Pizza className="h-16 w-16 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Sign In
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Access your pizza dashboard securely
            </p>
          </div>

          <form
            action={async () => {
              "use server"
              await signIn("google", { redirectTo: "/dashboard" })
            }}
            className="w-full"
          >
            <button
              type="submit"
              className="w-full bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 
                       hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-200 
                       font-semibold py-4 px-6 rounded-xl transition-all duration-300
                       flex items-center justify-center gap-3 group shadow-lg hover:shadow-xl
                       transform hover:scale-105 active:scale-95"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-lg">Continue with Google</span>
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              By signing in, you agree to our{' '}
              <a href="#" className="text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300">
                Privacy Policy
              </a>
            </p>
          </div>

          <div className="mt-6 text-center">
            <div className="text-xs text-gray-400 dark:text-gray-500">
              🔒 Secured by NextAuth.js & Google OAuth 2.0
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}