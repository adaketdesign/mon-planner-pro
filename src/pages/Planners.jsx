import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Calendar, 
  Clock, 
  Target, 
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  Download,
  Users,
  Heart,
  Sparkles,
  Crown,
  Gift,
  Briefcase,
  Coffee,
  Sunrise,
  Moon,
  Zap,
  Award,
  BookOpen,
  PenTool,
  BarChart3,
  Lightbulb,
  Shield,
  Smartphone,
  Cloud,
  Bell,
  FileText,
  ChevronRight,
  Quote,
  Eye,
  MessageCircle
} from 'lucide-react'
import { Link } from 'react-router-dom'

const Planners = () => {
  const [selectedPlanner, setSelectedPlanner] = useState('semainier')

  const planners = [
    {
      id: 'semainier',
      name: 'Planner Semainier',
      subtitle: 'Organisez votre semaine avec précision',
      description: 'Le planner hebdomadaire qui transforme votre organisation et vous aide à atteindre vos objectifs semaine après semaine.',
      icon: Calendar,
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-200',
      access: 'Freemium (limité) • Pro • Premium',
      link: '/planners/semainier',
      image: '/api/placeholder/600/400',
      features: [
        {
          icon: Target,
          title: 'Objectifs de la semaine',
          description: 'Définissez et suivez vos 3 objectifs principaux pour une semaine productive'
        },
        {
          icon: CheckCircle,
          title: 'To-do list hebdomadaire',
          description: 'Organisez toutes vos tâches avec priorités et échéances'
        },
        {
          icon: Bell,
          title: 'Mes rendez-vous',
          description: 'Planifiez vos RDV avec système de rappels automatiques'
        },
        {
          icon: Star,
          title: 'Priorités de la semaine',
          description: 'Identifiez ce qui compte vraiment et concentrez-vous dessus'
        },
        {
          icon: Users,
          title: 'Personnes à contacter',
          description: 'N\'oubliez plus jamais de rappeler quelqu\'un d\'important'
        },
        {
          icon: Heart,
          title: 'Gratitude de la semaine',
          description: 'Cultivez la reconnaissance pour une meilleure santé mentale'
        },
        {
          icon: BarChart3,
          title: 'Débrief hebdomadaire',
          description: 'Analysez vos réussites et points d\'amélioration'
        },
        {
          icon: TrendingUp,
          title: 'Domaines à améliorer',
          description: 'Identifiez vos axes de progression pour la semaine suivante'
        }
      ],
      benefits: [
        '70% de réduction du stress hebdomadaire',
        '45% d\'augmentation de la productivité',
        'Vision claire de vos priorités',
        'Meilleur équilibre vie pro/perso'
      ],
      testimonial: {
        text: "Le Planner Semainier a révolutionné ma façon de m'organiser. Je ne me sens plus débordée et j'atteins enfin mes objectifs !",
        author: "Marie L.",
        role: "Consultante Marketing",
        rating: 5
      },
      stats: {
        users: '8.5K+',
        satisfaction: '96%',
        timeGained: '5h/semaine'
      }
    },
    {
      id: 'routine',
      name: 'Routine Planner',
      subtitle: 'Créez des habitudes qui transforment votre quotidien',
      description: 'Deux modules complémentaires pour optimiser votre routine matinale et planifier vos journées avec intention et efficacité.',
      icon: Sunrise,
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      borderColor: 'border-orange-200',
      access: 'Pro • Premium',
      link: '/planners/routine',
      image: '/api/placeholder/600/400',
      features: [
        {
          icon: Coffee,
          title: 'Routine Matinale',
          description: 'Démarrez chaque journée avec intention et énergie positive'
        },
        {
          icon: Target,
          title: 'Objectifs du matin',
          description: 'Définissez vos intentions pour une journée réussie'
        },
        {
          icon: CheckCircle,
          title: 'To-do list matinale',
          description: 'Priorisez vos tâches importantes dès le réveil'
        },
        {
          icon: Sparkles,
          title: 'Bien-être & Skincare',
          description: 'Prenez soin de vous avec des rituels beauté personnalisés'
        },
        {
          icon: PenTool,
          title: 'Style du jour',
          description: 'Choisissez votre tenue en accord avec vos activités'
        },
        {
          icon: Lightbulb,
          title: 'Intention du jour',
          description: 'Donnez un sens et une direction à votre journée'
        },
        {
          icon: Users,
          title: 'Personnes à contacter',
          description: 'Maintenez vos relations professionnelles et personnelles'
        },
        {
          icon: Heart,
          title: 'Gratitude quotidienne',
          description: 'Terminez la journée sur une note positive et reconnaissante'
        }
      ],
      benefits: [
        'Matinées plus énergiques et productives',
        'Habitudes durables en 21 jours',
        'Meilleur équilibre émotionnel',
        'Journées plus intentionnelles'
      ],
      testimonial: {
        text: "Grâce au Routine Planner, mes matinées sont devenues un moment de plaisir. Je me sens plus énergique toute la journée !",
        author: "Thomas R.",
        role: "Entrepreneur",
        rating: 5
      },
      stats: {
        users: '6.2K+',
        satisfaction: '94%',
        timeGained: '2h/jour'
      }
    },
    {
      id: 'glowup',
      name: 'GlowUp Planner',
      subtitle: 'Votre transformation personnelle commence ici',
      description: 'Le planner de développement personnel qui vous accompagne dans votre évolution physique, mentale et émotionnelle.',
      icon: Crown,
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      borderColor: 'border-purple-200',
      access: 'Premium uniquement',
      link: '/planners/glowup',
      image: '/api/placeholder/600/400',
      isPremium: true,
      features: [
        {
          icon: Lightbulb,
          title: 'Pourquoi je souhaite changer',
          description: 'Clarifiez vos motivations profondes pour une transformation durable'
        },
        {
          icon: Target,
          title: 'Objectifs de transformation',
          description: 'Définissez des objectifs SMART pour votre évolution personnelle'
        },
        {
          icon: BarChart3,
          title: 'Suivi poids & mensurations',
          description: 'Trackez votre progression physique avec graphiques visuels'
        },
        {
          icon: Star,
          title: 'Mes atouts & forces',
          description: 'Identifiez et valorisez vos qualités naturelles'
        },
        {
          icon: TrendingUp,
          title: 'Points d\'amélioration',
          description: 'Travaillez sur vos axes de développement avec bienveillance'
        },
        {
          icon: Sparkles,
          title: 'Vision de soi idéale',
          description: 'Visualisez la personne que vous voulez devenir'
        },
        {
          icon: Zap,
          title: 'État d\'esprit positif',
          description: 'Cultivez un mindset de croissance et de réussite'
        },
        {
          icon: Award,
          title: 'Auto-évaluation',
          description: 'Notez vos progrès et célébrez vos victoires'
        }
      ],
      benefits: [
        'Transformation physique et mentale',
        'Confiance en soi renforcée',
        'Habitudes saines durables',
        'Suivi de progression motivant'
      ],
      testimonial: {
        text: "Le GlowUp Planner m'a aidée à perdre 15kg et surtout à retrouver confiance en moi. Une vraie transformation !",
        author: "Sophie M.",
        role: "Maman de 2 enfants",
        rating: 5
      },
      stats: {
        users: '3.8K+',
        satisfaction: '98%',
        timeGained: 'Transformation'
      }
    },
    {
      id: 'projet',
      name: 'Projet Planner',
      subtitle: 'De l\'idée au succès entrepreneurial',
      description: 'Le planner business complet en 9 pages pour structurer, planifier et concrétiser votre projet d\'entreprise.',
      icon: Briefcase,
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      borderColor: 'border-green-200',
      access: 'Pro (aperçu) • Premium (complet)',
      link: '/planners/projet',
      image: '/api/placeholder/600/400',
      features: [
        {
          icon: Lightbulb,
          title: 'Idée & Nom du projet',
          description: 'Clarifiez votre concept et trouvez le nom parfait'
        },
        {
          icon: Target,
          title: 'Objectifs & Vision',
          description: 'Définissez votre mission et votre vision d\'entreprise'
        },
        {
          icon: Gift,
          title: 'Offres & Valeurs',
          description: 'Structurez vos produits/services et votre proposition de valeur'
        },
        {
          icon: Users,
          title: 'Étude de marché',
          description: 'Analysez votre concurrence et identifiez vos clients cibles'
        },
        {
          icon: CheckCircle,
          title: 'Checklist à échéances',
          description: 'Planifiez chaque étape avec des deadlines précises'
        },
        {
          icon: BarChart3,
          title: 'Plan de financement',
          description: 'Gérez votre budget, sources de financement et dépenses'
        },
        {
          icon: BookOpen,
          title: 'Notes importantes',
          description: 'Centralisez toutes vos informations cruciales'
        },
        {
          icon: Sparkles,
          title: 'Nouvelles idées',
          description: 'Capturez vos inspirations et innovations'
        },
        {
          icon: PenTool,
          title: 'Coin d\'inspiration',
          description: 'Espace créatif pour dessins, schémas et brainstorming'
        }
      ],
      benefits: [
        'Structure claire pour votre projet',
        'Réduction des risques d\'échec',
        'Vision 360° de votre business',
        'Suivi de progression détaillé'
      ],
      testimonial: {
        text: "Le Projet Planner m'a permis de structurer mon idée et de lever 50K€ en 6 mois. Un outil indispensable !",
        author: "Alexandre D.",
        role: "Fondateur de startup",
        rating: 5
      },
      stats: {
        users: '2.1K+',
        satisfaction: '97%',
        timeGained: 'Succès business'
      }
    }
  ]

  const selectedPlannerData = planners.find(p => p.id === selectedPlanner)

  const globalStats = [
    {
      icon: Users,
      number: '15K+',
      label: 'Utilisateurs actifs',
      description: 'Font confiance à nos planners'
    },
    {
      icon: Star,
      number: '4.9/5',
      label: 'Note moyenne',
      description: 'Satisfaction client exceptionnelle'
    },
    {
      icon: TrendingUp,
      number: '+127%',
      label: 'Productivité',
      description: 'Augmentation moyenne constatée'
    },
    {
      icon: Award,
      number: '89%',
      label: 'Objectifs atteints',
      description: 'Taux de réussite de nos utilisateurs'
    }
  ]

  const comparisons = [
    {
      feature: 'Planification hebdomadaire',
      freemium: 'Limitée (3 sections)',
      pro: 'Complète',
      premium: 'Complète + Analytics'
    },
    {
      feature: 'Routine quotidienne',
      freemium: '❌',
      pro: '✅ Complète',
      premium: '✅ + Statistiques'
    },
    {
      feature: 'GlowUp Planner',
      freemium: '❌',
      pro: 'Aperçu uniquement',
      premium: '✅ Complet'
    },
    {
      feature: 'Projet Planner',
      freemium: '❌',
      pro: 'Aperçu uniquement',
      premium: '✅ 9 pages complètes'
    },
    {
      feature: 'Sauvegarde automatique',
      freemium: '❌',
      pro: '✅',
      premium: '✅ + Cloud sync'
    },
    {
      feature: 'Export PDF',
      freemium: '❌',
      pro: '✅',
      premium: '✅ + Templates'
    },
    {
      feature: 'Rappels & notifications',
      freemium: '❌',
      pro: '✅ Basiques',
      premium: '✅ Personnalisés'
    },
    {
      feature: 'Support',
      freemium: 'FAQ',
      pro: 'Email prioritaire',
      premium: 'VIP 24/7'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg">
              NOS PLANNERS
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="text-gray-900">L'outil essentiel pour </span>
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                atteindre vos objectifs
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Découvrez nos 4 planners digitaux conçus pour transformer votre organisation 
              et vous accompagner dans tous vos projets de vie, du quotidien au business.
            </p>

            {/* Global Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {globalStats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium text-gray-700 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {stat.description}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Planners Navigation */}
      <section className="pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {planners.map((planner) => {
              const IconComponent = planner.icon
              const isActive = selectedPlanner === planner.id
              
              return (
                <button
                  key={planner.id}
                  onClick={() => setSelectedPlanner(planner.id)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? `bg-gradient-to-r ${planner.color} text-white shadow-lg scale-105` 
                      : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md hover:shadow-lg'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{planner.name}</span>
                  {planner.isPremium && (
                    <Crown className="w-4 h-4 text-yellow-400" />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Selected Planner Detail */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden shadow-2xl">
            <div className="md:flex">
              {/* Image Section */}
              <div className="md:w-1/2">
                <div className={`h-64 md:h-full bg-gradient-to-br ${selectedPlannerData.color} flex items-center justify-center relative`}>
                  <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                  <div className="relative z-10 text-center text-white">
                    <selectedPlannerData.icon className="w-24 h-24 mx-auto mb-4 opacity-80" />
                    <h3 className="text-2xl font-bold mb-2">{selectedPlannerData.name}</h3>
                    <p className="text-lg opacity-90">{selectedPlannerData.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {selectedPlannerData.name}
                    </h2>
                    <Badge className={`${selectedPlannerData.bgColor} ${selectedPlannerData.textColor} border-0`}>
                      {selectedPlannerData.access}
                    </Badge>
                  </div>
                  {selectedPlannerData.isPremium && (
                    <Crown className="w-8 h-8 text-yellow-500" />
                  )}
                </div>

                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  {selectedPlannerData.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{selectedPlannerData.stats.users}</div>
                    <div className="text-sm text-gray-500">Utilisateurs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{selectedPlannerData.stats.satisfaction}</div>
                    <div className="text-sm text-gray-500">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{selectedPlannerData.stats.timeGained}</div>
                    <div className="text-sm text-gray-500">Gain moyen</div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Bénéfices clés :</h4>
                  <div className="space-y-2">
                    {selectedPlannerData.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to={selectedPlannerData.link}>
                    <Button className={`bg-gradient-to-r ${selectedPlannerData.color} hover:opacity-90 text-white px-6 py-3 w-full sm:w-auto`}>
                      <Play className="w-4 h-4 mr-2" />
                      Essayer maintenant
                    </Button>
                  </Link>
                  <Button variant="outline" className="px-6 py-3">
                    <Eye className="w-4 h-4 mr-2" />
                    Voir la démo
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Features Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Fonctionnalités du {selectedPlannerData.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez en détail toutes les fonctionnalités qui font de ce planner 
              un outil indispensable pour votre organisation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {selectedPlannerData.features.map((feature, index) => {
              const IconComponent = feature.icon
              
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 ${selectedPlannerData.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-8 h-8 ${selectedPlannerData.textColor}`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className={`${selectedPlannerData.bgColor} border-0 shadow-lg`}>
            <CardContent className="p-8 text-center">
              <Quote className={`w-12 h-12 ${selectedPlannerData.textColor} mx-auto mb-6 opacity-60`} />
              
              <blockquote className="text-xl md:text-2xl text-gray-800 mb-6 italic leading-relaxed">
                "{selectedPlannerData.testimonial.text}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-1 mb-4">
                {[...Array(selectedPlannerData.testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div>
                <div className="font-semibold text-gray-900 text-lg">
                  {selectedPlannerData.testimonial.author}
                </div>
                <div className={`${selectedPlannerData.textColor} font-medium`}>
                  {selectedPlannerData.testimonial.role}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comparez nos offres
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trouvez le plan qui correspond parfaitement à vos besoins et votre budget.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Fonctionnalités</th>
                  <th className="text-center py-4 px-6">
                    <div className="flex flex-col items-center">
                      <Gift className="w-8 h-8 text-green-500 mb-2" />
                      <span className="font-semibold text-gray-900">Freemium</span>
                      <span className="text-sm text-gray-500">Gratuit</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-6">
                    <div className="flex flex-col items-center">
                      <Target className="w-8 h-8 text-blue-500 mb-2" />
                      <span className="font-semibold text-gray-900">Pro</span>
                      <span className="text-sm text-gray-500">1,99€/mois</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-6">
                    <div className="flex flex-col items-center">
                      <Crown className="w-8 h-8 text-purple-500 mb-2" />
                      <span className="font-semibold text-gray-900">Premium</span>
                      <span className="text-sm text-gray-500">4,99€/mois</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-900">{row.feature}</td>
                    <td className="py-4 px-6 text-center text-gray-600">{row.freemium}</td>
                    <td className="py-4 px-6 text-center text-gray-600">{row.pro}</td>
                    <td className="py-4 px-6 text-center text-gray-600">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-12">
            <Link to="/tarification">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg">
                Voir tous les tarifs
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* All Planners Overview */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tous nos planners en un coup d'œil
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chaque planner est conçu pour répondre à un besoin spécifique. 
              Utilisez-les séparément ou combinez-les pour une organisation optimale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {planners.map((planner) => {
              const IconComponent = planner.icon
              
              return (
                <Card key={planner.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className={`h-32 bg-gradient-to-r ${planner.color} flex items-center justify-center relative`}>
                    <IconComponent className="w-16 h-16 text-white opacity-80" />
                    {planner.isPremium && (
                      <Crown className="w-6 h-6 text-yellow-300 absolute top-4 right-4" />
                    )}
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{planner.name}</h3>
                      <Badge className={`${planner.bgColor} ${planner.textColor} border-0 text-xs`}>
                        {planner.access.split(' • ')[0]}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {planner.description}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                      <div>
                        <div className="text-lg font-bold text-gray-900">{planner.stats.users}</div>
                        <div className="text-xs text-gray-500">Utilisateurs</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-900">{planner.stats.satisfaction}</div>
                        <div className="text-xs text-gray-500">Satisfaction</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-900">{planner.stats.timeGained}</div>
                        <div className="text-xs text-gray-500">Bénéfice</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Link to={planner.link} className="flex-1">
                        <Button className={`w-full bg-gradient-to-r ${planner.color} hover:opacity-90 text-white`}>
                          Découvrir
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setSelectedPlanner(planner.id)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-purple-200" />
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à transformer votre organisation ?
          </h2>
          
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Rejoignez plus de 15 000 utilisateurs qui ont déjà révolutionné leur quotidien 
            avec nos planners digitaux. Commencez gratuitement dès aujourd'hui !
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/inscription">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4">
                <Gift className="w-5 h-5 mr-2" />
                Commencer gratuitement
              </Button>
            </Link>
            <Link to="/tarification">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4"
              >
                <Crown className="w-5 h-5 mr-2" />
                Voir les tarifs
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-8 text-purple-100">
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              <span>Gratuit à vie</span>
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

export default Planners

