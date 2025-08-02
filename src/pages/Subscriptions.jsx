import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { 
  Check, 
  X, 
  Star, 
  Crown, 
  Sparkles, 
  Calendar,
  FileText,
  Bell,
  Download,
  BarChart3,
  Cloud,
  Gift,
  Zap,
  Lock,
  Unlock
} from 'lucide-react'

const Subscriptions = () => {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      id: 'freemium',
      name: 'Découverte',
      subtitle: 'Freemium',
      price: { monthly: 0, annual: 0 },
      color: 'gray',
      icon: Sparkles,
      popular: false,
      description: 'Découvrez la valeur de nos planners',
      features: [
        { text: 'Accès au Planner Semainier (version simplifiée)', included: true, highlight: true },
        { text: '3 sections accessibles : Objectifs, To-do, Gratitude', included: true },
        { text: 'Accès illimité dans le temps', included: true },
        { text: 'Rappels et sauvegardes', included: false },
        { text: 'Export PDF', included: false },
        { text: 'Autres planners (Routine, GlowUp, Projet)', included: false },
        { text: 'Statistiques de progression', included: false },
        { text: 'Support prioritaire', included: false }
      ],
      cta: 'Commencer gratuitement',
      ctaVariant: 'outline'
    },
    {
      id: 'pro',
      name: 'Utilisateur régulier',
      subtitle: 'Pro',
      price: { monthly: 1.99, annual: 19.90 },
      color: 'blue',
      icon: Star,
      popular: true,
      description: 'Pour les utilisateurs actifs et motivés',
      features: [
        { text: 'Accès complet au Planner Semainier', included: true, highlight: true },
        { text: 'Routine Matinale complète', included: true, highlight: true },
        { text: 'Planifier sa Journée complet', included: true, highlight: true },
        { text: 'Sauvegarde automatique des entrées', included: true },
        { text: 'Téléchargement PDF illimité', included: true },
        { text: 'Rappels personnalisés activés', included: true },
        { text: 'GlowUp Planner (aperçu uniquement)', included: 'partial' },
        { text: 'Projet Planner (aperçu uniquement)', included: 'partial' },
        { text: 'Statistiques de base', included: true },
        { text: 'Support standard', included: true }
      ],
      cta: 'Choisir Pro',
      ctaVariant: 'default',
      savings: isAnnual ? '17%' : null
    },
    {
      id: 'premium',
      name: 'Transformation complète',
      subtitle: 'Premium',
      price: { monthly: 4.99, annual: 49.00 },
      color: 'purple',
      icon: Crown,
      popular: false,
      description: 'Expérience complète et personnalisée',
      features: [
        { text: 'Accès illimité à TOUS les planners', included: true, highlight: true },
        { text: 'GlowUp Planner complet avec bilans mensuels', included: true, highlight: true },
        { text: 'Projet Planner avec 9 pages structurées', included: true, highlight: true },
        { text: 'Rappels personnalisés avancés', included: true },
        { text: 'Statistiques détaillées de progression', included: true },
        { text: 'Visualisation des objectifs atteints', included: true },
        { text: 'Mode "Bilan mensuel" interactif', included: true },
        { text: 'Export PDF + synchronisation cloud', included: true },
        { text: 'Coin d\'inspiration + carnet personnel', included: true },
        { text: 'Newsletter "Mindset & Productivité"', included: true },
        { text: 'Support prioritaire 24/7', included: true }
      ],
      cta: 'Choisir Premium',
      ctaVariant: 'default',
      savings: isAnnual ? '18%' : null,
      bonus: 'Essai gratuit 7 jours'
    }
  ]

  const getColorClasses = (color, variant = 'default') => {
    const colors = {
      gray: {
        border: 'border-gray-200',
        bg: 'bg-gray-50',
        text: 'text-gray-900',
        accent: 'text-gray-600',
        button: 'bg-gray-100 hover:bg-gray-200 text-gray-900'
      },
      blue: {
        border: 'border-blue-200',
        bg: 'bg-blue-50',
        text: 'text-blue-900',
        accent: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700 text-white'
      },
      purple: {
        border: 'border-purple-200',
        bg: 'bg-purple-50',
        text: 'text-purple-900',
        accent: 'text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700 text-white'
      }
    }
    return colors[color] || colors.gray
  }

  const formatPrice = (price, period) => {
    if (price === 0) return 'Gratuit'
    return `${price.toFixed(2).replace('.', ',')} €${period === 'annual' ? '/an' : '/mois'}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-8">
      {/* Header */}
      <section className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            NOUVELLE STRUCTURE TARIFAIRE
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Choisissez votre </span>
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              niveau d'organisation
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            De la découverte gratuite à la transformation complète, trouvez la formule qui correspond 
            à vos besoins et à votre rythme de vie.
          </p>

          {/* Toggle mensuel/annuel */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Mensuel
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-purple-600"
            />
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annuel
            </span>
            {isAnnual && (
              <Badge className="bg-green-100 text-green-800 border-green-200">
                Jusqu'à 18% d'économie
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan) => {
              const colors = getColorClasses(plan.color)
              const IconComponent = plan.icon
              const currentPrice = isAnnual ? plan.price.annual : plan.price.monthly
              const period = isAnnual ? 'annual' : 'monthly'

              return (
                <Card 
                  key={plan.id} 
                  className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                    plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                  } ${colors.border}`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-2 text-sm font-medium">
                        ⭐ PLUS POPULAIRE
                      </div>
                    </div>
                  )}

                  {plan.bonus && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-500 text-white">
                        <Gift className="w-3 h-3 mr-1" />
                        {plan.bonus}
                      </Badge>
                    </div>
                  )}

                  <CardHeader className={`${colors.bg} ${plan.popular ? 'pt-12' : 'pt-8'} pb-6`}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-2 rounded-lg ${colors.bg} border ${colors.border}`}>
                        <IconComponent className={`w-6 h-6 ${colors.accent}`} />
                      </div>
                      <div>
                        <CardTitle className={`text-xl ${colors.text}`}>
                          {plan.name}
                        </CardTitle>
                        <Badge variant="outline" className={`${colors.border} ${colors.accent}`}>
                          {plan.subtitle}
                        </Badge>
                      </div>
                    </div>

                    <div className="text-center mb-4">
                      <div className="flex items-baseline justify-center space-x-2">
                        <span className={`text-4xl font-bold ${colors.text}`}>
                          {currentPrice === 0 ? 'Gratuit' : `${currentPrice.toFixed(2).replace('.', ',')} €`}
                        </span>
                        {currentPrice > 0 && (
                          <span className="text-gray-500 text-lg">
                            {isAnnual ? '/an' : '/mois'}
                          </span>
                        )}
                      </div>
                      
                      {plan.savings && isAnnual && (
                        <div className="mt-2">
                          <Badge className="bg-green-100 text-green-800 border-green-200">
                            Économisez {plan.savings}
                          </Badge>
                        </div>
                      )}
                      
                      {!isAnnual && plan.price.annual > 0 && (
                        <p className="text-sm text-gray-500 mt-2">
                          Ou {plan.price.annual.toFixed(2).replace('.', ',')} €/an
                        </p>
                      )}
                    </div>

                    <p className="text-center text-gray-600 text-sm">
                      {plan.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-6">
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 mt-0.5">
                            {feature.included === true ? (
                              <div className={`w-5 h-5 rounded-full ${feature.highlight ? 'bg-green-500' : 'bg-green-100'} flex items-center justify-center`}>
                                <Check className={`w-3 h-3 ${feature.highlight ? 'text-white' : 'text-green-600'}`} />
                              </div>
                            ) : feature.included === 'partial' ? (
                              <div className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center">
                                <Lock className="w-3 h-3 text-yellow-600" />
                              </div>
                            ) : (
                              <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                                <X className="w-3 h-3 text-gray-400" />
                              </div>
                            )}
                          </div>
                          <span className={`text-sm ${
                            feature.included === true 
                              ? feature.highlight 
                                ? 'text-gray-900 font-medium' 
                                : 'text-gray-700'
                              : feature.included === 'partial'
                                ? 'text-yellow-700'
                                : 'text-gray-400'
                          }`}>
                            {feature.text}
                            {feature.included === 'partial' && (
                              <span className="text-xs text-yellow-600 ml-1">(aperçu)</span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      className={`w-full py-3 font-medium transition-all duration-200 ${
                        plan.ctaVariant === 'outline' 
                          ? 'border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-50' 
                          : colors.button
                      }`}
                      variant={plan.ctaVariant}
                    >
                      {plan.cta}
                      {plan.id !== 'freemium' && (
                        <Zap className="w-4 h-4 ml-2" />
                      )}
                    </Button>

                    {plan.id === 'freemium' && (
                      <div className="mt-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                        <p className="text-xs text-orange-800 text-center">
                          <strong>Call to action :</strong> Débloquez toutes les sections avec l'abonnement Pro
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Section avantages */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Pourquoi choisir Mon Planner Pro ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Organisation optimisée</h3>
                <p className="text-sm text-gray-600">Planifiez efficacement votre temps et vos objectifs</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Suivi de progression</h3>
                <p className="text-sm text-gray-600">Visualisez vos progrès et célébrez vos réussites</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Synchronisation cloud</h3>
                <p className="text-sm text-gray-600">Accédez à vos planners depuis tous vos appareils</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Transformation personnelle</h3>
                <p className="text-sm text-gray-600">Développez votre potentiel avec nos outils dédiés</p>
              </div>
            </div>
          </div>

          {/* FAQ rapide */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Questions fréquentes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Puis-je changer de formule ?</h3>
                <p className="text-sm text-gray-600">Oui, vous pouvez upgrader ou downgrader votre abonnement à tout moment.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Y a-t-il un engagement ?</h3>
                <p className="text-sm text-gray-600">Aucun engagement. Vous pouvez annuler votre abonnement quand vous voulez.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">L'essai gratuit Premium ?</h3>
                <p className="text-sm text-gray-600">7 jours gratuits pour tester toutes les fonctionnalités Premium sans engagement.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Remboursement possible ?</h3>
                <p className="text-sm text-gray-600">Garantie satisfait ou remboursé de 30 jours sur tous nos abonnements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Subscriptions

