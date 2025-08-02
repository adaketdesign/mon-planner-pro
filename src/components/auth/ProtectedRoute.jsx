import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { Loader2 } from 'lucide-react'

const ProtectedRoute = ({ children, requiresPro = false, requiresPremium = false }) => {
  const { user, profile, loading, isAuthenticated, isPro, isPremium } = useAuth()
  const location = useLocation()

  // Afficher le loader pendant le chargement
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-purple-600" />
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    )
  }

  // Rediriger vers la connexion si non authentifié
  if (!isAuthenticated) {
    return <Navigate to="/connexion" state={{ from: location }} replace />
  }

  // Vérifier les permissions d'abonnement
  if (requiresPremium && !isPremium()) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v2m0-2h2m-2 0H10m4-6V9a4 4 0 00-8 0v2m0 0V9a4 4 0 018 0v2" />
            </svg>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Accès Premium Requis
          </h2>
          
          <p className="text-gray-600 mb-6">
            Cette fonctionnalité est réservée aux abonnés Premium. 
            Débloquez l'accès complet à tous nos planners !
          </p>
          
          <div className="space-y-3">
            <button
              onClick={() => window.location.href = '/abonnements'}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
            >
              Passer à Premium
            </button>
            
            <button
              onClick={() => window.location.href = '/planners/semainier'}
              className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 px-6 rounded-lg transition-all duration-200"
            >
              Retour aux planners gratuits
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (requiresPro && !isPro()) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Accès Pro Requis
          </h2>
          
          <p className="text-gray-600 mb-6">
            Cette fonctionnalité est réservée aux abonnés Pro et Premium. 
            Débloquez plus de planners pour seulement 1,99€/mois !
          </p>
          
          <div className="space-y-3">
            <button
              onClick={() => window.location.href = '/abonnements'}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
            >
              Passer à Pro
            </button>
            
            <button
              onClick={() => window.location.href = '/planners/semainier'}
              className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 px-6 rounded-lg transition-all duration-200"
            >
              Retour au planner gratuit
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Afficher le contenu protégé
  return children
}

export default ProtectedRoute

