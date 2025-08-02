import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { 
  Clock,
  Sun,
  Calendar,
  Target,
  CheckSquare,
  Utensils,
  Users,
  Heart,
  Lightbulb,
  Save,
  Download,
  Plus,
  X,
  ArrowLeft,
  ArrowRight
} from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'

const RoutinePlanner = () => {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('morning') // 'morning' or 'day'
  const [plannerData, setPlannerData] = useState({
    morning: {
      objectives: ['', '', ''],
      todoList: [{ id: 1, text: '', completed: false }],
      wellness: {
        skincare: ['', '', ''],
        wellbeing: ''
      },
      style: ''
    },
    day: {
      intention: '',
      priorities: ['', '', ''],
      nutrition: {
        breakfast: '',
        lunch: '',
        dinner: ''
      },
      appointments: [{ id: 1, time: '', title: '', location: '' }],
      contacts: [{ id: 1, name: '', reason: '', contacted: false }],
      debrief: '',
      gratitude: ['', '', ''],
      ideas: ['', '', '']
    }
  })
  const [isLoading, setIsLoading] = useState(false)
  const [lastSaved, setLastSaved] = useState(null)

  // Auto-save functionality
  useEffect(() => {
    const timer = setTimeout(() => {
      if (user) {
        saveData()
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [plannerData, user])

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

  const updateNestedField = (section, parent, field, value) => {
    setPlannerData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [parent]: {
          ...prev[section][parent],
          [field]: value
        }
      }
    }))
  }

  const updateArrayField = (section, field, index, value) => {
    setPlannerData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: prev[section][field].map((item, i) => i === index ? value : item)
      }
    }))
  }

  const addTodoItem = () => {
    const newId = Math.max(...plannerData.morning.todoList.map(item => item.id)) + 1
    setPlannerData(prev => ({
      ...prev,
      morning: {
        ...prev.morning,
        todoList: [...prev.morning.todoList, { id: newId, text: '', completed: false }]
      }
    }))
  }

  const removeTodoItem = (id) => {
    setPlannerData(prev => ({
      ...prev,
      morning: {
        ...prev.morning,
        todoList: prev.morning.todoList.filter(item => item.id !== id)
      }
    }))
  }

  const toggleTodoItem = (id) => {
    setPlannerData(prev => ({
      ...prev,
      morning: {
        ...prev.morning,
        todoList: prev.morning.todoList.map(item => 
          item.id === id ? { ...item, completed: !item.completed } : item
        )
      }
    }))
  }

  const addAppointment = () => {
    const newId = Math.max(...plannerData.day.appointments.map(item => item.id)) + 1
    setPlannerData(prev => ({
      ...prev,
      day: {
        ...prev.day,
        appointments: [...prev.day.appointments, { id: newId, time: '', title: '', location: '' }]
      }
    }))
  }

  const removeAppointment = (id) => {
    setPlannerData(prev => ({
      ...prev,
      day: {
        ...prev.day,
        appointments: prev.day.appointments.filter(item => item.id !== id)
      }
    }))
  }

  const updateAppointment = (id, field, value) => {
    setPlannerData(prev => ({
      ...prev,
      day: {
        ...prev.day,
        appointments: prev.day.appointments.map(item => 
          item.id === id ? { ...item, [field]: value } : item
        )
      }
    }))
  }

  const addContact = () => {
    const newId = Math.max(...plannerData.day.contacts.map(item => item.id)) + 1
    setPlannerData(prev => ({
      ...prev,
      day: {
        ...prev.day,
        contacts: [...prev.day.contacts, { id: newId, name: '', reason: '', contacted: false }]
      }
    }))
  }

  const removeContact = (id) => {
    setPlannerData(prev => ({
      ...prev,
      day: {
        ...prev.day,
        contacts: prev.day.contacts.filter(item => item.id !== id)
      }
    }))
  }

  const updateContact = (id, field, value) => {
    setPlannerData(prev => ({
      ...prev,
      day: {
        ...prev.day,
        contacts: prev.day.contacts.map(item => 
          item.id === id ? { ...item, [field]: value } : item
        )
      }
    }))
  }

  const exportToPDF = () => {
    // PDF export functionality - to be implemented
    alert('Fonctionnalité d\'export PDF en cours de développement')
  }

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('fr-FR', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-purple-500 rounded-xl">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Routine Planner</h1>
                <p className="text-gray-600">{getCurrentDate()}</p>
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
              <Button onClick={saveData} disabled={isLoading} className="bg-purple-500 hover:bg-purple-600">
                <Save className="w-4 h-4 mr-2" />
                {isLoading ? 'Sauvegarde...' : 'Sauvegarder'}
              </Button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-4 mb-6">
            <Button
              onClick={() => setActiveTab('morning')}
              variant={activeTab === 'morning' ? 'default' : 'outline'}
              className={`flex items-center space-x-2 ${
                activeTab === 'morning' 
                  ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                  : 'border-orange-500 text-orange-600 hover:bg-orange-50'
              }`}
            >
              <Sun className="w-4 h-4" />
              <span>Routine Matinale</span>
            </Button>
            <Button
              onClick={() => setActiveTab('day')}
              variant={activeTab === 'day' ? 'default' : 'outline'}
              className={`flex items-center space-x-2 ${
                activeTab === 'day' 
                  ? 'bg-purple-500 hover:bg-purple-600 text-white' 
                  : 'border-purple-500 text-purple-600 hover:bg-purple-50'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Planifier sa Journée</span>
            </Button>
          </div>
        </div>

        {/* Morning Routine Tab */}
        {activeTab === 'morning' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Objectifs du matin */}
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5" />
                  <span>Objectifs du matin</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {plannerData.morning.objectives.map((objective, index) => (
                    <div key={index}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Objectif {index + 1}
                      </label>
                      <Input
                        value={objective}
                        onChange={(e) => updateArrayField('morning', 'objectives', index, e.target.value)}
                        placeholder={`Objectif matinal ${index + 1}...`}
                        className="w-full"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* To-do list matinale */}
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <CheckSquare className="w-5 h-5" />
                  <span>To-do list matinale</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  {plannerData.morning.todoList.map((todo) => (
                    <div key={todo.id} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodoItem(todo.id)}
                        className="w-4 h-4 text-pink-600 rounded focus:ring-pink-500"
                      />
                      <Input
                        value={todo.text}
                        onChange={(e) => updateArrayField('morning', 'todoList', plannerData.morning.todoList.findIndex(item => item.id === todo.id), { ...todo, text: e.target.value })}
                        placeholder="Nouvelle tâche matinale..."
                        className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}
                      />
                      <Button
                        onClick={() => removeTodoItem(todo.id)}
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    onClick={addTodoItem}
                    variant="outline"
                    className="w-full mt-3 border-dashed"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Ajouter une tâche
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Bien-être / Skincare */}
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Bien-être / Skincare</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Routine skincare
                    </label>
                    {plannerData.morning.wellness.skincare.map((step, index) => (
                      <Input
                        key={index}
                        value={step}
                        onChange={(e) => updateArrayField('morning', 'wellness', index, { ...plannerData.morning.wellness, skincare: plannerData.morning.wellness.skincare.map((s, i) => i === index ? e.target.value : s) })}
                        placeholder={`Étape ${index + 1} skincare...`}
                        className="w-full mb-2"
                      />
                    ))}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bien-être général
                    </label>
                    <Textarea
                      value={plannerData.morning.wellness.wellbeing}
                      onChange={(e) => updateNestedField('morning', 'wellness', 'wellbeing', e.target.value)}
                      placeholder="Méditation, exercices, affirmations positives..."
                      className="w-full h-24 resize-none"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Style du jour */}
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-lg">👗</span>
                  <span>Style du jour</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Textarea
                  value={plannerData.morning.style}
                  onChange={(e) => updateField('morning', 'style', e.target.value)}
                  placeholder="Décrivez votre tenue et style du jour..."
                  className="w-full h-32 resize-none"
                />
              </CardContent>
            </Card>
          </div>
        )}

        {/* Day Planning Tab */}
        {activeTab === 'day' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Intention du jour */}
            <Card className="shadow-lg lg:col-span-2">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <Lightbulb className="w-5 h-5" />
                  <span>Intention du jour</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Textarea
                  value={plannerData.day.intention}
                  onChange={(e) => updateField('day', 'intention', e.target.value)}
                  placeholder="Quelle est votre intention principale pour cette journée ?"
                  className="w-full h-24 resize-none"
                />
              </CardContent>
            </Card>

            {/* Top priorités */}
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5" />
                  <span>Top priorités</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {plannerData.day.priorities.map((priority, index) => (
                    <div key={index}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Priorité {index + 1}
                      </label>
                      <Input
                        value={priority}
                        onChange={(e) => updateArrayField('day', 'priorities', index, e.target.value)}
                        placeholder={`Priorité ${index + 1}...`}
                        className="w-full"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Programme nutritionnel */}
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <Utensils className="w-5 h-5" />
                  <span>Programme nutritionnel</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Petit-déjeuner
                    </label>
                    <Input
                      value={plannerData.day.nutrition.breakfast}
                      onChange={(e) => updateNestedField('day', 'nutrition', 'breakfast', e.target.value)}
                      placeholder="Votre petit-déjeuner..."
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Déjeuner
                    </label>
                    <Input
                      value={plannerData.day.nutrition.lunch}
                      onChange={(e) => updateNestedField('day', 'nutrition', 'lunch', e.target.value)}
                      placeholder="Votre déjeuner..."
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dîner
                    </label>
                    <Input
                      value={plannerData.day.nutrition.dinner}
                      onChange={(e) => updateNestedField('day', 'nutrition', 'dinner', e.target.value)}
                      placeholder="Votre dîner..."
                      className="w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rendez-vous du jour */}
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Rendez-vous du jour</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {plannerData.day.appointments.map((appointment) => (
                    <div key={appointment.id} className="border rounded-lg p-4 bg-gray-50">
                      <div className="grid grid-cols-1 gap-3 mb-3">
                        <Input
                          type="time"
                          value={appointment.time}
                          onChange={(e) => updateAppointment(appointment.id, 'time', e.target.value)}
                          className="w-full"
                        />
                        <Input
                          value={appointment.title}
                          onChange={(e) => updateAppointment(appointment.id, 'title', e.target.value)}
                          placeholder="Titre du rendez-vous..."
                          className="w-full"
                        />
                        <Input
                          value={appointment.location}
                          onChange={(e) => updateAppointment(appointment.id, 'location', e.target.value)}
                          placeholder="Lieu..."
                          className="w-full"
                        />
                      </div>
                      <div className="flex justify-end">
                        <Button
                          onClick={() => removeAppointment(appointment.id)}
                          variant="ghost"
                          size="sm"
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button
                    onClick={addAppointment}
                    variant="outline"
                    className="w-full border-dashed"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Ajouter un rendez-vous
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Personnes à contacter */}
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>Personnes à contacter</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {plannerData.day.contacts.map((contact) => (
                    <div key={contact.id} className="border rounded-lg p-4 bg-gray-50">
                      <div className="grid grid-cols-1 gap-3 mb-3">
                        <Input
                          value={contact.name}
                          onChange={(e) => updateContact(contact.id, 'name', e.target.value)}
                          placeholder="Nom de la personne..."
                          className="w-full"
                        />
                        <Input
                          value={contact.reason}
                          onChange={(e) => updateContact(contact.id, 'reason', e.target.value)}
                          placeholder="Raison du contact..."
                          className="w-full"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={contact.contacted}
                            onChange={(e) => updateContact(contact.id, 'contacted', e.target.checked)}
                            className="w-4 h-4 text-teal-600 rounded focus:ring-teal-500"
                          />
                          <span className="text-sm text-gray-700">Contacté</span>
                        </label>
                        <Button
                          onClick={() => removeContact(contact.id)}
                          variant="ghost"
                          size="sm"
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button
                    onClick={addContact}
                    variant="outline"
                    className="w-full border-dashed"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Ajouter un contact
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Débrief + Gratitude */}
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Débrief + Gratitude</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Débrief de la journée
                    </label>
                    <Textarea
                      value={plannerData.day.debrief}
                      onChange={(e) => updateField('day', 'debrief', e.target.value)}
                      placeholder="Comment s'est passée votre journée ?"
                      className="w-full h-24 resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gratitude
                    </label>
                    {plannerData.day.gratitude.map((item, index) => (
                      <Input
                        key={index}
                        value={item}
                        onChange={(e) => updateArrayField('day', 'gratitude', index, e.target.value)}
                        placeholder={`Gratitude ${index + 1}...`}
                        className="w-full mb-2"
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nouvelles idées inspirantes */}
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <Lightbulb className="w-5 h-5" />
                  <span>Nouvelles idées inspirantes</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {plannerData.day.ideas.map((idea, index) => (
                    <div key={index}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Idée {index + 1}
                      </label>
                      <Textarea
                        value={idea}
                        onChange={(e) => updateArrayField('day', 'ideas', index, e.target.value)}
                        placeholder={`Nouvelle idée inspirante ${index + 1}...`}
                        className="w-full h-20 resize-none"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}

export default RoutinePlanner

