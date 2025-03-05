import React, { useState, FormEvent } from 'react';
import { addBetaSignup, BetaSignup } from '@/lib/betaSignupService';
import useAnalytics from '@/lib/useAnalytics';

interface BetaSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BetaSignupModal: React.FC<BetaSignupModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<BetaSignup>({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const { trackEvent } = useAnalytics();

  // Close modal and reset its state
  const handleClose = () => {
    onClose();
    // Reset form after a short delay to allow animation to complete
    setTimeout(() => {
      setFormData({ name: '', email: '' });
      setSubmitStatus(null);
      setErrorMessage('');
    }, 300);
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  // Submit form to Firebase
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    // Track submission attempt
    trackEvent({ 
      type: 'BETA_SIGNUP_SUBMITTED', 
      email: formData.email 
    });

    try {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address");
      }

      // Add the beta signup to Firebase
      await addBetaSignup(formData);

      // Track successful submission
      trackEvent({ 
        type: 'BETA_SIGNUP_SUCCESS', 
        email: formData.email 
      });

      setSubmitStatus('success');
      
      // Optional: Auto-close after success
      setTimeout(() => {
        handleClose();
      }, 3000);
      
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      
      // Set user-friendly error message
      const errorMsg = error instanceof Error 
        ? error.message 
        : 'Something went wrong. Please try again.';
      
      setErrorMessage(errorMsg);
      
      // Track error
      trackEvent({ 
        type: 'BETA_SIGNUP_ERROR', 
        error: errorMsg 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white dark:bg-surface rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-scaleIn">
        <div className="bg-primary p-4 text-white">
          <h3 className="font-heading text-xl font-semibold">Join the Dekr Beta</h3>
        </div>
        <div className="p-6">
          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="text-green-500 text-5xl mb-4">✓</div>
              <h4 className="font-heading text-xl font-semibold mb-2 text-on-background">Thanks for Applying!</h4>
              <p className="text-on-surface-variant">
                We&apos;ve added you to our beta waitlist. We&apos;ll notify you if you&apos;re selected.
              </p>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:bg-surface-variant text-gray-900 placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:bg-surface-variant text-gray-900 placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {submitStatus === 'error' && (
                <div className="p-2 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  {errorMessage || 'Something went wrong. Please try again.'}
                </div>
              )}

              <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                <p>This is an application for the beta program. Submission does not guarantee beta access. We&apos;ll notify you if you&apos;re selected.</p>
              </div>

              <div className="flex gap-3 mt-6">
                <button 
                  type="submit"
                  className="flex-1 bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-primary/90 transition duration-300 flex justify-center items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                  ) : null}
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
                <button 
                  type="button"
                  className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
                  onClick={handleClose}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BetaSignupModal; 