import { loadStripe } from '@stripe/stripe-js'

// Initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_demo')

// Stripe service for handling payments and subscriptions
export const stripeService = {
  // Get Stripe instance
  getStripe: async () => {
    return await stripePromise
  },

  // Create checkout session for subscription
  createCheckoutSession: async (priceId, customerId = null, trialDays = 7) => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
          customerId,
          trialDays,
          successUrl: `${window.location.origin}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
          cancelUrl: `${window.location.origin}/abonnements`,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create checkout session')
      }

      const { sessionId } = await response.json()
      return sessionId
    } catch (error) {
      console.error('Error creating checkout session:', error)
      throw error
    }
  },

  // Redirect to Stripe Checkout
  redirectToCheckout: async (sessionId) => {
    try {
      const stripe = await stripeService.getStripe()
      const { error } = await stripe.redirectToCheckout({ sessionId })
      
      if (error) {
        throw error
      }
    } catch (error) {
      console.error('Error redirecting to checkout:', error)
      throw error
    }
  },

  // Create subscription directly (for existing customers)
  createSubscription: async (customerId, priceId, trialDays = 7) => {
    try {
      const response = await fetch('/api/create-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerId,
          priceId,
          trialDays,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create subscription')
      }

      return await response.json()
    } catch (error) {
      console.error('Error creating subscription:', error)
      throw error
    }
  },

  // Cancel subscription
  cancelSubscription: async (subscriptionId) => {
    try {
      const response = await fetch('/api/cancel-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subscriptionId,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to cancel subscription')
      }

      return await response.json()
    } catch (error) {
      console.error('Error canceling subscription:', error)
      throw error
    }
  },

  // Update subscription
  updateSubscription: async (subscriptionId, newPriceId) => {
    try {
      const response = await fetch('/api/update-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subscriptionId,
          newPriceId,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to update subscription')
      }

      return await response.json()
    } catch (error) {
      console.error('Error updating subscription:', error)
      throw error
    }
  },

  // Get customer portal URL
  getCustomerPortalUrl: async (customerId) => {
    try {
      const response = await fetch('/api/customer-portal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerId,
          returnUrl: `${window.location.origin}/dashboard/settings`,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get customer portal URL')
      }

      const { url } = await response.json()
      return url
    } catch (error) {
      console.error('Error getting customer portal URL:', error)
      throw error
    }
  },

  // Verify checkout session
  verifyCheckoutSession: async (sessionId) => {
    try {
      const response = await fetch(`/api/verify-checkout-session?session_id=${sessionId}`)
      
      if (!response.ok) {
        throw new Error('Failed to verify checkout session')
      }

      return await response.json()
    } catch (error) {
      console.error('Error verifying checkout session:', error)
      throw error
    }
  }
}

// Stripe price IDs (these would be configured in your Stripe dashboard)
export const STRIPE_PRICES = {
  pro_monthly: 'price_pro_monthly_id',
  pro_yearly: 'price_pro_yearly_id',
  premium_monthly: 'price_premium_monthly_id',
  premium_yearly: 'price_premium_yearly_id',
}

// Helper function to get price ID based on plan and billing cycle
export const getPriceId = (plan, isYearly = false) => {
  const key = `${plan}_${isYearly ? 'yearly' : 'monthly'}`
  return STRIPE_PRICES[key]
}

// Helper function to format price for display
export const formatPrice = (amount, currency = 'EUR') => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: currency,
  }).format(amount / 100)
}

export default stripeService

