import React, { useEffect, useRef } from 'react';

const Features = () => {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  
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
    
    featureRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      featureRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14c.2-1 .7-1.7 1.5-2"></path>
          <path d="M9 12a3 3 0 0 0 0-6 3 3 0 0 0 0 6Z"></path>
          <path d="M17 5.2A2 2 0 0 0 16 5a3 3 0 0 0-2.8 4"></path>
          <path d="M13 19c-3.3-2.2-5-4-5-6 0-.7.4-1.3 1-1.7"></path>
          <path d="M22 19c-3.3-2.2-5-4-5-6 0-3.4 4.3-4 6-2"></path>
          <path d="M3 19c3.3-2.2 5-4 5-6 0-3.4-4.3-4-6-2"></path>
        </svg>
      ),
      title: 'Multi-Sensory Emotion Detection',
      description: 'Advanced AI analyzes voice, expressions, and behavior patterns to understand your emotional state and optimize your work experience.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18"></path>
          <path d="m19 9-5 5-4-4-3 3"></path>
        </svg>
      ),
      title: 'Smart Task Prioritization',
      description: 'Tasks are automatically prioritized based on your current mental state – easier tasks when stressed, challenging ones when focused.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      ),
      title: 'Adaptive UI',
      description: 'Interface elements shift to enhance productivity – minimalist when focused, soothing when stressed, motivational when disengaged.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Z"></path>
          <path d="M15 9.586a5 5 0 1 0 0 4.828"></path>
          <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      ),
      title: 'Personalized Productivity',
      description: 'The system learns from your behavior over time to create increasingly tailored productivity recommendations.'
    }
  ];

  return (
    <section id="features" className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-emoflow-purple-softest">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-emoflow-purple/10 text-emoflow-purple font-medium text-sm mb-4">
            Key Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Emotion-Powered <span className="purple-text-gradient">Productivity</span>
          </h2>
          <p className="text-gray-600">
            EmoFlow combines cutting-edge emotion detection with adaptive task management to create a truly personalized productivity experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              ref={el => featureRefs.current[index] = el}
              className="glass-card rounded-xl p-6 animate-on-scroll"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-xl purple-gradient flex items-center justify-center text-white mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div 
          ref={el => featureRefs.current[4] = el}
          className="mt-16 glass-panel rounded-2xl p-8 animate-on-scroll bg-white/80"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block py-1.5 px-4 rounded-full bg-emoflow-purple/10 text-emoflow-purple font-medium text-sm mb-4">
                Scientifically Optimized
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Your Emotions, <span className="purple-text-gradient">Your Productivity</span>
              </h3>
              <p className="text-gray-600 mb-6">
                EmoFlow learns from your emotional patterns to create increasingly personalized productivity workflows. The more you use it, the better it understands your unique working style.
              </p>
              
              <ul className="space-y-3">
                {[
                  'Adapts tasks based on your mental state',
                  'Prevents burnout with timely breaks',
                  'Maximizes focus during peak productivity periods'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mt-1 mr-3 w-5 h-5 rounded-full purple-gradient flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-emoflow-purple-light/10 to-emoflow-purple/20 p-4 shadow-lg">
                <div className="bg-white rounded-lg h-full overflow-hidden">
                  <div className="bg-gray-50 py-3 px-4 border-b flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-emoflow-purple mr-3"></div>
                      <span className="text-sm font-medium">Productivity Analytics</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-sm font-medium text-gray-700">Current State</div>
                      <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1"></span>
                        Deep Focus
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {['Focus', 'Energy', 'Stress Level', 'Task Difficulty'].map((metric, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">{metric}</span>
                            <span className="text-gray-800 font-medium">{[90, 75, 20, 85][index]}%</span>
                          </div>
                          <div className="h-2 rounded-full bg-gray-200">
                            <div 
                              className="h-2 rounded-full purple-gradient" 
                              style={{ width: `${[90, 75, 20, 85][index]}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -right-4 -bottom-4 w-12 h-12 rounded-full bg-emoflow-purple-light opacity-30 animate-float"></div>
              <div className="absolute -left-4 top-1/3 w-8 h-8 rounded-full purple-gradient animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;