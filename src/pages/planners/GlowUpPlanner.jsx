import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { 
  Sparkles,
  Target,
  Heart,
  TrendingUp,
  Scale,
  Star,
  Brain,
  Save,
  Download,
  BarChart3,
  Calendar,
  Award
} from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'

const GlowUpPlanner = () => {
  const { user, hasSubscription } = useAuth()
  const [plannerData, setPlannerData] = useState({
    motivation: {
      whyChange: '',
      dislikes: '',
      currentWeight: '',
      targetWeight: '',
      strengths: '',
      weaknesses: '',
      futureVision: '',
      mindsetAdopt: '',
      mindsetBanish: '',
      selfRating: 5
    },
    monthlyReview: {
      achievements: '',
      challenges: '',
      lessons: '',
      nextGoals: ''
    },
    progress: {
      weightHistory: [],
      ratingHistory: [],
      milestones: []
    }
  })
  const [isLoading, setIsLoading] = useState(false)
  const [lastSaved, setLastSaved] = useState(null)
  const [activeView, setActiveView] = useState('main') // 'main', 'monthly', 'stats'

  // Check Premium subscription
  const isPremium = hasSubscription && hasSubscription('premium')

  // Auto-save functionality
  useEffect(() => {
    const timer = setTimeout(() => {
      if (user && isPremium) {
        saveData()
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [plannerData, user, isPremium])

  const saveData = async () => {
    setIsLoading(true)
    try {
      // Simulate API call - replace with actual Supabase integration
      await new Promise(resolve => setTimeout(resolve, 500))
      setLastSaved(new Date())
    } catch (error) {
      console.error('Erreur de sauvegarde:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateField = (section, field, value) => {
    setPlannerData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }))
  }

  const exportToPDF = () => {
    // PDF export functionality - to be implemented
    alert('Fonctionnalité d\'export PDF en cours de développement')
  }

  const addWeightEntry = () => {
    const weight = parseFloat(plannerData.motivation.currentWeight)
    if (weight && weight > 0) {
      setPlannerData(prev => ({
        ...prev,
        progress: {
          ...prev.progress,
          weightHistory: [...prev.progress.weightHistory, {
            date: new Date().toISOString().split('T')[0],
            weight: weight
          }]
        }
      }))
    }
  }

  const addRatingEntry = () => {
    const rating = plannerData.motivation.selfRating
    setPlannerData(prev => ({
      ...prev,
      progress: {
        ...prev.progress,
        ratingHistory: [...prev.progress.ratingHistory, {
          date: new Date().toISOString().split('T')[0],
          rating: rating
        }]
      }
    }))
  }

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('fr-FR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  // Premium access check
  if (!isPremium) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">GlowUp Planner</h1>
                  <p className="text-gray-600">Développement personnel avancé</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-purple-600" />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Accès Premium Requis
              </h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Le GlowUp Planner est un module exclusif réservé aux abonnés Premium. 
                Débloquez votre potentiel avec des outils avancés de développement personnel, 
                de suivi de progression et d'analyse de vos transformations.
              </p>

              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Fonctionnalités Premium :</h3>
                <ul className="text-left space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>Analyse complète de motivation et objectifs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span>Suivi de progression avec graphiques</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>Bilans mensuels structurés</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Scale className="w-4 h-4 text-purple-500" />
                    <span>Suivi de poids et auto-évaluation</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={() => window.location.href = '/abonnements'}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 text-lg"
                >
                  Passer à Premium
                </Button>
                <Button
                  onClick={() => window.history.back()}
                  variant="outline"
                  className="w-full"
                >
                  Retour
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">GlowUp Planner</h1>
                <p className="text-gray-600">{getCurrentDate()}</p>
                <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                  Premium
                </Badge>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              {lastSaved && (
                <Badge variant="outline" className="text-green-600 border-green-200">
                  Sauvegardé à {lastSaved.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                </Badge>
              )}
              <Button onClick={exportToPDF} variant="outline" className="flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Export PDF</span>
              </Button>
              <Button onClick={saveData} disabled={isLoading} className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                <Save className="w-4 h-4 mr-2" />
                {isLoading ? 'Sauvegarde...' : 'Sauvegarder'}
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex space-x-4 mb-6">
            <Button
              onClick={() => setActiveView('main')}
              variant={activeView === 'main' ? 'default' : 'outline'}
              className={`flex items-center space-x-2 ${
                activeView === 'main' 
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white' 
                  : 'border-purple-500 text-purple-600 hover:bg-purple-50'
              }`}
            >
              <Target className="w-4 h-4" />
              <span>Analyse Principale</span>
            </Button>
            <Button
              onClick={() => setActiveView('monthly')}
              variant={activeView === 'monthly' ? 'default' : 'outline'}
              className={`flex items-center space-x-2 ${
                activeView === 'monthly' 
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white' 
                  : 'border-indigo-500 text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Bilan Mensuel</span>
            </Button>
            <Button
              onClick={() => setActiveView('stats')}
              variant={activeView === 'stats' ? 'default' : 'outline'}
              className={`flex items-center space-x-2 ${
                activeView === 'stats' 
                  ? 'bg-gradient-to-r from-green-500 to-teal-600 text-white' 
                  : 'border-green-500 text-green-600 hover:bg-green-50'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Statistiques</span>
            </Button>
          </div>
        </div>

        {/* Main Analysis View */}
        {activeView === 'main' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Motivation */}
            <Card className="shadow-lg lg:col-span-2">
              <CardHeader className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Pourquoi je souhaite changer</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Textarea
                  value={plannerData.motivation.whyChange}
                  onChange={(e) => updateField('motivation', 'whyChange', e.target.value)}
                  placeholder="Décrivez vos motivations profondes pour ce changement..."
                  className="w-full h-32 resize-none"
                />
              </CardContent>
            </Card>

            {/* Ce que je n'aime pas */}
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <span>❌</span>
                  <span>Ce que je n'aime pas chez moi</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Textarea
                  value={plannerData.motivation.dislikes}
                  onChange={(e) => updateField('motivation', 'dislikes', e.target.value)}
                  placeholder="Soyez honnête avec vous-même..."
                  className="w-full h-32 resize-none"
                />
              </CardContent>
            </Card>

            {/* Poids */}
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <Scale className="w-5 h-5" />
                  <span>Suivi de poids</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Poids actuel (kg)
                    </label>
                    <Input
                      type="number"
                      value={plannerData.motivation.currentWeight}
                      onChange={(e) => updateField('motivation', 'currentWeight', e.target.value)}
                      placeholder="70"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Poids cible (kg)
                    </label>
                    <Input
                      type="number"
                      value={plannerData.motivation.targetWeight}
                      onChange={(e) => updateField('motivation', 'targetWeight', e.target.value)}
                      placeholder="65"
                      className="w-full"
                    />
                  </div>
                  <Button
                    onClick={addWeightEntry}
                    variant="outline"
                    className="w-full"
                  >
                    Enregistrer le poids actuel
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Mes atouts */}
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <Star className="w-5 h-5" />
                  <span>Mes atouts</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Textarea
                  value={plannerData.motivation.strengths}
                  onChange={(e) => updateField('motivation', 'strengths', e.target.value)}
                  placeholder="Listez vos forces et qualités..."
                  className="w-full h-32 resize-none"
                />
              </CardContent>
            </Card>

            {/* Mes points faibles */}
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <span>⚠️</span>
                  <span>Mes points faibles</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Textarea
                  value={plannerData.motivation.weaknesses}
                  onChange={(e) => updateField('motivation', 'weaknesses', e.target.value)}
                  placeholder="Identifiez les domaines à améliorer..."
                  className="w-full h-32 resize-none"
                />
              </CardContent>
            </Card>

            {/* Ce que je veux devenir */}
            <Card className="shadow-lg lg:col-span-2">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>Ce que je veux devenir</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Textarea
                  value={plannerData.motivation.futureVision}
                  onChange={(e) => updateField('motivation', 'futureVision', e.target.value)}
                  placeholder="Décrivez votre vision de vous-même dans le futur..."
                  className="w-full h-32 resize-none"
                />
              </CardContent>
            </Card>

            {/* État d'esprit */}
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="w-5 h-5" />
                  <span>État d'esprit à adopter</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Textarea
                  value={plannerData.motivation.mindsetAdopt}
                  onChange={(e) => updateField('motivation', 'mindsetAdopt', e.target.value)}
                  placeholder="Quelles pensées et attitudes adopter ?"
                  className="w-full h-32 resize-none"
                />
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-gray-500 to-slate-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <span>🚫</span>
                  <span>État d'esprit à bannir</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Textarea
                  value={plannerData.motivation.mindsetBanish}
                  onChange={(e) => updateField('motivation', 'mindsetBanish', e.target.value)}
                  placeholder="Quelles pensées négatives éliminer ?"
                  className="w-full h-32 resize-none"
                />
              </CardContent>
            </Card>

            {/* Auto-évaluation */}
            <Card className="shadow-lg lg:col-span-2">
              <CardHeader className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span>Auto-évaluation : Ma note</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <label className="text-sm font-medium text-gray-700">
                    Note actuelle :
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={plannerData.motivation.selfRating}
                    onChange={(e) => updateField('motivation', 'selfRating', parseInt(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-2xl font-bold text-purple-600">
                    {plannerData.motivation.selfRating}/10
                  </span>
                  <Button
                    onClick={addRatingEntry}
                    variant="outline"
                    size="sm"
                  >
                    Enregistrer
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Monthly Review View */}
        {activeView === 'monthly' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-t-lg">
                <CardTitle>Réalisations du mois</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Textarea
                  value={plannerData.monthlyReview.achievements}
                  onChange={(e) => updateField('monthlyReview', 'achievements', e.target.value)}
                  placeholder="Quels sont vos succès ce mois-ci ?"
                  className="w-full h-32 resize-none"
                />
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-t-lg">
                <CardTitle>Défis rencontrés</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Textarea
                  value={plannerData.monthlyReview.challenges}
                  onChange={(e) => updateField('monthlyReview', 'challenges', e.target.value)}
                  placeholder="Quelles difficultés avez-vous rencontrées ?"
                  className="w-full h-32 resize-none"
                />
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-t-lg">
                <CardTitle>Leçons apprises</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Textarea
                  value={plannerData.monthlyReview.lessons}
                  onChange={(e) => updateField('monthlyReview', 'lessons', e.target.value)}
                  placeholder="Qu'avez-vous appris sur vous-même ?"
                  className="w-full h-32 resize-none"
                />
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-t-lg">
                <CardTitle>Objectifs pour le mois prochain</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Textarea
                  value={plannerData.monthlyReview.nextGoals}
                  onChange={(e) => updateField('monthlyReview', 'nextGoals', e.target.value)}
                  placeholder="Quels sont vos prochains objectifs ?"
                  className="w-full h-32 resize-none"
                />
              </CardContent>
            </Card>
          </div>
        )}

        {/* Statistics View */}
        {activeView === 'stats' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <Scale className="w-5 h-5" />
                  <span>Historique de poids</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {plannerData.progress.weightHistory.length > 0 ? (
                  <div className="space-y-2">
                    {plannerData.progress.weightHistory.slice(-5).map((entry, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span className="text-sm text-gray-600">{entry.date}</span>
                        <span className="font-semibold">{entry.weight} kg</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    Aucune donnée de poids enregistrée
                  </p>
                )}
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span>Évolution des notes</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {plannerData.progress.ratingHistory.length > 0 ? (
                  <div className="space-y-2">
                    {plannerData.progress.ratingHistory.slice(-5).map((entry, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span className="text-sm text-gray-600">{entry.date}</span>
                        <span className="font-semibold">{entry.rating}/10</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    Aucune auto-évaluation enregistrée
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}

export default GlowUpPlanner

