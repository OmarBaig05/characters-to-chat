
import React from 'react';
import { MessageSquare, ThumbsUp, Clock } from 'lucide-react';

const LiveFeed = ({ purchasedPrompts, santaReactions, pendingPrompts }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Purchased Prompts */}
      <div className="glass-card rounded-xl p-6">
        <h3 className="text-xl font-medium mb-4 flex items-center">
          <ThumbsUp className="mr-2 h-5 w-5 text-green-500" />
          Just Bought by Santa
        </h3>
        <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 scrollbar-none">
          {purchasedPrompts.map((prompt, index) => (
            <div 
              key={index} 
              className="bg-gray-800/60 rounded-lg p-4 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-gray-200 mb-2">"{prompt.text}"</p>
              <div className="text-green-500 font-medium text-sm">+{prompt.value} Flare</div>
            </div>
          ))}
          {purchasedPrompts.length === 0 && (
            <div className="text-gray-400 text-center py-6">
              No prompts purchased yet
            </div>
          )}
        </div>
      </div>
      
      {/* Santa's Reactions */}
      <div className="glass-card rounded-xl p-6">
        <h3 className="text-xl font-medium mb-4 flex items-center">
          <MessageSquare className="mr-2 h-5 w-5 text-santa-500" />
          Santa's Latest Reactions
        </h3>
        <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 scrollbar-none">
          {santaReactions.map((reaction, index) => (
            <div 
              key={index} 
              className="bg-gray-800/60 rounded-lg p-4 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start">
                <div className="bg-santa-800 h-8 w-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <p className="text-gray-200 italic">"{reaction}"</p>
              </div>
            </div>
          ))}
          {santaReactions.length === 0 && (
            <div className="text-gray-400 text-center py-6">
              Santa hasn't reacted to anything yet
            </div>
          )}
        </div>
      </div>
      
      {/* Pending Prompts */}
      <div className="glass-card rounded-xl p-6">
        <h3 className="text-xl font-medium mb-4 flex items-center">
          <Clock className="mr-2 h-5 w-5 text-yellow-500" />
          Waiting for Santa's Judgment
        </h3>
        <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 scrollbar-none">
          {pendingPrompts.map((prompt, index) => (
            <div 
              key={index} 
              className="bg-gray-800/60 rounded-lg p-4 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-2">
                <div className="animate-pulse h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
                <span className="text-xs text-yellow-500">Pending judgment</span>
              </div>
              <p className="text-gray-200">"{prompt}"</p>
            </div>
          ))}
          {pendingPrompts.length === 0 && (
            <div className="text-gray-400 text-center py-6">
              No prompts in queue
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveFeed;
