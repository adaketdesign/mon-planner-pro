import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Crown, 
  Star, 
  Zap, 
  Lock, 
  ArrowRight,
  Sparkles
} from 'lucide-react'
import { useSubscription } from '@/contexts/SubscriptionContext'

const UpgradePrompt = ({ plannerType, className = '' }) => {
  const { getCurrentPlan, getRestrictionMessage, upgradePlan } = useSubscription()
  
  const currentPlan = getCurrentPlan()
  const restriction = getRestrictionMessage(plannerType)
  
  if (!restriction) return null

  const handleUpgrade = async () => {
    const targetPlan = currentPlan.id === 'freemium' ? 'pro' : 'premium'
    const result = await upgradePlan(targetPlan)
    
    if (result.success) {
      // Redirection ou notification de succès
      window.location.reload()
    } else {
      // Gestion d'erreur
      alert('Erreur lors de la mise à niveau: ' + result.error)
    }
  }

  const getUpgradeIcon = () => {
    if (currentPlan.id === 'freemium') {
      return <Star className="w-6 h-6 text-blue-600" />
    }
    return <Crown className="w-6 h-6 text-purple-600" />
  }

  const getUpgradeColor = () => {
    if (currentPlan.id === 'freemium') {
      return {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-900',
        button: 'bg-blue-600 hover:bg-blue-700'
      }
    }
    return {
      bg: 'bg-purple-50',
      border: 'border-purple-200', 
      text: 'text-purple-900',
      button: 'bg-purple-600 hover:bg-purple-700'
    }
  }

  const colors = getUpgradeColor()

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 ${className}`}>
      <Card className={`max-w-md w-full ${colors.border} shadow-2xl`}>
        <CardHeader className={`${colors.bg} text-center pb-6`}>
          <div className="flex justify-center mb-4">
            <div className={`p-3 rounded-full ${colors.bg} border ${colors.border}`}>
              {getUpgradeIcon()}
            </div>
          </div>
          
          <CardTitle className={`text-2xl ${colors.text} mb-2`}>
            {restriction.title}
          </CardTitle>
          
          <Badge className={`${colors.bg} ${colors.text} border ${colors.border}`}>
            Plan actuel: {currentPlan.name}
          </Badge>
        </CardHeader>

        <CardContent className="p-6">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-4">
              <Lock className="w-8 h-8 text-gray-400" />
            </div>
            
            <p className="text-gray-600 mb-4">
              {restriction.message}
            </p>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">
                Ce que vous débloquez :
              </h4>
              
              <ul className="text-sm text-gray-600 space-y-1">
                {plannerType === 'routine' && (
                  <>
                    <li>• Routine Matinale complète</li>
                    <li>• Planification de journée avancée</li>
                    <li>• Sauvegarde automatique</li>
                    <li>• Export PDF illimité</li>
                  </>
                )}
                
                {plannerType === 'glowup' && (
                  <>
                    <li>• GlowUp Planner complet</li>
                    <li>• Bilans mensuels interactifs</li>
                    <li>• Statistiques de progression</li>
                    <li>• Suivi de transformation</li>
                  </>
                )}
                
                {plannerType === 'projet' && (
                  <>
                    <li>• Projet Planner 9 pages</li>
                    <li>• Étude de marché complète</li>
                    <li>• Plan de financement</li>
                    <li>• Suivi de progression</li>
                  </>
                )}
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <Button 
              onClick={handleUpgrade}
              className={`w-full ${colors.button} text-white font-medium py-3`}
            >
              {restriction.upgradeText}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.history.back()}
            >
              Retour
            </Button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              ✓ Aucun engagement • ✓ Annulation à tout moment • ✓ 30 jours satisfait ou remboursé
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default UpgradePrompt

