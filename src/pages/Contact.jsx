import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  HeadphonesIcon,
  Users,
  Building,
  Globe,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    category: 'general'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@monplannerpro.com',
      description: 'Réponse sous 24h',
      color: 'from-blue-500 to-indigo-600',
      href: 'mailto:contact@monplannerpro.com'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '06 95 45 77 68',
      description: 'Lun-Ven 9h-18h',
      color: 'from-green-500 to-emerald-600',
      href: 'tel:+33695457768'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: 'Paris, France',
      description: 'Siège social',
      color: 'from-purple-500 to-pink-600',
      href: '#'
    },
    {
      icon: Clock,
      title: 'Horaires',
      value: '9h - 18h',
      description: 'Du lundi au vendredi',
      color: 'from-orange-500 to-red-600',
      href: '#'
    }
  ]

  const categories = [
    { value: 'general', label: 'Question générale', icon: MessageCircle },
    { value: 'support', label: 'Support technique', icon: HeadphonesIcon },
    { value: 'billing', label: 'Facturation', icon: Building },
    { value: 'partnership', label: 'Partenariat', icon: Users },
    { value: 'press', label: 'Presse', icon: Globe }
  ]

  const faqs = [
    {
      question: 'Comment puis-je annuler mon abonnement ?',
      answer: 'Vous pouvez annuler votre abonnement à tout moment depuis votre espace personnel.'
    },
    {
      question: 'Mes données sont-elles sécurisées ?',
      answer: 'Oui, nous utilisons un chiffrement de niveau bancaire pour protéger vos données.'
    },
    {
      question: 'Puis-je utiliser Mon Planner Pro hors ligne ?',
      answer: 'Certaines fonctionnalités sont disponibles hors ligne, la synchronisation se fait automatiquement.'
    },
    {
      question: 'Y a-t-il une version mobile ?',
      answer: 'Mon Planner Pro est entièrement responsive et fonctionne parfaitement sur mobile.'
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        category: 'general'
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
              CONTACTEZ-NOUS
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">Une question ? </span>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Parlons-en !
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Notre équipe est là pour vous accompagner. N'hésitez pas à nous contacter 
              pour toute question ou suggestion.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <a href={info.href} className="block">
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {info.title}
                    </h3>
                    
                    <div className="text-gray-900 font-semibold mb-1">
                      {info.value}
                    </div>
                    
                    <div className="text-sm text-gray-600">
                      {info.description}
                    </div>
                  </CardContent>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center">
                  <Send className="w-6 h-6 mr-3" />
                  Envoyez-nous un message
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Message envoyé !
                    </h3>
                    <p className="text-gray-600">
                      Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Category Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Catégorie de votre demande
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {categories.map((category) => (
                          <label key={category.value} className="relative">
                            <input
                              type="radio"
                              name="category"
                              value={category.value}
                              checked={formData.category === category.value}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <div className={`p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                              formData.category === category.value
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}>
                              <div className="flex items-center space-x-2">
                                <category.icon className={`w-4 h-4 ${
                                  formData.category === category.value ? 'text-blue-600' : 'text-gray-500'
                                }`} />
                                <span className={`text-sm font-medium ${
                                  formData.category === category.value ? 'text-blue-900' : 'text-gray-700'
                                }`}>
                                  {category.label}
                                </span>
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Prénom *
                        </label>
                        <Input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Votre prénom"
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nom *
                        </label>
                        <Input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Votre nom"
                          required
                          className="w-full"
                        />
                      </div>
                    </div>

                    {/* Contact Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="votre@email.com"
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Téléphone
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="06 12 34 56 78"
                          className="w-full"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Sujet *
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Objet de votre message"
                        required
                        className="w-full"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Décrivez votre demande en détail..."
                        required
                        className="w-full h-32 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-3 text-lg font-semibold"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          Envoyer le message
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      * Champs obligatoires
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <div className="space-y-8">
              <Card className="border-0 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl flex items-center">
                    <MessageCircle className="w-6 h-6 mr-3" />
                    Questions fréquentes
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="text-center">
                      <p className="text-gray-600 mb-4">
                        Vous ne trouvez pas la réponse à votre question ?
                      </p>
                      <Button 
                        variant="outline"
                        className="border-purple-500 text-purple-600 hover:bg-purple-50"
                      >
                        Consulter le centre d'aide
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support Hours */}
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <HeadphonesIcon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Support client
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      Notre équipe support est disponible pour vous aider du lundi au vendredi.
                    </p>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-2">Horaires d'ouverture</div>
                      <div className="font-semibold text-gray-900">
                        Lundi - Vendredi : 9h00 - 18h00
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        Temps de réponse moyen : 2h
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

