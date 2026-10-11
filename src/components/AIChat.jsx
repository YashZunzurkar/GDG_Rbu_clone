import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Hi! I am the GDG RBU AI Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      
      if (!apiKey) {
        throw new Error("API key is missing. Please set VITE_GEMINI_API_KEY in .env");
      }

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `You are a helpful assistant for GDG RBU (Google Developer Groups Ramdeobaba University). Keep responses short and helpful. User: ${userMessage}` }] }]
        })
      });

      if (!response.ok) throw new Error("API response error");

      const data = await response.json();
      const aiResponse = data.candidates[0].content.parts[0].text;
      
      setMessages(prev => [...prev, { role: 'ai', content: aiResponse }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { 
        role: 'ai', 
        content: error.message === "API key is missing. Please set VITE_GEMINI_API_KEY in .env" 
          ? "Oops! The Gemini API key is missing. Please configure it in your .env file." 
          : "Sorry, I'm having trouble connecting right now. Please try again later."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-yellow-400 border-4 border-black dark:border-white rounded-full shadow-neo flex items-center justify-center hover:-translate-y-1 transition-all z-50 ${isOpen ? 'scale-0' : 'scale-100'}`}
        aria-label="Open AI Chat"
      >
        <MessageSquare className="w-6 h-6 text-black dark:text-white" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 bg-white dark:bg-zinc-900 border-4 border-black dark:border-white shadow-neo flex flex-col rounded-2xl overflow-hidden z-50 transition-all">
          
          {/* Header */}
          <div className="bg-blue-500 p-4 border-b-4 border-black dark:border-white flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bot className="w-6 h-6 text-white" />
              <h3 className="font-bold text-white">Ask GDG AI</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 p-4 h-80 overflow-y-auto bg-gray-50 dark:bg-zinc-800 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-xl border-2 border-black dark:border-white font-sans text-sm shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-yellow-400 text-black rounded-tr-sm' 
                    : 'bg-white dark:bg-zinc-700 text-black dark:text-white rounded-tl-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border-2 border-black dark:border-white p-3 rounded-xl rounded-tl-sm shadow-sm flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 border-t-4 border-black dark:border-white bg-white dark:bg-zinc-900 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 px-3 py-2 border-2 border-black dark:border-white rounded-lg mr-2 outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-zinc-800 text-black dark:text-white font-sans text-sm"
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="bg-green-500 text-white p-2 border-2 border-black dark:border-white rounded-lg hover:bg-green-600 disabled:opacity-50 transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
          
        </div>
      )}
    </>
  );
}
