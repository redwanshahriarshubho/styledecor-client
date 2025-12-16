import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';

import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';

// Layouts
import MainLayout from './components/layout/MainLayout';
import DashboardLayout from './components/dashboard/DashboardLayout';

// Public Pages
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import CoverageMap from './pages/CoverageMap';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ErrorPage from './pages/ErrorPage';

// User Pages
import MyBookings from './pages/user/MyBookings';
import Payment from './pages/user/Payment';
import PaymentHistory from './pages/user/PaymentHistory';

// Dashboard Shared
import Profile from './components/dashboard/Profile';

// Admin Pages ✅ CORRECT PATHS
import ManageBookings from './pages/admin/ManageBookings';
import ManageServices from './pages/admin/ManageServices';
import ManageUsers from './pages/admin/ManageUsers';
import Revenue from './pages/admin/Revenue';
import Analytics from './pages/admin/Analytics';

// Decorator Pages
import AssignedProjects from './pages/decorator/AssignedProjects';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: 'services', element: <Services /> },
        { path: 'services/:id', element: <ServiceDetails /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
        { path: 'coverage-map', element: <CoverageMap /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
      ],
    },

    // 🔐 PROTECTED DASHBOARD
    {
      path: '/dashboard',
      element: (
        <PrivateRoute allowedRoles={['user', 'admin', 'decorator']}>
          <DashboardLayout />
        </PrivateRoute>
      ),
      errorElement: <ErrorPage />,
      children: [
        // Default Dashboard Page
        {
          index: true,
          element: (
            <PrivateRoute allowedRoles={['user', 'admin', 'decorator']}>
              <Profile />
            </PrivateRoute>
          ),
        },

        {
          path: 'profile',
          element: (
            <PrivateRoute allowedRoles={['user', 'admin', 'decorator']}>
              <Profile />
            </PrivateRoute>
          ),
        },

        // User Routes
        {
          path: 'my-bookings',
          element: (
            <PrivateRoute allowedRoles={['user', 'admin', 'decorator']}>
              <MyBookings />
            </PrivateRoute>
          ),
        },

        {
          path: 'payment-history',
          element: (
            <PrivateRoute allowedRoles={['user', 'admin']}>
              <PaymentHistory />
            </PrivateRoute>
          ),
        },

        {
          path: 'payments/:bookingId',
          element: (
            <PrivateRoute allowedRoles={['user', 'admin']}>
              <Payment />
            </PrivateRoute>
          ),
        },

        // Admin Routes
        {
          path: 'manage-bookings',
          element: (
            <PrivateRoute allowedRoles={['admin']}>
              <ManageBookings />
            </PrivateRoute>
          ),
        },

        {
          path: 'manage-services',
          element: (
            <PrivateRoute allowedRoles={['admin']}>
              <ManageServices />
            </PrivateRoute>
          ),
        },

        {
          path: 'manage-users',
          element: (
            <PrivateRoute allowedRoles={['admin']}>
              <ManageUsers />
            </PrivateRoute>
          ),
        },

        {
          path: 'revenue',
          element: (
            <PrivateRoute allowedRoles={['admin']}>
              <Revenue />
            </PrivateRoute>
          ),
        },

        {
          path: 'analytics',
          element: (
            <PrivateRoute allowedRoles={['admin']}>
              <Analytics />
            </PrivateRoute>
          ),
        },

        // Decorator Routes
        {
          path: 'assigned-projects',
          element: (
            <PrivateRoute allowedRoles={['decorator', 'admin']}>
              <AssignedProjects />
            </PrivateRoute>
          ),
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" />
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
