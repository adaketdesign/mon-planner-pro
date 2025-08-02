# Mon Planner Pro

Une application web moderne de planification et d'organisation personnelle.

## 🚀 Fonctionnalités

### 📅 Planners Disponibles
- **Planner Semainier** - Organisation hebdomadaire complète
- **Routine Planner** - Routines matinales et planification journalière  
- **GlowUp Planner** - Développement personnel et transformation (Premium)
- **Projet Planner** - Structuration de projets business (9 pages)

### 💰 Système d'Abonnement
- **Freemium** (0€) - Accès limité au Planner Semainier
- **Pro** (1,99€/mois) - Accès complet Semainier + Routine
- **Premium** (4,99€/mois) - Tous les planners + fonctionnalités avancées

### 🎨 Fonctionnalités Techniques
- Interface moderne avec React + Tailwind CSS
- Authentification utilisateur avec fallback localStorage
- Sauvegarde automatique des données
- Design responsive mobile/desktop
- Système de chat automatique
- Blog avec articles inspirants
- Pages légales complètes (CGV, Confidentialité, Remboursement)

## 🛠️ Technologies

- **Frontend**: React 18, Vite, Tailwind CSS, shadcn/ui
- **Backend**: Supabase (avec fallback localStorage)
- **Paiements**: Stripe (préparé)
- **Déploiement**: Vercel
- **Domaine**: monplannerpro.com

## 📦 Installation

```bash
# Cloner le projet
git clone <repository-url>
cd mon-planner-pro

# Installer les dépendances
pnpm install

# Démarrer en développement
pnpm run dev

# Construire pour la production
pnpm run build
```

## 🌐 Déploiement

### Vercel (Recommandé)

1. **Connecter le repository à Vercel**
2. **Configurer les variables d'environnement** (optionnel pour le mode fallback)
3. **Déployer automatiquement**

### Variables d'environnement (Optionnelles)

```env
# Supabase
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Stripe
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

## 🔧 Configuration Domaine

Pour configurer le domaine `monplannerpro.com` :

1. **Dans Vercel Dashboard** :
   - Aller dans Settings > Domains
   - Ajouter `monplannerpro.com` et `www.monplannerpro.com`

2. **Chez votre registrar de domaine** :
   - Configurer les DNS pour pointer vers Vercel
   - A record: `@` → `76.76.19.61`
   - CNAME record: `www` → `cname.vercel-dns.com`

## 📱 Mode Fallback

L'application fonctionne en mode fallback avec localStorage quand Supabase n'est pas configuré :

- ✅ Authentification simulée
- ✅ Sauvegarde locale des données
- ✅ Toutes les fonctionnalités UI
- ✅ Système d'abonnement (simulation)

## 🎯 Structure du Projet

```
src/
├── components/          # Composants React réutilisables
│   ├── auth/           # Authentification
│   ├── chat/           # ChatBot
│   ├── layout/         # Layout et navigation
│   ├── subscription/   # Gestion abonnements
│   └── ui/             # Composants UI (shadcn)
├── contexts/           # Contextes React
├── hooks/              # Hooks personnalisés
├── lib/                # Utilitaires et services
├── pages/              # Pages de l'application
│   ├── legal/          # Pages légales
│   └── planners/       # Modules de planification
└── styles/             # Styles CSS
```

## 🚀 Prêt pour Production

L'application est **production-ready** avec :

- ✅ Interface complète et responsive
- ✅ Système d'authentification fonctionnel
- ✅ 4 modules de planification complets
- ✅ Système d'abonnement avec restrictions
- ✅ Pages légales conformes
- ✅ Blog avec contenu inspirant
- ✅ Chat automatique pour support
- ✅ Optimisations SEO et performance
- ✅ Configuration Vercel prête

## 📞 Contact

- **Email**: contact@monplannerpro.com
- **Téléphone**: 06 95 45 77 68
- **Adresse**: Paris, France

## 📄 Licence

Tous droits réservés - Mon Planner Pro © 2025

