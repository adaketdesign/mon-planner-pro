import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  FileText,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Download,
  Printer,
  ArrowLeft
} from 'lucide-react'

const CGV = () => {
  const lastUpdate = "27 juillet 2025"

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      {/* Header */}
      <section className="pt-20 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
              DOCUMENT LÉGAL
            </Badge>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-900">Conditions Générales de </span>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Vente
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
                
                {/* Article 1 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                    Objet et champ d'application
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre 
                      Mon Planner Pro, société par actions simplifiée au capital de 50 000 euros, immatriculée au 
                      Registre du Commerce et des Sociétés de Paris sous le numéro 123 456 789, dont le siège social 
                      est situé à Paris, France (ci-après dénommée "Mon Planner Pro" ou "la Société"), et toute 
                      personne physique ou morale souhaitant procéder à un achat via le site internet 
                      www.monplannerpro.com (ci-après dénommée "le Client").
                    </p>
                    <p>
                      Ces CGV s'appliquent à tous les services proposés par Mon Planner Pro, notamment les abonnements 
                      aux planners digitaux, les fonctionnalités premium et tous services connexes. Elles prévalent 
                      sur toutes autres conditions générales ou particulières non expressément agréées par Mon Planner Pro.
                    </p>
                    <p>
                      Le fait de passer commande implique l'adhésion entière et sans réserve du Client aux présentes 
                      CGV. Mon Planner Pro se réserve le droit de modifier ces conditions à tout moment, les nouvelles 
                      conditions étant applicables à compter de leur mise en ligne.
                    </p>
                  </div>
                </div>

                {/* Article 2 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                    Services proposés
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Mon Planner Pro propose une plateforme de planification digitale comprenant plusieurs modules 
                      interactifs destinés à améliorer l'organisation personnelle et professionnelle des utilisateurs.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.1 Formules d'abonnement</h3>
                    
                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Formule Freemium (Gratuite)</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Accès limité au Planner Semainier</li>
                        <li>Fonctionnalités de base</li>
                        <li>Support communautaire</li>
                        <li>Stockage limité à 10 planners</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Formule Pro (9,99€/mois ou 99,99€/an)</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Accès complet à tous les planners (Semainier, Routine, Projet)</li>
                        <li>Export PDF illimité</li>
                        <li>Sauvegarde automatique avancée</li>
                        <li>Support prioritaire par email</li>
                        <li>Stockage illimité</li>
                        <li>Fonctionnalités collaboratives</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-6 mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Formule Premium (19,99€/mois ou 199,99€/an)</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Tous les avantages de la formule Pro</li>
                        <li>Accès exclusif au GlowUp Planner</li>
                        <li>Statistiques et analyses avancées</li>
                        <li>Support téléphonique prioritaire</li>
                        <li>Coaching personnalisé mensuel</li>
                        <li>Accès anticipé aux nouvelles fonctionnalités</li>
                      </ul>
                    </div>

                    <p>
                      Les services sont fournis en mode SaaS (Software as a Service) et sont accessibles 24h/24 et 7j/7, 
                      sous réserve des opérations de maintenance programmées dont les utilisateurs seront informés 
                      au préalable.
                    </p>
                  </div>
                </div>

                {/* Article 3 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                    Commande et acceptation
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      La commande est ferme et définitive lorsque le Client a validé le processus de commande en ligne 
                      et effectué le paiement. Le Client reconnaît avoir pris connaissance et accepté les présentes CGV 
                      avant la validation de sa commande.
                    </p>
                    <p>
                      Toute commande passée sur le site www.monplannerpro.com constitue la formation d'un contrat entre 
                      le Client et Mon Planner Pro. La Société se réserve le droit d'annuler ou de refuser toute commande 
                      d'un Client avec lequel existerait un litige relatif au paiement d'une commande antérieure.
                    </p>
                    <p>
                      Un email de confirmation sera envoyé au Client dans les plus brefs délais suivant la validation 
                      de la commande, récapitulant les éléments de la commande et les conditions de l'abonnement souscrit.
                    </p>
                  </div>
                </div>

                {/* Article 4 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                    Prix et modalités de paiement
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Les prix sont indiqués en euros toutes taxes comprises (TTC) et incluent la TVA applicable au 
                      taux en vigueur. Les prix peuvent être modifiés à tout moment par Mon Planner Pro, mais les 
                      modifications ne s'appliqueront pas aux commandes déjà confirmées.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.1 Modalités de paiement</h3>
                    <p>
                      Le paiement s'effectue exclusivement en ligne par carte bancaire (Visa, MasterCard, American Express) 
                      via notre partenaire sécurisé Stripe. Les données de paiement sont chiffrées et sécurisées selon 
                      les standards PCI DSS.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.2 Facturation</h3>
                    <p>
                      Pour les abonnements mensuels, la facturation s'effectue chaque mois à la date anniversaire de 
                      souscription. Pour les abonnements annuels, la facturation s'effectue chaque année à la date 
                      anniversaire. Une facture électronique est envoyée par email après chaque prélèvement.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.3 Défaut de paiement</h3>
                    <p>
                      En cas de défaut de paiement, l'accès aux services payants sera suspendu après un délai de grâce 
                      de 7 jours. Le compte sera définitivement supprimé après 30 jours de défaut de paiement, sauf 
                      régularisation entre-temps.
                    </p>
                  </div>
                </div>

                {/* Article 5 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                    Droit de rétractation
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Conformément aux articles L. 221-18 et suivants du Code de la consommation, le Client dispose 
                      d'un délai de 14 jours francs pour exercer son droit de rétractation sans avoir à justifier de 
                      motifs ni à payer de pénalités.
                    </p>
                    <p>
                      Ce délai court à compter de la souscription de l'abonnement. Toutefois, le Client reconnaît et 
                      accepte expressément que l'exécution du service commence immédiatement après la souscription et 
                      renonce expressément à son droit de rétractation dès lors qu'il a commencé à utiliser les services.
                    </p>
                    <p>
                      Pour exercer ce droit, le Client doit notifier sa décision de rétractation au moyen d'une 
                      déclaration dénuée d'ambiguïté à l'adresse email : contact@monplannerpro.com ou par courrier 
                      postal à l'adresse du siège social.
                    </p>
                  </div>
                </div>

                {/* Article 6 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                    Résiliation et remboursement
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Le Client peut résilier son abonnement à tout moment depuis son espace personnel ou en contactant 
                      le service client. La résiliation prend effet à la fin de la période de facturation en cours, 
                      sans remboursement au prorata.
                    </p>
                    <p>
                      Mon Planner Pro se réserve le droit de résilier immédiatement l'abonnement en cas de manquement 
                      grave du Client à ses obligations, notamment en cas d'utilisation frauduleuse des services ou 
                      de non-respect des conditions d'utilisation.
                    </p>
                    <p>
                      En cas de résiliation pour motif légitime imputable à Mon Planner Pro, le Client sera remboursé 
                      au prorata de la période non utilisée. Les remboursements s'effectuent par le même moyen de 
                      paiement que celui utilisé pour la transaction initiale, dans un délai de 14 jours ouvrés.
                    </p>
                  </div>
                </div>

                {/* Article 7 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
                    Responsabilité et garanties
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Mon Planner Pro s'engage à fournir les services avec diligence et selon les règles de l'art. 
                      La Société garantit la conformité des services aux spécifications décrites sur le site internet.
                    </p>
                    <p>
                      La responsabilité de Mon Planner Pro ne saurait être engagée en cas de force majeure, de fait 
                      du prince, ou de cause étrangère échappant à son contrôle. La Société ne garantit pas l'absence 
                      d'interruption ou d'erreur dans l'accès ou l'utilisation du site et des services.
                    </p>
                    <p>
                      En tout état de cause, la responsabilité de Mon Planner Pro est limitée au montant des sommes 
                      effectivement perçues par la Société au titre du contrat au cours des 12 mois précédant le fait 
                      générateur de responsabilité.
                    </p>
                  </div>
                </div>

                {/* Article 8 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">8</span>
                    Protection des données personnelles
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Mon Planner Pro s'engage à protéger les données personnelles de ses clients conformément au 
                      Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
                    </p>
                    <p>
                      Les données collectées sont nécessaires à la fourniture des services et à la gestion de la 
                      relation client. Elles ne sont jamais transmises à des tiers sans consentement explicite, 
                      sauf obligation légale.
                    </p>
                    <p>
                      Le Client dispose d'un droit d'accès, de rectification, d'effacement, de portabilité et 
                      d'opposition concernant ses données personnelles. Ces droits peuvent être exercés en contactant 
                      le délégué à la protection des données à l'adresse : dpo@monplannerpro.com.
                    </p>
                  </div>
                </div>

                {/* Article 9 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">9</span>
                    Propriété intellectuelle
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Tous les éléments du site www.monplannerpro.com et des services (textes, images, sons, vidéos, 
                      logiciels, bases de données, etc.) sont protégés par le droit de la propriété intellectuelle et 
                      appartiennent à Mon Planner Pro ou à ses partenaires.
                    </p>
                    <p>
                      L'abonnement confère au Client un droit d'usage personnel, non exclusif et non cessible des 
                      services, dans le cadre de l'utilisation normale prévue. Toute reproduction, représentation, 
                      modification ou exploitation commerciale est strictement interdite.
                    </p>
                    <p>
                      Les données et contenus créés par le Client dans les planners restent sa propriété exclusive. 
                      Mon Planner Pro s'engage à ne pas utiliser ces contenus à des fins commerciales sans autorisation 
                      expresse du Client.
                    </p>
                  </div>
                </div>

                {/* Article 10 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">10</span>
                    Réclamations et litiges
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Pour toute réclamation, le Client peut contacter le service client de Mon Planner Pro par email 
                      à contact@monplannerpro.com ou par téléphone au 06 95 45 77 68, du lundi au vendredi de 9h à 18h.
                    </p>
                    <p>
                      En cas de litige, les parties s'efforceront de trouver une solution amiable. À défaut d'accord 
                      dans un délai de 30 jours, le Client peut saisir le médiateur de la consommation compétent ou 
                      les juridictions compétentes.
                    </p>
                    <p>
                      Les présentes CGV sont soumises au droit français. En cas de litige, les tribunaux de Paris 
                      seront seuls compétents, sauf dispositions d'ordre public contraires.
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-blue-50 rounded-lg p-6 mt-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Informations de contact</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span>contact@monplannerpro.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span>06 95 45 77 68</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span>Paris, France</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span>Dernière mise à jour : {lastUpdate}</span>
                    </div>
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

export default CGV

