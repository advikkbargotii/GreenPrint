import React from 'react';
import { SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import { Leaf, BarChart3, Zap, Brain, Github, ArrowRight, Users, Target, Globe } from 'lucide-react';

interface LandingPageProps {
  onEnterDashboard: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterDashboard }) => {
  const { isSignedIn, user } = useUser();

  const features = [
    {
      icon: BarChart3,
      title: 'Real-time Tracking',
      description: 'Monitor CI/CD, deployments, and AI usage emissions in real-time'
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent suggestions to reduce your carbon footprint'
    },
    {
      icon: Globe,
      title: 'Regional Mapping',
      description: 'Track emissions based on deployment regions and energy grids'
    },
    {
      icon: Target,
      title: 'Optimization Goals',
      description: 'Set and achieve sustainability targets for your projects'
    }
  ];

  const integrations = [
    { name: 'GitHub Actions', logo: '🔧' },
    { name: 'Vercel', logo: '▲' },
    { name: 'Netlify', logo: '🌍' },
    { name: 'OpenAI', logo: '🤖' },
    { name: 'Firebase', logo: '🔥' },
    { name: 'AWS', logo: '☁️' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <header className="relative z-10 bg-white/80 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-2 rounded-xl">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                  GreenPrint
                </h1>
                <p className="text-xs text-gray-600">Developer Carbon Tracker</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                Docs
              </button>
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </button>
              {isSignedIn ? (
                <div className="flex items-center gap-4">
                  <button 
                    onClick={onEnterDashboard}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    Dashboard
                  </button>
                  <UserButton 
                    appearance={{
                      elements: {
                        avatarBox: "w-8 h-8"
                      }
                    }}
                  />
                </div>
              ) : (
                <SignInButton mode="modal">
                  <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
                    Get Started
                  </button>
                </SignInButton>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            {isSignedIn && (
              <div className="mb-6 bg-green-100 border border-green-200 rounded-lg p-4 inline-block">
                <p className="text-green-800">
                  Welcome back, {user?.firstName || 'Developer'}! 👋
                </p>
              </div>
            )}
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Track Your Code's
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent block">
                Carbon Footprint
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Measure, visualize, and optimize the environmental impact of your CI/CD workflows, 
              deployments, and AI usage. Build sustainably with real-time insights and AI-powered suggestions.
            </p>
            <div className="flex items-center justify-center gap-4">
              {isSignedIn ? (
                <button 
                  onClick={onEnterDashboard}
                  className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                  View Your Dashboard
                  <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <SignInButton mode="modal">
                  <button className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl">
                    Start Tracking Free
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </SignInButton>
              )}
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg flex items-center gap-2">
                <Github className="w-5 h-5" />
                View Demo
              </button>
            </div>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="absolute top-32 left-10 hidden lg:block">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20 animate-pulse">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <Zap className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">CI/CD Emissions</p>
                <p className="text-lg font-bold text-green-600">-23% this week</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-64 right-10 hidden lg:block">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Brain className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">AI Suggestion</p>
                <p className="text-xs text-gray-600">Batch deployments to save 15%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sustainable Development Made Simple
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get comprehensive visibility into your development carbon footprint with 
              actionable insights and intelligent optimization recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl w-fit mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Seamless Integrations
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Connect with your existing development tools and platforms. 
            No configuration required - just connect and start tracking.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-3">{integration.logo}</div>
                <p className="font-semibold text-gray-900">{integration.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Reduce Your Carbon Footprint?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of developers building more sustainable software. 
            Start tracking your emissions today.
          </p>
          <div className="flex items-center justify-center gap-4">
            {isSignedIn ? (
              <button 
                onClick={onEnterDashboard}
                className="bg-white text-green-600 px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg shadow-lg"
              >
                Go to Dashboard
              </button>
            ) : (
              <SignInButton mode="modal">
                <button className="bg-white text-green-600 px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg shadow-lg">
                  Start Free Trial
                </button>
              </SignInButton>
            )}
            <button className="border border-white text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-colors font-semibold text-lg">
              Book Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-2 rounded-xl">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">GreenPrint</h3>
                <p className="text-gray-400 text-sm">Sustainable development tracking</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GreenPrint. Building a more sustainable future, one commit at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;