import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Loader2, CreditCard, Calendar, Crown, AlertCircle } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { stripeService, getPriceId } from '../../services/stripe'

const SubscriptionManager = ({ currentPlan = 'freemium', onPlanChange }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { user, userProfile } = useAuth()

  const plans = [
    {
      id: 'pro',
      name: 'Pro',
      price: { monthly: 1.99, yearly: 19.90 },
      description: 'Pour les utilisateurs actifs',
      features: [
        'Planner Semainier complet',
        'Routine Planner avancé',
        'Notifications personnalisées',
        'Export PDF illimité'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      price: { monthly: 4.99, yearly: 49.00 },
      description: 'L\'expérience complète',
      features: [
        'Toutes les fonctionnalités Pro',
        'GlowUp Planner exclusif',
        'Projet Planner (9 modules)',
        'Support VIP 24/7'
      ]
    }
  ]

  const handleSubscribe = async (planId, isYearly = false) => {
    if (!user) {
      setError('Vous devez être connecté pour vous abonner')
      return
    }

    setLoading(true)
    setError('')

    try {
      const priceId = getPriceId(planId, isYearly)
      
      if (!priceId) {
        throw new Error('Plan non disponible')
      }

      // Create checkout session
      const sessionId = await stripeService.createCheckoutSession(
        priceId,
        userProfile?.stripe_customer_id,
        7 // 7 days trial
      )

      // Redirect to Stripe Checkout
      await stripeService.redirectToCheckout(sessionId)
    } catch (err) {
      setError(err.message || 'Une erreur est survenue lors de la création de l\'abonnement')
    } finally {
      setLoading(false)
    }
  }

  const handleManageSubscription = async () => {
    if (!userProfile?.stripe_customer_id) {
      setError('Aucun abonnement trouvé')
      return
    }

    setLoading(true)
    setError('')

    try {
      const portalUrl = await stripeService.getCustomerPortalUrl(userProfile.stripe_customer_id)
      window.location.href = portalUrl
    } catch (err) {
      setError(err.message || 'Impossible d\'accéder à la gestion de l\'abonnement')
    } finally {
      setLoading(false)
    }
  }

  const getCurrentPlanInfo = () => {
    switch (currentPlan) {
      case 'pro':
        return {
          name: 'Pro',
          color: 'blue',
          icon: Calendar
        }
      case 'premium':
        return {
          name: 'Premium',
          color: 'purple',
          icon: Crown
        }
      default:
        return {
          name: 'Freemium',
          color: 'gray',
          icon: Calendar
        }
    }
  }

  const planInfo = getCurrentPlanInfo()

  return (
    <div className="space-y-6">
      {/* Current Plan */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <planInfo.icon className={`w-6 h-6 ${
                planInfo.color === 'blue' ? 'text-blue-600' :
                planInfo.color === 'purple' ? 'text-purple-600' :
                'text-gray-600'
              }`} />
              <div>
                <CardTitle>Plan actuel : {planInfo.name}</CardTitle>
                <CardDescription>
                  {currentPlan === 'freemium' 
                    ? 'Plan gratuit avec fonctionnalités limitées'
                    : 'Abonnement actif avec toutes les fonctionnalités'
                  }
                </CardDescription>
              </div>
            </div>
            <Badge className={
              planInfo.color === 'blue' ? 'bg-blue-100 text-blue-800' :
              planInfo.color === 'purple' ? 'bg-purple-100 text-purple-800' :
              'bg-gray-100 text-gray-800'
            }>
              {planInfo.name}
            </Badge>
          </div>
        </CardHeader>
        
        {currentPlan !== 'freemium' && (
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">
                  Prochaine facturation : {userProfile?.subscription_end_date 
                    ? new Date(userProfile.subscription_end_date).toLocaleDateString('fr-FR')
                    : 'Non définie'
                  }
                </p>
              </div>
              <Button 
                variant="outline" 
                onClick={handleManageSubscription}
                disabled={loading}
              >
                <CreditCard className="w-4 h-4 mr-2" />
                Gérer l'abonnement
              </Button>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Error Alert */}
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Upgrade Options */}
      {currentPlan === 'freemium' && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Passer à un plan payant</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plans.map((plan) => (
              <Card key={plan.id} className="relative">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {plan.name}
                    {plan.id === 'premium' && (
                      <Crown className="w-5 h-5 text-purple-600" />
                    )}
                  </CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold">
                      {plan.price.monthly}€/mois
                    </div>
                    <div className="text-sm text-gray-500">
                      ou {plan.price.yearly}€/an (économisez {Math.round((1 - plan.price.yearly / (plan.price.monthly * 12)) * 100)}%)
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-3">
                    <Button 
                      className="w-full" 
                      onClick={() => handleSubscribe(plan.id, false)}
                      disabled={loading}
                    >
                      {loading ? (
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      ) : null}
                      Essai gratuit 7 jours (mensuel)
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full" 
                      onClick={() => handleSubscribe(plan.id, true)}
                      disabled={loading}
                    >
                      {loading ? (
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      ) : null}
                      Essai gratuit 7 jours (annuel)
                    </Button>
                  </div>
                  
                  <p className="text-xs text-gray-500 text-center mt-3">
                    Aucune carte bancaire requise pour l'essai
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Upgrade from Pro to Premium */}
      {currentPlan === 'pro' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Crown className="w-5 h-5 text-purple-600" />
              <span>Passer à Premium</span>
            </CardTitle>
            <CardDescription>
              Débloquez toutes les fonctionnalités avancées
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-4">
              <ul className="space-y-2">
                {plans.find(p => p.id === 'premium')?.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex space-x-3">
                <Button 
                  className="flex-1 bg-purple-600 hover:bg-purple-700" 
                  onClick={() => handleSubscribe('premium', false)}
                  disabled={loading}
                >
                  Passer à Premium (mensuel)
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1" 
                  onClick={() => handleSubscribe('premium', true)}
                  disabled={loading}
                >
                  Passer à Premium (annuel)
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default SubscriptionManager

