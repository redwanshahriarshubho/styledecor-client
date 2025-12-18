import { useAuth } from '../../contexts/AuthContext';
import Loading from '../ui/Loading';

const Profile = () => {
  const { user, loading } = useAuth();

  if (loading) return <Loading />;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-primary mb-6">My Profile</h1>
      <div className="bg-white shadow-soft rounded-lg p-6 max-w-lg">
        <div className="flex items-center space-x-6">
          <img
            src={user?.photoURL || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-2 border-primary"
          />
          <div>
            <p className="text-xl font-semibold">{user?.name}</p>
            <p className="text-gray-500">{user?.email}</p>
            <p className="text-gray-500">Role: {user?.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
