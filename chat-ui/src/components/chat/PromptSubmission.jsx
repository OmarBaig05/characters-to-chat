
import React, { useState } from 'react';
import { MessageSquare, Send, ChevronDown } from 'lucide-react';

const PromptSubmission = ({ 
  promptText, 
  setPromptText, 
  promptValue, 
  setPromptValue, 
  entryFee, 
  onSubmit,
  isSubmitting,
  userBalance,
  chatHistory = [],
  onChatSubmit,
  isChatMode = false,
  setChatMode
}) => {
  const handleValueChange = (value) => {
    setPromptValue(value);
  };
  
  return (
    <div className="glass-card rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-2 font-serif flex items-center">
        <MessageSquare className="mr-2 h-6 w-6 text-santa-500" />
        {isChatMode ? "Chat with Dark Santa" : "Submit Your Prompt"}
      </h2>
      <p className="text-gray-300 mb-6">
        {isChatMode 
          ? "You've gained access to Dark Santa himself. Ask him anything or give him prompts directly!" 
          : "Craft your best prompt. The better it is, the higher the chance Dark Santa will buy it!"}
      </p>
      
      {isChatMode ? (
        <ChatInterface 
          chatHistory={chatHistory} 
          promptText={promptText}
          setPromptText={setPromptText}
          onChatSubmit={onChatSubmit}
          isSubmitting={isSubmitting}
        />
      ) : (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Enter Your Prompt:</label>
            <textarea
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              className="w-full bg-gray-800/70 border border-gray-700 rounded-lg p-4 text-white placeholder-gray-500 resize-none focus:ring-1 focus:ring-santa-500 focus:border-santa-500 transition-all"
              placeholder="Write a creative prompt for Dark Santa..."
              rows={4}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">
              Set Your Value: <span className="text-gray-400">(The higher the value, the more attractive it is to Santa!)</span>
            </label>
            <div className="flex flex-wrap gap-3 mb-2">
              <ValueButton 
                value={10} 
                label="10 Flare (Casual)" 
                active={promptValue === 10} 
                onClick={() => handleValueChange(10)} 
              />
              <ValueButton 
                value={50} 
                label="50 Flare (Competitive)" 
                active={promptValue === 50} 
                onClick={() => handleValueChange(50)} 
              />
              <ValueButton 
                value={100} 
                label="100 Flare (Elite)" 
                active={promptValue === 100} 
                onClick={() => handleValueChange(100)} 
              />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="mb-4 sm:mb-0">
              <span className="bg-gray-800 px-4 py-2 rounded-lg flex items-center">
                <span className="text-sm text-gray-300 mr-2">Entry Fee:</span>
                <span className="font-medium">{entryFee} Flare</span>
              </span>
              <p className="text-xs text-gray-400 mt-1">This is required to submit your prompt!</p>
            </div>
            
            <button
              onClick={onSubmit}
              disabled={isSubmitting || userBalance < entryFee}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
                isSubmitting || userBalance < entryFee
                  ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  : 'bg-santa-600 hover:bg-santa-700 hover:shadow-lg hover:shadow-santa-600/20 hover:-translate-y-0.5 transform'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Submit to Santa
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const ChatInterface = ({ chatHistory, promptText, setPromptText, onChatSubmit, isSubmitting }) => {
  return (
    <div className="flex flex-col h-[400px]">
      <div className="flex-1 overflow-y-auto mb-4 bg-gray-900/50 rounded-lg p-4 space-y-4">
        {chatHistory.length === 0 ? (
          <div className="text-center text-gray-400 py-6">
            Start your conversation with Dark Santa!
          </div>
        ) : (
          chatHistory.map((message, index) => (
            <ChatMessage 
              key={index} 
              message={message.text} 
              type={message.sender === 'user' ? 'user' : 'santa'} 
              timestamp={message.timestamp}
            />
          ))
        )}
      </div>
      
      <div className="mt-auto">
        <div className="relative">
          <input
            type="text"
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            placeholder="Type your message to Dark Santa..."
            className="w-full bg-gray-800/70 border border-gray-700 rounded-lg pl-4 pr-12 py-3 text-white placeholder-gray-500 focus:ring-1 focus:ring-santa-500 focus:border-santa-500 transition-all"
            onKeyPress={(e) => e.key === 'Enter' && onChatSubmit()}
          />
          <button 
            onClick={onChatSubmit}
            disabled={isSubmitting || !promptText.trim()}
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full ${
              isSubmitting || !promptText.trim() 
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
                : 'bg-santa-600 text-white hover:bg-santa-700'
            }`}
          >
            {isSubmitting ? (
              <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
            ) : (
              <Send className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const ChatMessage = ({ message, type, timestamp }) => {
  const formattedTime = new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  return (
    <div className={`flex ${type === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div 
        className={`max-w-[80%] rounded-lg px-4 py-3 ${
          type === 'user' 
            ? 'bg-santa-600 text-white' 
            : 'bg-gray-800 text-gray-200'
        }`}
      >
        <div className="flex items-center mb-1">
          {type === 'santa' && (
            <div className="bg-santa-800 h-6 w-6 rounded-full flex items-center justify-center mr-2">
              <MessageSquare className="h-3 w-3" />
            </div>
          )}
          <span className="text-xs opacity-75">{type === 'user' ? 'You' : 'Dark Santa'}</span>
          <span className="text-xs opacity-50 ml-2">{formattedTime}</span>
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
};

const ValueButton = ({ value, label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 rounded-lg transition-all ${
        active 
          ? 'bg-santa-600 text-white' 
          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
      }`}
    >
      {label}
    </button>
  );
};

export default PromptSubmission;
