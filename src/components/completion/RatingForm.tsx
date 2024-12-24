import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { AuthButton } from '../buttons/AuthButton';

interface RatingFormProps {
  onSubmit: (data: RatingData) => void;
  onBookNewRide: () => void;
  isSubmitting: boolean;
}

interface RatingData {
  rating: number;
  comment: string;
  issues: string[];
}

export const RatingForm: React.FC<RatingFormProps> = ({
  onSubmit,
  onBookNewRide,
  isSubmitting
}) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [selectedIssues, setSelectedIssues] = useState<string[]>([]);

  const commonIssues = [
    'Driver was late',
    'Car was not clean',
    'Driver was rude',
    'Route was inefficient',
    'AC issues'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ rating, comment, issues: selectedIssues });
  };

  const toggleIssue = (issue: string) => {
    setSelectedIssues(prev =>
      prev.includes(issue)
        ? prev.filter(i => i !== issue)
        : [...prev, issue]
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Star Rating */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-200">
          Rate your experience
        </label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className="focus:outline-none"
            >
              <Star
                size={32}
                className={`${
                  star <= rating
                    ? 'fill-yellow-500 text-yellow-500'
                    : 'text-gray-600'
                } transition-colors`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Common Issues */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-200">
          Any issues with your ride?
        </label>
        <div className="grid grid-cols-2 gap-2">
          {commonIssues.map((issue) => (
            <button
              key={issue}
              type="button"
              onClick={() => toggleIssue(issue)}
              className={`p-2 text-sm rounded-lg border transition-colors text-left
                ${
                  selectedIssues.includes(issue)
                    ? 'border-purple-500 bg-purple-500/10 text-white'
                    : 'border-gray-700 text-gray-400 hover:border-gray-600'
                }`}
            >
              {issue}
            </button>
          ))}
        </div>
      </div>

      {/* Comment Box */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-200">
          Additional comments
        </label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg 
            focus:ring-2 focus:ring-purple-500 transition-all
            text-white placeholder:text-gray-400"
          rows={4}
          placeholder="Tell us about your experience..."
        />
      </div>

      <div className="flex gap-4">
        <AuthButton
          variant="secondary"
          onClick={onBookNewRide}
          className="flex-1"
          type="button"
        >
          Book Another Ride
        </AuthButton>

        <AuthButton
          variant="primary"
          type="submit"
          disabled={!rating || isSubmitting}
          className="flex-1"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
        </AuthButton>
      </div>
    </form>
  );
};