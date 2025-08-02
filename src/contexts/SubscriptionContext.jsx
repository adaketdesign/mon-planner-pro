import React, { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from './AuthContext'

const SubscriptionContext = createContext()

export const useSubscription = () => {
  const context = useContext(SubscriptionContext)
  if (!context) {
    throw new Error('useSubscription must be used within a SubscriptionProvider')
  }
  return context
}

export const SubscriptionProvider = ({ children }) => {
  const { user } = useAuth()
  const [subscription, setSubscription] = useState(null)
  const [loading, setLoading] = useState(true)

  // Plans d'abonnement avec restrictions
  const PLANS = {
    freemium: {
      id: 'freemium',
      name: 'Découverte',
      price: { monthly: 0, annual: 0 },
      features: {
        semainier: {
          enabled: true,
          sections: ['objectifs', 'todo', 'gratitude'], // Seulement 3 sections
          saveEnabled: false,
          remindersEnabled: false,
          exportEnabled: false
        },
        routine: {
          enabled: false
        },
        glowup: {
          enabled: false
        },
        projet: {
          enabled: false
        },
        statistics: false,
        support: 'community'
      }
    },
    pro: {
      id: 'pro',
      name: 'Pro',
      price: { monthly: 1.99, annual: 19.90 },
      features: {
        semainier: {
          enabled: true,
          sections: 'all', // Toutes les sections
          saveEnabled: true,
          remindersEnabled: true,
          exportEnabled: true
        },
        routine: {
          enabled: true,
          matinale: true,
          journee: true
        },
        glowup: {
          enabled: false, // Aperçu uniquement
          preview: true
        },
        projet: {
          enabled: false, // Aperçu uniquement
          preview: true
        },
        statistics: 'basic',
        support: 'standard'
      }
    },
    premium: {
      id: 'premium',
      name: 'Premium',
      price: { monthly: 4.99, annual: 49.00 },
      features: {
        semainier: {
          enabled: true,
          sections: 'all',
          saveEnabled: true,
          remindersEnabled: true,
          exportEnabled: true
        },
        routine: {
          enabled: true,
          matinale: true,
          journee: true
        },
        glowup: {
          enabled: true,
          bilansEnabled: true,
          statisticsEnabled: true
        },
        projet: {
          enabled: true,
          allPages: true,
          progressTracking: true
        },
        statistics: 'advanced',
        support: 'priority',
        cloudSync: true,
        newsletter: true
      }
    }
  }

  // Initialisation de l'abonnement utilisateur
  useEffect(() => {
    if (user) {
      // Récupération de l'abonnement depuis le localStorage ou API
      const savedSubscription = localStorage.getItem(`subscription_${user.id}`)
      if (savedSubscription) {
        setSubscription(JSON.parse(savedSubscription))
      } else {
        // Par défaut, nouveau utilisateur = Freemium
        setSubscription({
          planId: 'freemium',
          status: 'active',
          startDate: new Date().toISOString(),
          endDate: null, // Freemium illimité
          stripeSubscriptionId: null
        })
      }
    } else {
      setSubscription(null)
    }
    setLoading(false)
  }, [user])

  // Sauvegarde de l'abonnement
  const saveSubscription = (subscriptionData) => {
    if (user) {
      localStorage.setItem(`subscription_${user.id}`, JSON.stringify(subscriptionData))
      setSubscription(subscriptionData)
    }
  }

  // Vérification des permissions
  const hasFeature = (feature, subFeature = null) => {
    if (!subscription) return false
    
    const plan = PLANS[subscription.planId]
    if (!plan) return false

    if (subFeature) {
      return plan.features[feature]?.[subFeature] === true
    }
    
    return plan.features[feature]?.enabled === true
  }

  // Vérification si une section du semainier est accessible
  const hasSemainierSection = (sectionName) => {
    if (!subscription) return false
    
    const plan = PLANS[subscription.planId]
    if (!plan?.features.semainier.enabled) return false

    const sections = plan.features.semainier.sections
    if (sections === 'all') return true
    if (Array.isArray(sections)) return sections.includes(sectionName)
    
    return false
  }

  // Upgrade vers un plan supérieur
  const upgradePlan = async (newPlanId, billingCycle = 'monthly') => {
    try {
      setLoading(true)
      
      // Simulation d'un appel API Stripe
      const response = await fetch('/api/stripe/create-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: user.email,
          plan_id: newPlanId,
          billing_cycle: billingCycle
        })
      })

      if (response.ok) {
        const data = await response.json()
        
        const newSubscription = {
          planId: newPlanId,
          status: 'active',
          startDate: new Date().toISOString(),
          endDate: billingCycle === 'annual' 
            ? new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
            : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
          stripeSubscriptionId: data.subscription_id,
          billingCycle
        }
        
        saveSubscription(newSubscription)
        return { success: true, subscription: newSubscription }
      } else {
        throw new Error('Erreur lors de la création de l\'abonnement')
      }
    } catch (error) {
      console.error('Erreur upgrade:', error)
      return { success: false, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  // Annulation de l'abonnement
  const cancelSubscription = async () => {
    if (!subscription?.stripeSubscriptionId) return { success: false, error: 'Aucun abonnement à annuler' }

    try {
      setLoading(true)
      
      const response = await fetch('/api/stripe/cancel-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          subscription_id: subscription.stripeSubscriptionId
        })
      })

      if (response.ok) {
        const updatedSubscription = {
          ...subscription,
          status: 'canceled',
          canceledAt: new Date().toISOString()
        }
        
        saveSubscription(updatedSubscription)
        return { success: true }
      } else {
        throw new Error('Erreur lors de l\'annulation')
      }
    } catch (error) {
      console.error('Erreur annulation:', error)
      return { success: false, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  // Obtenir le plan actuel
  const getCurrentPlan = () => {
    if (!subscription) return PLANS.freemium
    return PLANS[subscription.planId] || PLANS.freemium
  }

  // Vérifier si l'utilisateur peut accéder à un planner
  const canAccessPlanner = (plannerType) => {
    const plan = getCurrentPlan()
    
    switch (plannerType) {
      case 'semainier':
        return plan.features.semainier.enabled
      case 'routine':
        return plan.features.routine.enabled
      case 'glowup':
        return plan.features.glowup.enabled || plan.features.glowup.preview
      case 'projet':
        return plan.features.projet.enabled || plan.features.projet.preview
      default:
        return false
    }
  }

  // Obtenir le message de restriction pour un planner
  const getRestrictionMessage = (plannerType) => {
    const plan = getCurrentPlan()
    
    if (plan.id === 'freemium') {
      switch (plannerType) {
        case 'routine':
        case 'glowup':
        case 'projet':
          return {
            title: 'Fonctionnalité Premium',
            message: `Débloquez le ${plannerType} avec l'abonnement Pro ou Premium`,
            upgradeText: 'Passer à Pro (1,99€/mois)'
          }
        default:
          return null
      }
    }
    
    if (plan.id === 'pro') {
      switch (plannerType) {
        case 'glowup':
          return {
            title: 'Aperçu GlowUp Planner',
            message: 'Fonctionnalités complètes disponibles avec Premium',
            upgradeText: 'Passer à Premium (4,99€/mois)'
          }
        case 'projet':
          return {
            title: 'Aperçu Projet Planner',
            message: 'Accès complet aux 9 pages avec Premium',
            upgradeText: 'Passer à Premium (4,99€/mois)'
          }
        default:
          return null
      }
    }
    
    return null
  }

  const value = {
    subscription,
    loading,
    plans: PLANS,
    hasFeature,
    hasSemainierSection,
    upgradePlan,
    cancelSubscription,
    getCurrentPlan,
    canAccessPlanner,
    getRestrictionMessage,
    saveSubscription
  }

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  )
}

