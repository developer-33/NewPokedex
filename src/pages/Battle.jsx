import { useState } from "react";
import { motion } from "framer-motion";

const PokemonBattle = () => {
  const [playerHP, setPlayerHP] = useState(100);
  const [opponentHP, setOpponentHP] = useState(100);
  const [isAttacking, setIsAttacking] = useState(false);

  const attack = () => {
    setIsAttacking(true);
    setTimeout(() => {
      setOpponentHP((prev) => Math.max(0, prev - 20));
      setPlayerHP((prev) => Math.max(0, prev - 15));
      setIsAttacking(false);
    }, 500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-indigo-900 p-6">
      <h1 className="text-3xl font-bold text-white mb-4">Pokémon Battle</h1>
      
      {/* Opponent */}
      <div className="flex flex-col items-center mb-10">
        <motion.img 
          src="/images/opponent_pokemon.png" 
          alt="Opponent Pokémon" 
          className="w-32 h-32" 
          animate={{ y: [0, -10, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
        <div className="w-40 bg-gray-300 rounded-full h-4 mt-2 overflow-hidden">
          <motion.div 
            className="bg-red-500 h-full" 
            style={{ width: `${opponentHP}%` }}
            animate={{ width: `${opponentHP}%` }}
          />
        </div>
      </div>
      
      {/* Player */}
      <div className="flex flex-col items-center">
        <motion.img 
          src="/images/player_pokemon.png" 
          alt="Your Pokémon" 
          className="w-32 h-32" 
          animate={isAttacking ? { x: [0, 20, -20, 0] } : { y: [0, 10, 0] }}
          transition={isAttacking ? { duration: 0.3 } : { repeat: Infinity, duration: 1.5 }}
        />
        <div className="w-40 bg-gray-300 rounded-full h-4 mt-2 overflow-hidden">
          <motion.div 
            className="bg-green-500 h-full" 
            style={{ width: `${playerHP}%` }}
            animate={{ width: `${playerHP}%` }}
          />
        </div>
      </div>
      
      {/* Controls */}
      <div className="mt-6 flex gap-4">
        <button onClick={attack} className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded disabled:opacity-50" disabled={isAttacking}>Attack</button>
        <button onClick={() => setPlayerHP((prev) => Math.min(100, prev + 20))} className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded">Heal</button>
      </div>
    </div>
  );
};

export default PokemonBattle;
