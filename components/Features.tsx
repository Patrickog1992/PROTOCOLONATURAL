import React from 'react';
import { ShieldCheck, Zap, Lock, Activity } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Resultado Rápido",
      description: "Método prático para aplicação imediata na sua rotina."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
      title: "100% Natural",
      description: "Sem pílulas, sem efeitos colaterais e sem riscos à saúde."
    },
    {
      icon: <Lock className="w-8 h-8 text-blue-400" />,
      title: "Totalmente Sigiloso",
      description: "Sua privacidade é nossa prioridade absoluta."
    },
    {
      icon: <Activity className="w-8 h-8 text-red-400" />,
      title: "Vitalidade Restaurada",
      description: "Sinta a energia de quando você tinha 20 anos."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto px-4">
      {features.map((feature, idx) => (
        <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-start gap-4 hover:bg-white/10 transition-colors">
          <div className="p-3 bg-white/5 rounded-lg shrink-0">
            {feature.icon}
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-1">{feature.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};