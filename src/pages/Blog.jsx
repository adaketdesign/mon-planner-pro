import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  BookOpen,
  Target,
  TrendingUp,
  Lightbulb,
  Heart,
  Star,
  Coffee,
  Briefcase,
  Sparkles,
  CheckCircle,
  Quote,
  Share2,
  Bookmark,
  Eye,
  MessageCircle,
  Search,
  Filter,
  ChevronRight
} from 'lucide-react'

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'Tous les articles', count: 12 },
    { id: 'planning', name: 'Planification', count: 4 },
    { id: 'productivity', name: 'Productivité', count: 3 },
    { id: 'business', name: 'Business', count: 2 },
    { id: 'mindset', name: 'Mindset', count: 3 }
  ]

  const featuredArticle = {
    id: 1,
    title: "Pourquoi planifier sa semaine change tout : Le secret des personnes ultra-productives",
    excerpt: "Découvrez comment 15 minutes de planification hebdomadaire peuvent transformer votre productivité et réduire votre stress de 70%. Une méthode éprouvée par des milliers d'entrepreneurs.",
    content: `
# Pourquoi planifier sa semaine change tout : Le secret des personnes ultra-productives

*Temps de lecture : 8 minutes*

Imaginez-vous un dimanche soir, serein et confiant, sachant exactement ce qui vous attend la semaine prochaine. Pas de stress, pas d'imprévu qui vous déstabilise, juste une roadmap claire vers vos objectifs. C'est exactement ce que vous offre la planification hebdomadaire.

## Le pouvoir transformateur de la planification

**"Celui qui ne planifie pas, planifie d'échouer."** Cette citation de Benjamin Franklin n'a jamais été aussi vraie qu'aujourd'hui. Dans notre monde hyperconnecté, où les distractions sont omniprésentes, la planification devient votre bouclier contre le chaos.

### Les chiffres qui parlent

- **70% de réduction du stress** chez les personnes qui planifient leur semaine
- **40% d'augmentation de la productivité** en moyenne
- **85% des entrepreneurs à succès** utilisent un système de planification hebdomadaire

## La méthode des 15 minutes magiques

Chaque dimanche, accordez-vous 15 minutes pour planifier votre semaine. Ces 15 minutes vont vous faire gagner des heures :

### 1. Visualisez vos objectifs de la semaine
Commencez par définir 3 objectifs principaux. Pas 10, pas 20. Trois. Votre cerveau ne peut pas se concentrer efficacement sur plus de 3 priorités majeures.

### 2. Identifiez vos moments de haute énergie
Nous avons tous des moments où nous sommes plus productifs. Identifiez-les et planifiez vos tâches les plus importantes à ces moments-là.

### 3. Prévoyez l'imprévu
Réservez 20% de votre temps pour les imprévus. Ils arriveront, autant les anticiper.

## L'effet domino de la planification

Quand vous planifiez votre semaine, vous créez un effet domino positif :

- **Clarté mentale** : Vous savez où vous allez
- **Confiance en soi** : Vous contrôlez votre agenda
- **Efficacité** : Vous éliminez les pertes de temps
- **Équilibre** : Vous incluez du temps pour vous

## Témoignage inspirant

*"Depuis que j'utilise Mon Planner Pro pour organiser mes semaines, j'ai lancé ma startup, écrit un livre et je passe plus de temps avec ma famille. La planification m'a littéralement donné ma vie en main."* - Sarah M., Entrepreneure

## Votre défi pour cette semaine

Prenez 15 minutes ce dimanche pour planifier votre semaine avec Mon Planner Pro. Notez vos 3 objectifs principaux et observez la différence. Vous nous remercierez plus tard.

**Rappelez-vous : La planification n'est pas une contrainte, c'est votre liberté.**
    `,
    author: "Marie Dubois",
    authorRole: "Coach en productivité",
    publishDate: "15 janvier 2025",
    readTime: "8 min",
    category: "planning",
    image: "/api/placeholder/800/400",
    tags: ["Planification", "Productivité", "Organisation"],
    views: 2847,
    comments: 23,
    featured: true
  }

  const articles = [
    {
      id: 2,
      title: "La routine matinale qui transforme votre journée",
      excerpt: "Comment créer une routine matinale puissante qui vous donne l'énergie et la motivation pour conquérir chaque journée.",
      author: "Thomas Laurent",
      authorRole: "Expert en développement personnel",
      publishDate: "12 janvier 2025",
      readTime: "6 min",
      category: "productivity",
      image: "/api/placeholder/400/250",
      tags: ["Routine", "Matinale", "Énergie"],
      views: 1923,
      comments: 18,
      content: `
# La routine matinale qui transforme votre journée

*Temps de lecture : 6 minutes*

Vos premières heures déterminent le reste de votre journée. Une routine matinale bien construite est comme un moteur qui démarre votre journée en puissance.

## Les 5 piliers d'une routine matinale réussie

### 1. Le réveil intentionnel (5 minutes)
Levez-vous 30 minutes plus tôt. Ces 30 minutes vous appartiennent entièrement, sans interruption.

### 2. L'hydratation et le mouvement (10 minutes)
Un grand verre d'eau et quelques étirements réveillent votre corps en douceur.

### 3. La gratitude (5 minutes)
Notez 3 choses pour lesquelles vous êtes reconnaissant. Cette pratique transforme votre état d'esprit.

### 4. La visualisation (5 minutes)
Imaginez votre journée idéale. Votre cerveau commencera à créer cette réalité.

### 5. La planification (5 minutes)
Définissez vos 3 priorités du jour avec Mon Planner Pro.

## L'impact scientifique

Des études montrent que les personnes avec une routine matinale stable ont :
- 23% moins de stress
- 31% plus d'énergie
- 45% plus de satisfaction au travail

**Votre routine matinale est votre superpouvoir secret.**
      `
    },
    {
      id: 3,
      title: "De l'idée au succès : Planifier son projet business",
      excerpt: "Les étapes essentielles pour transformer votre idée d'entreprise en business florissant grâce à une planification stratégique.",
      author: "Alexandre Martin",
      authorRole: "Entrepreneur et mentor",
      publishDate: "10 janvier 2025",
      readTime: "10 min",
      category: "business",
      image: "/api/placeholder/400/250",
      tags: ["Business", "Entrepreneuriat", "Stratégie"],
      views: 3156,
      comments: 31,
      content: `
# De l'idée au succès : Planifier son projet business

*Temps de lecture : 10 minutes*

Avoir une idée, c'est bien. La transformer en business rentable, c'est mieux. La différence ? La planification.

## Les 9 étapes de la planification business

### 1. Clarifiez votre vision
Votre "pourquoi" doit être plus fort que vos obstacles.

### 2. Analysez votre marché
Qui sont vos clients ? Que veulent-ils vraiment ?

### 3. Définissez votre proposition de valeur
En quoi êtes-vous unique et indispensable ?

### 4. Planifiez vos finances
Combien avez-vous besoin ? D'où viendra l'argent ?

### 5. Créez votre roadmap
Étapes par étapes, mois par mois.

## Le secret des entrepreneurs qui réussissent

Ils ne planifient pas une fois, ils planifient constamment. Ils ajustent, ils pivotent, ils s'adaptent.

**Votre business plan n'est pas un document figé, c'est un GPS vivant.**
      `
    },
    {
      id: 4,
      title: "L'art de dire non : Protéger son temps et ses priorités",
      excerpt: "Apprenez à dire non avec bienveillance pour préserver votre énergie et vous concentrer sur ce qui compte vraiment.",
      author: "Sophie Moreau",
      authorRole: "Coach en gestion du temps",
      publishDate: "8 janvier 2025",
      readTime: "5 min",
      category: "productivity",
      image: "/api/placeholder/400/250",
      tags: ["Gestion du temps", "Priorités", "Limites"],
      views: 1654,
      comments: 12,
      content: `
# L'art de dire non : Protéger son temps et ses priorités

*Temps de lecture : 5 minutes*

Dire oui à tout, c'est dire non à vos priorités. Apprendre à dire non est un superpouvoir.

## Pourquoi nous avons du mal à dire non

- Peur de décevoir
- Besoin d'être aimé
- Syndrome de l'imposteur
- FOMO (Fear of Missing Out)

## Les 3 techniques pour dire non avec élégance

### 1. La technique du sandwich
"Merci pour cette opportunité [positif], malheureusement je ne peux pas [non], mais je vous souhaite le meilleur pour ce projet [positif]."

### 2. La redirection
"Je ne peux pas faire ça, mais je connais quelqu'un qui pourrait vous aider."

### 3. Le non différé
"Laissez-moi vérifier mon agenda et je vous reviens."

**Rappelez-vous : Chaque non à quelque chose d'insignifiant est un oui à quelque chose d'important.**
      `
    },
    {
      id: 5,
      title: "Transformer ses échecs en tremplins vers le succès",
      excerpt: "Comment changer votre perspective sur l'échec et l'utiliser comme un catalyseur de croissance personnelle et professionnelle.",
      author: "David Chen",
      authorRole: "Psychologue du développement",
      publishDate: "5 janvier 2025",
      readTime: "7 min",
      category: "mindset",
      image: "/api/placeholder/400/250",
      tags: ["Mindset", "Résilience", "Croissance"],
      views: 2234,
      comments: 19,
      content: `
# Transformer ses échecs en tremplins vers le succès

*Temps de lecture : 7 minutes*

L'échec n'est pas le contraire du succès, c'est un ingrédient du succès.

## La mentalité de croissance

Les personnes qui réussissent voient l'échec différemment :
- Ce n'est pas "Je suis nul"
- C'est "Je ne sais pas encore"

## Les 4 étapes pour transformer un échec

### 1. Acceptez l'émotion
Il est normal d'être déçu. Accordez-vous ce moment.

### 2. Analysez objectivement
Qu'est-ce qui s'est passé ? Quels facteurs étaient sous votre contrôle ?

### 3. Extrayez les leçons
Chaque échec contient des pépites d'or d'apprentissage.

### 4. Planifiez la suite
Comment allez-vous appliquer ces leçons ?

**L'échec est un détour, pas une destination.**
      `
    },
    {
      id: 6,
      title: "La méthode des 3 priorités pour une productivité maximale",
      excerpt: "Découvrez comment la règle des 3 priorités peut révolutionner votre productivité et vous aider à accomplir plus en travaillant moins.",
      author: "Julie Petit",
      authorRole: "Consultante en efficacité",
      publishDate: "3 janvier 2025",
      readTime: "6 min",
      category: "productivity",
      image: "/api/placeholder/400/250",
      tags: ["Productivité", "Priorités", "Focus"],
      views: 1876,
      comments: 15,
      content: `
# La méthode des 3 priorités pour une productivité maximale

*Temps de lecture : 6 minutes*

Votre to-do list fait 20 items ? Vous êtes en train de vous saboter.

## Pourquoi 3 et pas plus ?

Notre cerveau ne peut se concentrer efficacement que sur 3 tâches importantes par jour. C'est scientifiquement prouvé.

## Comment choisir vos 3 priorités

### 1. La règle de l'impact
Quelle tâche aura le plus d'impact sur vos objectifs ?

### 2. La règle de l'urgence
Qu'est-ce qui ne peut vraiment pas attendre ?

### 3. La règle de l'énergie
Quelle tâche demande votre meilleure énergie ?

## La mise en pratique

Chaque matin, avant de regarder vos emails :
1. Identifiez vos 3 priorités
2. Planifiez-les dans votre agenda
3. Commencez par la plus importante

**3 priorités accomplies valent mieux que 10 tâches bâclées.**
      `
    }
  ]

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const [selectedArticle, setSelectedArticle] = useState(null)

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          {/* Back Button */}
          <Button 
            variant="outline" 
            onClick={() => setSelectedArticle(null)}
            className="mb-8"
          >
            ← Retour au blog
          </Button>

          {/* Article Header */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="h-64 bg-gradient-to-r from-purple-400 to-pink-400"></div>
            <div className="p-8">
              <Badge className="mb-4 bg-purple-100 text-purple-700">
                {categories.find(cat => cat.id === selectedArticle.category)?.name}
              </Badge>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {selectedArticle.title}
              </h1>
              
              <div className="flex items-center space-x-6 text-gray-600 mb-6">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{selectedArticle.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedArticle.publishDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{selectedArticle.readTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>{selectedArticle.views}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {selectedArticle.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-gray-600">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                {selectedArticle.content}
              </div>
            </div>

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="sm">
                    <Heart className="w-4 h-4 mr-2" />
                    J'aime
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Partager
                  </Button>
                  <Button variant="outline" size="sm">
                    <Bookmark className="w-4 h-4 mr-2" />
                    Sauvegarder
                  </Button>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MessageCircle className="w-4 h-4" />
                  <span>{selectedArticle.comments} commentaires</span>
                </div>
              </div>
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">À propos de l'auteur</h3>
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{selectedArticle.author}</h4>
                <p className="text-gray-600 mb-2">{selectedArticle.authorRole}</p>
                <p className="text-gray-700">
                  Expert passionné par le développement personnel et la productivité, 
                  {selectedArticle.author} accompagne des milliers de personnes dans leur quête d'organisation et d'épanouissement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg">
              BLOG MON PLANNER PRO
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="text-gray-900">Inspiration & </span>
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Motivation
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Découvrez nos articles inspirants sur la planification, la productivité et le développement personnel. 
              Transformez votre organisation et atteignez vos objectifs avec nos conseils d'experts.
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 w-80 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Article à la une</h2>
            <p className="text-gray-600">Notre sélection de la semaine</p>
          </div>

          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedArticle(featuredArticle)}>
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <BookOpen className="w-24 h-24 text-white opacity-50" />
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge className="bg-purple-100 text-purple-700">
                    {categories.find(cat => cat.id === featuredArticle.category)?.name}
                  </Badge>
                  <Badge className="bg-yellow-100 text-yellow-700">
                    <Star className="w-3 h-3 mr-1" />
                    À la une
                  </Badge>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 hover:text-purple-600 transition-colors">
                  {featuredArticle.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{featuredArticle.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredArticle.publishDate}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>
                  
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    Lire l'article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Tous nos articles</h2>
            <p className="text-gray-600">
              {filteredArticles.length} article{filteredArticles.length > 1 ? 's' : ''} 
              {selectedCategory !== 'all' && ` dans ${categories.find(cat => cat.id === selectedCategory)?.name}`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Card key={article.id} 
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    onClick={() => setSelectedArticle(article)}>
                <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white opacity-50" />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-purple-100 text-purple-700">
                      {categories.find(cat => cat.id === article.category)?.name}
                    </Badge>
                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{article.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{article.comments}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <User className="w-3 h-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-1">
                      {article.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {article.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{article.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-purple-200" />
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Restez inspiré chaque semaine
          </h2>
          
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Recevez nos meilleurs conseils en productivité et développement personnel 
            directement dans votre boîte mail. Une dose d'inspiration chaque mardi matin.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-purple-300 focus:outline-none"
            />
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3">
              S'abonner
            </Button>
          </div>
          
          <p className="text-sm text-purple-200 mt-4">
            ✨ Gratuit • 📧 Pas de spam • 🚫 Désabonnement en un clic
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Explorez par catégorie
            </h2>
            <p className="text-xl text-gray-600">
              Trouvez exactement ce que vous cherchez
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.filter(cat => cat.id !== 'all').map((category) => {
              const icons = {
                planning: Calendar,
                productivity: Target,
                business: Briefcase,
                mindset: Lightbulb
              }
              const IconComponent = icons[category.id]
              
              return (
                <Card key={category.id} 
                      className="text-center hover:shadow-lg transition-all duration-300 cursor-pointer group"
                      onClick={() => setSelectedCategory(category.id)}>
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {category.count} article{category.count > 1 ? 's' : ''}
                    </p>
                    <Button variant="outline" size="sm" className="group-hover:bg-purple-50">
                      Explorer
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog

