import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Bubatz Center</span>
          </div>
          <a href="https://canngo.express/" target="_blank" rel="noopener noreferrer" className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
            Get Started
          </a>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Simple, Fast & Accessible
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Experience a new standard in digital wellness. Quality products, expert guidance,
              and seamless delivery — all in one modern platform designed for your convenience.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-10">
              <div className="flex items-center gap-2 text-gray-700">
                <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="font-medium">Premium Quality</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="font-medium">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="font-medium">Secure & Discreet</span>
              </div>
            </div>
            <a href="https://canngo.express/" target="_blank" rel="noopener noreferrer" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl inline-block">
              Start Your Journey
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Selection</h3>
              <p className="text-gray-600 leading-relaxed">
                Browse our curated selection of premium products. Simple interface,
                clear information, and straightforward ordering.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Processing</h3>
              <p className="text-gray-600 leading-relaxed">
                Orders processed within 2 business days. No hassle, no waiting.
                Track your order from start to finish.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fair Pricing</h3>
              <p className="text-gray-600 leading-relaxed">
                Transparent pricing with no hidden fees. Premium quality at
                competitive rates, starting from just €4.99.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Getting started is simple. Three easy steps to access premium wellness products.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-1 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200"></div>

            <div className="relative text-center">
              <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg relative z-10">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose Your Products</h3>
              <p className="text-gray-600 leading-relaxed">
                Browse our selection and select the products that fit your needs.
                Detailed descriptions and clear information help you make the right choice.
              </p>
            </div>

            <div className="relative text-center">
              <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg relative z-10">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Verification</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete a simple online process to verify your eligibility.
                Fast, secure, and straightforward — usually completed in minutes.
              </p>
            </div>

            <div className="relative text-center">
              <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg relative z-10">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Receive at Home</h3>
              <p className="text-gray-600 leading-relaxed">
                Discreet packaging delivered directly to your door. Track your shipment
                in real-time and enjoy secure, reliable delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-8 mt-8">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-bold text-gray-900 text-xl">4.9/5</span>
              </div>
              <div className="text-gray-600">
                <span className="font-semibold text-gray-900">5,200+</span> verified reviews
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                &quot;The entire process was incredibly smooth. Ordered on Monday, received by Wednesday.
                The quality exceeded my expectations and customer service was fantastic.&quot;
              </p>
              <p className="font-semibold text-gray-900">Sarah M.</p>
              <p className="text-sm text-gray-500">Verified Customer</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                &quot;Finally, a service that makes everything simple and transparent. Fair prices,
                fast delivery, and excellent product quality. Highly recommended!&quot;
              </p>
              <p className="font-semibold text-gray-900">Michael K.</p>
              <p className="text-sm text-gray-500">Verified Customer</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                &quot;Professional service from start to finish. Discreet packaging, timely delivery,
                and the platform is so easy to use. Will definitely order again.&quot;
              </p>
              <p className="font-semibold text-gray-900">Emma L.</p>
              <p className="text-sm text-gray-500">Verified Customer</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-500 to-teal-600 px-6 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-emerald-50 mb-10 leading-relaxed">
            Join thousands of satisfied customers who trust Bubatz Center for their wellness needs.
            Simple, fast, and reliable — experience the difference today.
          </p>
          <a href="https://canngo.express/" target="_blank" rel="noopener noreferrer" className="bg-white text-emerald-600 hover:bg-gray-50 px-10 py-4 rounded-lg font-bold text-lg transition-colors shadow-xl hover:shadow-2xl inline-block">
            Start Your Journey Now
          </a>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">B</span>
                </div>
                <span className="text-xl font-bold text-white">Bubatz Center</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Modern digital wellness platform delivering quality and convenience.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Browse Catalog</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Premium Selection</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">New Arrivals</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">FAQs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Bubatz Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
