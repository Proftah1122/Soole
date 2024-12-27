import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages';
import { SignUpPage } from './pages/SignUp';
import { LoginPage } from './pages/Login';
import { VerifyAccountPage } from './pages/VerifyAccount';
import { CompleteProfilePage } from './pages/CompleteProfile';
import { ForgotPasswordPage } from './pages/ForgotPassword';
import { TravelSelectionPage } from './pages/TravelSelection';
import { IntraStateTravelPage } from './pages/IntraStateTravel';
import { InterStateTravelPage } from './pages/InterStateTravel';
import { RideDetailsScreen } from './components/travel/local/RideDetailsScreen';
import { PaymentConfirmationPage } from './pages/PaymentConfirmation';
import { BookingNotificationPage } from './pages/BookingNotification';
import { CancellationSuccessPage } from './pages/CancellationSuccess';
import { RideTrackingPage } from './pages/RideTracking';
import { SharedRideTrackingPage } from './pages/SharedRideTracking';
import { RideCompletionPage } from './pages/RideCompletion';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify-account" element={<VerifyAccountPage />} />
        <Route path="/complete-profile" element={<CompleteProfilePage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        {/* Travel Selection */}
        <Route path="/travel-selection" element={<TravelSelectionPage />} />

        {/* Local Travel Flow */}
        <Route path="/local" element={<IntraStateTravelPage />} />
        <Route path="/local/confirmation" element={<RideDetailsScreen />} />

        {/* Interstate Travel Flow */}
        <Route path="/interstate" element={<InterStateTravelPage />} />

        {/* Common Booking Flow */}
        <Route path="/payment" element={<PaymentConfirmationPage />} />
        <Route path="/booking-notification" element={<BookingNotificationPage />} />
        <Route path="/cancellation-success" element={<CancellationSuccessPage />} />
        
        {/* Tracking Flow */}
        <Route path="/tracking" element={<RideTrackingPage />} />
        <Route path="/shared-tracking/:trackingId" element={<SharedRideTrackingPage />} />
        <Route path="/ride-completion" element={<RideCompletionPage />} />

        {/* Redirect dashboard to travel selection for now */}
        <Route path="/dashboard" element={<Navigate to="/travel-selection" replace />} />
      </Routes>
    </Router>
  );
}