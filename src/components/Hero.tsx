import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const deltaX = (clientX - centerX) / centerX;
      const deltaY = (clientY - centerY) / centerY;
      
      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translate(${deltaX * -30}px, ${deltaY * -30}px)`;
      }
      
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate(${deltaX * 20}px, ${deltaY * 20}px)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background orbs */}
      <div 
        ref={orb1Ref}
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-emoflow-purple/20 to-emoflow-purple-light/20 blur-3xl opacity-70 transition-transform duration-300"
      />
      <div 
        ref={orb2Ref}
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gradient-to-tr from-emoflow-purple-light/30 to-purple-300/30 blur-3xl opacity-60 transition-transform duration-300"
      />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block py-1.5 px-4 rounded-full bg-emoflow-purple/10 text-emoflow-purple font-medium text-sm mb-6 animate-fade-in">
            Emotion-Based Productivity Optimizer
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <span className="purple-text-gradient">Work Smarter.</span> 
            <br className="hidden sm:block" />
            <span>Feel Better.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '400ms' }}>
            An AI-driven productivity app that adapts in real-time to your emotions, optimizing tasks and workflow based on your current mental state.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '600ms' }}>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full purple-gradient text-white font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95">
              Boost Your Productivity
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-gray-200 text-gray-700 font-medium shadow-sm hover:shadow-md transition-all hover:bg-gray-50">
              How It Works
            </button>
          </div>
        </div>
        
        {/* Hero preview */}
        <div className="mt-20 max-w-5xl mx-auto animate-slide-up" style={{ animationDelay: '800ms' }}>
          <div className="relative">
            <div className="glass-panel rounded-2xl overflow-hidden p-2 shadow-xl">
              <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-emoflow-purple/5 to-emoflow-purple-light/10 flex items-center justify-center">
                <div className="glass-panel rounded-xl py-6 px-8 max-w-md mx-auto">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emoflow-purple to-emoflow-purple-light flex items-center justify-center shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                        <line x1="12" x2="12" y1="19" y2="22"></line>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">EmoFlow is analyzing...</h3>
                      <p className="text-sm text-gray-500">Optimizing your workflow</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-200/50 rounded-full w-full animate-pulse"></div>
                    <div className="h-3 bg-gray-200/50 rounded-full w-4/5 animate-pulse" style={{ animationDelay: '300ms' }}></div>
                    <div className="h-3 bg-gray-200/50 rounded-full w-3/5 animate-pulse" style={{ animationDelay: '600ms' }}></div>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <div className="inline-flex rounded-full bg-emoflow-purple-softest px-3 py-1 items-center">
                      <div className="w-2 h-2 rounded-full bg-emoflow-purple animate-pulse mr-2"></div>
                      <span className="text-xs font-medium text-emoflow-purple">Optimizing tasks...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -right-6 -bottom-6 w-12 h-12 rounded-full purple-gradient animate-float"></div>
            <div className="absolute -left-4 top-1/2 w-8 h-8 rounded-full bg-emoflow-purple-light/30 animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
