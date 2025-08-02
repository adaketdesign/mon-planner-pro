import React, { useState, useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  MessageCircle,
  Send,
  X,
  Minimize2,
  Maximize2,
  Bot,
  User,
  Clock,
  ThumbsUp,
  ThumbsDown,
  ExternalLink,
  HelpCircle,
  Sparkles
} from 'lucide-react'

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showQuickActions, setShowQuickActions] = useState(true)
  const messagesEndRef = useRef(null)

  const quickActions = [
    { text: 'Comment créer un planner ?', category: 'getting-started' },
    { text: 'Différence entre les formules ?', category: 'billing' },
    { text: 'Problème de connexion', category: 'technical' },
    { text: 'Annuler mon abonnement', category: 'billing' },
    { text: 'Export PDF', category: 'planners' },
    { text: 'Contacter le support', category: 'support' }
  ]

  const botResponses = {
    'comment créer un planner': {
      text: 'Pour créer votre premier planner, suivez ces étapes simples :\n\n1. Connectez-vous à votre compte\n2. Cliquez sur "Planners" dans le menu\n3. Choisissez le type de planner (Semainier, Routine, GlowUp ou Projet)\n4. Suivez les instructions à l\'écran\n\nVoulez-vous que je vous guide vers un planner spécifique ?',
      actions: ['Planner Semainier', 'Routine Planner', 'Voir tous les planners']
    },
    'différence entre les formules': {
      text: 'Voici les différences entre nos formules :\n\n**Freemium** (Gratuit)\n• Accès aux fonctionnalités de base\n• Planner Semainier simplifié\n\n**Pro** (9,99€/mois)\n• Toutes les fonctionnalités avancées\n• Export PDF illimité\n• Support prioritaire\n\n**Premium** (19,99€/mois)\n• Tout de Pro +\n• GlowUp Planner exclusif\n• Statistiques avancées\n\nQuelle formule vous intéresse ?',
      actions: ['Voir les tarifs', 'Essai gratuit', 'Comparer les formules']
    },
    'problème de connexion': {
      text: 'Je peux vous aider avec les problèmes de connexion :\n\n1. Vérifiez votre connexion internet\n2. Videz le cache de votre navigateur\n3. Désactivez temporairement les extensions\n4. Essayez en navigation privée\n\nSi le problème persiste, notre équipe technique peut vous aider directement.',
      actions: ['Contacter le support technique', 'Voir plus de solutions']
    },
    'annuler mon abonnement': {
      text: 'Pour annuler votre abonnement :\n\n1. Allez dans "Mon compte"\n2. Cliquez sur "Abonnement"\n3. Sélectionnez "Annuler l\'abonnement"\n4. Confirmez votre choix\n\nL\'annulation prend effet à la fin de votre période de facturation. Vous gardez l\'accès jusqu\'à cette date.\n\nBesoin d\'aide pour cette démarche ?',
      actions: ['Aller à Mon compte', 'Contacter le support', 'Voir les conditions']
    },
    'export pdf': {
      text: 'L\'export PDF est disponible pour les abonnés Pro et Premium :\n\n1. Ouvrez votre planner\n2. Cliquez sur le bouton "Exporter"\n3. Choisissez le format PDF\n4. Téléchargez votre fichier\n\nSi vous êtes en Freemium, vous pouvez passer à Pro pour débloquer cette fonctionnalité.',
      actions: ['Passer à Pro', 'Voir un exemple PDF', 'Aide export']
    },
    'contacter le support': {
      text: 'Notre équipe support est là pour vous aider !\n\n📧 **Email** : contact@monplannerpro.com\n📞 **Téléphone** : 06 95 45 77 68\n⏰ **Horaires** : Lun-Ven 9h-18h\n\n⚡ **Temps de réponse moyen** : 2h\n\nComment préférez-vous nous contacter ?',
      actions: ['Envoyer un email', 'Appeler maintenant', 'Chat en direct']
    },
    default: {
      text: 'Je ne suis pas sûr de comprendre votre question. Voici quelques sujets sur lesquels je peux vous aider :\n\n• Création et utilisation des planners\n• Informations sur les abonnements\n• Problèmes techniques\n• Support et contact\n\nVous pouvez aussi reformuler votre question ou contacter directement notre équipe support.',
      actions: ['Reformuler', 'Contacter le support', 'Voir la FAQ']
    }
  }

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Message de bienvenue
      setMessages([{
        id: 1,
        type: 'bot',
        text: 'Bonjour ! 👋 Je suis l\'assistant virtuel de Mon Planner Pro. Comment puis-je vous aider aujourd\'hui ?',
        timestamp: new Date(),
        actions: ['Créer un planner', 'Voir les tarifs', 'Problème technique', 'Autre question']
      }])
    }
  }, [isOpen, messages.length])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const findBestResponse = (message) => {
    const lowerMessage = message.toLowerCase()
    
    // Recherche par mots-clés
    for (const [key, response] of Object.entries(botResponses)) {
      if (key !== 'default' && lowerMessage.includes(key)) {
        return response
      }
    }

    // Recherche par mots-clés alternatifs
    if (lowerMessage.includes('planner') || lowerMessage.includes('créer')) {
      return botResponses['comment créer un planner']
    }
    if (lowerMessage.includes('prix') || lowerMessage.includes('tarif') || lowerMessage.includes('abonnement')) {
      return botResponses['différence entre les formules']
    }
    if (lowerMessage.includes('connexion') || lowerMessage.includes('bug') || lowerMessage.includes('problème')) {
      return botResponses['problème de connexion']
    }
    if (lowerMessage.includes('pdf') || lowerMessage.includes('export') || lowerMessage.includes('télécharger')) {
      return botResponses['export pdf']
    }
    if (lowerMessage.includes('support') || lowerMessage.includes('aide') || lowerMessage.includes('contact')) {
      return botResponses['contacter le support']
    }

    return botResponses.default
  }

  const sendMessage = async (message, isQuickAction = false) => {
    if (!message.trim() && !isQuickAction) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: message,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setShowQuickActions(false)
    setIsTyping(true)

    // Simulation de délai de réponse
    setTimeout(() => {
      const response = findBestResponse(message)
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        text: response.text,
        timestamp: new Date(),
        actions: response.actions
      }

      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const handleQuickAction = (action) => {
    sendMessage(action, true)
  }

  const handleActionClick = (action) => {
    if (action === 'Contacter le support' || action === 'Envoyer un email') {
      window.location.href = '/contact'
    } else if (action === 'Voir les tarifs' || action === 'Passer à Pro') {
      window.location.href = '/abonnements'
    } else if (action === 'Voir la FAQ') {
      window.location.href = '/aide'
    } else {
      sendMessage(action, true)
    }
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString('fr-FR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    })
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
        </Button>
        
        {/* Notification badge */}
        <div className="absolute -top-2 -left-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">!</span>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-96 shadow-2xl border-0 transition-all duration-300 ${
        isMinimized ? 'h-16' : 'h-[600px]'
      }`}>
        {/* Header */}
        <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-t-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <CardTitle className="text-lg">Assistant Mon Planner Pro</CardTitle>
                <div className="flex items-center space-x-1 text-blue-100 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>En ligne</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/20 p-1"
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <>
            {/* Messages */}
            <CardContent className="flex-1 p-0 h-96 overflow-y-auto bg-gray-50">
              <div className="p-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md ${
                      message.type === 'user' 
                        ? 'bg-blue-500 text-white rounded-l-lg rounded-tr-lg' 
                        : 'bg-white text-gray-900 rounded-r-lg rounded-tl-lg shadow-md'
                    } p-3`}>
                      <div className="flex items-start space-x-2">
                        {message.type === 'bot' && (
                          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <Bot className="w-3 h-3 text-white" />
                          </div>
                        )}
                        <div className="flex-1">
                          <p className="text-sm whitespace-pre-line">{message.text}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className={`text-xs ${
                              message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                            }`}>
                              {formatTime(message.timestamp)}
                            </span>
                            {message.type === 'user' && (
                              <User className="w-3 h-3 text-blue-100" />
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      {message.actions && (
                        <div className="mt-3 space-y-2">
                          {message.actions.map((action, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              onClick={() => handleActionClick(action)}
                              className="w-full text-left justify-start text-xs bg-gray-50 hover:bg-gray-100 border-gray-200"
                            >
                              {action}
                              <ExternalLink className="w-3 h-3 ml-auto" />
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-900 rounded-r-lg rounded-tl-lg shadow-md p-3 max-w-xs">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                          <Bot className="w-3 h-3 text-white" />
                        </div>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </CardContent>

            {/* Quick Actions */}
            {showQuickActions && messages.length <= 1 && (
              <div className="p-4 bg-white border-t border-gray-200">
                <div className="mb-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Questions fréquentes</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {quickActions.slice(0, 4).map((action, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickAction(action.text)}
                        className="text-xs text-left justify-start h-auto py-2 px-3 whitespace-normal"
                      >
                        {action.text}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200 rounded-b-lg">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Tapez votre message..."
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage(inputMessage)}
                  className="flex-1"
                />
                <Button
                  onClick={() => sendMessage(inputMessage)}
                  disabled={!inputMessage.trim() || isTyping}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                <span>Propulsé par Mon Planner Pro</span>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>Réponse instantanée</span>
                </div>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  )
}

export default ChatBot

