import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera } from 'lucide-react';
import { AuthButton } from '../components/buttons/AuthButton';
import { FormInput } from '../components/auth/FormInput';
import { GenderSelect } from '../components/profile/GenderSelect';
import { CameraCapture } from '../components/profile/CameraCapture';

export const CompleteProfilePage = () => {
  const navigate = useNavigate();
  const [showCamera, setShowCamera] = useState(false);
  const [profileData, setProfileData] = useState({
    profilePicture: '',
    gender: '',
    address: ''
  });
  const [errors, setErrors] = useState({
    profilePicture: '',
    gender: '',
    address: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.values(newErrors).every(error => !error)) {
      try {
        // TODO: API integration for profile completion
        navigate('/dashboard');
      } catch (error) {
        console.error('Profile completion failed:', error);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const validateForm = () => {
    const newErrors = {
      profilePicture: !profileData.profilePicture ? 'Profile picture is required' : '',
      gender: !profileData.gender ? 'Please select your gender' : '',
      address: !profileData.address ? 'Address is required' : ''
    };
    return newErrors;
  };

  const handlePhotoCapture = (photoUrl: string) => {
    setProfileData(prev => ({ ...prev, profilePicture: photoUrl }));
    setShowCamera(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
            Complete Your Profile
          </h2>
          <p className="text-gray-400">Just a few more details to get you started</p>
        </div>

        {showCamera ? (
          <CameraCapture onCapture={handlePhotoCapture} onClose={() => setShowCamera(false)} />
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                {profileData.profilePicture ? (
                  <img
                    src={profileData.profilePicture}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover border-4 border-purple-500"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-gray-800 flex items-center justify-center border-4 border-gray-700">
                    <Camera size={40} className="text-gray-400" />
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => setShowCamera(true)}
                  className="absolute bottom-0 right-0 bg-purple-500 p-2 rounded-full hover:bg-purple-600 transition-colors"
                >
                  <Camera size={20} />
                </button>
              </div>
              {errors.profilePicture && (
                <p className="text-red-500 text-sm">{errors.profilePicture}</p>
              )}
            </div>

            <GenderSelect
              value={profileData.gender}
              onChange={(value) => setProfileData(prev => ({ ...prev, gender: value }))}
              error={errors.gender}
            />

            <FormInput
              label="Home Address"
              value={profileData.address}
              onChange={(e) => setProfileData(prev => ({ ...prev, address: e.target.value }))}
              error={errors.address}
              placeholder="Enter your address"
            />

            <AuthButton
              variant="primary"
              type="submit"
              className="w-full"
            >
              Complete Profile
            </AuthButton>
          </form>
        )}
      </div>
    </div>
  );
};