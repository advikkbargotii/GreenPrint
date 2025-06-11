import React, { useState } from 'react';
import { UserButton, useUser } from '@clerk/clerk-react';
import { Activity, Zap, Cloud, Brain, TrendingDown, Settings, Leaf, BarChart3 } from 'lucide-react';

const Dashboard = () => {
  const [selectedProject, setSelectedProject] = useState('all');
  const [timeRange, setTimeRange] = useState('7d');
  const { user } = useUser();

  const projects = [
    { id: 'all', name: 'All Projects', emissions: 45.2 },
    { id: 'web-app', name: 'Main Web App', emissions: 23.1 },
    { id: 'api-service', name: 'API Service', emissions: 12.4 },
    { id: 'mobile-app', name: 'Mobile App', emissions: 9.7 }
  ];

  const emissionsSources = [
    { name: 'CI/CD Workflows', value: 18.3, color: 'bg-green-500', icon: Activity },
    { name: 'Deployments', value: 12.7, color: 'bg-blue-500', icon: Cloud },
    { name: 'AI/LLM Usage', value: 8.9, color: 'bg-purple-500', icon: Brain },
    { name: 'Build Processes', value: 5.3, color: 'bg-orange-500', icon: Zap }
  ];

  const weeklyData = [
    { day: 'Mon', emissions: 6.2 },
    { day: 'Tue', emissions: 8.1 },
    { day: 'Wed', emissions: 5.7 },
    { day: 'Thu', emissions: 9.3 },
    { day: 'Fri', emissions: 7.8 },
    { day: 'Sat', emissions: 3.2 },
    { day: 'Sun', emissions: 4.9 }
  ];

  const maxEmission = Math.max(...weeklyData.map(d => d.emissions));

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-gray-900">Carbon Dashboard</h1>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8"
                  }
                }}
              />
            </div>
            <p className="text-gray-600">
              Welcome back, {user?.firstName || 'Developer'}! Track and optimize your development footprint
            </p>
          </div>
          <div className="flex gap-4">
            <select 
              value={selectedProject} 
              onChange={(e) => setSelectedProject(e.target.value)}
              className="bg-white border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {projects.map(project => (
                <option key={project.id} value={project.id}>{project.name}</option>
              ))}
            </select>
            <select 
              value={timeRange} 
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-white border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Emissions</p>
                <p className="text-3xl font-bold text-gray-900">45.2</p>
                <p className="text-green-600 text-sm">kg CO₂</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">This Week</p>
                <p className="text-3xl font-bold text-gray-900">6.8</p>
                <p className="text-blue-600 text-sm">kg CO₂</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Reduction</p>
                <p className="text-3xl font-bold text-gray-900">23%</p>
                <p className="text-green-600 text-sm">vs last month</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <TrendingDown className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Green Score</p>
                <p className="text-3xl font-bold text-gray-900">87</p>
                <p className="text-green-600 text-sm">Excellent</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <Settings className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Weekly Emissions Chart */}
          <div className="lg:col-span-2 bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Weekly Emissions</h3>
            <div className="space-y-4">
              {weeklyData.map((day, index) => (
                <div key={day.day} className="flex items-center gap-4">
                  <div className="w-12 text-sm font-medium text-gray-600">{day.day}</div>
                  <div className="flex-1 bg-gray-100 rounded-full h-2 relative overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-green-600 h-full rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${(day.emissions / maxEmission) * 100}%` }}
                    />
                  </div>
                  <div className="text-sm font-medium text-gray-900 w-16 text-right">{day.emissions} kg</div>
                </div>
              ))}
            </div>
          </div>

          {/* Emissions Breakdown */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Emissions by Source</h3>
            <div className="space-y-4">
              {emissionsSources.map((source, index) => {
                const Icon = source.icon;
                return (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className={`p-2 rounded-lg ${source.color}`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">{source.name}</p>
                      <p className="text-gray-600 text-xs">{source.value} kg CO₂</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Optimization Suggestions */}
        <div className="mt-8 bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">🌱 AI-Powered Optimization Suggestions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Batch Your Deployments</h4>
              <p className="text-green-700 text-sm">Consider bundling multiple small commits into larger deployments. This could reduce your weekly emissions by ~15%.</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Optimize CI/CD Workflows</h4>
              <p className="text-blue-700 text-sm">Your build processes run longer than necessary. Enable caching to reduce build times by up to 40%.</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">AI Usage Efficiency</h4>
              <p className="text-purple-700 text-sm">Switch to Gemini Flash for routine tasks - it uses 60% less energy than GPT-4 for similar performance.</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2">Regional Optimization</h4>
              <p className="text-orange-700 text-sm">Deploy to regions with cleaner energy grids. Nordic regions could reduce your footprint by 30%.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;