import React, { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { usePlannerData } from '../../hooks/usePlannerData'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Textarea } from '../../components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'
import { Alert, AlertDescription } from '../../components/ui/alert'
import { 
  Calendar, 
  CheckSquare, 
  Clock, 
  Star, 
  Users, 
  Heart, 
  MessageSquare, 
  TrendingUp,
  Save,
  Loader2,
  Lock,
  Crown
} from 'lucide-react'

const SemainierPlanner = () => {
  const { user, profile, getSubscriptionStatus, isPro, isPremium } = useAuth()
  const { data, loading, saving, error, updateSection, lastSaved } = usePlannerData('semainier')
  
  const subscriptionStatus = getSubscriptionStatus()
  const isFreemium = subscriptionStatus === 'freemium'

  // Sections disponibles selon l'abonnement
  const sections = [
    { 
      key: 'objectifs', 
      title: 'Objectifs de la semaine', 
      icon: Star, 
      color: 'text-yellow-600',
      available: true // Toujours disponible
    },
    { 
      key: 'todo', 
      title: 'To-do list hebdomadaire', 
      icon: CheckSquare, 
      color: 'text-green-600',
      available: true // Toujours disponible
    },
    { 
      key: 'gratitude', 
      title: 'Gratitude de la semaine', 
      icon: Heart, 
      color: 'text-pink-600',
      available: true // Toujours disponible
    },
    { 
      key: 'rendez_vous', 
      title: 'Mes rendez-vous', 
      icon: Calendar, 
      color: 'text-blue-600',
      available: !isFreemium // Pro/Premium uniquement
    },
    { 
      key: 'priorites', 
      title: 'Priorités de la semaine', 
      icon: TrendingUp, 
      color: 'text-purple-600',
      available: !isFreemium // Pro/Premium uniquement
    },
    { 
      key: 'contacts', 
      title: 'Personnes à contacter', 
      icon: Users, 
      color: 'text-indigo-600',
      available: !isFreemium // Pro/Premium uniquement
    },
    { 
      key: 'debrief', 
      title: 'Débrief hebdomadaire', 
      icon: MessageSquare, 
      color: 'text-orange-600',
      available: !isFreemium // Pro/Premium uniquement
    },
    { 
      key: 'ameliorations', 
      title: 'Domaines à améliorer', 
      icon: TrendingUp, 
      color: 'text-red-600',
      available: !isFreemium // Pro/Premium uniquement
    }
  ]

  const handleSectionUpdate = async (sectionKey, value) => {
    await updateSection(sectionKey, value)
  }

  const handleFieldUpdate = async (sectionKey, fieldKey, value) => {
    const currentSection = data[sectionKey] || {}
    const updatedSection = {
      ...currentSection,
      [fieldKey]: value
    }
    await updateSection(sectionKey, updatedSection)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-purple-600" />
          <p className="text-gray-600">Chargement de votre planner...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Planner Semainier
            </h1>
            <Badge 
              variant={isFreemium ? "secondary" : isPremium() ? "default" : "outline"}
              className="ml-3"
            >
              {isFreemium ? "Freemium" : isPremium() ? "Premium" : "Pro"}
            </Badge>
          </div>
          
          <p className="text-gray-600 mb-4">
            Organisez votre semaine avec précision et atteignez vos objectifs
          </p>

          {/* Statut de sauvegarde */}
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            {saving ? (
              <div className="flex items-center">
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Sauvegarde en cours...
              </div>
            ) : lastSaved ? (
              <div className="flex items-center">
                <Save className="h-4 w-4 mr-2 text-green-500" />
                Dernière sauvegarde : {lastSaved.toLocaleTimeString()}
              </div>
            ) : null}
          </div>

          {/* Message Freemium */}
          {isFreemium && (
            <Alert className="mt-4 border-orange-200 bg-orange-50">
              <Crown className="h-4 w-4 text-orange-600" />
              <AlertDescription className="text-orange-800">
                Version Freemium : 3 sections disponibles. 
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-orange-600 font-semibold"
                  onClick={() => window.location.href = '/abonnements'}
                >
                  Passer à Pro pour débloquer toutes les fonctionnalités !
                </Button>
              </AlertDescription>
            </Alert>
          )}
        </div>

        {/* Sections du planner */}
        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((section) => {
            const IconComponent = section.icon
            const sectionData = data[section.key] || {}

            if (!section.available) {
              return (
                <Card key={section.key} className="relative overflow-hidden border-gray-200 bg-gray-50">
                  <div className="absolute inset-0 bg-gray-100 bg-opacity-50 flex items-center justify-center z-10">
                    <div className="text-center">
                      <Lock className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500 font-medium">
                        {isPro() ? 'Premium uniquement' : 'Pro/Premium requis'}
                      </p>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="mt-2"
                        onClick={() => window.location.href = '/abonnements'}
                      >
                        Débloquer
                      </Button>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <IconComponent className={`h-5 w-5 mr-2 ${section.color}`} />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 opacity-30">
                      <Input placeholder="Contenu verrouillé..." disabled />
                      <Textarea placeholder="Contenu verrouillé..." disabled rows={3} />
                    </div>
                  </CardContent>
                </Card>
              )
            }

            return (
              <Card key={section.key} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <IconComponent className={`h-5 w-5 mr-2 ${section.color}`} />
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {section.key === 'objectifs' && (
                    <div className="space-y-3">
                      <Input
                        placeholder="Objectif principal de la semaine"
                        value={sectionData.principal || ''}
                        onChange={(e) => handleFieldUpdate('objectifs', 'principal', e.target.value)}
                        disabled={saving}
                      />
                      <Input
                        placeholder="Objectif secondaire"
                        value={sectionData.secondaire || ''}
                        onChange={(e) => handleFieldUpdate('objectifs', 'secondaire', e.target.value)}
                        disabled={saving}
                      />
                      <Input
                        placeholder="Objectif bonus"
                        value={sectionData.bonus || ''}
                        onChange={(e) => handleFieldUpdate('objectifs', 'bonus', e.target.value)}
                        disabled={saving}
                      />
                    </div>
                  )}

                  {section.key === 'todo' && (
                    <Textarea
                      placeholder="Listez vos tâches importantes pour cette semaine..."
                      value={sectionData.liste || ''}
                      onChange={(e) => handleFieldUpdate('todo', 'liste', e.target.value)}
                      rows={6}
                      disabled={saving}
                    />
                  )}

                  {section.key === 'gratitude' && (
                    <Textarea
                      placeholder="Pour quoi êtes-vous reconnaissant cette semaine ?"
                      value={sectionData.notes || ''}
                      onChange={(e) => handleFieldUpdate('gratitude', 'notes', e.target.value)}
                      rows={4}
                      disabled={saving}
                    />
                  )}

                  {section.key === 'rendez_vous' && (
                    <div className="space-y-3">
                      <Input
                        placeholder="Lundi - Rendez-vous"
                        value={sectionData.lundi || ''}
                        onChange={(e) => handleFieldUpdate('rendez_vous', 'lundi', e.target.value)}
                        disabled={saving}
                      />
                      <Input
                        placeholder="Mardi - Rendez-vous"
                        value={sectionData.mardi || ''}
                        onChange={(e) => handleFieldUpdate('rendez_vous', 'mardi', e.target.value)}
                        disabled={saving}
                      />
                      <Input
                        placeholder="Mercredi - Rendez-vous"
                        value={sectionData.mercredi || ''}
                        onChange={(e) => handleFieldUpdate('rendez_vous', 'mercredi', e.target.value)}
                        disabled={saving}
                      />
                      <Input
                        placeholder="Jeudi - Rendez-vous"
                        value={sectionData.jeudi || ''}
                        onChange={(e) => handleFieldUpdate('rendez_vous', 'jeudi', e.target.value)}
                        disabled={saving}
                      />
                      <Input
                        placeholder="Vendredi - Rendez-vous"
                        value={sectionData.vendredi || ''}
                        onChange={(e) => handleFieldUpdate('rendez_vous', 'vendredi', e.target.value)}
                        disabled={saving}
                      />
                    </div>
                  )}

                  {section.key === 'priorites' && (
                    <Textarea
                      placeholder="Quelles sont vos 3 priorités absolues cette semaine ?"
                      value={sectionData.liste || ''}
                      onChange={(e) => handleFieldUpdate('priorites', 'liste', e.target.value)}
                      rows={4}
                      disabled={saving}
                    />
                  )}

                  {section.key === 'contacts' && (
                    <Textarea
                      placeholder="Personnes importantes à contacter cette semaine..."
                      value={sectionData.liste || ''}
                      onChange={(e) => handleFieldUpdate('contacts', 'liste', e.target.value)}
                      rows={4}
                      disabled={saving}
                    />
                  )}

                  {section.key === 'debrief' && (
                    <div className="space-y-3">
                      <Textarea
                        placeholder="Qu'avez-vous accompli cette semaine ?"
                        value={sectionData.accomplissements || ''}
                        onChange={(e) => handleFieldUpdate('debrief', 'accomplissements', e.target.value)}
                        rows={3}
                        disabled={saving}
                      />
                      <Textarea
                        placeholder="Quels défis avez-vous rencontrés ?"
                        value={sectionData.defis || ''}
                        onChange={(e) => handleFieldUpdate('debrief', 'defis', e.target.value)}
                        rows={3}
                        disabled={saving}
                      />
                    </div>
                  )}

                  {section.key === 'ameliorations' && (
                    <Textarea
                      placeholder="Quels domaines souhaitez-vous améliorer la semaine prochaine ?"
                      value={sectionData.domaines || ''}
                      onChange={(e) => handleFieldUpdate('ameliorations', 'domaines', e.target.value)}
                      rows={4}
                      disabled={saving}
                    />
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Actions */}
        <div className="mt-8 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg"
              disabled={isFreemium}
              className={isFreemium ? 'opacity-50 cursor-not-allowed' : ''}
            >
              {isFreemium ? (
                <>
                  <Lock className="h-4 w-4 mr-2" />
                  Export PDF (Pro)
                </>
              ) : (
                'Exporter en PDF'
              )}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.location.href = '/planners'}
            >
              Voir tous les planners
            </Button>
          </div>

          {isFreemium && (
            <p className="text-sm text-gray-500 mt-4">
              Passez à Pro pour débloquer l'export PDF et toutes les sections !
            </p>
          )}
        </div>

        {/* Erreur */}
        {error && (
          <Alert className="mt-6 border-red-200 bg-red-50">
            <AlertDescription className="text-red-800">
              Erreur : {error}
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  )
}

export default SemainierPlanner

