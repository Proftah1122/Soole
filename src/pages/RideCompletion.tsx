import { RideCompletionHeader } from '../components/completion/RideCompletionHeader';
import { RideSummary } from '../components/completion/RideSummary';
import { RatingForm } from '../components/completion/RatingForm';
import { useRideCompletion } from '../hooks/useRideCompletion';

export const RideCompletionPage = () => {
  const { 
    handleSubmitFeedback, 
    handleBookNewRide,
    isSubmitting 
  } = useRideCompletion();

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-md mx-auto space-y-6">
        <RideCompletionHeader />
        <RideSummary />
        <RatingForm 
          onSubmit={handleSubmitFeedback}
          onBookNewRide={handleBookNewRide}
          isSubmitting={isSubmitting}
        />
      </div>
    </div>
  );
};