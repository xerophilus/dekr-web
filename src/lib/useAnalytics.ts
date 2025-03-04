import { useCallback } from 'react';

// Analytics event types
export type AnalyticsEvent = 
  | { type: 'BETA_SIGNUP_OPENED' }
  | { type: 'BETA_SIGNUP_SUBMITTED', email: string }
  | { type: 'BETA_SIGNUP_SUCCESS', email: string }
  | { type: 'BETA_SIGNUP_ERROR', error: string };

/**
 * Custom hook for tracking analytics events
 * In a production app, this would integrate with a real analytics provider
 */
export function useAnalytics() {
  /**
   * Track an analytics event
   */
  const trackEvent = useCallback((event: AnalyticsEvent) => {
    // In development, just log to console
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics]', event);
    }
    
    // In production, this would send to your analytics provider
    // Example:
    // if (typeof window !== 'undefined' && window.gtag) {
    //   window.gtag('event', event.type, { ...event });
    // }
  }, []);
  
  return { trackEvent };
}

export default useAnalytics; 