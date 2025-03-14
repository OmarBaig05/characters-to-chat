
import React from 'react';
import { User, Award } from 'lucide-react';

const Leaderboard = ({ leaderboard }) => {
  return (
    <div className="glass-card rounded-xl p-6">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-gray-700">
              <th className="pb-4 pl-4">Rank</th>
              <th className="pb-4">User</th>
              <th className="pb-4 text-right pr-4">Earnings</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((user, index) => (
              <tr 
                key={index} 
                className="border-b border-gray-800/50 hover:bg-gray-800/20 transition-colors animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <td className="py-4 pl-4">
                  <LeaderboardRank rank={index + 1} />
                </td>
                <td className="py-4">
                  <div className="flex items-center">
                    <div className="bg-gray-700 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                      <User className="h-4 w-4" />
                    </div>
                    <span className="font-medium">{user.username}</span>
                  </div>
                </td>
                <td className="py-4 text-right pr-4">
                  <span className="font-mono font-medium text-yellow-500">{user.earnings} Flare</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 text-center text-gray-300">
        <p>Submit better prompts and climb the leaderboard!</p>
      </div>
    </div>
  );
};

const LeaderboardRank = ({ rank }) => {
  if (rank === 1) {
    return (
      <div className="flex items-center">
        <div className="bg-yellow-500 h-6 w-6 rounded-full flex items-center justify-center mr-2">
          <Award className="h-3 w-3 text-black" />
        </div>
        <span className="font-medium text-yellow-500">1st</span>
      </div>
    );
  } else if (rank === 2) {
    return (
      <div className="flex items-center">
        <div className="bg-gray-400 h-6 w-6 rounded-full flex items-center justify-center mr-2">
          <Award className="h-3 w-3 text-black" />
        </div>
        <span className="font-medium text-gray-400">2nd</span>
      </div>
    );
  } else if (rank === 3) {
    return (
      <div className="flex items-center">
        <div className="bg-amber-700 h-6 w-6 rounded-full flex items-center justify-center mr-2">
          <Award className="h-3 w-3 text-black" />
        </div>
        <span className="font-medium text-amber-700">3rd</span>
      </div>
    );
  }
  
  return (
    <div className="flex items-center">
      <div className="h-6 w-6 rounded-full flex items-center justify-center mr-2 border border-gray-700">
        <span className="text-xs">{rank}</span>
      </div>
      <span className="font-medium text-gray-400">{rank}th</span>
    </div>
  );
};

export default Leaderboard;
