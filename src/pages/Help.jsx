import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Search,
  HelpCircle,
  Book,
  MessageCircle,
  Settings,
  CreditCard,
  Shield,
  Smartphone,
  ChevronDown,
  ChevronRight,
  Star,
  Clock,
  Users,
  Mail,
  Phone,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react'

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Toutes les catégories', icon: Book, count: 24 },
    { id: 'getting-started', name: 'Premiers pas', icon: Star, count: 6 },
    { id: 'planners', name: 'Planners', icon: Book, count: 8 },
    { id: 'account', name: 'Compte', icon: Settings, count: 4 },
    { id: 'billing', name: 'Facturation', icon: CreditCard, count: 3 },
    { id: 'technical', name: 'Technique', icon: Smartphone, count: 3 }
  ]

  const faqs = [
    {
      id: 1,
      category: 'getting-started',
      question: 'Comment créer mon premier planner ?',
      answer: 'Pour créer votre premier planner, connectez-vous à votre compte et cliquez sur "Planners" dans le menu principal. Choisissez le type de planner qui vous convient (Semainier, Routine, GlowUp ou Projet) et suivez les instructions à l\'écran.',
      helpful: 45,
      tags: ['débutant', 'création', 'planner']
    },
    {
      id: 2,
      category: 'getting-started',
      question: 'Quelle est la différence entre les formules Freemium, Pro et Premium ?',
      answer: 'Freemium vous donne accès aux fonctionnalités de base. Pro débloque toutes les fonctionnalités avancées et l\'export PDF. Premium inclut en plus le GlowUp Planner exclusif et le support prioritaire.',
      helpful: 38,
      tags: ['abonnement', 'formules', 'prix']
    },
    {
      id: 3,
      category: 'planners',
      question: 'Comment sauvegarder mes données automatiquement ?',
      answer: 'Vos données sont automatiquement sauvegardées toutes les 30 secondes lorsque vous modifiez vos planners. Vous pouvez aussi forcer une sauvegarde en cliquant sur l\'icône de sauvegarde.',
      helpful: 52,
      tags: ['sauvegarde', 'données', 'automatique']
    },
    {
      id: 4,
      category: 'planners',
      question: 'Puis-je exporter mes planners en PDF ?',
      answer: 'Oui, l\'export PDF est disponible pour les abonnés Pro et Premium. Cliquez sur le bouton "Exporter" dans votre planner et choisissez le format PDF.',
      helpful: 41,
      tags: ['export', 'pdf', 'pro', 'premium']
    },
    {
      id: 5,
      category: 'planners',
      question: 'Comment accéder au GlowUp Planner ?',
      answer: 'Le GlowUp Planner est exclusif aux abonnés Premium. Mettez à niveau votre compte vers Premium pour débloquer ce module de développement personnel avancé.',
      helpful: 29,
      tags: ['glowup', 'premium', 'développement personnel']
    },
    {
      id: 6,
      category: 'account',
      question: 'Comment modifier mon mot de passe ?',
      answer: 'Allez dans "Mon compte" > "Sécurité" et cliquez sur "Modifier le mot de passe". Entrez votre mot de passe actuel puis le nouveau mot de passe deux fois.',
      helpful: 33,
      tags: ['mot de passe', 'sécurité', 'compte']
    },
    {
      id: 7,
      category: 'account',
      question: 'Comment supprimer mon compte ?',
      answer: 'Pour supprimer votre compte, contactez notre support à contact@monplannerpro.com. Attention : cette action est irréversible et supprimera toutes vos données.',
      helpful: 18,
      tags: ['suppression', 'compte', 'données']
    },
    {
      id: 8,
      category: 'billing',
      question: 'Comment annuler mon abonnement ?',
      answer: 'Vous pouvez annuler votre abonnement à tout moment dans "Mon compte" > "Abonnement". L\'annulation prend effet à la fin de votre période de facturation actuelle.',
      helpful: 47,
      tags: ['annulation', 'abonnement', 'facturation']
    },
    {
      id: 9,
      category: 'billing',
      question: 'Puis-je obtenir un remboursement ?',
      answer: 'Nous offrons un remboursement complet dans les 30 jours suivant votre achat si vous n\'êtes pas satisfait. Contactez notre support pour initier le processus.',
      helpful: 35,
      tags: ['remboursement', '30 jours', 'satisfaction']
    },
    {
      id: 10,
      category: 'technical',
      question: 'Mon Planner Pro fonctionne-t-il sur mobile ?',
      answer: 'Oui, Mon Planner Pro est entièrement responsive et optimisé pour tous les appareils : smartphone, tablette et ordinateur.',
      helpful: 56,
      tags: ['mobile', 'responsive', 'compatibilité']
    },
    {
      id: 11,
      category: 'technical',
      question: 'Que faire si j\'ai des problèmes de connexion ?',
      answer: 'Vérifiez votre connexion internet, videz le cache de votre navigateur et réessayez. Si le problème persiste, contactez notre support technique.',
      helpful: 28,
      tags: ['connexion', 'problème', 'technique']
    }
  ]

  const quickActions = [
    {
      title: 'Commencer rapidement',
      description: 'Guide de démarrage en 5 minutes',
      icon: Star,
      color: 'from-green-500 to-emerald-600',
      action: 'Voir le guide'
    },
    {
      title: 'Contacter le support',
      description: 'Réponse sous 2h en moyenne',
      icon: MessageCircle,
      color: 'from-blue-500 to-indigo-600',
      action: 'Nous contacter'
    },
    {
      title: 'Signaler un bug',
      description: 'Aidez-nous à améliorer l\'app',
      icon: AlertCircle,
      color: 'from-orange-500 to-red-600',
      action: 'Signaler'
    },
    {
      title: 'Demander une fonctionnalité',
      description: 'Proposez vos idées',
      icon: Info,
      color: 'from-purple-500 to-pink-600',
      action: 'Proposer'
    }
  ]

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const toggleFaq = (faqId) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 py-8">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
              CENTRE D'AIDE
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">Comment pouvons-nous </span>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                vous aider ?
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Trouvez rapidement les réponses à vos questions ou contactez notre équipe support.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Rechercher dans l'aide..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {quickActions.map((action, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {action.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {action.description}
                  </p>

                  <Button 
                    variant="outline" 
                    size="sm"
                    className="group-hover:bg-gray-50"
                  >
                    {action.action}
                    <ExternalLink className="ml-2 w-3 h-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-lg sticky top-8">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <HelpCircle className="w-5 h-5 mr-2 text-blue-600" />
                    Catégories
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-1">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-6 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 ${
                          selectedCategory === category.id ? 'bg-blue-50 border-r-2 border-blue-500' : ''
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <category.icon className={`w-4 h-4 ${
                            selectedCategory === category.id ? 'text-blue-600' : 'text-gray-500'
                          }`} />
                          <span className={`font-medium ${
                            selectedCategory === category.id ? 'text-blue-900' : 'text-gray-700'
                          }`}>
                            {category.name}
                          </span>
                        </div>
                        <Badge 
                          variant="secondary" 
                          className={`text-xs ${
                            selectedCategory === category.id ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {category.count}
                        </Badge>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Questions fréquentes
                </h2>
                <p className="text-gray-600">
                  {filteredFaqs.length} question{filteredFaqs.length > 1 ? 's' : ''} trouvée{filteredFaqs.length > 1 ? 's' : ''}
                  {selectedCategory !== 'all' && ` dans "${categories.find(c => c.id === selectedCategory)?.name}"`}
                </p>
              </div>

              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <Card key={faq.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                      >
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {faq.question}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>{faq.helpful} personnes aidées</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              {faq.tags.map((tag, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="ml-4">
                          {expandedFaq === faq.id ? (
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                          ) : (
                            <ChevronRight className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                      </button>

                      {expandedFaq === faq.id && (
                        <div className="px-6 pb-6 border-t border-gray-100">
                          <div className="pt-4">
                            <p className="text-gray-700 leading-relaxed mb-4">
                              {faq.answer}
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <span className="text-sm text-gray-500">Cette réponse vous a-t-elle aidé ?</span>
                                <div className="flex items-center space-x-2">
                                  <Button size="sm" variant="outline" className="text-green-600 border-green-200 hover:bg-green-50">
                                    <CheckCircle className="w-4 h-4 mr-1" />
                                    Oui
                                  </Button>
                                  <Button size="sm" variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                                    <AlertCircle className="w-4 h-4 mr-1" />
                                    Non
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredFaqs.length === 0 && (
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-12 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Search className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Aucun résultat trouvé
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Nous n'avons pas trouvé de réponse correspondant à votre recherche.
                    </p>
                    <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white">
                      Contacter le support
                      <MessageCircle className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Vous ne trouvez pas votre réponse ?
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Notre équipe support est là pour vous aider. Contactez-nous et nous vous 
            répondrons dans les plus brefs délais.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              <Mail className="mr-2 w-5 h-5" />
              Envoyer un email
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
            >
              <Phone className="mr-2 w-5 h-5" />
              Nous appeler
            </Button>
          </div>

          <div className="mt-8 text-blue-100">
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Réponse sous 2h</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Support en français</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Équipe certifiée</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Help

