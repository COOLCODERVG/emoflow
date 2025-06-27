import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';
import { cn } from '../lib/utils';

// Demo responses for the chatbot
const demoResponses = [
  "Based on your current emotional state, I recommend taking a short 5-minute break to reset your focus.",
  "I notice you're feeling energetic! Now would be a great time to tackle that challenging task you've been postponing.",
  "Your productivity tends to peak in the morning. Consider scheduling your most important tasks before noon.",
  "I've detected signs of mental fatigue. Try the 2-minute breathing exercise in our Wellness tab.",
  "According to your patterns, you work best in 45-minute focus sessions followed by a 10-minute break.",
  "Your emotional state suggests you might be experiencing some stress. Consider prioritizing tasks that bring you a sense of accomplishment.",
  "You've been working for 2 hours straight. Remember to stand up, stretch, and hydrate to maintain optimal productivity."
];

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi there! I'm your EmoFlow AI assistant. How are you feeling today, and how can I help optimize your productivity?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    document.title = 'EmoFlow | AI Advisor';
  }, []);
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Simulate AI thinking with a delay
    setTimeout(() => {
      const randomResponse = demoResponses[Math.floor(Math.random() * demoResponses.length)];
      const botMessage: Message = {
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emoflow-purple to-emoflow-purple-dark mb-4">
              EmoFlow AI Advisor
            </h1>
            <p className="text-gray-600 md:text-lg">
              Chat with our emotion-aware AI assistant for personalized productivity advice based on your current state.
            </p>
          </div>
          
          <Card className="border border-gray-200 shadow-sm overflow-hidden mb-6">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-emoflow-purple-softest to-white p-4 border-b border-gray-100">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full purple-gradient flex items-center justify-center shadow-sm">
                    <Bot className="text-white w-5 h-5" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-800">EmoFlow Assistant</h3>
                    <p className="text-xs text-gray-500">AI-powered productivity advisor</p>
                  </div>
                </div>
              </div>
              
              <div className="h-[400px] overflow-y-auto p-4 bg-white">
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div 
                      key={index} 
                      className={cn(
                        "flex",
                        message.sender === 'user' ? "justify-end" : "justify-start"
                      )}
                    >
                      <div 
                        className={cn(
                          "max-w-[80%] rounded-lg p-3",
                          message.sender === 'user' 
                            ? "bg-emoflow-purple text-white" 
                            : "bg-gray-100 text-gray-800"
                        )}
                      >
                        <p>{message.text}</p>
                        <p className="text-xs opacity-70 text-right mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>
              
              <form onSubmit={handleSendMessage} className="border-t border-gray-100 p-3 bg-white">
                <div className="flex items-center">
                  <Input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 focus-visible:ring-emoflow-purple"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <Button 
                    type="submit" 
                    className="ml-2 bg-emoflow-purple hover:bg-emoflow-purple-dark"
                  >
                    <Send className="h-4 w-4 mr-1" />
                    Send
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          <div className="text-center text-gray-500 text-sm">
            <p>This is a demo of the EmoFlow AI Advisor. In a real implementation, responses would be tailored to your emotional state and productivity patterns.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Chatbot;