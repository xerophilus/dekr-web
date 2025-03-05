"use client";

import Image from "next/image";
import { useState } from "react";
import BetaSignupModal from "@/components/BetaSignupModal";
import useAnalytics from "@/lib/useAnalytics";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { trackEvent } = useAnalytics();

  const openModal = () => {
    setIsModalOpen(true);
    trackEvent({ type: 'BETA_SIGNUP_OPENED' });
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="font-body">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-6 py-16 md:py-24 max-w-7xl">
          <div className="flex flex-col-reverse md:flex-row items-center">
            <div className="md:w-1/2 mt-10 md:mt-0 space-y-6">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Smarter Trading, Simplified.
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-xl">
                Swipe through stocks & crypto, track market insights, and invest with confidence—all in one intuitive platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button 
                  className="bg-accent text-primary font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-opacity-90 transition duration-300"
                  onClick={openModal}
                >
                  Join the Beta
                </button>
                <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:bg-opacity-10 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-[320px] h-[736px] md:w-[320px] md:h-[736px]">
                <div className="absolute w-full h-full rounded-3xl overflow-hidden">
                  <Image 
                    src="/DEKR-iphone-mock-up.png"
                    alt="Dekr mobile app showing cryptocurrency card for FunFair US Dollar"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-secondary dark:from-surface to-transparent"></div>
      </section>

      {/* Beta Signup Modal */}
      <BetaSignupModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Problem Statement Section */}
      <section className="py-16 md:py-24 bg-secondary dark:bg-surface">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16 text-on-background">Investing Shouldn&apos;t Be This Hard</h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-accent dark:bg-surface-variant p-8 rounded-2xl">
              <div className="flex items-start mb-4">
                <span className="text-primary text-2xl mr-3">✅</span>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2 text-on-background">Accessibility is Broken</h3>
                  <p className="text-on-surface-variant">Overcomplicated investment apps alienate beginners.</p>
                </div>
              </div>
            </div>
            <div className="bg-accent dark:bg-surface-variant p-8 rounded-2xl">
              <div className="flex items-start mb-4">
                <span className="text-primary text-2xl mr-3">✅</span>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2 text-on-background">Lack of Education</h3>
                  <p className="text-on-surface-variant">Users don&apos;t just need tools; they need to understand how to use them.</p>
                </div>
              </div>
            </div>
            <div className="bg-accent dark:bg-surface-variant p-8 rounded-2xl">
              <div className="flex items-start mb-4">
                <span className="text-primary text-2xl mr-3">✅</span>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2 text-on-background">Valuable Insights are Locked Away</h3>
                  <p className="text-on-surface-variant">High paywalls keep essential data out of reach.</p>
                </div>
              </div>
            </div>
            <div className="bg-accent dark:bg-surface-variant p-8 rounded-2xl">
              <div className="flex items-start mb-4">
                <span className="text-primary text-2xl mr-3">✅</span>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2 text-on-background">A Market Left Untapped</h3>
                  <p className="text-on-surface-variant">Millions of potential investors are sidelined.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24 bg-accent dark:bg-surface-variant">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16 text-on-background">Empowering Investors of All Levels</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-secondary dark:bg-surface p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-on-background">Radical Accessibility</h3>
              <p className="text-on-surface-variant">Intuitive, swipe-based investing that makes decision-making simple.</p>
            </div>
            <div className="bg-secondary dark:bg-surface p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-on-background">Integrated Learning</h3>
              <p className="text-on-surface-variant">Real-time AI-powered education tailored to your knowledge level.</p>
            </div>
            <div className="bg-secondary dark:bg-surface p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-on-background">Actionable Insights</h3>
              <p className="text-on-surface-variant">Simple, color-coded financial signals that make sense at a glance.</p>
            </div>
            <div className="bg-secondary dark:bg-surface p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-on-background">Seamless Execution</h3>
              <p className="text-on-surface-variant">One-tap investing and portfolio automation for efficient management.</p>
            </div>
            <div className="bg-secondary dark:bg-surface p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-on-background">Community Engagement</h3>
              <p className="text-on-surface-variant">Social investing with friends & experts to learn from others.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-secondary dark:bg-surface">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16 text-on-background">From Curious to Confident in 5 Simple Steps</h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 flex justify-center">
                <div className="bg-accent dark:bg-surface-variant h-64 w-64 rounded-full flex items-center justify-center relative shadow-lg">
                  <span className="font-heading text-6xl font-bold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">01</span>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="font-heading text-2xl font-semibold mb-4 text-on-background">Personalized Onboarding</h3>
                <p className="text-on-surface-variant">AI assesses your goals & risk tolerance to create a tailored experience.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/2 flex justify-center">
                <div className="bg-accent dark:bg-surface-variant h-64 w-64 rounded-full flex items-center justify-center relative shadow-lg">
                  <span className="font-heading text-6xl font-bold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">02</span>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="font-heading text-2xl font-semibold mb-4 text-on-background">Smart Portfolio Dashboard</h3>
                <p className="text-on-surface-variant">Easy-to-read market insights that help you make informed decisions.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 flex justify-center">
                <div className="bg-accent dark:bg-surface-variant h-64 w-64 rounded-full flex items-center justify-center relative shadow-lg">
                  <span className="font-heading text-6xl font-bold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">03</span>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="font-heading text-2xl font-semibold mb-4 text-on-background">Swipe-Based Discovery</h3>
                <p className="text-on-surface-variant">Simply swipe right on opportunities you like, and left on those you don&apos;t.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/2 flex justify-center">
                <div className="bg-accent dark:bg-surface-variant h-64 w-64 rounded-full flex items-center justify-center relative shadow-lg">
                  <span className="font-heading text-6xl font-bold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">04</span>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="font-heading text-2xl font-semibold mb-4 text-on-background">Learn As You Go</h3>
                <p className="text-on-surface-variant">Context-sensitive tips and educational content tailored to your knowledge level.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 flex justify-center">
                <div className="bg-accent dark:bg-surface-variant h-64 w-64 rounded-full flex items-center justify-center relative shadow-lg">
                  <span className="font-heading text-6xl font-bold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">05</span>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="font-heading text-2xl font-semibold mb-4 text-on-background">Invest With Confidence</h3>
                <p className="text-on-surface-variant">Execute trades seamlessly with full transparency on fees and performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16">The Future of Investing is Now</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="font-heading text-xl font-semibold mb-3">Sustainable & Ethical Investing</h3>
              <p className="text-white/80">Discover opportunities that align with your values and create positive impact.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="font-heading text-xl font-semibold mb-3">AI-Enhanced Decision Making</h3>
              <p className="text-white/80">Leverage advanced algorithms that identify patterns humans might miss.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="font-heading text-xl font-semibold mb-3">Community-Driven Insights</h3>
              <p className="text-white/80">Learn from a diverse network of investors sharing knowledge and strategies.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="font-heading text-xl font-semibold mb-3">Mobile-First Experience</h3>
              <p className="text-white/80">Manage your investments anytime, anywhere with intuitive controls.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-heading text-xl font-semibold mb-3">Visual Data Storytelling</h3>
              <p className="text-white/80">Complex financial data transformed into clear, actionable insights.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-heading text-xl font-semibold mb-3">Built-in Risk Management</h3>
              <p className="text-white/80">Intelligent tools that help protect your investments from market volatility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section id="pricing" className="py-16 md:py-24 bg-accent dark:bg-surface-variant">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16 text-on-background">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-secondary dark:bg-surface p-8 rounded-2xl shadow-lg transition duration-300 transform hover:-translate-y-1">
              <div className="text-center mb-6">
                <h3 className="font-heading text-xl font-semibold mb-2 text-on-background">Free</h3>
                <p className="text-4xl font-bold text-primary">$0<span className="text-base font-normal text-on-surface-variant">/mo</span></p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-on-surface-variant">Basic stock discovery</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-on-surface-variant">Limited swipes per day</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-on-surface-variant">Community access</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition duration-300">
                Get Started
              </button>
            </div>
            
            <div className="bg-secondary dark:bg-surface p-8 rounded-2xl shadow-lg transition duration-300 transform hover:-translate-y-1 ring-2 ring-primary">
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <span className="bg-primary text-white text-sm font-semibold py-1 px-4 rounded-full">Most Popular</span>
              </div>
              <div className="text-center mb-6 mt-2">
                <h3 className="font-heading text-xl font-semibold mb-2 text-on-background">Pro</h3>
                <p className="text-4xl font-bold text-primary">$9.99<span className="text-base font-normal text-on-surface-variant">/mo</span></p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-on-surface-variant">Unlimited stock discovery</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-on-surface-variant">Advanced financial metrics</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-on-surface-variant">AI-powered recommendations</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition duration-300">
                Join Pro
              </button>
            </div>
            
            <div className="bg-secondary dark:bg-surface p-8 rounded-2xl shadow-lg transition duration-300 transform hover:-translate-y-1">
              <div className="text-center mb-6">
                <h3 className="font-heading text-xl font-semibold mb-2 text-on-background">Expert</h3>
                <p className="text-4xl font-bold text-primary">$19.99<span className="text-base font-normal text-on-surface-variant">/mo</span></p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-on-surface-variant">Everything in Pro</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-on-surface-variant">Real-time alerts</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-on-surface-variant">Advanced portfolio analytics</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition duration-300">
                Join Expert
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-secondary dark:bg-surface">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16 text-on-background">What Beta Testers Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-accent dark:bg-surface-variant p-8 rounded-2xl">
              <div className="mb-4 text-yellow-400">★★★★★</div>
              <p className="mb-6 text-on-surface-variant italic">&quot;This app has completely changed my approach to investing. The swipe interface makes it so easy to discover new opportunities.&quot;</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary rounded-full mr-3 flex items-center justify-center text-white font-semibold">JS</div>
                <div>
                  <p className="font-semibold text-on-background">Jamie Smith</p>
                  <p className="text-sm text-on-surface-variant">New Investor</p>
                </div>
              </div>
            </div>
            
            <div className="bg-accent dark:bg-surface-variant p-8 rounded-2xl">
              <div className="mb-4 text-yellow-400">★★★★★</div>
              <p className="mb-6 text-on-surface-variant italic">&quot;The built-in education has helped me understand investing concepts I&apos;ve struggled with for years. Finally, an app that teaches while you use it!&quot;</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary rounded-full mr-3 flex items-center justify-center text-white font-semibold">AL</div>
                <div>
                  <p className="font-semibold text-on-background">Alex Liang</p>
                  <p className="text-sm text-on-surface-variant">Intermediate Investor</p>
                </div>
              </div>
            </div>
            
            <div className="bg-accent dark:bg-surface-variant p-8 rounded-2xl">
              <div className="mb-4 text-yellow-400">★★★★★</div>
              <p className="mb-6 text-on-surface-variant italic">&quot;I&apos;ve been trading for years and still find value in the insights this platform provides. The UI is clean, and the data visualization is top-notch.&quot;</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary rounded-full mr-3 flex items-center justify-center text-white font-semibold">MR</div>
                <div>
                  <p className="font-semibold text-on-background">Maria Rodriguez</p>
                  <p className="text-sm text-on-surface-variant">Experienced Trader</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">Ready to Transform Your Investing Experience?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 opacity-90">Join thousands of early adopters who are already experiencing a simpler, more intuitive way to discover and invest in opportunities.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-primary font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-opacity-90 transition duration-300"
              onClick={openModal}
            >
              Join the Beta
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:bg-opacity-10 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Trust & Security Section */}
      {/* <section className="py-16 bg-accent dark:bg-surface-variant">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="font-heading text-3xl font-bold text-center mb-8 text-on-background">Trust & Security</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-secondary dark:bg-surface p-8 rounded-2xl text-center">
              <div className="text-4xl mb-6">🔒</div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-on-background">Bank-Level Security</h3>
              <p className="text-on-surface-variant">Your data is protected with industry-leading encryption and security protocols.</p>
            </div>
            <div className="bg-secondary dark:bg-surface p-8 rounded-2xl text-center">
              <div className="text-4xl mb-6">🛡️</div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-on-background">Privacy First</h3>
              <p className="text-on-surface-variant">We never sell your personal information and maintain strict data privacy standards.</p>
            </div>
            <div className="bg-secondary dark:bg-surface p-8 rounded-2xl text-center">
              <div className="text-4xl mb-6">✅</div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-on-background">Regulatory Compliance</h3>
              <p className="text-on-surface-variant">Our platform adheres to all financial regulations and compliance requirements.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* About Us Section */}
      {/* <section className="py-16 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="font-heading text-3xl font-bold text-center mb-16">Meet the Team Behind Dekr</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl text-center">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
              <h3 className="font-heading text-xl font-semibold mb-2">David Maxwell</h3>
              <p className="text-gray-500 mb-4">Founder/CEO</p>
              <p className="text-gray-600 dark:text-gray-300">Visionary leader with extensive experience in fintech and a passion for democratizing access to financial markets.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl text-center">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
              <h3 className="font-heading text-xl font-semibold mb-2">Dr. Aaron Davis</h3>
              <p className="text-gray-500 mb-4">Co-Founder/Chief Learning Officer</p>
              <p className="text-gray-600 dark:text-gray-300">Education expert focused on creating engaging, accessible financial education experiences for investors of all levels.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl text-center">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
              <h3 className="font-heading text-xl font-semibold mb-2">Ben Pitts</h3>
              <p className="text-gray-500 mb-4">Co-Founder/Chief Technology Officer</p>
              <p className="text-gray-600 dark:text-gray-300">Technology leader specializing in AI and financial systems with a focus on building secure, intuitive trading platforms.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl text-center">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
              <h3 className="font-heading text-xl font-semibold mb-2">Tyler Seabolt</h3>
              <p className="text-gray-500 mb-4">VP of Sales</p>
              <p className="text-gray-600 dark:text-gray-300">Sales leader experienced in growing fintech solutions and building strategic partnerships in the financial industry.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl text-center">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
              <h3 className="font-heading text-xl font-semibold mb-2">Sarah Mills</h3>
              <p className="text-gray-500 mb-4">Design</p>
              <p className="text-gray-600 dark:text-gray-300">Creative designer focused on crafting beautiful, intuitive interfaces that make financial information clear and accessible.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl text-center">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
              <h3 className="font-heading text-xl font-semibold mb-2">Dr. Stephen Salzar</h3>
              <p className="text-gray-500 mb-4">Venture Advisor</p>
              <p className="text-gray-600 dark:text-gray-300">Experienced venture capital advisor with deep knowledge of fintech markets and investment strategies.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="py-12 bg-secondary dark:bg-surface text-on-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Dekr</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-on-surface-variant hover:text-primary transition duration-200">About Us</a></li>
                <li><a href="#" className="text-on-surface-variant hover:text-primary transition duration-200">Our Team</a></li>
                <li><a href="#" className="text-on-surface-variant hover:text-primary transition duration-200">Careers</a></li>
                <li><a href="#" className="text-on-surface-variant hover:text-primary transition duration-200">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-on-surface-variant hover:text-primary transition duration-200">Features</a></li>
                <li><a href="#" className="text-on-surface-variant hover:text-primary transition duration-200">Pricing</a></li>
                <li><a href="#" className="text-on-surface-variant hover:text-primary transition duration-200">Beta Program</a></li>
                <li><a href="#" className="text-on-surface-variant hover:text-primary transition duration-200">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-on-surface-variant hover:text-primary transition duration-200">Blog</a></li>
                <li><a href="#" className="text-on-surface-variant hover:text-primary transition duration-200">Support</a></li>
                <li><a href="#" className="text-on-surface-variant hover:text-primary transition duration-200">Documentation</a></li>
                <li><a href="#" className="text-on-surface-variant hover:text-primary transition duration-200">Tutorials</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-on-surface-variant hover:text-primary transition duration-200">Privacy Policy</a></li>
                <li><a href="#" className="text-on-surface-variant hover:text-primary transition duration-200">Terms of Service</a></li>
                <li><a href="#" className="text-on-surface-variant hover:text-primary transition duration-200">Cookie Policy</a></li>
                <li><a href="#" className="text-on-surface-variant hover:text-primary transition duration-200">Disclaimers</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-on-surface-variant text-sm mb-4 md:mb-0">© 2023 Dekr. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-on-surface-variant hover:text-primary transition duration-200">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-on-surface-variant hover:text-primary transition duration-200">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-on-surface-variant hover:text-primary transition duration-200">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
