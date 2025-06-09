import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-20 pb-12 px-6 md:px-12 bg-gradient-to-b from-white to-emoflow-purple-softest">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full purple-gradient flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <h1 className="ml-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emoflow-purple to-emoflow-purple-dark">
                EmoFlow
              </h1>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              An emotion-responsive AI assistant that creates personalized user journeys based on your real-time emotional state.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((social, index) => (
                <a 
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-emoflow-purple hover:border-emoflow-purple/30 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {social === 'twitter' && <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>}
                    {social === 'facebook' && <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>}
                    {social === 'instagram' && <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>}
                    {social === 'instagram' && <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>}
                    {social === 'instagram' && <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>}
                    {social === 'linkedin' && <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>}
                    {social === 'linkedin' && <rect width="4" height="12" x="2" y="9"></rect>}
                    {social === 'linkedin' && <circle cx="4" cy="4" r="2"></circle>}
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {['About', 'Careers', 'Press', 'Blog'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-emoflow-purple transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {['Documentation', 'Help Center', 'Privacy Policy', 'Terms of Service'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-emoflow-purple transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} EmoFlow. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 text-sm hover:text-emoflow-purple transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-emoflow-purple transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-emoflow-purple transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
