// Système de fallback pour fonctionner sans Supabase en production
// Utilise localStorage pour la persistance des données

const STORAGE_KEYS = {
  USER: 'mpp_user',
  PROFILE: 'mpp_profile',
  PLANNERS: 'mpp_planners_'
}

// Simulation d'un utilisateur par défaut
const createDefaultUser = () => ({
  id: 'demo-user-' + Date.now(),
  email: 'demo@monplannerpro.com',
  fullName: 'Utilisateur Démo',
  created_at: new Date().toISOString()
})

const createDefaultProfile = (userId) => ({
  id: userId,
  user_id: userId,
  subscription_status: 'freemium',
  subscription_end_date: null,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString()
})

// Auth fallback
export const authFallback = {
  getCurrentUser: async () => {
    try {
      const userData = localStorage.getItem(STORAGE_KEYS.USER)
      return userData ? { user: JSON.parse(userData) } : { user: null }
    } catch (error) {
      console.error('Error getting current user:', error)
      return { user: null }
    }
  },

  signUp: async (email, password, fullName) => {
    try {
      const user = createDefaultUser()
      user.email = email
      user.fullName = fullName
      
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user))
      
      const profile = createDefaultProfile(user.id)
      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile))
      
      return { 
        data: { user, session: { user } }, 
        error: null 
      }
    } catch (error) {
      return { 
        data: null, 
        error: { message: 'Erreur lors de la création du compte' } 
      }
    }
  },

  signIn: async (email, password) => {
    try {
      let user = null
      const userData = localStorage.getItem(STORAGE_KEYS.USER)
      
      if (userData) {
        user = JSON.parse(userData)
      } else {
        // Créer un utilisateur démo
        user = createDefaultUser()
        user.email = email
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user))
        
        const profile = createDefaultProfile(user.id)
        localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile))
      }
      
      return { 
        data: { user, session: { user } }, 
        error: null 
      }
    } catch (error) {
      return { 
        data: null, 
        error: { message: 'Erreur lors de la connexion' } 
      }
    }
  },

  signOut: async () => {
    try {
      localStorage.removeItem(STORAGE_KEYS.USER)
      localStorage.removeItem(STORAGE_KEYS.PROFILE)
      return { error: null }
    } catch (error) {
      return { error: { message: 'Erreur lors de la déconnexion' } }
    }
  },

  resetPassword: async (email) => {
    // Simulation - en réalité on enverrait un email
    return { 
      data: { message: 'Email de réinitialisation envoyé' }, 
      error: null 
    }
  },

  onAuthStateChange: (callback) => {
    // Simulation d'un listener
    const checkAuth = () => {
      const userData = localStorage.getItem(STORAGE_KEYS.USER)
      const user = userData ? JSON.parse(userData) : null
      callback('SIGNED_IN', user ? { user } : null)
    }
    
    // Vérifier immédiatement
    checkAuth()
    
    // Retourner un objet de subscription
    return {
      data: {
        subscription: {
          unsubscribe: () => {
            // Cleanup si nécessaire
          }
        }
      }
    }
  }
}

// Profiles fallback
export const profilesFallback = {
  getProfile: async (userId) => {
    try {
      const profileData = localStorage.getItem(STORAGE_KEYS.PROFILE)
      if (profileData) {
        return { data: JSON.parse(profileData), error: null }
      } else {
        const profile = createDefaultProfile(userId)
        localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile))
        return { data: profile, error: null }
      }
    } catch (error) {
      return { data: null, error: { message: 'Erreur lors du chargement du profil' } }
    }
  },

  updateProfile: async (userId, updates) => {
    try {
      const profileData = localStorage.getItem(STORAGE_KEYS.PROFILE)
      let profile = profileData ? JSON.parse(profileData) : createDefaultProfile(userId)
      
      profile = { ...profile, ...updates, updated_at: new Date().toISOString() }
      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile))
      
      return { data: profile, error: null }
    } catch (error) {
      return { data: null, error: { message: 'Erreur lors de la mise à jour du profil' } }
    }
  },

  canAccessPlanner: async (userId, plannerType) => {
    try {
      const profileData = localStorage.getItem(STORAGE_KEYS.PROFILE)
      const profile = profileData ? JSON.parse(profileData) : createDefaultProfile(userId)
      
      const subscriptionStatus = profile.subscription_status || 'freemium'
      
      // Logique d'accès selon le type de planner
      switch (plannerType) {
        case 'semainier':
          return { data: true, error: null } // Toujours accessible
        case 'routine':
          return { data: ['pro', 'premium'].includes(subscriptionStatus), error: null }
        case 'glowup':
          return { data: subscriptionStatus === 'premium', error: null }
        case 'projet':
          return { data: ['pro', 'premium'].includes(subscriptionStatus), error: null }
        default:
          return { data: false, error: null }
      }
    } catch (error) {
      return { data: false, error: { message: 'Erreur lors de la vérification d\'accès' } }
    }
  }
}

// Planners fallback
export const plannersFallback = {
  getPlannerData: async (userId, plannerType) => {
    try {
      const key = STORAGE_KEYS.PLANNERS + plannerType
      const data = localStorage.getItem(key)
      
      if (data) {
        const plannerData = JSON.parse(data)
        return { data: plannerData, error: null }
      } else {
        return { data: null, error: { code: 'PGRST116', message: 'No data found' } }
      }
    } catch (error) {
      return { data: null, error: { message: 'Erreur lors du chargement des données' } }
    }
  },

  savePlannerData: async (userId, plannerType, data) => {
    try {
      const key = STORAGE_KEYS.PLANNERS + plannerType
      const plannerData = {
        user_id: userId,
        planner_type: plannerType,
        data: data,
        updated_at: new Date().toISOString()
      }
      
      localStorage.setItem(key, JSON.stringify(plannerData))
      return { data: plannerData, error: null }
    } catch (error) {
      return { data: null, error: { message: 'Erreur lors de la sauvegarde' } }
    }
  },

  deletePlannerData: async (userId, plannerType) => {
    try {
      const key = STORAGE_KEYS.PLANNERS + plannerType
      localStorage.removeItem(key)
      return { error: null }
    } catch (error) {
      return { error: { message: 'Erreur lors de la suppression' } }
    }
  }
}

// Fonction pour détecter si Supabase est disponible
export const isSupabaseAvailable = () => {
  return !!(
    import.meta.env.VITE_SUPABASE_URL && 
    import.meta.env.VITE_SUPABASE_ANON_KEY
  )
}

// Export des services selon la disponibilité
export const getAuthService = () => {
  if (isSupabaseAvailable()) {
    try {
      const { auth } = require('./supabase')
      return auth
    } catch (error) {
      console.warn('Supabase not available, using fallback')
      return authFallback
    }
  }
  return authFallback
}

export const getProfilesService = () => {
  if (isSupabaseAvailable()) {
    try {
      const { profiles } = require('./supabase')
      return profiles
    } catch (error) {
      console.warn('Supabase not available, using fallback')
      return profilesFallback
    }
  }
  return profilesFallback
}

export const getPlannersService = () => {
  if (isSupabaseAvailable()) {
    try {
      const { planners } = require('./supabase')
      return planners
    } catch (error) {
      console.warn('Supabase not available, using fallback')
      return plannersFallback
    }
  }
  return plannersFallback
}

