import { createContext, useContext, useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('token'));

  const API_URL = import.meta.env.VITE_API_URL;

  const register = async (name, email, password, photoURL) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    await updateProfile(userCredential.user, {
      displayName: name,
      photoURL: photoURL || ''
    });

    const response = await axios.post(`${API_URL}/api/auth/register`, {
      name,
      email,
      password,
      photoURL: photoURL || ''
    });

    const { token: jwtToken, user: userData } = response.data;
    localStorage.setItem('token', jwtToken);
    setToken(jwtToken);
    setUser(userData);

    return userCredential;
  };

  const login = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    const response = await axios.post(`${API_URL}/api/auth/login`, {
      email,
      password
    });

    const { token: jwtToken, user: userData } = response.data;
    localStorage.setItem('token', jwtToken);
    setToken(jwtToken);
    setUser(userData);

    return userCredential;
  };

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    const { displayName, email, photoURL } = userCredential.user;

    const response = await axios.post(`${API_URL}/api/auth/social-login`, {
      name: displayName,
      email,
      photoURL
    });

    const { token: jwtToken, user: userData } = response.data;
    localStorage.setItem('token', jwtToken);
    setToken(jwtToken);
    setUser(userData);

    return userCredential;
  };

  const logout = async () => {
    await signOut(auth);
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  const getUserData = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUser(response.data.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
      // If token is invalid, clear it
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
      }
    }
  };

  // ✅ FIXED: Removed token from dependency array to prevent infinite loop
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser && token) {
        await getUserData();
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []); // ✅ Changed from [token] to []

  const value = {
    user,
    loading,
    token,
    register,
    login,
    googleLogin,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};