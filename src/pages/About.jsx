import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Calendar, 
  Users, 
  Target, 
  Sparkles, 
  Heart, 
  Star,
  CheckCircle,
  ArrowRight,
  Palette,
  Clock,
  TrendingUp,
  BookOpen,
  Briefcase,
  Baby,
  GraduationCap,
  Lightbulb,
  Shield,
  Award
} from 'lucide-react'

const About = () => {
  const coreValues = [
    {
      icon: Target,
      title: 'Planifier, c\'est la base !',
      description: 'Nous comprenons l\'importance de rester organisé dans un monde de plus en plus occupé, et nos Planner sont conçus pour vous aider à gérer votre emploi du temps de manière efficace et productive.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Palette,
      title: 'Design Moderne',
      description: 'Nous accordons une grande importance à la conception de nos PLANNER. Chaque modèle est soigneusement élaboré pour offrir une mise en page claire et intuitive, vous permettant de visualiser facilement vos tâches, vos rendez-vous et vos objectifs.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Des Planners pour Tous',
      description: 'Que vous soyez un étudiant, un professionnel ou un parent occupé, nous avons le planificateur parfait pour vous.',
      color: 'from-pink-500 to-pink-600'
    }
  ]

  const targetAudience = [
    {
      icon: GraduationCap,
      title: 'Étudiants',
      description: 'Organisez vos cours, examens et projets étudiants avec nos planners adaptés à la vie académique.',
      features: ['Planning de révisions', 'Suivi des notes', 'Gestion du temps d\'étude']
    },
    {
      icon: Briefcase,
      title: 'Professionnels',
      description: 'Optimisez votre productivité et gérez vos projets professionnels avec efficacité.',
      features: ['Planification de projets', 'Suivi d\'objectifs', 'Gestion des priorités']
    },
    {
      icon: Baby,
      title: 'Parents Occupés',
      description: 'Conciliez vie familiale et personnelle grâce à nos outils d\'organisation dédiés.',
      features: ['Planning familial', 'Routines enfants', 'Équilibre vie pro/perso']
    }
  ]

  const designPrinciples = [
    {
      icon: Lightbulb,
      title: 'Clarté Visuelle',
      description: 'Interface épurée et intuitive pour une utilisation sans effort'
    },
    {
      icon: Shield,
      title: 'Simplicité d\'Usage',
      description: 'Fonctionnalités accessibles à tous, sans courbe d\'apprentissage'
    },
    {
      icon: Award,
      title: 'Excellence Fonctionnelle',
      description: 'Chaque détail pensé pour maximiser votre efficacité'
    }
  ]

  const statistics = [
    { number: '10K+', label: 'Utilisateurs actifs', color: 'text-blue-600', bg: 'bg-blue-50' },
    { number: '50K+', label: 'Planners créés', color: 'text-purple-600', bg: 'bg-purple-50' },
    { number: '98%', label: 'Satisfaction client', color: 'text-pink-600', bg: 'bg-pink-50' },
    { number: '24/7', label: 'Support disponible', color: 'text-green-600', bg: 'bg-green-50' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg">
              À PROPOS DE MON PLANNER PRO
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="text-gray-900">L'organisation moderne </span>
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                à portée de main
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Découvrez comment Mon Planner Pro révolutionne votre façon de vous organiser. 
              Nos planners digitaux combinent design moderne, fonctionnalités avancées et 
              simplicité d'utilisation pour transformer votre quotidien.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {statistics.map((stat, index) => (
                <div key={index} className={`${stat.bg} rounded-2xl p-6 text-center`}>
                  <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nos Valeurs Fondamentales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident notre vision et façonnent chaque aspect de nos planners digitaux.
            </p>
          </div>

          <div className="space-y-16">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon
              const isEven = index % 2 === 0
              
              return (
                <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                  <div className="flex-1">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mr-4`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                  
                  <div className="flex-1">
                    <div className={`w-full h-64 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center`}>
                      <IconComponent className="w-24 h-24 text-white opacity-20" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Des Planners pour Tous
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quel que soit votre profil, nous avons conçu des solutions d'organisation 
              parfaitement adaptées à vos besoins spécifiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {targetAudience.map((audience, index) => {
              const IconComponent = audience.icon
              
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <CardHeader className="text-center pb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-10 h-10 text-purple-600" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900 mb-4">
                      {audience.title}
                    </CardTitle>
                    <p className="text-gray-600 leading-relaxed">
                      {audience.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 mb-3">Fonctionnalités clés :</h4>
                      {audience.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Design Principles Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Notre Approche Design
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chaque élément de nos planners est pensé pour offrir une expérience utilisateur 
              exceptionnelle, alliant beauté et fonctionnalité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designPrinciples.map((principle, index) => {
              const IconComponent = principle.icon
              
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Notre Mission
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                "Démocratiser l'organisation moderne en rendant la planification accessible, 
                intuitive et efficace pour tous. Nous croyons que chacun mérite d'avoir les outils 
                nécessaires pour atteindre ses objectifs et vivre une vie plus épanouie."
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                <Heart className="w-8 h-8 text-pink-500" />
                <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Location */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une équipe passionnée basée à Paris, dédiée à votre réussite et à votre épanouissement personnel.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Basés à Paris, France 🇫🇷
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Notre équipe multidisciplinaire combine expertise technique, design créatif et 
                compréhension profonde des besoins d'organisation modernes. Nous travaillons 
                chaque jour pour créer les meilleurs outils de planification digitale.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                >
                  Nous contacter
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-purple-200 text-purple-600 hover:bg-purple-50"
                >
                  En savoir plus
                </Button>
              </div>
            </div>
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
            Rejoignez des milliers d'utilisateurs qui ont déjà révolutionné leur façon de s'organiser 
            avec Mon Planner Pro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4">
              <Sparkles className="w-5 h-5 mr-2" />
              Commencer gratuitement
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Découvrir nos planners
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

