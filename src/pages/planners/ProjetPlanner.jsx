import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { 
  Briefcase,
  Lightbulb,
  Target,
  Package,
  TrendingUp,
  CheckSquare,
  DollarSign,
  FileText,
  Palette,
  Save,
  Download,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Users,
  Calendar,
  Plus,
  X
} from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'

const ProjetPlanner = () => {
  const { user } = useAuth()
  const [currentPage, setCurrentPage] = useState(1)
  const [plannerData, setPlannerData] = useState({
    page1: {
      projectIdea: '',
      projectName: '',
      slogans: ['', '', '']
    },
    page2: {
      objectives: '',
      mission: '',
      vision: ''
    },
    page3: {
      offers: '',
      values: ''
    },
    page4: {
      marketStudy: '',
      competition: '',
      proMeetings: [{ id: 1, contact: '', date: '', notes: '' }]
    },
    page5: {
      checklist: [
        { id: 1, task: '', deadline: '', completed: false },
        { id: 2, task: '', deadline: '', completed: false },
        { id: 3, task: '', deadline: '', completed: false }
      ]
    },
    page6: {
      fundingSources: [{ id: 1, source: '', amount: '', status: 'pending' }],
      expenses: [{ id: 1, item: '', amount: '', status: 'pending' }],
      totalBudget: ''
    },
    page7: {
      importantNotes: ''
    },
    page8: {
      newIdeas: ['', '', '']
    },
    page9: {
      inspiration: '',
      drawing: ''
    }
  })
  const [isLoading, setIsLoading] = useState(false)
  const [lastSaved, setLastSaved] = useState(null)

  const pages = [
    { id: 1, title: 'Idée & Nom', icon: Lightbulb, color: 'from-yellow-500 to-orange-600' },
    { id: 2, title: 'Objectifs & Vision', icon: Target, color: 'from-blue-500 to-indigo-600' },
    { id: 3, title: 'Offres & Valeurs', icon: Package, color: 'from-green-500 to-emerald-600' },
    { id: 4, title: 'Étude de Marché', icon: TrendingUp, color: 'from-purple-500 to-pink-600' },
    { id: 5, title: 'Checklist', icon: CheckSquare, color: 'from-red-500 to-rose-600' },
    { id: 6, title: 'Financement', icon: DollarSign, color: 'from-teal-500 to-cyan-600' },
    { id: 7, title: 'Notes Importantes', icon: FileText, color: 'from-gray-500 to-slate-600' },
    { id: 8, title: 'Nouvelles Idées', icon: Lightbulb, color: 'from-amber-500 to-yellow-600' },
    { id: 9, title: 'Inspiration', icon: Palette, color: 'from-pink-500 to-purple-600' }
  ]

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

  const updateField = (page, field, value) => {
    setPlannerData(prev => ({
      ...prev,
      [page]: {
        ...prev[page],
        [field]: value
      }
    }))
  }

  const updateArrayField = (page, field, index, value) => {
    setPlannerData(prev => ({
      ...prev,
      [page]: {
        ...prev[page],
        [field]: prev[page][field].map((item, i) => i === index ? value : item)
      }
    }))
  }

  const addArrayItem = (page, field, newItem) => {
    setPlannerData(prev => ({
      ...prev,
      [page]: {
        ...prev[page],
        [field]: [...prev[page][field], newItem]
      }
    }))
  }

  const removeArrayItem = (page, field, id) => {
    setPlannerData(prev => ({
      ...prev,
      [page]: {
        ...prev[page],
        [field]: prev[page][field].filter(item => item.id !== id)
      }
    }))
  }

  const updateObjectInArray = (page, field, id, updates) => {
    setPlannerData(prev => ({
      ...prev,
      [page]: {
        ...prev[page],
        [field]: prev[page][field].map(item => 
          item.id === id ? { ...item, ...updates } : item
        )
      }
    }))
  }

  const exportToPDF = () => {
    // PDF export functionality - to be implemented
    alert('Fonctionnalité d\'export PDF en cours de développement')
  }

  const getCompletionPercentage = () => {
    let totalFields = 0
    let completedFields = 0

    Object.values(plannerData).forEach(pageData => {
      Object.values(pageData).forEach(value => {
        if (Array.isArray(value)) {
          value.forEach(item => {
            if (typeof item === 'string') {
              totalFields++
              if (item.trim()) completedFields++
            } else if (typeof item === 'object') {
              Object.values(item).forEach(subValue => {
                if (typeof subValue === 'string') {
                  totalFields++
                  if (subValue.trim()) completedFields++
                } else if (typeof subValue === 'boolean') {
                  totalFields++
                  if (subValue) completedFields++
                }
              })
            }
          })
        } else if (typeof value === 'string') {
          totalFields++
          if (value.trim()) completedFields++
        }
      })
    })

    return Math.round((completedFields / totalFields) * 100) || 0
  }

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('fr-FR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const currentPageData = pages.find(p => p.id === currentPage)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Projet Planner</h1>
                <p className="text-gray-600">{getCurrentDate()}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${getCompletionPercentage()}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">{getCompletionPercentage()}% complété</span>
                </div>
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
              <Button onClick={saveData} disabled={isLoading} className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
                <Save className="w-4 h-4 mr-2" />
                {isLoading ? 'Sauvegarde...' : 'Sauvegarder'}
              </Button>
            </div>
          </div>

          {/* Page Navigation */}
          <div className="flex items-center justify-between mb-6">
            <Button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Précédent</span>
            </Button>

            <div className="flex items-center space-x-2">
              <div className={`p-2 bg-gradient-to-r ${currentPageData.color} rounded-lg`}>
                <currentPageData.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Page {currentPage}/9 - {currentPageData.title}
                </h2>
              </div>
            </div>

            <Button
              onClick={() => setCurrentPage(Math.min(9, currentPage + 1))}
              disabled={currentPage === 9}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <span>Suivant</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Page Indicators */}
          <div className="flex justify-center space-x-2 mb-8">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => setCurrentPage(page.id)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  page.id === currentPage
                    ? 'bg-blue-500 scale-125'
                    : page.id < currentPage
                    ? 'bg-green-500'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Page Content */}
        <div className="max-w-4xl mx-auto">
          {/* Page 1: Idée & Nom */}
          {currentPage === 1 && (
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardHeader className={`bg-gradient-to-r ${currentPageData.color} text-white rounded-t-lg`}>
                  <CardTitle>Idée du projet</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <Textarea
                    value={plannerData.page1.projectIdea}
                    onChange={(e) => updateField('page1', 'projectIdea', e.target.value)}
                    placeholder="Décrivez votre idée de projet en détail..."
                    className="w-full h-32 resize-none"
                  />
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className={`bg-gradient-to-r ${currentPageData.color} text-white rounded-t-lg`}>
                  <CardTitle>Nom du projet</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <Input
                    value={plannerData.page1.projectName}
                    onChange={(e) => updateField('page1', 'projectName', e.target.value)}
                    placeholder="Nom de votre projet..."
                    className="w-full text-lg"
                  />
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className={`bg-gradient-to-r ${currentPageData.color} text-white rounded-t-lg`}>
                  <CardTitle>Slogans</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {plannerData.page1.slogans.map((slogan, index) => (
                      <div key={index}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Slogan {index + 1}
                        </label>
                        <Input
                          value={slogan}
                          onChange={(e) => updateArrayField('page1', 'slogans', index, e.target.value)}
                          placeholder={`Slogan ${index + 1}...`}
                          className="w-full"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Page 2: Objectifs & Vision */}
          {currentPage === 2 && (
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardHeader className={`bg-gradient-to-r ${currentPageData.color} text-white rounded-t-lg`}>
                  <CardTitle>Objectifs</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <Textarea
                    value={plannerData.page2.objectives}
                    onChange={(e) => updateField('page2', 'objectives', e.target.value)}
                    placeholder="Quels sont vos objectifs principaux ?"
                    className="w-full h-32 resize-none"
                  />
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className={`bg-gradient-to-r ${currentPageData.color} text-white rounded-t-lg`}>
                  <CardTitle>Mission</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <Textarea
                    value={plannerData.page2.mission}
                    onChange={(e) => updateField('page2', 'mission', e.target.value)}
                    placeholder="Quelle est la mission de votre projet ?"
                    className="w-full h-32 resize-none"
                  />
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className={`bg-gradient-to-r ${currentPageData.color} text-white rounded-t-lg`}>
                  <CardTitle>Vision</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <Textarea
                    value={plannerData.page2.vision}
                    onChange={(e) => updateField('page2', 'vision', e.target.value)}
                    placeholder="Quelle est votre vision à long terme ?"
                    className="w-full h-32 resize-none"
                  />
                </CardContent>
              </Card>
            </div>
          )}

          {/* Page 3: Offres & Valeurs */}
          {currentPage === 3 && (
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardHeader className={`bg-gradient-to-r ${currentPageData.color} text-white rounded-t-lg`}>
                  <CardTitle>Description des offres</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <Textarea
                    value={plannerData.page3.offers}
                    onChange={(e) => updateField('page3', 'offers', e.target.value)}
                    placeholder="Décrivez vos produits ou services..."
                    className="w-full h-40 resize-none"
                  />
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className={`bg-gradient-to-r ${currentPageData.color} text-white rounded-t-lg`}>
                  <CardTitle>Valeurs</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <Textarea
                    value={plannerData.page3.values}
                    onChange={(e) => updateField('page3', 'values', e.target.value)}
                    placeholder="Quelles sont les valeurs de votre projet ?"
                    className="w-full h-40 resize-none"
                  />
                </CardContent>
              </Card>
            </div>
          )}

          {/* Page 4: Étude de Marché */}
          {currentPage === 4 && (
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardHeader className={`bg-gradient-to-r ${currentPageData.color} text-white rounded-t-lg`}>
                  <CardTitle>Étude de marché</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <Textarea
                    value={plannerData.page4.marketStudy}
                    onChange={(e) => updateField('page4', 'marketStudy', e.target.value)}
                    placeholder="Analyse du marché, cible, tendances..."
                    className="w-full h-32 resize-none"
                  />
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className={`bg-gradient-to-r ${currentPageData.color} text-white rounded-t-lg`}>
                  <CardTitle>Concurrence</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <Textarea
                    value={plannerData.page4.competition}
                    onChange={(e) => updateField('page4', 'competition', e.target.value)}
                    placeholder="Analyse de la concurrence..."
                    className="w-full h-32 resize-none"
                  />
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className={`bg-gradient-to-r ${currentPageData.color} text-white rounded-t-lg`}>
                  <CardTitle>Rendez-vous professionnels</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {plannerData.page4.proMeetings.map((meeting) => (
                      <div key={meeting.id} className="border rounded-lg p-4 bg-gray-50">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <Input
                            value={meeting.contact}
                            onChange={(e) => updateObjectInArray('page4', 'proMeetings', meeting.id, { contact: e.target.value })}
                            placeholder="Contact..."
                          />
                          <Input
                            type="date"
                            value={meeting.date}
                            onChange={(e) => updateObjectInArray('page4', 'proMeetings', meeting.id, { date: e.target.value })}
                          />
                          <div className="flex items-center space-x-2">
                            <Input
                              value={meeting.notes}
                              onChange={(e) => updateObjectInArray('page4', 'proMeetings', meeting.id, { notes: e.target.value })}
                              placeholder="Notes..."
                              className="flex-1"
                            />
                            <Button
                              onClick={() => removeArrayItem('page4', 'proMeetings', meeting.id)}
                              variant="ghost"
                              size="sm"
                              className="text-red-500"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <Button
                      onClick={() => {
                        const newId = Math.max(...plannerData.page4.proMeetings.map(m => m.id)) + 1
                        addArrayItem('page4', 'proMeetings', { id: newId, contact: '', date: '', notes: '' })
                      }}
                      variant="outline"
                      className="w-full border-dashed"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Ajouter un rendez-vous
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Page 5: Checklist */}
          {currentPage === 5 && (
            <Card className="shadow-lg">
              <CardHeader className={`bg-gradient-to-r ${currentPageData.color} text-white rounded-t-lg`}>
                <CardTitle>Checklist à échéances</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {plannerData.page5.checklist.map((item) => (
                    <div key={item.id} className="border rounded-lg p-4 bg-gray-50">
                      <div className="flex items-center space-x-4">
                        <input
                          type="checkbox"
                          checked={item.completed}
                          onChange={(e) => updateObjectInArray('page5', 'checklist', item.id, { completed: e.target.checked })}
                          className="w-5 h-5 text-red-600 rounded focus:ring-red-500"
                        />
                        <Input
                          value={item.task}
                          onChange={(e) => updateObjectInArray('page5', 'checklist', item.id, { task: e.target.value })}
                          placeholder="Tâche..."
                          className="flex-1"
                        />
                        <Input
                          type="date"
                          value={item.deadline}
                          onChange={(e) => updateObjectInArray('page5', 'checklist', item.id, { deadline: e.target.value })}
                          className="w-40"
                        />
                        <Button
                          onClick={() => removeArrayItem('page5', 'checklist', item.id)}
                          variant="ghost"
                          size="sm"
                          className="text-red-500"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button
                    onClick={() => {
                      const newId = Math.max(...plannerData.page5.checklist.map(c => c.id)) + 1
                      addArrayItem('page5', 'checklist', { id: newId, task: '', deadline: '', completed: false })
                    }}
                    variant="outline"
                    className="w-full border-dashed"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Ajouter une tâche
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Page 6: Financement */}
          {currentPage === 6 && (
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardHeader className={`bg-gradient-to-r ${currentPageData.color} text-white rounded-t-lg`}>
                  <CardTitle>Sources de financement</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {plannerData.page6.fundingSources.map((source) => (
                      <div key={source.id} className="border rounded-lg p-4 bg-gray-50">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                          <Input
                            value={source.source}
                            onChange={(e) => updateObjectInArray('page6', 'fundingSources', source.id, { source: e.target.value })}
                            placeholder="Source..."
                          />
                          <Input
                            type="number"
                            value={source.amount}
                            onChange={(e) => updateObjectInArray('page6', 'fundingSources', source.id, { amount: e.target.value })}
                            placeholder="Montant..."
                          />
                          <select
                            value={source.status}
                            onChange={(e) => updateObjectInArray('page6', 'fundingSources', source.id, { status: e.target.value })}
                            className="px-3 py-2 border border-gray-300 rounded-md"
                          >
                            <option value="pending">En attente</option>
                            <option value="confirmed">Confirmé</option>
                            <option value="rejected">Refusé</option>
                          </select>
                          <Button
                            onClick={() => removeArrayItem('page6', 'fundingSources', source.id)}
                            variant="ghost"
                            size="sm"
                            className="text-red-500"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                    <Button
                      onClick={() => {
                        const newId = Math.max(...plannerData.page6.fundingSources.map(s => s.id)) + 1
                        addArrayItem('page6', 'fundingSources', { id: newId, source: '', amount: '', status: 'pending' })
                      }}
                      variant="outline"
                      className="w-full border-dashed"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Ajouter une source
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className={`bg-gradient-to-r ${currentPageData.color} text-white rounded-t-lg`}>
                  <CardTitle>Dépenses prévues</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {plannerData.page6.expenses.map((expense) => (
                      <div key={expense.id} className="border rounded-lg p-4 bg-gray-50">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                          <Input
                            value={expense.item}
                            onChange={(e) => updateObjectInArray('page6', 'expenses', expense.id, { item: e.target.value })}
                            placeholder="Dépense..."
                          />
                          <Input
                            type="number"
                            value={expense.amount}
                            onChange={(e) => updateObjectInArray('page6', 'expenses', expense.id, { amount: e.target.value })}
                            placeholder="Montant..."
                          />
                          <select
                            value={expense.status}
                            onChange={(e) => updateObjectInArray('page6', 'expenses', expense.id, { status: e.target.value })}
                            className="px-3 py-2 border border-gray-300 rounded-md"
                          >
                            <option value="pending">Prévu</option>
                            <option value="done">Fait</option>
                          </select>
                          <Button
                            onClick={() => removeArrayItem('page6', 'expenses', expense.id)}
                            variant="ghost"
                            size="sm"
                            className="text-red-500"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                    <Button
                      onClick={() => {
                        const newId = Math.max(...plannerData.page6.expenses.map(e => e.id)) + 1
                        addArrayItem('page6', 'expenses', { id: newId, item: '', amount: '', status: 'pending' })
                      }}
                      variant="outline"
                      className="w-full border-dashed"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Ajouter une dépense
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Page 7: Notes Importantes */}
          {currentPage === 7 && (
            <Card className="shadow-lg">
              <CardHeader className={`bg-gradient-to-r ${currentPageData.color} text-white rounded-t-lg`}>
                <CardTitle>Notes importantes</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Textarea
                  value={plannerData.page7.importantNotes}
                  onChange={(e) => updateField('page7', 'importantNotes', e.target.value)}
                  placeholder="Notez ici toutes les informations importantes pour votre projet..."
                  className="w-full h-64 resize-none"
                />
              </CardContent>
            </Card>
          )}

          {/* Page 8: Nouvelles Idées */}
          {currentPage === 8 && (
            <Card className="shadow-lg">
              <CardHeader className={`bg-gradient-to-r ${currentPageData.color} text-white rounded-t-lg`}>
                <CardTitle>Nouvelles idées</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {plannerData.page8.newIdeas.map((idea, index) => (
                    <div key={index}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Idée {index + 1}
                      </label>
                      <Textarea
                        value={idea}
                        onChange={(e) => updateArrayField('page8', 'newIdeas', index, e.target.value)}
                        placeholder={`Nouvelle idée ${index + 1}...`}
                        className="w-full h-24 resize-none"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Page 9: Inspiration */}
          {currentPage === 9 && (
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardHeader className={`bg-gradient-to-r ${currentPageData.color} text-white rounded-t-lg`}>
                  <CardTitle>Coin d'inspiration</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <Textarea
                    value={plannerData.page9.inspiration}
                    onChange={(e) => updateField('page9', 'inspiration', e.target.value)}
                    placeholder="Citations inspirantes, références, motivations..."
                    className="w-full h-32 resize-none"
                  />
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className={`bg-gradient-to-r ${currentPageData.color} text-white rounded-t-lg`}>
                  <CardTitle>Espace de dessin libre</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <Textarea
                    value={plannerData.page9.drawing}
                    onChange={(e) => updateField('page9', 'drawing', e.target.value)}
                    placeholder="Dessinez ou décrivez vos idées visuelles ici..."
                    className="w-full h-40 resize-none"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    💡 Utilisez cet espace pour dessiner des schémas, logos, ou toute représentation visuelle de votre projet
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjetPlanner

