import React, { useState } from 'react';
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import IntegrationsPage from './components/IntegrationsPage';
import AuthPage from './components/AuthPage';
import { Settings, ArrowLeft, BarChart3 } from 'lucide-react';

type Page = 'landing' | 'dashboard' | 'integrations';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const { user } = useUser();

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onEnterDashboard={() => setCurrentPage('dashboard')} />;
      case 'dashboard':
        return (
          <div>
            {/* Dashboard Navigation */}
            <div className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-10">
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setCurrentPage('landing')}
                      className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back to Home
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setCurrentPage('dashboard')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                        currentPage === 'dashboard' 
                          ? 'bg-green-100 text-green-700' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <BarChart3 className="w-4 h-4" />
                      Dashboard
                    </button>
                    <button 
                      onClick={() => setCurrentPage('integrations')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                        currentPage === 'integrations' 
                          ? 'bg-green-100 text-green-700' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <Settings className="w-4 h-4" />
                      Integrations
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Dashboard />
          </div>
        );
      case 'integrations':
        return <IntegrationsPage onBack={() => setCurrentPage('dashboard')} />;
      default:
        return <LandingPage onEnterDashboard={() => setCurrentPage('dashboard')} />;
    }
  };

  return (
    <div className="min-h-screen">
      <SignedOut>
        <AuthPage />
      </SignedOut>
      <SignedIn>
        {renderPage()}
      </SignedIn>
    </div>
  );
}

export default App;