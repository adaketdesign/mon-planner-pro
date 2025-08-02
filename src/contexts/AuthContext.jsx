import React, { createContext, useContext, useEffect, useState } from 'react'
import { getAuthService, getProfilesService } from '../lib/supabase-fallback'

const AuthContext = createContext({})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Services dynamiques
  const authService = getAuthService()
  const profilesService = getProfilesService()

  // Charger l'utilisateur et son profil
  const loadUserProfile = async (user) => {
    if (!user) {
      setProfile(null)
      return
    }

    try {
      const { data: profileData, error: profileError } = await profilesService.getProfile(user.id)
      if (profileError) {
        console.error('Erreur lors du chargement du profil:', profileError)
        setError(profileError.message)
      } else {
        setProfile(profileData)
      }
    } catch (err) {
      console.error('Erreur lors du chargement du profil:', err)
      setError(err.message)
    }
  }

  // Inscription
  const signUp = async (email, password, fullName) => {
    try {
      setLoading(true)
      setError(null)
      const { data, error } = await authService.signUp(email, password, fullName)
      
      if (error) {
        setError(error.message)
        return { success: false, error: error.message }
      }

      return { success: true, data }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    } finally {
      setLoading(false)
    }
  }

  // Connexion
  const signIn = async (email, password) => {
    try {
      setLoading(true)
      setError(null)
      const { data, error } = await authService.signIn(email, password)
      
      if (error) {
        setError(error.message)
        return { success: false, error: error.message }
      }

      return { success: true, data }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    } finally {
      setLoading(false)
    }
  }

  // Déconnexion
  const signOut = async () => {
    try {
      setLoading(true)
      setError(null)
      const { error } = await authService.signOut()
      
      if (error) {
        setError(error.message)
        return { success: false, error: error.message }
      }

      setUser(null)
      setProfile(null)
      return { success: true }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    } finally {
      setLoading(false)
    }
  }

  // Récupération de mot de passe
  const resetPassword = async (email) => {
    try {
      setLoading(true)
      setError(null)
      const { data, error } = await authService.resetPassword(email)
      
      if (error) {
        setError(error.message)
        return { success: false, error: error.message }
      }

      return { success: true, data }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    } finally {
      setLoading(false)
    }
  }

  // Mise à jour du profil
  const updateProfile = async (updates) => {
    if (!user) return { success: false, error: 'Utilisateur non connecté' }

    try {
      setLoading(true)
      setError(null)
      const { data, error } = await profilesService.updateProfile(user.id, updates)
      
      if (error) {
        setError(error.message)
        return { success: false, error: error.message }
      }

      setProfile(data)
      return { success: true, data }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    } finally {
      setLoading(false)
    }
  }

  // Vérifier l'accès à un planner
  const canAccessPlanner = async (plannerType) => {
    if (!user) return false

    try {
      const { data, error } = await profilesService.canAccessPlanner(user.id, plannerType)
      if (error) {
        console.error('Erreur lors de la vérification d\'accès:', error)
        return false
      }
      return data
    } catch (err) {
      console.error('Erreur lors de la vérification d\'accès:', err)
      return false
    }
  }

  // Obtenir le statut d'abonnement
  const getSubscriptionStatus = () => {
    return profile?.subscription_status || 'freemium'
  }

  // Vérifier si l'utilisateur est Premium
  const isPremium = () => {
    return profile?.subscription_status === 'premium'
  }

  // Vérifier si l'utilisateur est Pro ou Premium
  const isPro = () => {
    return ['pro', 'premium'].includes(profile?.subscription_status)
  }

  // Écouter les changements d'authentification
  useEffect(() => {
    const { data: { subscription } } = authService.onAuthStateChange(async (event, session) => {
      setLoading(true)
      
      if (session?.user) {
        setUser(session.user)
        await loadUserProfile(session.user)
      } else {
        setUser(null)
        setProfile(null)
      }
      
      setLoading(false)
    })

    // Charger l'utilisateur initial
    const loadInitialUser = async () => {
      try {
        const { user: currentUser } = await authService.getCurrentUser()
        if (currentUser) {
          setUser(currentUser)
          await loadUserProfile(currentUser)
        }
      } catch (err) {
        console.error('Erreur lors du chargement de l\'utilisateur initial:', err)
      } finally {
        setLoading(false)
      }
    }

    loadInitialUser()

    return () => subscription.unsubscribe()
  }, [])

  const value = {
    user,
    profile,
    loading,
    error,
    signUp,
    signIn,
    signOut,
    resetPassword,
    updateProfile,
    canAccessPlanner,
    getSubscriptionStatus,
    isPremium,
    isPro,
    isAuthenticated: !!user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

