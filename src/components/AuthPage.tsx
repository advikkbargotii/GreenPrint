import React from 'react';
import { SignIn, SignUp } from '@clerk/clerk-react';
import { Leaf, Shield, Zap, Users } from 'lucide-react';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = React.useState(false);

  const features = [
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your data is encrypted and never shared with third parties'
    },
    {
      icon: Zap,
      title: 'Instant Setup',
      description: 'Connect your tools and start tracking in under 2 minutes'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Share insights and optimize together with your team'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex">
      {/* Left Side - Branding & Features */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-12 bg-gradient-to-br from-green-600 to-blue-600">
        <div className="max-w-md">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">GreenPrint</h1>
              <p className="text-green-100">Developer Carbon Tracker</p>
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
            Build Sustainably,
            <br />
            Code Consciously
          </h2>
          <p className="text-green-100 text-lg mb-8 leading-relaxed">
            Track your development carbon footprint across CI/CD, deployments, and AI usage. 
            Get AI-powered insights to reduce emissions and build more sustainable software.
          </p>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-green-100 text-sm">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-green-100 text-sm">Developers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">2.3M</div>
              <div className="text-green-100 text-sm">kg CO₂ Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">35%</div>
              <div className="text-green-100 text-sm">Avg Reduction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16">
        <div className="max-w-md mx-auto w-full">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                GreenPrint
              </h1>
              <p className="text-xs text-gray-600">Developer Carbon Tracker</p>
            </div>
          </div>

          {/* Auth Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1 mb-8">
            <button
              onClick={() => setIsSignUp(false)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                !isSignUp
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsSignUp(true)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                isSignUp
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Clerk Auth Components */}
          <div className="flex justify-center">
            {isSignUp ? (
              <SignUp 
                appearance={{
                  elements: {
                    rootBox: "w-full",
                    card: "shadow-none border-0 bg-transparent",
                    headerTitle: "text-2xl font-bold text-gray-900",
                    headerSubtitle: "text-gray-600",
                    socialButtonsBlockButton: "border border-gray-300 hover:bg-gray-50 text-gray-700",
                    formButtonPrimary: "bg-green-600 hover:bg-green-700 text-white",
                    footerActionLink: "text-green-600 hover:text-green-700",
                    dividerLine: "bg-gray-200",
                    dividerText: "text-gray-500",
                    formFieldInput: "border-gray-300 focus:border-green-500 focus:ring-green-500",
                    formFieldLabel: "text-gray-700"
                  }
                }}
                afterSignUpUrl="/"
                signInUrl="#"
              />
            ) : (
              <SignIn 
                appearance={{
                  elements: {
                    rootBox: "w-full",
                    card: "shadow-none border-0 bg-transparent",
                    headerTitle: "text-2xl font-bold text-gray-900",
                    headerSubtitle: "text-gray-600",
                    socialButtonsBlockButton: "border border-gray-300 hover:bg-gray-50 text-gray-700",
                    formButtonPrimary: "bg-green-600 hover:bg-green-700 text-white",
                    footerActionLink: "text-green-600 hover:text-green-700",
                    dividerLine: "bg-gray-200",
                    dividerText: "text-gray-500",
                    formFieldInput: "border-gray-300 focus:border-green-500 focus:ring-green-500",
                    formFieldLabel: "text-gray-700"
                  }
                }}
                afterSignInUrl="/"
                signUpUrl="#"
              />
            )}
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500 mb-4">
              Trusted by developers at leading companies
            </p>
            <div className="flex justify-center items-center gap-6 opacity-60">
              <div className="text-lg font-bold text-gray-400">GitHub</div>
              <div className="text-lg font-bold text-gray-400">Vercel</div>
              <div className="text-lg font-bold text-gray-400">Netlify</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;