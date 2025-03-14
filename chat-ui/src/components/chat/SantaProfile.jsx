
import React from 'react';
import { Gift, Star, DollarSign } from 'lucide-react';

const SantaProfile = () => {
  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <div className="relative">
        <div className="h-32 bg-gradient-to-r from-santa-900 to-gray-900"></div>
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="h-24 w-24 rounded-full border-4 border-gray-900 overflow-hidden santa-glow">
            <div className="h-full w-full bg-santa-800 flex items-center justify-center">
              <Gift className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="pt-14 pb-6 px-6">
        <h2 className="text-2xl font-bold text-center mb-2 font-serif">Meet Dark Santa</h2>
        <p className="text-gray-300 text-center italic mb-6">
          "Not all Santas give gifts—some take them. But if you impress him, he might just pay up!"
        </p>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-gray-800 rounded-full p-2 mr-3">
              <Star className="h-4 w-4 text-yellow-500" />
            </div>
            <div>
              <h3 className="font-medium">Personality</h3>
              <p className="text-gray-400 text-sm">Mysterious & Unpredictable</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-gray-800 rounded-full p-2 mr-3">
              <Star className="h-4 w-4 text-yellow-500" />
            </div>
            <div>
              <h3 className="font-medium">Judgment Style</h3>
              <p className="text-gray-400 text-sm">Sharp, Unforgiving, Yet Generous</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-gray-800 rounded-full p-2 mr-3">
              <DollarSign className="h-4 w-4 text-yellow-500" />
            </div>
            <div>
              <h3 className="font-medium">Current Balance</h3>
              <p className="text-gray-400 text-sm">10,000 Flare Tokens</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-3 bg-black/30 rounded-lg text-sm text-gray-300">
          <p>
            Dark Santa evaluates prompts autonomously—no human interference!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SantaProfile;
