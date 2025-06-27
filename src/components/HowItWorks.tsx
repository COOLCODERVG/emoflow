
import React, { useEffect, useRef } from 'react';

const HowItWorks = () => {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    stepRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      stepRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Analyze',
      description: 'EmoFlow continuously analyzes your voice, facial expressions, and behavior patterns to detect your emotional and mental state in real-time.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12a3 3 0 0 0 0-6 3 3 0 0 0 0 6Z"></path>
          <path d="M13 19c-3.3-2.2-5-4-5-6 0-.7.4-1.3 1-1.7"></path>
          <path d="M22 19c-3.3-2.2-5-4-5-6 0-3.4 4.3-4 6-2"></path>
          <path d="M3 19c3.3-2.2 5-4 5-6 0-3.4-4.3-4-6-2"></path>
        </svg>
      )
    },
    {
      number: '02',
      title: 'Prioritize',
      description: 'Based on your mental state, EmoFlow intelligently prioritizes tasks, adjusting complexity and pacing to match your current capacity.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      )
    },
    {
      number: '03',
      title: 'Optimize',
      description: 'The interface adapts to support your productivity – minimalist when focused, calm when stressed, and motivational when energy dips.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
        </svg>
      )
    },
    {
      number: '04',
      title: 'Learn',
      description: 'EmoFlow continuously learns from your interactions, creating a personalized productivity profile for increasingly precise task optimization.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12h5"></path>
          <path d="M9 12h5"></path>
          <path d="M16 12h6"></path>
          <path d="M3 7h2c1 0 1 1 2 1s1-1 2-1h2"></path>
          <path d="M3 17h2c1 0 1-1 2-1s1 1 2 1h2"></path>
          <path d="M17 7h1c1 0 1 1 2 1s1-1 2-1"></path>
          <path d="M17 17h1c1 0 1-1 2-1s1 1 2 1"></path>
        </svg>
      )
    }
  ];

  const useCases = [
    {
      title: 'Professionals',
      description: 'Adapts workflow to your stress levels, prioritizing easier tasks when overwhelmed and complex ones when highly focused.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m20 9-5-6-5 6"></path>
          <path d="m4 15 5 6 5-6"></path>
          <path d="M4 9h16"></path>
          <path d="M4 15h16"></path>
        </svg>
      )
    },
    {
      title: 'Students',
      description: 'Personalizes study sessions to match focus levels, providing breaks when fatigued and intensifying material when engaged.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      )
    },
    {
      title: 'Teams',
      description: 'Optimizes team productivity by analyzing group dynamics and suggesting task assignments based on emotional readiness.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"></path>
          <path d="M12 8v8"></path>
          <path d="M8 12h8"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-emoflow-purple/10 text-emoflow-purple font-medium text-sm mb-4">
            The Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How <span className="purple-text-gradient">EmoFlow</span> Works
          </h2>
          <p className="text-gray-600">
            A seamless four-step process that creates a responsive, emotionally-intelligent productivity system.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div 
              key={index}
              ref={el => stepRefs.current[index] = el}
              className="relative glass-card rounded-xl p-6 animate-on-scroll"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <span className="absolute -top-6 -left-2 text-7xl font-bold text-emoflow-purple/10">
                {step.number}
              </span>
              <div className="w-14 h-14 rounded-xl purple-gradient flex items-center justify-center text-white mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div 
          ref={el => stepRefs.current[4] = el}
          className="animate-on-scroll"
        >
          <div className="text-center max-w-3xl mx-auto mb-16" id="use-cases">
            <span className="inline-block py-1.5 px-4 rounded-full bg-emoflow-purple/10 text-emoflow-purple font-medium text-sm mb-4">
              Applications
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              EmoFlow <span className="purple-text-gradient">For Everyone</span>
            </h2>
            <p className="text-gray-600">
              Discover how EmoFlow can transform productivity across different domains.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                ref={el => stepRefs.current[5 + index] = el}
                className="glass-card rounded-xl p-8 animate-on-scroll"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-14 h-14 rounded-xl purple-gradient flex items-center justify-center text-white mb-6">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
                <div className="mt-6">
                  <button className="inline-flex items-center text-emoflow-purple font-medium hover:text-emoflow-purple-dark transition-colors">
                    <span>Learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;