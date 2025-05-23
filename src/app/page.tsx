import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { 
  Pizza, 
  ArrowRight, 
  Shield, 
  Users, 
  Zap, 
  BarChart3,
  Smartphone,
  Globe,
  Star,
  CheckCircle,
  Play
} from "lucide-react"
import Link from "next/link"

export default async function HomePage() {
  const session = await auth()
  
  if (session) {
    redirect('/dashboard')
  }

  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with Google OAuth 2.0, CSRF protection, and encrypted sessions",
      color: "blue"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time dashboards with interactive charts, KPIs, and business intelligence",
      color: "purple"
    },
    {
      icon: Zap,
      title: "Lightning Performance",
      description: "Built with Next.js 14, optimized for speed with 99.9% uptime guarantee",
      color: "yellow"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Perfect experience across all devices with PWA capabilities",
      color: "green"
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Cloud-native architecture ready to scale from startup to enterprise",
      color: "indigo"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Multi-user support with role-based access and team management",
      color: "pink"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Restaurant Owner",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
      content: "PizzaDash transformed our order management. Sales increased 40% in just 3 months!"
    },
    {
      name: "Mike Chen",
      role: "Operations Manager", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      content: "The analytics and reporting features are incredible. Best investment we've made."
    },
    {
      name: "Lisa Rodriguez",
      role: "Franchise Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face", 
      content: "Managing 15 locations is now effortless. The dashboard gives us complete visibility."
    }
  ]

  const stats = [
    { number: "10K+", label: "Orders Processed" },
    { number: "500+", label: "Happy Restaurants" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10 dark:from-orange-400/5 dark:to-red-400/5" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl">
          <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200/30 dark:bg-orange-400/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-40 right-10 w-32 h-32 bg-red-200/30 dark:bg-red-400/10 rounded-full blur-xl animate-pulse animation-delay-200" />
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-pink-200/30 dark:bg-pink-400/10 rounded-full blur-xl animate-pulse animation-delay-400" />
        </div>

        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 mb-8 shadow-lg border border-white/20 dark:border-gray-700/20">
              <Star className="h-4 w-4 text-orange-500" />
              Trusted by 500+ restaurants worldwide
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 text-balance leading-tight">
              The Future of
              <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Pizza Management
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Streamline your pizza business with our intelligent dashboard. 
              Track orders, analyze performance, and delight customers with unprecedented efficiency.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                href="/auth/signin"
                className="group bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 
                         text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300
                         transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl
                         flex items-center gap-3"
              >
                Start Free Trial
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300 dark:border-gray-600
                               hover:bg-white dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 
                               px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300
                               flex items-center gap-3 shadow-lg hover:shadow-xl">
                <Play className="h-5 w-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose PizzaDash?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Built by restaurant experts, designed for modern businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon
              const colorClasses = {
                blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
                purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
                yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
                green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
                indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
                pink: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400'
              }

              return (
                <div 
                  key={index}
                  className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl 
                           shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-gray-700/20
                           transform hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`p-4 rounded-xl w-fit mb-6 ${colorClasses[feature.color as keyof typeof colorClasses]}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Loved by Restaurant Owners
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See what our customers are saying
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl 
                         shadow-lg border border-white/20 dark:border-gray-700/20
                         animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-orange-100 mb-12">
              Join thousands of restaurants already using PizzaDash to streamline their operations
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/auth/signin"
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-xl 
                         font-semibold text-lg transition-all duration-300 transform hover:scale-105
                         shadow-lg hover:shadow-xl flex items-center gap-3"
              >
                <CheckCircle className="h-5 w-5" />
                Start Your Free Trial
              </Link>
              
              <div className="text-orange-100 text-sm">
                No credit card required • 14-day free trial
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-12 bg-gray-900 dark:bg-black">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
              <Pizza className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">PizzaDash</span>
          </div>
          <p className="text-gray-400 mb-4">
            Built with Next.js, NextAuth.js, Tailwind CSS, and ❤️
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 PizzaDash. Crafted for the Frontend AI Engineer Assignment.
          </p>
        </div>
      </div>
    </div>
  )
}