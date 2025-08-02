import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { 
  Check, 
  X, 
  Star, 
  Crown, 
  Gift,
  Sparkles,
  Calendar,
  Clock,
  Target,
  TrendingUp,
  Users,
  Shield,
  Zap,
  Heart,
  Award,
  ArrowRight,
  CheckCircle2,
  Lock,
  Unlock
} from 'lucide-react'

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      id: 'freemium',
      name: 'Découverte',
      subtitle: 'Freemium',
      price: { monthly: 0, annual: 0 },
      badge: { text: 'GRATUIT', color: 'bg-green-500' },
      icon: Gift,
      color: 'from-green-400 to-green-600',
      description: 'Parfait pour découvrir Mon Planner Pro',
      features: [
        { text: 'Planner Semainier simplifié', included: true, highlight: false },
        { text: '3 sections accessibles (Objectifs, To-do, Gratitude)', included: true, highlight: false },
        { text: 'Accès illimité dans le temps', included: true, highlight: false },
        { text: 'Interface moderne et intuitive', included: true, highlight: false },
        { text: 'Sauvegarde des données', included: false, highlight: false },
        { text: 'Export PDF', included: false, highlight: false },
        { text: 'Rappels et notifications', included: false, highlight: false },
        { text: 'Autres planners', included: false, highlight: false }
      ],
      cta: 'Commencer gratuitement',
      popular: false,
      limitations: [
        'Pas de sauvegarde automatique',
        'Fonctionnalités limitées',
        'Call-to-action fréquents'
      ]
    },
    {
      id: 'pro',
      name: 'Utilisateur régulier',
      subtitle: 'Pro',
      price: { monthly: 1.99, annual: 19.90 },
      badge: { text: 'POPULAIRE', color: 'bg-blue-500' },
      icon: Target,
      color: 'from-blue-400 to-blue-600',
      description: 'Idéal pour les utilisateurs actifs et motivés',
      features: [
        { text: 'Planner Semainier complet', included: true, highlight: true },
        { text: 'Routine Matinale complète', included: true, highlight: true },
        { text: 'Planifier sa Journée', included: true, highlight: true },
        { text: 'Sauvegarde automatique', included: true, highlight: true },
        { text: 'Export PDF illimité', included: true, highlight: true },
        { text: 'Rappels personnalisés', included: true, highlight: true },
        { text: 'Support prioritaire', included: true, highlight: false },
        { text: 'GlowUp Planner (aperçu)', included: 'limited', highlight: false },
        { text: 'Projet Planner (aperçu)', included: 'limited', highlight: false }
      ],
      cta: 'Choisir Pro',
      popular: true,
      savings: isAnnual ? '17%' : null
    },
    {
      id: 'premium',
      name: 'Transformation complète',
      subtitle: 'Premium',
      price: { monthly: 4.99, annual: 49.00 },
      badge: { text: 'COMPLET', color: 'bg-purple-500' },
      icon: Crown,
      color: 'from-purple-400 to-purple-600',
      description: 'L\'expérience complète pour votre transformation',
      features: [
        { text: 'Tous les planners inclus', included: true, highlight: true },
        { text: 'GlowUp Planner complet', included: true, highlight: true },
        { text: 'Projet Planner (9 pages)', included: true, highlight: true },
        { text: 'Statistiques de progression', included: true, highlight: true },
        { text: 'Mode "Bilan mensuel" interactif', included: true, highlight: true },
        { text: 'Synchronisation cloud', included: true, highlight: true },
        { text: 'Coin d\'inspiration + carnet personnel', included: true, highlight: true },
        { text: 'Newsletter "Mindset & Productivité"', included: true, highlight: true },
        { text: 'Support VIP 24/7', included: true, highlight: false }
      ],
      cta: 'Choisir Premium',
      popular: false,
      savings: isAnnual ? '18%' : null,
      bonus: 'Essai gratuit 7 jours'
    }
  ]

  const features = [
    {
      icon: Calendar,
      title: 'Planification Hebdomadaire',
      description: 'Organisez votre semaine avec précision'
    },
    {
      icon: Clock,
      title: 'Routines Quotidiennes',
      description: 'Créez des habitudes durables'
    },
    {
      icon: TrendingUp,
      title: 'Suivi de Progression',
      description: 'Visualisez vos progrès en temps réel'
    },
    {
      icon: Shield,
      title: 'Données Sécurisées',
      description: 'Vos informations protégées et chiffrées'
    }
  ]

  const testimonials = [
    {
      name: 'Marie L.',
      role: 'Étudiante en médecine',
      content: 'Mon Planner Pro a révolutionné ma façon d\'organiser mes révisions. Je recommande vivement !',
      rating: 5
    },
    {
      name: 'Thomas R.',
      role: 'Chef de projet',
      content: 'Enfin un outil qui combine simplicité et efficacité. Mes équipes adorent !',
      rating: 5
    },
    {
      name: 'Sophie M.',
      role: 'Maman de 3 enfants',
      content: 'Grâce au Routine Planner, j\'arrive enfin à concilier vie pro et vie perso.',
      rating: 5
    }
  ]

  const faq = [
    {
      question: 'Puis-je changer de plan à tout moment ?',
      answer: 'Oui, vous pouvez upgrader ou downgrader votre abonnement à tout moment depuis votre espace personnel.'
    },
    {
      question: 'Y a-t-il une garantie de remboursement ?',
      answer: 'Nous offrons une garantie satisfait ou remboursé de 30 jours sur tous nos plans payants.'
    },
    {
      question: 'Mes données sont-elles sauvegardées ?',
      answer: 'Toutes vos données sont automatiquement sauvegardées et synchronisées sur nos serveurs sécurisés.'
    },
    {
      question: 'Le plan Freemium a-t-il une limite de temps ?',
      answer: 'Non, le plan Freemium est gratuit à vie avec accès aux fonctionnalités de base.'
    }
  ]

  const getPrice = (plan) => {
    return isAnnual ? plan.price.annual : plan.price.monthly
  }

  const getSavings = (plan) => {
    if (!isAnnual || !plan.savings) return null
    const monthlyTotal = plan.price.monthly * 12
    const savings = monthlyTotal - plan.price.annual
    return savings.toFixed(2)
  }

  const renderFeature = (feature) => {
    if (feature.included === true) {
      return (
        <div className={`flex items-center space-x-3 ${feature.highlight ? 'bg-green-50 p-2 rounded-lg' : ''}`}>
          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
          <span className={`text-gray-700 ${feature.highlight ? 'font-medium' : ''}`}>
            {feature.text}
          </span>
        </div>
      )
    } else if (feature.included === 'limited') {
      return (
        <div className="flex items-center space-x-3">
          <Lock className="w-5 h-5 text-orange-500 flex-shrink-0" />
          <span className="text-gray-600">{feature.text}</span>
        </div>
      )
    } else {
      return (
        <div className="flex items-center space-x-3 opacity-50">
          <X className="w-5 h-5 text-gray-400 flex-shrink-0" />
          <span className="text-gray-400">{feature.text}</span>
        </div>
      )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg">
              TARIFICATION
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="text-gray-900">Choisissez le plan </span>
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                parfait pour vous
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              De la découverte gratuite à la transformation complète, trouvez l'abonnement 
              qui correspond à vos besoins d'organisation et vos objectifs personnels.
            </p>

            {/* Toggle Annual/Monthly */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className={`text-lg font-medium ${!isAnnual ? 'text-purple-600' : 'text-gray-500'}`}>
                Mensuel
              </span>
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                className="data-[state=checked]:bg-purple-600"
              />
              <span className={`text-lg font-medium ${isAnnual ? 'text-purple-600' : 'text-gray-500'}`}>
                Annuel
              </span>
              {isAnnual && (
                <Badge className="bg-green-500 text-white ml-2">
                  Jusqu'à 18% d'économie
                </Badge>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => {
              const IconComponent = plan.icon
              const price = getPrice(plan)
              const savings = getSavings(plan)
              
              return (
                <Card 
                  key={plan.id} 
                  className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                    plan.popular ? 'ring-2 ring-purple-500 scale-105' : 'hover:scale-105'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-medium">
                      ⭐ PLAN LE PLUS POPULAIRE ⭐
                    </div>
                  )}
                  
                  <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-8'}`}>
                    <div className={`w-20 h-20 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    
                    <Badge className={`${plan.badge.color} text-white mb-4 mx-auto`}>
                      {plan.badge.text}
                    </Badge>
                    
                    <CardTitle className="text-2xl text-gray-900 mb-2">
                      {plan.name}
                    </CardTitle>
                    
                    <p className="text-gray-600 mb-6">
                      {plan.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-gray-900">
                          {price === 0 ? 'Gratuit' : `${price}€`}
                        </span>
                        {price > 0 && (
                          <span className="text-gray-500 ml-2">
                            /{isAnnual ? 'an' : 'mois'}
                          </span>
                        )}
                      </div>
                      
                      {savings && (
                        <div className="mt-2">
                          <Badge className="bg-green-100 text-green-700">
                            Économisez {savings}€/an
                          </Badge>
                        </div>
                      )}
                      
                      {plan.bonus && (
                        <div className="mt-2">
                          <Badge className="bg-purple-100 text-purple-700">
                            🎁 {plan.bonus}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="px-6 pb-8">
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, index) => (
                        <div key={index}>
                          {renderFeature(feature)}
                        </div>
                      ))}
                    </div>
                    
                    {plan.limitations && (
                      <div className="mb-6 p-4 bg-orange-50 rounded-lg">
                        <h4 className="font-medium text-orange-800 mb-2">Limitations :</h4>
                        <ul className="text-sm text-orange-700 space-y-1">
                          {plan.limitations.map((limitation, index) => (
                            <li key={index}>• {limitation}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <Button 
                      className={`w-full py-3 text-lg font-medium ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white' 
                          : plan.id === 'freemium'
                          ? 'bg-green-500 hover:bg-green-600 text-white'
                          : 'bg-gray-900 hover:bg-gray-800 text-white'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pourquoi Choisir Mon Planner Pro ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des fonctionnalités pensées pour maximiser votre productivité et votre épanouissement personnel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ce que disent nos utilisateurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rejoignez des milliers d'utilisateurs satisfaits qui ont transformé leur organisation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Questions Fréquentes
            </h2>
            <p className="text-xl text-gray-600">
              Tout ce que vous devez savoir sur nos plans et tarifs.
            </p>
          </div>

          <div className="space-y-6">
            {faq.map((item, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-600">
                    {item.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à Transformer Votre Organisation ?
          </h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Commencez dès aujourd'hui avec notre plan gratuit ou profitez de notre essai Premium de 7 jours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4">
              <Gift className="w-5 h-5 mr-2" />
              Commencer gratuitement
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4"
            >
              <Crown className="w-5 h-5 mr-2" />
              Essai Premium gratuit
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-8 text-purple-100">
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              <span>Garantie 30 jours</span>
            </div>
            <div className="flex items-center">
              <Heart className="w-5 h-5 mr-2" />
              <span>Sans engagement</span>
            </div>
            <div className="flex items-center">
              <Award className="w-5 h-5 mr-2" />
              <span>Support 24/7</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing

