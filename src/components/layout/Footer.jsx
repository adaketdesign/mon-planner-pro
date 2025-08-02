import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'
import logoImage from '../../assets/logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Planners',
      links: [
        { name: 'Planner Semainier', href: '/planners/semainier' },
        { name: 'Routine Planner', href: '/planners/routine' },
        { name: 'GlowUp Planner', href: '/planners/glowup' },
        { name: 'Projet Planner', href: '/planners/projet' }
      ]
    },
    {
      title: 'Entreprise',
      links: [
        { name: 'À propos', href: '/about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Carrières', href: '/careers' },
        { name: 'Presse', href: '/press' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Centre d\'aide', href: '/help' },
        { name: 'Contact', href: '/contact' },
        { name: 'Communauté', href: '/community' },
        { name: 'Statut', href: '/status' }
      ]
    },
    {
      title: 'Légal',
      links: [
        { name: 'CGV', href: '/cgv' },
        { name: 'Politique de confidentialité', href: '/confidentialite' },
        { name: 'Conditions de remboursement', href: '/remboursement' },
        { name: 'Centre d\'aide', href: '/aide' }
      ]
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src={logoImage} 
                alt="Mon Planner Pro" 
                className="h-10 w-auto filter brightness-0 invert"
              />
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Transformez votre organisation avec nos planners digitaux innovants. 
              L'excellence parisienne au service de votre productivité.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <a 
                  href="mailto:hello@monplannerpro.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  hello@monplannerpro.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <a 
                  href="tel:+33123456789" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +33 1 23 45 67 89
                </a>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="text-white font-semibold mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Mon Planner Pro. Tous droits réservés.
            </div>
            
            {/* Made with Manus badge */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">Made with</span>
              <div className="bg-gray-800 px-3 py-1 rounded-full">
                <span className="text-white text-sm font-medium">Manus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

