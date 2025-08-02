import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { SubscriptionProvider } from './contexts/SubscriptionContext'
import Layout from './components/layout/Layout'
import ProtectedRoute from './components/auth/ProtectedRoute'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Help from './pages/Help'
import Pricing from './pages/Pricing'
import Blog from './pages/Blog'
import Planners from './pages/Planners'
import Login from './pages/Login'
import Register from './pages/Register'
import Subscriptions from './pages/Subscriptions'
import CGV from './pages/legal/CGV'
import Privacy from './pages/legal/Privacy'
import Refund from './pages/legal/Refund'
import SemainierPlanner from './pages/planners/SemainierPlanner'
import SemainierPlannerNew from './pages/planners/SemainierPlannerNew'
import RoutinePlanner from './pages/planners/RoutinePlanner'
import GlowUpPlanner from './pages/planners/GlowUpPlanner'
import ProjetPlanner from './pages/planners/ProjetPlanner'
import './App.css'
import './styles/custom.css'

function App() {
  return (
    <AuthProvider>
      <SubscriptionProvider>
        <Router>
          <Routes>
          {/* Public routes */}
          <Route path="/" element={
            <Layout>
              <Home />
            </Layout>
          } />
          <Route path="/connexion" element={<Login />} />
          <Route path="/inscription" element={<Register />} />
          <Route path="/abonnements" element={
            <Layout>
              <Subscriptions />
            </Layout>
          } />
          
          <Route path="/planners" element={
            <Layout>
              <Planners />
            </Layout>
          } />
          
          <Route path="/a-propos" element={
            <Layout>
              <About />
            </Layout>
          } />
          
          <Route path="/tarification" element={
            <Layout>
              <Pricing />
            </Layout>
          } />
          
          <Route path="/contact" element={
            <Layout>
              <Contact />
            </Layout>
          } />
          
          <Route path="/aide" element={
            <Layout>
              <Help />
            </Layout>
          } />
          
          <Route path="/blog" element={
            <Layout>
              <Blog />
            </Layout>
          } />
          
          {/* Legal pages */}
          <Route path="/cgv" element={
            <Layout>
              <CGV />
            </Layout>
          } />
          
          <Route path="/confidentialite" element={
            <Layout>
              <Privacy />
            </Layout>
          } />
          
          <Route path="/remboursement" element={
            <Layout>
              <Refund />
            </Layout>
          } />
          
          {/* Protected routes */}
          <Route path="/planners/semainier" element={
            <ProtectedRoute>
              <Layout>
                <SemainierPlannerNew />
              </Layout>
            </ProtectedRoute>
          } />
          
          <Route path="/planners/routine" element={
            <ProtectedRoute>
              <Layout>
                <RoutinePlanner />
              </Layout>
            </ProtectedRoute>
          } />
          
          <Route path="/planners/glowup" element={
            <ProtectedRoute requireSubscription="premium">
              <Layout>
                <GlowUpPlanner />
              </Layout>
            </ProtectedRoute>
          } />
          
          <Route path="/planners/projet" element={
            <ProtectedRoute>
              <Layout>
                <ProjetPlanner />
              </Layout>
            </ProtectedRoute>
          } />
          
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Layout>
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard</h1>
                    <p className="text-gray-600">Bienvenue dans votre espace personnel !</p>
                  </div>
                </div>
              </Layout>
            </ProtectedRoute>
          } />
          
          {/* Catch all route */}
          <Route path="*" element={
            <Layout>
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">Page en construction</h1>
                  <p className="text-gray-600">Cette page sera bientôt disponible.</p>
                </div>
              </div>
            </Layout>
          } />
          </Routes>
        </Router>
      </SubscriptionProvider>
    </AuthProvider>
  )
}

export default App

