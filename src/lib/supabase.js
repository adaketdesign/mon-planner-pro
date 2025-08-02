import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Variables d\'environnement Supabase manquantes')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Fonctions utilitaires pour l'authentification
export const auth = {
  // Inscription
  async signUp(email, password, fullName) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName
        }
      }
    })
    return { data, error }
  },

  // Connexion
  async signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    return { data, error }
  },

  // Déconnexion
  async signOut() {
    const { error } = await supabase.auth.signOut()
    return { error }
  },

  // Récupération de mot de passe
  async resetPassword(email) {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${import.meta.env.VITE_APP_URL}/reset-password`
    })
    return { data, error }
  },

  // Mise à jour du mot de passe
  async updatePassword(password) {
    const { data, error } = await supabase.auth.updateUser({
      password
    })
    return { data, error }
  },

  // Obtenir l'utilisateur actuel
  async getCurrentUser() {
    const { data: { user }, error } = await supabase.auth.getUser()
    return { user, error }
  },

  // Écouter les changements d'authentification
  onAuthStateChange(callback) {
    return supabase.auth.onAuthStateChange(callback)
  }
}

// Fonctions pour les profils utilisateurs
export const profiles = {
  // Obtenir le profil de l'utilisateur
  async getProfile(userId) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()
    return { data, error }
  },

  // Mettre à jour le profil
  async updateProfile(userId, updates) {
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', userId)
      .select()
      .single()
    return { data, error }
  },

  // Vérifier le statut d'abonnement
  async getSubscriptionStatus(userId) {
    const { data, error } = await supabase
      .rpc('get_user_subscription_status', { user_uuid: userId })
    return { data, error }
  },

  // Vérifier l'accès à un planner
  async canAccessPlanner(userId, plannerType) {
    const { data, error } = await supabase
      .rpc('can_access_planner', { 
        user_uuid: userId, 
        planner_type: plannerType 
      })
    return { data, error }
  }
}

// Fonctions pour les données des planners
export const planners = {
  // Obtenir les données d'un planner
  async getPlannerData(userId, plannerType) {
    const { data, error } = await supabase
      .from('planner_data')
      .select('*')
      .eq('user_id', userId)
      .eq('planner_type', plannerType)
      .single()
    return { data, error }
  },

  // Sauvegarder les données d'un planner
  async savePlannerData(userId, plannerType, plannerData) {
    const { data, error } = await supabase
      .from('planner_data')
      .upsert({
        user_id: userId,
        planner_type: plannerType,
        data: plannerData
      })
      .select()
      .single()
    return { data, error }
  },

  // Obtenir tous les planners d'un utilisateur
  async getAllPlanners(userId) {
    const { data, error } = await supabase
      .from('planner_data')
      .select('*')
      .eq('user_id', userId)
    return { data, error }
  },

  // Supprimer les données d'un planner
  async deletePlannerData(userId, plannerType) {
    const { data, error } = await supabase
      .from('planner_data')
      .delete()
      .eq('user_id', userId)
      .eq('planner_type', plannerType)
    return { data, error }
  }
}

// Fonctions pour les abonnements
export const subscriptions = {
  // Obtenir l'abonnement actuel
  async getCurrentSubscription(userId) {
    const { data, error } = await supabase
      .from('subscriptions')
      .select('*')
      .eq('user_id', userId)
      .eq('status', 'active')
      .order('created_at', { ascending: false })
      .limit(1)
      .single()
    return { data, error }
  },

  // Créer un nouvel abonnement
  async createSubscription(subscriptionData) {
    const { data, error } = await supabase
      .from('subscriptions')
      .insert(subscriptionData)
      .select()
      .single()
    return { data, error }
  },

  // Mettre à jour un abonnement
  async updateSubscription(stripeSubscriptionId, updates) {
    const { data, error } = await supabase
      .from('subscriptions')
      .update(updates)
      .eq('stripe_subscription_id', stripeSubscriptionId)
      .select()
      .single()
    return { data, error }
  }
}

export default supabase

