import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { 
  Calendar,
  CheckSquare,
  Clock,
  Star,
  Users,
  Heart,
  MessageCircle,
  TrendingUp,
  Save,
  Download,
  Lock,
  Crown
} from 'lucide-react'
import { useSubscription } from '@/contexts/SubscriptionContext'
import UpgradePrompt from '@/components/subscription/UpgradePrompt'

const SemainierPlanner = () => {
  const { getCurrentPlan, hasSemainierSection, hasFeature } = useSubscription()
  const [showUpgradePrompt, setShowUpgradePrompt] = useState(false)
  const [formData, setFormData] = useState({
    objectifs: '',
    todo: '',
    rendezVous: '',
    priorites: '',
    contacts: '',
    gratitude: '',
    debrief: '',
    ameliorations: ''
  })

  const currentPlan = getCurrentPlan()
  const canSave = hasFeature('semainier', 'saveEnabled')
  const canExport = hasFeature('semainier', 'exportEnabled')
  const hasReminders = hasFeature('semainier', 'remindersEnabled')

  // Sections disponibles selon le plan
  const sections = [
    {
      id: 'objectifs',
      title: 'Objectifs de la semaine',
      icon: Star,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      available: hasSemainierSection('objectifs'),
      premium: false
    },
    {
      id: 'todo',
      title: 'To do list hebdomadaire',
      icon: CheckSquare,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      available: hasSemainierSection('todo'),
      premium: false
    },
    {
      id: 'rendezVous',
      title: 'Mes rendez-vous',
      icon: Clock,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      available: hasSemainierSection('rendezVous'),
      premium: currentPlan.id === 'freemium'
    },
    {
      id: 'priorites',
      title: 'Priorités de la semaine',
      icon: TrendingUp,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      available: hasSemainierSection('priorites'),
      premium: currentPlan.id === 'freemium'
    },
    {
      id: 'contacts',
      title: 'Personnes à contacter',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      available: hasSemainierSection('contacts'),
      premium: currentPlan.id === 'freemium'
    },
    {
      id: 'gratitude',
      title: 'Gratitude de la semaine',
      icon: Heart,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      available: hasSemainierSection('gratitude'),
      premium: false
    },
    {
      id: 'debrief',
      title: 'Debrief hebdomadaire',
      icon: MessageCircle,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      available: hasSemainierSection('debrief'),
      premium: currentPlan.id === 'freemium'
    },
    {
      id: 'ameliorations',
      title: 'Domaines à améliorer',
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      available: hasSemainierSection('ameliorations'),
      premium: currentPlan.id === 'freemium'
    }
  ]

  const handleInputChange = (field, value) => {
    if (!canSave && currentPlan.id === 'freemium') {
      // Pour le plan Freemium, on peut saisir mais pas sauvegarder
      setFormData(prev => ({ ...prev, [field]: value }))
      return
    }
    
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Auto-sauvegarde pour les plans payants
    if (canSave) {
      localStorage.setItem('semainier_data', JSON.stringify({
        ...formData,
        [field]: value
      }))
    }
  }

  const handleSave = () => {
    if (!canSave) {
      setShowUpgradePrompt(true)
      return
    }
    
    localStorage.setItem('semainier_data', JSON.stringify(formData))
    alert('Données sauvegardées avec succès !')
  }

  const handleExport = () => {
    if (!canExport) {
      setShowUpgradePrompt(true)
      return
    }
    
    // Logique d'export PDF
    alert('Export PDF en cours de développement...')
  }

  // Chargement des données sauvegardées
  useEffect(() => {
    if (canSave) {
      const saved = localStorage.getItem('semainier_data')
      if (saved) {
        setFormData(JSON.parse(saved))
      }
    }
  }, [canSave])

  const renderSection = (section) => {
    const IconComponent = section.icon
    
    if (!section.available) {
      return (
        <Card key={section.id} className="relative overflow-hidden border-gray-200 bg-gray-50">
          <div className="absolute inset-0 bg-gray-100 bg-opacity-50 flex items-center justify-center z-10">
            <div className="text-center">
              <Lock className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-500 font-medium">
                {currentPlan.id === 'freemium' ? 'Pro/Premium requis' : 'Fonctionnalité verrouillée'}
              </p>
              <Button
                size="sm"
                className="mt-2 bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => setShowUpgradePrompt(true)}
              >
                Débloquer
              </Button>
            </div>
          </div>
          
          <CardHeader className={`${section.bgColor} border-b ${section.borderColor} pb-4`}>
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg bg-white border ${section.borderColor}`}>
                <IconComponent className={`w-5 h-5 ${section.color}`} />
              </div>
              <div>
                <CardTitle className="text-lg text-gray-900">{section.title}</CardTitle>
                {section.premium && (
                  <Badge className="mt-1 bg-orange-100 text-orange-800 border-orange-200">
                    Premium
                  </Badge>
                )}
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-6">
            <Textarea
              placeholder="Cette section est verrouillée..."
              disabled
              className="min-h-[120px] bg-gray-100 text-gray-400"
            />
          </CardContent>
        </Card>
      )
    }

    return (
      <Card key={section.id} className={`border ${section.borderColor} hover:shadow-md transition-shadow`}>
        <CardHeader className={`${section.bgColor} border-b ${section.borderColor} pb-4`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg bg-white border ${section.borderColor}`}>
                <IconComponent className={`w-5 h-5 ${section.color}`} />
              </div>
              <div>
                <CardTitle className="text-lg text-gray-900">{section.title}</CardTitle>
                {section.premium && (
                  <Badge className="mt-1 bg-orange-100 text-orange-800 border-orange-200">
                    Premium
                  </Badge>
                )}
              </div>
            </div>
            
            {!canSave && currentPlan.id === 'freemium' && (
              <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                Pas de sauvegarde
              </Badge>
            )}
          </div>
        </CardHeader>
        
        <CardContent className="p-6">
          <Textarea
            placeholder={`Décrivez vos ${section.title.toLowerCase()}...`}
            value={formData[section.id] || ''}
            onChange={(e) => handleInputChange(section.id, e.target.value)}
            className="min-h-[120px] resize-none border-gray-200 focus:border-blue-500 focus:ring-blue-500"
          />
          
          {section.id === 'rendezVous' && hasReminders && (
            <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-blue-800 font-medium">
                  Rappels activés pour vos rendez-vous
                </span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8">
      {/* Header */}
      <section className="pt-20 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Calendar className="w-8 h-8 text-blue-600" />
              <Badge className={`px-4 py-2 ${
                currentPlan.id === 'freemium' 
                  ? 'bg-gray-100 text-gray-800 border-gray-200'
                  : currentPlan.id === 'pro'
                    ? 'bg-blue-100 text-blue-800 border-blue-200'
                    : 'bg-purple-100 text-purple-800 border-purple-200'
              }`}>
                Plan {currentPlan.name}
              </Badge>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-900">Planner </span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Semainier
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Organisez votre semaine avec précision et atteignez vos objectifs hebdomadaires.
              {currentPlan.id === 'freemium' && (
                <span className="block mt-2 text-orange-600 font-medium">
                  Version simplifiée - 3 sections accessibles
                </span>
              )}
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleSave}
                className={`${
                  canSave 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'bg-gray-400 hover:bg-gray-500'
                } text-white`}
              >
                <Save className="w-4 h-4 mr-2" />
                {canSave ? 'Sauvegarder' : 'Sauvegarde Pro'}
              </Button>
              
              <Button 
                variant="outline"
                onClick={handleExport}
                className={`border-blue-200 ${
                  canExport 
                    ? 'text-blue-600 hover:bg-blue-50' 
                    : 'text-gray-400 hover:bg-gray-50'
                }`}
              >
                <Download className="w-4 h-4 mr-2" />
                {canExport ? 'Export PDF' : 'Export Pro'}
              </Button>

              {currentPlan.id === 'freemium' && (
                <Button
                  onClick={() => setShowUpgradePrompt(true)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  <Crown className="w-4 h-4 mr-2" />
                  Débloquer Pro
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sections.map(renderSection)}
          </div>

          {/* Call to action pour Freemium */}
          {currentPlan.id === 'freemium' && (
            <div className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-8 text-center">
              <div className="max-w-2xl mx-auto">
                <Crown className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Débloquez toutes les sections avec l'abonnement Pro
                </h3>
                <p className="text-gray-600 mb-6">
                  Accédez à toutes les fonctionnalités du Planner Semainier : sauvegarde automatique, 
                  rappels, export PDF et bien plus encore.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => setShowUpgradePrompt(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                  >
                    Passer à Pro - 1,99€/mois
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.location.href = '/abonnements'}
                    className="border-orange-200 text-orange-600 hover:bg-orange-50 px-8 py-3"
                  >
                    Voir tous les plans
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Upgrade Prompt */}
      {showUpgradePrompt && (
        <UpgradePrompt 
          plannerType="semainier"
          onClose={() => setShowUpgradePrompt(false)}
        />
      )}
    </div>
  )
}

export default SemainierPlanner

