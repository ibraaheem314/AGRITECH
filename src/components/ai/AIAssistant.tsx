import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Loader } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import axios from 'axios';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
  
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date()
    };
  
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
  
    try {
      const response = await axios.post('http://localhost:8000/api/agribot', {
        question: userMessage.content
      });
  
      const replyText = response.data.response || "Je n'ai pas compris 🤖";
  
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: replyText,
        timestamp: new Date()
      };
  
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: "Désolé, je n'ai pas pu obtenir une réponse 😔",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-[#101311] text-white rounded-xl shadow-md">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-neutral-800">
        <Bot className="w-6 h-6 text-primary mr-2" />
        <h2 className="text-lg font-semibold">AgriBot</h2>
      </div>

      {/* Chat Body */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  message.type === 'user'
                    ? 'bg-primary text-black'
                    : 'bg-neutral-800 text-white'
                }`}
              >
                <p>{message.content}</p>
                <p className="text-xs mt-1 text-gray-400">
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="bg-neutral-800 p-3 rounded-lg">
                <Loader className="w-5 h-5 animate-spin text-primary" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-neutral-800">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Posez une question à AgriBot..."
            className="flex-1 px-4 py-2 bg-[#0B0F0E] text-sm text-white border border-neutral-700 rounded-lg placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Button
            type="submit"
            variant="primary"
            disabled={isLoading}
            icon={<Send className="w-4 h-4" />}
          >
            Envoyer
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AIAssistant;
