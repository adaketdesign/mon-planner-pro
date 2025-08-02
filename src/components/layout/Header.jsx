import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import logoImage from '../../assets/logo.png'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { user } = useAuth()

  const navigationItems = [
    { 
      name: 'Accueil', 
      href: '/', 
      color: 'bg-green-500 text-white hover:bg-green-600',
      active: location.pathname === '/'
    },
    { 
      name: 'Planners', 
      href: '/planners', 
      color: 'bg-blue-500 text-white hover:bg-blue-600',
      active: location.pathname.startsWith('/planners')
    },
    { 
      name: 'À propos', 
      href: '/a-propos', 
      color: 'bg-orange-500 text-white hover:bg-orange-600',
      active: location.pathname === '/a-propos'
    },
    { 
      name: 'Tarification', 
      href: '/tarification', 
      color: 'bg-purple-500 text-white hover:bg-purple-600',
      active: location.pathname === '/tarification'
    },
    { 
      name: 'Blog', 
      href: '/blog', 
      color: 'bg-violet-500 text-white hover:bg-violet-600',
      active: location.pathname.startsWith('/blog')
    },
    { 
      name: 'Contact', 
      href: '/contact', 
      color: 'bg-teal-500 text-white hover:bg-teal-600',
      active: location.pathname === '/contact'
    }
  ]

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src={logoImage} 
                alt="Mon Planner Pro" 
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  item.active 
                    ? item.color 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <div className="flex items-center space-x-3">
                <Link to="/dashboard">
                  <Button variant="outline" className="border-pink-500 text-pink-600 hover:bg-pink-50">
                    Dashboard
                  </Button>
                </Link>
              </div>
            ) : (
              <>
                <Link to="/connexion">
                  <Button 
                    variant="outline" 
                    className="border-pink-500 text-pink-600 hover:bg-pink-50 font-semibold"
                  >
                    Connexion
                  </Button>
                </Link>
                <Link to="/inscription">
                  <Button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6">
                    Commencer gratuitement
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    item.active
                      ? 'bg-pink-50 text-pink-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t space-y-2">
                {user ? (
                  <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full border-pink-500 text-pink-600">
                      Dashboard
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link to="/connexion" onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full border-pink-500 text-pink-600">
                        Connexion
                      </Button>
                    </Link>
                    <Link to="/inscription" onClick={() => setMobileMenuOpen(false)}>
                      <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                        Commencer gratuitement
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

