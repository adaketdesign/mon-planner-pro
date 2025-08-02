import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Calendar,
  Clock,
  Sparkles,
  Briefcase,
  Play,
  ArrowRight,
  Star
} from 'lucide-react'

const Home = () => {
  const planners = [
    {
      id: 'semainier',
      title: 'Planner Semainier',
      description: 'Organisez votre semaine avec précision et atteignez vos objectifs hebdomadaires.',
      icon: Calendar,
      color: 'bg-pink-500',
      features: [
        'Objectifs de la semaine',
        'To-do list interactive',
        'Suivi des rendez-vous',
        'Gratitude & débrief'
      ]
    },
    {
      id: 'routine',
      title: 'Routine Planner',
      description: 'Créez des habitudes durables et transformez votre quotidien étape par étape.',
      icon: Clock,
      color: 'bg-purple-600',
      features: [
        'Routine matinale & soir',
        'Suivi des habitudes',
        'Bien-être quotidien',
        'Planification journalière'
      ]
    },
    {
      id: 'glowup',
      title: 'GlowUp Planner',
      description: 'Accompagnez votre transformation personnelle avec bienveillance et détermination.',
      icon: Sparkles,
      color: 'bg-orange-500',
      features: [
        'Développement personnel',
        'Suivi de progression',
        'Auto-évaluation',
        'Bilans mensuels (Premium)'
      ]
    },
    {
      id: 'projet',
      title: 'Projet Planner',
      description: 'Structurez votre idée d\'entreprise et concrétisez vos projets professionnels.',
      icon: Briefcase,
      color: 'bg-blue-500',
      features: [
        '9 pages structurées',
        'Étude de marché',
        'Plan de financement',
        'Suivi de progression'
      ]
    }
  ]

  const stats = [
    { number: '10K+', label: 'Utilisateurs actifs' },
    { number: '50K+', label: 'Planners créés' },
    { number: '98%', label: 'Satisfaction client' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section avec fond dégradé */}
      <section className="relative hero-gradient pt-20 pb-32 overflow-hidden">
        {/* Éléments décoratifs en arrière-plan */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="decorative-element top-20 left-10 w-20 h-20 bg-pink-200"></div>
          <div className="decorative-element top-40 right-20 w-16 h-16 bg-purple-200"></div>
          <div className="decorative-element bottom-20 left-1/4 w-24 h-24 bg-blue-200"></div>
          <div className="decorative-element bottom-40 right-1/3 w-12 h-12 bg-orange-200"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Tagline avec icône */}
          <div className="flex items-center justify-center mb-8 animate-fade-in-up">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <Star className="w-4 h-4 text-purple-600" />
              <span className="text-sm text-gray-700 font-medium">
                L'organisation moderne à portée de main
              </span>
            </div>
          </div>

          {/* Titre principal */}
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in-up">
            <span className="text-gray-900">Transformez votre</span>
            <br />
            <span className="text-gradient-primary">
              organisation
            </span>
          </h1>

          {/* Sous-titre */}
          <p className="hero-subtitle text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            Planifiez votre semaine, vos routines, vos projets et votre transformation 
            personnelle avec nos planners digitaux innovants et élégants.
          </p>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up">
            <Button 
              size="lg" 
              className="cta-button bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-xl"
              asChild
            >
              <Link to="/inscription" className="flex items-center">
                Commencer gratuitement
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="cta-button-secondary border-2 border-green-500 text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-xl"
              asChild
            >
              <Link to="/demo" className="flex items-center">
                <Play className="mr-2 w-5 h-5" />
                Voir la démo
              </Link>
            </Button>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up">
            {stats.map((stat, index) => (
              <Card key={index} className="stat-card border-0 shadow-lg hover-scale">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Planners */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* En-tête de section */}
          <div className="text-center mb-16">
            <Badge className="section-badge px-4 py-2 text-sm font-semibold mb-6">
              NOS PLANNERS
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">L'outil essentiel pour </span>
              <span className="text-gradient-primary">
                atteindre vos objectifs
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos planners digitaux conçus pour transformer votre 
              organisation et vous accompagner dans tous vos projets de vie.
            </p>
          </div>

          {/* Grille des planners */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {planners.map((planner, index) => (
              <Card 
                key={index} 
                className={`planner-card ${planner.color} text-white border-0 shadow-xl overflow-hidden`}
              >
                <CardContent className="p-8">
                  {/* Icône */}
                  <div className="mb-6">
                    <planner.icon className="w-12 h-12 text-white/90" />
                  </div>

                  {/* Titre */}
                  <h3 className="text-2xl font-bold mb-4">
                    {planner.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 mb-6 leading-relaxed">
                    {planner.description}
                  </p>

                  {/* Fonctionnalités */}
                  <ul className="space-y-2 mb-8">
                    {planner.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-white/90">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bouton */}
                  <Button 
                    className="w-full bg-white/20 hover:bg-white/30 text-white border-0 font-semibold py-3 rounded-lg transition-all duration-300"
                    asChild
                  >
                    <Link to={`/planners/${planner.id}`} className="flex items-center justify-center">
                      Découvrir
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA central */}
          <div className="text-center">
            <Button 
              size="lg"
              className="cta-button bg-pink-500 hover:bg-pink-600 text-white px-12 py-4 text-lg font-semibold rounded-xl"
              asChild
            >
              <Link to="/planners">
                Découvrir tous nos planners
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

