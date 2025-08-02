import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Shield,
  Lock,
  Eye,
  UserCheck,
  Database,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Download,
  Printer,
  ArrowLeft,
  AlertTriangle,
  CheckCircle
} from 'lucide-react'

const Privacy = () => {
  const lastUpdate = "27 juillet 2025"

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-8">
      {/* Header */}
      <section className="pt-20 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
              CONFIDENTIALITÉ
            </Badge>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-900">Politique de </span>
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Confidentialité
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-6">
              Dernière mise à jour : {lastUpdate}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Télécharger PDF
              </Button>
              <Button variant="outline" className="flex items-center">
                <Printer className="w-4 h-4 mr-2" />
                Imprimer
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                
                {/* Introduction */}
                <div className="mb-12">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                    <div className="flex items-start space-x-3">
                      <Shield className="w-6 h-6 text-green-600 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-green-900 mb-2">Notre engagement</h3>
                        <p className="text-green-800">
                          Chez Mon Planner Pro, la protection de vos données personnelles est une priorité absolue. 
                          Cette politique explique comment nous collectons, utilisons et protégeons vos informations 
                          conformément au RGPD et aux meilleures pratiques de sécurité.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article 1 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                    Responsable du traitement
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Le responsable du traitement des données personnelles est Mon Planner Pro, société par actions 
                      simplifiée au capital de 50 000 euros, immatriculée au RCS de Paris sous le numéro 123 456 789, 
                      dont le siège social est situé à Paris, France.
                    </p>
                    
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Coordonnées du délégué à la protection des données (DPO)</h4>
                      <div className="space-y-2 text-gray-700">
                        <div className="flex items-center space-x-3">
                          <Mail className="w-4 h-4 text-green-600" />
                          <span>dpo@monplannerpro.com</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-4 h-4 text-green-600" />
                          <span>06 95 45 77 68</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-4 h-4 text-green-600" />
                          <span>Mon Planner Pro - DPO, Paris, France</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article 2 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                    Données collectées
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Nous collectons différents types de données personnelles selon votre utilisation de nos services :
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.1 Données d'identification</h3>
                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Nom et prénom</li>
                        <li>Adresse email</li>
                        <li>Numéro de téléphone (optionnel)</li>
                        <li>Date de naissance (optionnel)</li>
                        <li>Pays de résidence</li>
                      </ul>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.2 Données de connexion</h3>
                    <div className="bg-purple-50 rounded-lg p-6 mb-6">
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Adresse IP</li>
                        <li>Type et version du navigateur</li>
                        <li>Système d'exploitation</li>
                        <li>Pages visitées et temps de navigation</li>
                        <li>Données de géolocalisation approximative</li>
                      </ul>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.3 Données d'utilisation</h3>
                    <div className="bg-orange-50 rounded-lg p-6 mb-6">
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Contenu des planners créés</li>
                        <li>Préférences et paramètres</li>
                        <li>Historique d'utilisation des fonctionnalités</li>
                        <li>Statistiques de productivité</li>
                        <li>Interactions avec le support client</li>
                      </ul>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.4 Données de paiement</h3>
                    <div className="bg-red-50 rounded-lg p-6 mb-6">
                      <div className="flex items-start space-x-3">
                        <Lock className="w-5 h-5 text-red-600 mt-1" />
                        <div>
                          <p className="text-gray-700 mb-2">
                            Les données de paiement sont traitées exclusivement par notre partenaire sécurisé Stripe, 
                            certifié PCI DSS Level 1. Nous ne stockons jamais vos informations bancaires complètes.
                          </p>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Derniers chiffres de la carte bancaire</li>
                            <li>Date d'expiration</li>
                            <li>Historique des transactions</li>
                            <li>Adresse de facturation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article 3 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                    Finalités du traitement
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Vos données personnelles sont traitées pour les finalités suivantes, chacune reposant sur une 
                      base légale spécifique :
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                          <UserCheck className="w-5 h-5 mr-2" />
                          Gestion des comptes
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-green-800 text-sm">
                          <li>Création et authentification</li>
                          <li>Gestion des abonnements</li>
                          <li>Support client</li>
                          <li>Communication importante</li>
                        </ul>
                        <div className="mt-3 text-xs text-green-700">
                          <strong>Base légale :</strong> Exécution du contrat
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                          <Database className="w-5 h-5 mr-2" />
                          Fourniture des services
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                          <li>Sauvegarde des planners</li>
                          <li>Synchronisation multi-appareils</li>
                          <li>Fonctionnalités collaboratives</li>
                          <li>Export et partage</li>
                        </ul>
                        <div className="mt-3 text-xs text-blue-700">
                          <strong>Base légale :</strong> Exécution du contrat
                        </div>
                      </div>

                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                        <h4 className="font-semibold text-purple-900 mb-3 flex items-center">
                          <Eye className="w-5 h-5 mr-2" />
                          Amélioration des services
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-purple-800 text-sm">
                          <li>Analyses d'usage anonymisées</li>
                          <li>Développement de nouvelles fonctionnalités</li>
                          <li>Optimisation des performances</li>
                          <li>Recherche et développement</li>
                        </ul>
                        <div className="mt-3 text-xs text-purple-700">
                          <strong>Base légale :</strong> Intérêt légitime
                        </div>
                      </div>

                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                        <h4 className="font-semibold text-orange-900 mb-3 flex items-center">
                          <Mail className="w-5 h-5 mr-2" />
                          Marketing (optionnel)
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-orange-800 text-sm">
                          <li>Newsletter et conseils</li>
                          <li>Offres personnalisées</li>
                          <li>Enquêtes de satisfaction</li>
                          <li>Événements et webinaires</li>
                        </ul>
                        <div className="mt-3 text-xs text-orange-700">
                          <strong>Base légale :</strong> Consentement
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article 4 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                    Partage des données
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Nous ne vendons jamais vos données personnelles. Le partage est limité aux cas suivants :
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.1 Prestataires de services</h3>
                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Hébergement et infrastructure</h5>
                          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                            <li>Amazon Web Services (AWS)</li>
                            <li>Cloudflare (CDN et sécurité)</li>
                            <li>Supabase (base de données)</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Services tiers</h5>
                          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                            <li>Stripe (paiements)</li>
                            <li>SendGrid (emails transactionnels)</li>
                            <li>Intercom (support client)</li>
                          </ul>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-4">
                        Tous nos prestataires sont soumis à des accords de confidentialité stricts et traitent 
                        vos données uniquement selon nos instructions.
                      </p>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.2 Obligations légales</h3>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 mt-1" />
                        <div>
                          <p className="text-yellow-800">
                            Nous pouvons être amenés à divulguer vos données personnelles si la loi l'exige, 
                            notamment en cas de réquisition judiciaire ou administrative, ou pour protéger nos 
                            droits légitimes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article 5 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                    Sécurité des données
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées 
                      pour protéger vos données contre tout accès non autorisé, altération, divulgation ou destruction.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                          <Lock className="w-5 h-5 mr-2" />
                          Mesures techniques
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                          <li>Chiffrement AES-256 des données</li>
                          <li>Connexions HTTPS/TLS 1.3</li>
                          <li>Authentification à deux facteurs</li>
                          <li>Surveillance 24h/24</li>
                          <li>Sauvegardes chiffrées quotidiennes</li>
                          <li>Tests de pénétration réguliers</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                          <Shield className="w-5 h-5 mr-2" />
                          Mesures organisationnelles
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-green-800 text-sm">
                          <li>Accès limité aux données (principe du moindre privilège)</li>
                          <li>Formation régulière des équipes</li>
                          <li>Audits de sécurité trimestriels</li>
                          <li>Procédures de gestion des incidents</li>
                          <li>Contrats de confidentialité</li>
                          <li>Certification ISO 27001 en cours</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-6">
                      <h4 className="font-semibold text-red-900 mb-3">Notification des violations</h4>
                      <p className="text-red-800 text-sm">
                        En cas de violation de données susceptible d'engendrer un risque élevé pour vos droits et libertés, 
                        nous vous en informerons dans les 72 heures suivant la découverte de l'incident, conformément au RGPD.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Article 6 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                    Vos droits
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h5 className="font-semibold text-blue-900 mb-2 flex items-center">
                          <Eye className="w-4 h-4 mr-2" />
                          Droit d'accès
                        </h5>
                        <p className="text-blue-800 text-sm">
                          Obtenir une copie de vos données personnelles et des informations sur leur traitement.
                        </p>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h5 className="font-semibold text-green-900 mb-2 flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Droit de rectification
                        </h5>
                        <p className="text-green-800 text-sm">
                          Corriger ou mettre à jour vos données personnelles inexactes ou incomplètes.
                        </p>
                      </div>

                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <h5 className="font-semibold text-red-900 mb-2 flex items-center">
                          <AlertTriangle className="w-4 h-4 mr-2" />
                          Droit d'effacement
                        </h5>
                        <p className="text-red-800 text-sm">
                          Demander la suppression de vos données dans certaines conditions.
                        </p>
                      </div>

                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <h5 className="font-semibold text-purple-900 mb-2 flex items-center">
                          <Database className="w-4 h-4 mr-2" />
                          Droit à la portabilité
                        </h5>
                        <p className="text-purple-800 text-sm">
                          Récupérer vos données dans un format structuré et lisible par machine.
                        </p>
                      </div>

                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                        <h5 className="font-semibold text-orange-900 mb-2 flex items-center">
                          <Lock className="w-4 h-4 mr-2" />
                          Droit de limitation
                        </h5>
                        <p className="text-orange-800 text-sm">
                          Limiter le traitement de vos données dans certaines circonstances.
                        </p>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Shield className="w-4 h-4 mr-2" />
                          Droit d'opposition
                        </h5>
                        <p className="text-gray-800 text-sm">
                          Vous opposer au traitement de vos données pour des raisons légitimes.
                        </p>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
                      <h4 className="font-semibold text-blue-900 mb-3">Comment exercer vos droits ?</h4>
                      <p className="text-blue-800 mb-3">
                        Pour exercer vos droits, contactez notre délégué à la protection des données :
                      </p>
                      <div className="space-y-2 text-blue-800">
                        <div className="flex items-center space-x-3">
                          <Mail className="w-4 h-4" />
                          <span>dpo@monplannerpro.com</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-4 h-4" />
                          <span>06 95 45 77 68</span>
                        </div>
                      </div>
                      <p className="text-blue-700 text-sm mt-3">
                        Nous répondrons à votre demande dans un délai maximum de 30 jours. Une pièce d'identité 
                        pourra être demandée pour vérifier votre identité.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Article 7 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
                    Durée de conservation
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités 
                      pour lesquelles elles ont été collectées :
                    </p>
                    
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Données de compte actif</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                            <li>Données d'identification : durée de l'abonnement + 3 ans</li>
                            <li>Données d'utilisation : durée de l'abonnement + 1 an</li>
                            <li>Contenu des planners : durée de l'abonnement + 6 mois</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Données de compte fermé</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                            <li>Données de facturation : 10 ans (obligation légale)</li>
                            <li>Données de support : 3 ans</li>
                            <li>Logs de connexion : 1 an</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <p>
                      À l'expiration de ces délais, vos données sont automatiquement supprimées de nos systèmes, 
                      sauf obligation légale de conservation plus longue.
                    </p>
                  </div>
                </div>

                {/* Article 8 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">8</span>
                    Cookies et technologies similaires
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Notre site utilise des cookies et technologies similaires pour améliorer votre expérience 
                      utilisateur et analyser l'utilisation de nos services.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h5 className="font-semibold text-green-900 mb-2">Cookies essentiels</h5>
                        <p className="text-green-800 text-sm mb-2">
                          Nécessaires au fonctionnement du site (authentification, sécurité, préférences).
                        </p>
                        <div className="text-xs text-green-700">
                          <strong>Durée :</strong> Session ou 1 an
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h5 className="font-semibold text-blue-900 mb-2">Cookies analytiques</h5>
                        <p className="text-blue-800 text-sm mb-2">
                          Mesure d'audience et analyse des performances (Google Analytics, anonymisé).
                        </p>
                        <div className="text-xs text-blue-700">
                          <strong>Durée :</strong> 2 ans maximum
                        </div>
                      </div>

                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <h5 className="font-semibold text-purple-900 mb-2">Cookies marketing</h5>
                        <p className="text-purple-800 text-sm mb-2">
                          Personnalisation des contenus et publicités (avec votre consentement).
                        </p>
                        <div className="text-xs text-purple-700">
                          <strong>Durée :</strong> 13 mois maximum
                        </div>
                      </div>
                    </div>

                    <p>
                      Vous pouvez gérer vos préférences de cookies à tout moment via les paramètres de votre navigateur 
                      ou notre centre de préférences accessible depuis le footer du site.
                    </p>
                  </div>
                </div>

                {/* Article 9 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">9</span>
                    Modifications de la politique
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Cette politique de confidentialité peut être modifiée pour refléter les évolutions de nos 
                      services, de la réglementation ou de nos pratiques de protection des données.
                    </p>
                    <p>
                      En cas de modification substantielle, nous vous en informerons par email et/ou par une 
                      notification sur notre site au moins 30 jours avant l'entrée en vigueur des changements.
                    </p>
                    <p>
                      Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos 
                      pratiques de protection des données.
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-green-50 rounded-lg p-6 mt-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Contact et réclamations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 mb-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-green-600" />
                      <span>dpo@monplannerpro.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-green-600" />
                      <span>06 95 45 77 68</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-green-600" />
                      <span>Paris, France</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-green-600" />
                      <span>Dernière mise à jour : {lastUpdate}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation 
                    auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) : 
                    <a href="https://www.cnil.fr" className="text-green-600 hover:underline ml-1">www.cnil.fr</a>
                  </p>
                </div>

              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="mt-8 flex justify-between items-center">
            <Button variant="outline" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>
            <div className="text-sm text-gray-500">
              Document généré automatiquement - Version 1.0
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Privacy

