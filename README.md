# 🎨 StyleDecor - Home & Ceremony Decoration Booking System (Client)

> A modern React-based web application for booking decoration services

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge)](https://styledecor-client17.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/redwanshahriarshubho)

---

## 📌 Project Name

**StyleDecor Client** - A smart appointment management system for home and ceremony decoration services.

---

## 🎯 Purpose

StyleDecor solves the challenges faced by local decoration businesses:
- ❌ No online booking system
- ❌ Walk-in crowds and long waiting times
- ❌ Difficulty managing decorators and specialties
- ❌ No system for on-site service coordination

**Our Solution:**
- ✅ Smart appointment scheduling
- ✅ Decorator availability and specialty management
- ✅ On-site service coordination workflow
- ✅ Real-time project status updates
- ✅ Integrated Stripe payments
- ✅ Powerful dashboard and analytics

---

## 🌐 Live URLs

- **Live Website:** https://styledecor-client17.vercel.app/
- **Backend API:** https://styledecor-server17.netlify.app/
- **GitHub Client:** [Add your client GitHub repo URL here]
- **GitHub Server:** [Add your server GitHub repo URL here]

---

## ✨ Key Features

### For Users 🙋
- Browse decoration services by category
- Advanced search and filter (price range, category, name)
- View top-rated decorators with ratings
- Book consultations and on-site decoration services
- Secure payment via Stripe
- Track booking status in real-time
- View booking and payment history
- Update profile information

### For Decorators 🎨
- View assigned projects and schedules
- Update project status (6-step workflow)
- Today's schedule dashboard
- Earnings summary
- Payment history tracking

### For Admins 👑
- Complete service management (CRUD)
- User management and role assignment
- Assign decorators to bookings
- Revenue monitoring and analytics
- Service demand charts
- Approve/disable decorator accounts
- View all bookings and payments

### Technical Features ⚡
- JWT-based authentication
- Role-based access control (User, Decorator, Admin)
- Firebase authentication integration
- Interactive service coverage map (React Leaflet)
- Animated hero section (Framer Motion)
- Real-time notifications (React Hot Toast)
- Responsive design (mobile, tablet, desktop)
- Loading states and error handling
- Protected routes with persistent login

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Create .env.local file
VITE_API_URL=https://styledecor-server17.netlify.app/api
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_key

# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Run development server
npm run dev
```

**App runs at:** http://localhost:5173

---

## 📦 NPM Packages Used

### Core
- `react` (^18.3.1) - UI library
- `react-dom` (^18.3.1) - React DOM renderer
- `react-router-dom` (^6.x) - Client-side routing
- `vite` (^5.x) - Build tool and dev server

### Styling
- `tailwindcss` (^3.x) - Utility-first CSS framework
- `daisyui` (^4.x) - Component library for Tailwind
- `postcss` - CSS processing
- `autoprefixer` - CSS vendor prefixing

### State Management & Context
- `react` context API - Global state management

### Forms & Validation
- `react-hook-form` - Form management
- Form validation utilities

### UI Components & Icons
- `lucide-react` - Icon library
- `react-icons` - Additional icons

### HTTP & API
- `axios` - HTTP client for API calls

### Authentication
- `firebase` (^10.x) - Authentication provider

### Payment
- `@stripe/stripe-js` - Stripe payment integration
- `@stripe/react-stripe-js` - React components for Stripe

### Animations
- `framer-motion` - Animation library

### Maps
- `react-leaflet` (^4.x) - Interactive maps
- `leaflet` - Mapping library

### Notifications
- `react-hot-toast` - Toast notifications

### Date/Time
- `date-fns` - Date formatting and manipulation

### Development
- `@vitejs/plugin-react` - Vite React plugin
- `eslint` - Code linting
- `@types/react` - TypeScript types for React

---

## 📁 Project Structure

```
styledecor-client/
├── public/
│   └── assets/                    # Static images
├── src/
│   ├── components/
│   │   ├── dashboard/
│   │   │   └── DashboardLayout.jsx
│   │   ├── home/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── ServiceCard.jsx
│   │   │   ├── ServicesSection.jsx
│   │   │   ├── TopDecoratorsSection.jsx
│   │   │   └── CoverageMapSection.jsx
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── MainLayout.jsx
│   │   ├── ui/
│   │   │   └── Loading.jsx
│   │   └── PrivateRoute.jsx
│   ├── contexts/
│   │   └── AuthContext.jsx         # Authentication state
│   ├── firebase/
│   │   └── firebase.config.js      # Firebase configuration
│   ├── pages/
│   │   ├── admin/
│   │   │   ├── ManageServices.jsx
│   │   │   ├── ManageBookings.jsx
│   │   │   ├── ManageUsers.jsx
│   │   │   ├── Revenue.jsx
│   │   │   └── Analytics.jsx
│   │   ├── auth/
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── decorator/
│   │   │   └── AssignedProjects.jsx
│   │   ├── user/
│   │   │   ├── MyBookings.jsx
│   │   │   ├── Payment.jsx
│   │   │   └── PaymentHistory.jsx
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── ServiceDetails.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── CoverageMap.jsx
│   │   └── ErrorPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.local                      # Environment variables
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 👥 User Roles & Permissions

### 🙋 Regular User
**Can:**
- Browse and search decoration services
- View decorator profiles with ratings
- Book decoration services
- Make secure payments via Stripe
- Track booking status
- View booking history
- View payment history
- Update profile information
- Cancel bookings

### 🎨 Decorator
**All User features, plus:**
- View assigned projects
- Today's schedule dashboard
- Update project status (step-by-step):
  1. Assigned
  2. Planning Phase
  3. Materials Prepared
  4. On the Way to Venue
  5. Setup in Progress
  6. Completed
- View earnings summary
- Check payment history

### 👑 Admin
**Full system access:**
- Create/Edit/Delete decoration services
- Manage all users (view, promote, disable)
- Promote users to decorators
- Assign decorators to bookings
- View all bookings and payments
- Revenue monitoring dashboard
- Analytics and service demand charts
- Approve/disable decorator accounts
- System-wide management

---

## 🎨 Pages Overview

### Public Pages
- **Home** - Hero, services showcase, top decorators, coverage map
- **Services** - All services with search, filter, pagination
- **Service Details** - Detailed service info with booking button
- **About** - Company information
- **Contact** - Contact form and details
- **Coverage Map** - Interactive service area map
- **Login/Register** - Authentication pages
- **404 Error Page** - Custom error page

### Protected Pages (User)
- **My Profile** - View and edit profile
- **My Bookings** - Booking history with status tracking
- **Payment** - Stripe payment interface
- **Payment History** - Transaction records

### Protected Pages (Decorator)
- **My Assigned Projects** - Current assignments
- **Today's Schedule** - Daily task overview
- **Update Status** - Project progress updates

### Protected Pages (Admin)
- **Manage Services** - CRUD operations for services
- **Manage Users** - User administration
- **Manage Bookings** - All booking management
- **Revenue** - Financial analytics
- **Analytics** - Service demand charts

---

## 🔧 Environment Variables

Create a `.env.local` file:

```env
# Backend API
VITE_API_URL=https://styledecor-server17.netlify.app/api

# Stripe (Get from https://dashboard.stripe.com/apikeys)
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key

# Firebase (Get from Firebase Console)
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

## 🐛 Troubleshooting

### Connection Refused Error
**Issue:** Backend server not running  
**Solution:**
```bash
# Make sure backend is deployed and running
# Check API URL in .env.local
```

### Stripe Not Loading
**Issue:** Invalid Stripe key  
**Solution:**
- Verify `VITE_STRIPE_PUBLISHABLE_KEY` starts with `pk_test_`
- Restart dev server after changing `.env.local`

### Firebase Auth Errors
**Issue:** Incorrect Firebase config  
**Solution:**
- Double-check all Firebase variables in `.env.local`
- Enable authentication methods in Firebase Console

### Build/Deploy Errors
**Solution:**
```bash
rm -rf node_modules/.vite
rm -rf node_modules
npm install
npm run build
```

---

## 📝 Available Scripts

```bash
npm run dev        # Start development server (localhost:5173)
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Lint code with ESLint
```

---

## 🚀 Deployment

This project is deployed on **Vercel**.

### Deploy Your Own

#### Vercel (Recommended)
```bash
npm install -g vercel
vercel login
vercel
```

#### Netlify
```bash
npm run build
# Drag & drop 'dist' folder to Netlify
```

### Important: Set Environment Variables
Add all `VITE_*` variables in your hosting platform's dashboard.

---

## 🎨 Design & UI

- **Framework:** Tailwind CSS + DaisyUI
- **Colors:** Modern accent colors with consistent spacing
- **Typography:** Clear visual hierarchy
- **Animations:** Framer Motion for smooth transitions
- **Icons:** Lucide React + React Icons
- **Responsive:** Mobile-first design approach
- **Components:** Reusable, modular component structure

---

## 🤝 Contributing

This is a learning project created as part of a programming assessment.

---

## 👨‍💻 Developer

**Redwan Shahriar**  
Full Stack Web Developer  
Email: redwanshahriar@example.com  
GitHub: [@redwanshahriarshubho](https://github.com/redwanshahriarshubho)

---

## 📄 License

This project was created as part of a programming assessment.

---

## 🙏 Acknowledgments

- **Firebase** - Authentication services
- **Stripe** - Secure payment processing
- **Unsplash** - High-quality images
- **DaisyUI** - Beautiful UI components
- **OpenStreetMap** - Interactive mapping via React Leaflet
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Hosting platform
- **React Community** - Amazing ecosystem and support

---

**Developed with ❤️ by Redwan Shahriar**