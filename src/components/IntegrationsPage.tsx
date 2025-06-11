import React, { useState } from 'react';
import { Github, Cloud, Zap, Brain, Check, ExternalLink, Settings, ArrowLeft } from 'lucide-react';

interface IntegrationsPageProps {
  onBack: () => void;
}

const IntegrationsPage: React.FC<IntegrationsPageProps> = ({ onBack }) => {
  const [ecoMode, setEcoMode] = useState(false);

  const integrations = [
    {
      category: 'Version Control',
      services: [
        {
          name: 'GitHub Actions',
          description: 'Track CI/CD workflow emissions and build times',
          icon: Github,
          connected: true,
          emissions: '12.3 kg CO₂/month',
          color: 'text-gray-900'
        }
      ]
    },
    {
      category: 'Deployment Platforms',
      services: [
        {
          name: 'Vercel',
          description: 'Monitor serverless function and edge deployment emissions',
          icon: Cloud,
          connected: true,
          emissions: '8.7 kg CO₂/month',
          color: 'text-black'
        },
        {
          name: 'Netlify',
          description: 'Track static site builds and function executions',
          icon: Zap,
          connected: false,
          emissions: 'Not connected',
          color: 'text-teal-600'
        },
        {
          name: 'Firebase',
          description: 'Monitor hosting and function usage',
          icon: Cloud,
          connected: false,
          emissions: 'Not connected',
          color: 'text-orange-500'
        }
      ]
    },
    {
      category: 'AI/ML Services',
      services: [
        {
          name: 'OpenAI GPT-4',
          description: 'Track token usage and inference emissions',
          icon: Brain,
          connected: true,
          emissions: '15.2 kg CO₂/month',
          color: 'text-green-600'
        },
        {
          name: 'Google Gemini',
          description: 'Monitor Gemini Pro and Flash model usage',
          icon: Brain,
          connected: false,
          emissions: 'Not connected',
          color: 'text-blue-600'
        }
      ]
    }
  ];

  const carbonIntensityRegions = [
    { region: 'US West (Oregon)', intensity: 0.12, status: 'Clean' },
    { region: 'EU Central (Frankfurt)', intensity: 0.22, status: 'Moderate' },
    { region: 'Asia Pacific (Singapore)', intensity: 0.45, status: 'High' },
    { region: 'US East (Virginia)', intensity: 0.18, status: 'Clean' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={onBack}
            className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-lg p-2 hover:bg-white/90 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Integrations</h1>
            <p className="text-gray-600 mt-2">Connect your development tools to track emissions</p>
          </div>
        </div>

        {/* Eco Mode Toggle */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">🌱 Eco Mode</h3>
              <p className="text-gray-600">
                Reduce GreenPrint's own carbon footprint by limiting AI usage and enabling local processing
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">Standard</span>
              <button
                onClick={() => setEcoMode(!ecoMode)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  ecoMode ? 'bg-green-500' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    ecoMode ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className="text-sm text-green-600 font-medium">Eco Mode</span>
            </div>
          </div>
          {ecoMode && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 text-sm">
                ✅ Eco Mode enabled: AI suggestions are cached locally, model usage is minimized, 
                and energy-efficient algorithms are prioritized.
              </p>
            </div>
          )}
        </div>

        {/* Integrations */}
        <div className="space-y-8">
          {integrations.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.services.map((service, serviceIndex) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={serviceIndex}
                      className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:shadow-lg transition-all duration-200"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="bg-gray-100 p-2 rounded-lg">
                            <Icon className={`w-6 h-6 ${service.color}`} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{service.name}</h3>
                            <p className="text-sm text-gray-600">{service.description}</p>
                          </div>
                        </div>
                        {service.connected ? (
                          <div className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                            <Check className="w-4 h-4" />
                            Connected
                          </div>
                        ) : (
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                            Connect
                          </button>
                        )}
                      </div>
                      
                      <div className="border-t border-gray-200 pt-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Monthly Emissions:</span>
                          <span className={`font-medium ${
                            service.connected ? 'text-gray-900' : 'text-gray-500'
                          }`}>
                            {service.emissions}
                          </span>
                        </div>
                        {service.connected && (
                          <button className="mt-2 text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1">
                            View Details
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Regional Carbon Intensity */}
        <div className="mt-8 bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Regional Carbon Intensity</h2>
          <p className="text-gray-600 mb-6">
            Deploy to regions with cleaner energy grids to reduce your carbon footprint
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {carbonIntensityRegions.map((region, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{region.region}</h4>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      region.status === 'Clean'
                        ? 'bg-green-100 text-green-700'
                        : region.status === 'Moderate'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {region.status}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-full rounded-full ${
                        region.intensity <= 0.2
                          ? 'bg-green-500'
                          : region.intensity <= 0.3
                          ? 'bg-yellow-500'
                          : 'bg-red-500'
                      }`}
                      style={{ width: `${(region.intensity / 0.5) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {region.intensity} kg CO₂/kWh
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Settings */}
        <div className="mt-8 bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <Settings className="w-6 h-6 text-gray-700" />
            <h2 className="text-xl font-semibold text-gray-900">Advanced Settings</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white/50 rounded-lg border border-white/20">
              <div>
                <h4 className="font-medium text-gray-900">Emission Alerts</h4>
                <p className="text-sm text-gray-600">Receive notifications when emissions exceed thresholds</p>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Configure
              </button>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-white/50 rounded-lg border border-white/20">
              <div>
                <h4 className="font-medium text-gray-900">Data Retention</h4>
                <p className="text-sm text-gray-600">How long to keep historical emission data</p>
              </div>
              <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm">
                <option>6 months</option>
                <option>1 year</option>
                <option>2 years</option>
                <option>Forever</option>
              </select>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-white/50 rounded-lg border border-white/20">
              <div>
                <h4 className="font-medium text-gray-900">API Access</h4>
                <p className="text-sm text-gray-600">Generate API keys for custom integrations</p>
              </div>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                Manage Keys
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationsPage;