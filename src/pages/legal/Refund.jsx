import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  CreditCard,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Download,
  Printer,
  ArrowLeft,
  Euro,
  RefreshCw
} from 'lucide-react'

const Refund = () => {
  const lastUpdate = "27 juillet 2025"

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 py-8">
      {/* Header */}
      <section className="pt-20 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white">
              REMBOURSEMENT
            </Badge>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-900">Conditions de </span>
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Remboursement
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
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
                    <div className="flex items-start space-x-3">
                      <CreditCard className="w-6 h-6 text-orange-600 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-orange-900 mb-2">Notre politique de remboursement</h3>
                        <p className="text-orange-800">
                          Chez Mon Planner Pro, votre satisfaction est notre priorité. Nous offrons une politique 
                          de remboursement claire et équitable pour tous nos services d'abonnement. Cette page 
                          détaille les conditions et procédures de remboursement.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article 1 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                    Période de remboursement
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Mon Planner Pro offre une garantie de remboursement intégral de 30 jours pour tous les 
                      nouveaux abonnements, qu'ils soient mensuels ou annuels. Cette période commence à compter 
                      de la date de souscription initiale de l'abonnement.
                    </p>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <h4 className="text-lg font-semibold text-green-900">Garantie 30 jours satisfait ou remboursé</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-green-800">
                        <div>
                          <h5 className="font-semibold mb-2">Abonnements mensuels</h5>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Remboursement intégral si demandé dans les 30 jours</li>
                            <li>Aucune question posée</li>
                            <li>Traitement sous 5-7 jours ouvrés</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2">Abonnements annuels</h5>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Remboursement intégral si demandé dans les 30 jours</li>
                            <li>Économies conservées pendant la période d'essai</li>
                            <li>Traitement prioritaire sous 3-5 jours ouvrés</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <h4 className="font-semibold text-blue-900">Calcul de la période</h4>
                      </div>
                      <p className="text-blue-800 text-sm">
                        La période de 30 jours est calculée en jours calendaires à partir de la date de confirmation 
                        de votre abonnement (date de réception de l'email de confirmation). Les weekends et jours 
                        fériés sont inclus dans ce calcul.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Article 2 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                    Conditions d'éligibilité
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Pour être éligible à un remboursement, votre demande doit respecter les conditions suivantes :
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Conditions acceptées
                        </h4>
                        <ul className="list-disc list-inside space-y-2 text-green-800 text-sm">
                          <li>Demande formulée dans les 30 jours suivant la souscription</li>
                          <li>Premier abonnement à Mon Planner Pro</li>
                          <li>Compte en règle (pas de violation des CGU)</li>
                          <li>Paiement effectué par carte bancaire ou PayPal</li>
                          <li>Utilisation normale des services</li>
                          <li>Demande formulée par le titulaire du compte</li>
                        </ul>
                      </div>

                      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h4 className="font-semibold text-red-900 mb-3 flex items-center">
                          <XCircle className="w-5 h-5 mr-2" />
                          Exclusions
                        </h4>
                        <ul className="list-disc list-inside space-y-2 text-red-800 text-sm">
                          <li>Renouvellements d'abonnement (au-delà du premier mois/année)</li>
                          <li>Comptes suspendus pour violation des CGU</li>
                          <li>Utilisation frauduleuse ou abusive des services</li>
                          <li>Demandes formulées après la période de 30 jours</li>
                          <li>Paiements effectués par des tiers</li>
                          <li>Comptes créés avec de fausses informations</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-yellow-900 mb-2">Cas particuliers</h4>
                          <p className="text-yellow-800 text-sm">
                            Les demandes de remboursement pour des raisons techniques (bugs, dysfonctionnements) 
                            peuvent être traitées au-delà de la période de 30 jours, au cas par cas. Contactez 
                            notre support technique pour ces situations spécifiques.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article 3 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                    Procédure de demande
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Pour demander un remboursement, suivez la procédure ci-dessous. Notre équipe traitera 
                      votre demande dans les plus brefs délais.
                    </p>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h4 className="font-semibold text-blue-900 mb-4">Étapes à suivre</h4>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                          <div>
                            <h5 className="font-semibold text-blue-900">Contactez notre support</h5>
                            <p className="text-blue-800 text-sm">
                              Envoyez un email à <strong>refund@monplannerpro.com</strong> ou utilisez le 
                              formulaire de contact sur notre site.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                          <div>
                            <h5 className="font-semibold text-blue-900">Fournissez les informations requises</h5>
                            <ul className="text-blue-800 text-sm list-disc list-inside mt-1">
                              <li>Adresse email du compte</li>
                              <li>Date de souscription</li>
                              <li>Numéro de transaction (si disponible)</li>
                              <li>Raison de la demande (optionnel)</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                          <div>
                            <h5 className="font-semibold text-blue-900">Confirmation et traitement</h5>
                            <p className="text-blue-800 text-sm">
                              Nous confirmons la réception de votre demande sous 24h et procédons au remboursement 
                              après vérification.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Mail className="w-5 h-5 mr-2 text-orange-600" />
                          Contact par email
                        </h4>
                        <div className="space-y-2 text-gray-700 text-sm">
                          <p><strong>Email :</strong> refund@monplannerpro.com</p>
                          <p><strong>Objet :</strong> "Demande de remboursement - [Votre email]"</p>
                          <p><strong>Réponse :</strong> Sous 24h en moyenne</p>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Phone className="w-5 h-5 mr-2 text-orange-600" />
                          Contact téléphonique
                        </h4>
                        <div className="space-y-2 text-gray-700 text-sm">
                          <p><strong>Téléphone :</strong> 06 95 45 77 68</p>
                          <p><strong>Horaires :</strong> Lun-Ven 9h-18h</p>
                          <p><strong>Service :</strong> Support remboursement dédié</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article 4 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                    Délais et modalités de remboursement
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Une fois votre demande approuvée, le remboursement est traité selon les modalités suivantes :
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                          <Clock className="w-5 h-5 mr-2" />
                          Délais de traitement
                        </h4>
                        <div className="space-y-3 text-green-800 text-sm">
                          <div>
                            <p className="font-medium">Vérification de la demande</p>
                            <p>1-2 jours ouvrés</p>
                          </div>
                          <div>
                            <p className="font-medium">Traitement du remboursement</p>
                            <p>3-5 jours ouvrés</p>
                          </div>
                          <div>
                            <p className="font-medium">Réception sur votre compte</p>
                            <p>5-10 jours ouvrés (selon votre banque)</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                          <RefreshCw className="w-5 h-5 mr-2" />
                          Modalités de remboursement
                        </h4>
                        <div className="space-y-3 text-blue-800 text-sm">
                          <div>
                            <p className="font-medium">Carte bancaire</p>
                            <p>Remboursement sur la carte utilisée pour le paiement</p>
                          </div>
                          <div>
                            <p className="font-medium">PayPal</p>
                            <p>Remboursement sur le compte PayPal d'origine</p>
                          </div>
                          <div>
                            <p className="font-medium">Autres méthodes</p>
                            <p>Virement bancaire (IBAN requis)</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-yellow-900 mb-2">Important à savoir</h4>
                          <ul className="text-yellow-800 text-sm space-y-1 list-disc list-inside">
                            <li>Le remboursement s'effectue toujours par le même moyen de paiement que l'achat initial</li>
                            <li>Les frais bancaires éventuels sont à la charge du client</li>
                            <li>Un email de confirmation est envoyé à chaque étape du processus</li>
                            <li>L'accès aux services premium est suspendu dès l'approbation du remboursement</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article 5 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                    Remboursements partiels
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Dans certaines circonstances exceptionnelles, des remboursements partiels peuvent être accordés 
                      au-delà de la période de 30 jours :
                    </p>
                    
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                      <h4 className="font-semibold text-purple-900 mb-4">Cas de remboursement partiel</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium text-purple-900 mb-2">Problèmes techniques majeurs</h5>
                          <ul className="list-disc list-inside space-y-1 text-purple-800 text-sm">
                              <li>Indisponibilité prolongée du service (&gt;48h)</li>
                            <li>Perte de données due à un dysfonctionnement</li>
                            <li>Bugs critiques non résolus</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-purple-900 mb-2">Circonstances exceptionnelles</h5>
                          <ul className="list-disc list-inside space-y-1 text-purple-800 text-sm">
                            <li>Modification majeure des fonctionnalités</li>
                            <li>Changement significatif des conditions</li>
                            <li>Arrêt définitif d'un service souscrit</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Calcul du remboursement partiel</h4>
                      <p className="text-gray-700 text-sm mb-3">
                        Le montant du remboursement partiel est calculé au prorata de la période non utilisée :
                      </p>
                      <div className="bg-white border border-gray-200 rounded p-4">
                        <p className="text-gray-800 text-sm font-mono">
                          Remboursement = (Montant payé × Jours restants) ÷ Durée totale de l'abonnement
                        </p>
                      </div>
                      <p className="text-gray-600 text-xs mt-2">
                        Exemple : Pour un abonnement annuel de 199,99€ avec 6 mois restants : 
                        (199,99 × 180) ÷ 365 = 98,63€
                      </p>
                    </div>
                  </div>
                </div>

                {/* Article 6 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                    Réclamations et litiges
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Si vous n'êtes pas satisfait de la réponse à votre demande de remboursement, vous disposez 
                      de plusieurs recours :
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h5 className="font-semibold text-blue-900 mb-2">1. Escalade interne</h5>
                        <p className="text-blue-800 text-sm">
                          Contactez notre responsable client à manager@monplannerpro.com pour une révision 
                          de votre dossier.
                        </p>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h5 className="font-semibold text-green-900 mb-2">2. Médiation</h5>
                        <p className="text-green-800 text-sm">
                          Saisissez le médiateur de la consommation pour une résolution amiable du litige.
                        </p>
                      </div>

                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <h5 className="font-semibold text-purple-900 mb-2">3. Recours juridique</h5>
                        <p className="text-purple-800 text-sm">
                          En dernier recours, saisissez les tribunaux compétents selon nos CGV.
                        </p>
                      </div>
                    </div>

                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                      <h4 className="font-semibold text-orange-900 mb-3">Engagement qualité</h4>
                      <p className="text-orange-800 text-sm">
                        Nous nous engageons à traiter toutes les demandes de remboursement avec équité et transparence. 
                        Notre objectif est votre satisfaction, et nous ferons tout notre possible pour résoudre 
                        rapidement tout problème rencontré.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Article 7 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
                    Modifications de la politique
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Cette politique de remboursement peut être modifiée pour s'adapter aux évolutions de nos 
                      services ou de la réglementation. Les modifications importantes vous seront notifiées 
                      par email au moins 30 jours avant leur entrée en vigueur.
                    </p>
                    <p>
                      Les conditions de remboursement applicables sont celles en vigueur au moment de votre 
                      souscription, sauf amélioration en votre faveur.
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-orange-50 rounded-lg p-6 mt-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Service remboursement</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 mb-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-orange-600" />
                      <span>refund@monplannerpro.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-orange-600" />
                      <span>06 95 45 77 68</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-orange-600" />
                      <span>Paris, France</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-orange-600" />
                      <span>Dernière mise à jour : {lastUpdate}</span>
                    </div>
                  </div>
                  <div className="bg-white border border-orange-200 rounded p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Horaires du service remboursement :</strong><br />
                      Lundi au Vendredi : 9h00 - 18h00<br />
                      Samedi : 10h00 - 16h00<br />
                      Dimanche et jours fériés : Fermé
                    </p>
                  </div>
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

export default Refund

