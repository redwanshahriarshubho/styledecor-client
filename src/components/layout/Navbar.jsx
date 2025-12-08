import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Home, Palette, Info, Mail, LayoutDashboard, LogOut, User } from 'lucide-react';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out successfully!');
    } catch (error) {
      toast.error('Logout failed!');
    }
  };

  const navLinks = (
    <>
      <li>
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive ? 'text-primary font-semibold' : ''
          }
        >
          <Home size={18} />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/services" 
          className={({ isActive }) => 
            isActive ? 'text-primary font-semibold' : ''
          }
        >
          <Palette size={18} />
          Services
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            isActive ? 'text-primary font-semibold' : ''
          }
        >
          <Info size={18} />
          About
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => 
            isActive ? 'text-primary font-semibold' : ''
          }
        >
          <Mail size={18} />
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-4 lg:px-8 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={