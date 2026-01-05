import React, { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

const NAMES = [
  "Antônio S.", "José M.", "Francisco O.", "Paulo R.", "Carlos E.", 
  "Marcos A.", "Luiz H.", "Gabriel P.", "Rafael L.", "Daniel C.",
  "Eduardo B.", "Fernando K.", "Gustavo A."
];

const CITIES = [
  "São Paulo - SP", "Rio de Janeiro - RJ", "Belo Horizonte - MG", 
  "Salvador - BA", "Brasília - DF", "Curitiba - PR", "Fortaleza - CE", 
  "Manaus - AM", "Recife - PE", "Porto Alegre - RS", "Goiânia - GO"
];

export const SocialProofPopup: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: '', city: '' });

  useEffect(() => {
    // Helper to pick random data
    const pickRandom = () => {
      const name = NAMES[Math.floor(Math.random() * NAMES.length)];
      const city = CITIES[Math.floor(Math.random() * CITIES.length)];
      setData({ name, city });
      setVisible(true);
      
      // Hide after 5s
      setTimeout(() => setVisible(false), 5000);
    };

    // First appearance after 5 seconds
    const initialTimeout = setTimeout(() => {
      pickRandom();
      // Start loop every 15-25 seconds randomly or fixed
      const interval = setInterval(pickRandom, 15000); 
      return () => clearInterval(interval);
    }, 5000);

    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <div 
      className={`fixed top-12 right-1 md:top-2 md:right-2 z-50 transition-all duration-700 transform ${
        visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <div className="bg-[#111] border border-green-500/20 shadow-2xl rounded p-1 flex items-center gap-1 max-w-[120px] backdrop-blur-md">
        <div className="shrink-0 bg-green-500/10 p-0.5 rounded-full">
          <CheckCircle2 className="w-2 h-2 text-green-500" />
        </div>
        <div>
          <p className="text-[6px] text-green-400 font-bold uppercase tracking-wide leading-none mb-0.5">
            Recebeu o protocolo
          </p>
          <p className="text-[8px] font-bold text-white leading-tight">
            {data.name}
          </p>
          <p className="text-[6px] text-gray-400 leading-tight">
            {data.city}
          </p>
        </div>
      </div>
    </div>
  );
};