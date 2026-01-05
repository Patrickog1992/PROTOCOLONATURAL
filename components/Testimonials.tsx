import React from 'react';
import { ThumbsUp, MessageCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Carlos Mendes",
      time: "há 2 horas",
      content: "Cara, eu tava desacreditado, mas esse vídeo mudou minha visão. Em 2 semanas já senti a diferença absurda na disposição.",
      likes: 142,
      image: "https://i.imgur.com/tBgJKYL.jpg"
    },
    {
      name: "Roberto Silva",
      time: "há 5 horas",
      content: "Simplesmente funciona. Minha esposa nem acreditou quando viu a mudança. Valeu cada segundo assistindo, recomendo demais.",
      likes: 89,
      image: "https://i.imgur.com/BJPY2Qu.jpg"
    },
    {
      name: "Felipe Andrade",
      time: "há 1 dia",
      content: "O melhor é que é natural mesmo, sem aquelas químicas loucas que dão dor de cabeça. Me sinto com 20 anos de novo!",
      likes: 256,
      image: "https://i.imgur.com/l5grIUl.jpg"
    },
    {
      name: "João Paulo",
      time: "há 2 dias",
      content: "Tava com receio de comprar, mas o suporte é nota 10 e o método é muito prático. Resultados reais.",
      likes: 64,
      image: "https://i.imgur.com/iGAged5.png"
    }
  ];

  return (
    <div className="w-full max-w-2xl mt-16 space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Comentários Recentes</h3>
        <p className="text-gray-400 text-sm">Junte-se a homens que já recuperaram a confiança.</p>
      </div>

      <div className="space-y-4">
        {reviews.map((review, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 p-5 rounded-xl flex gap-4 hover:bg-white/10 transition-colors">
             {/* Avatar */}
             <div className="shrink-0 w-12 h-12 rounded-full overflow-hidden border-2 border-green-500/30 shadow-lg bg-gray-800">
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="w-full h-full object-cover"
                />
             </div>
             
             {/* Content */}
             <div className="flex-1 space-y-2">
               <div className="flex items-center justify-between">
                 <div className="flex items-center gap-2">
                    <span className="font-semibold text-white text-sm">{review.name}</span>
                    <span className="text-gray-500 text-xs">• {review.time}</span>
                 </div>
               </div>
               
               <p className="text-gray-300 text-sm leading-relaxed">
                 {review.content}
               </p>

               {/* Actions */}
               <div className="flex items-center gap-4 text-xs font-medium text-gray-500 pt-2 border-t border-white/5 mt-2">
                  <button className="flex items-center gap-1.5 hover:text-green-400 transition-colors group">
                    <ThumbsUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                    <span>Curtir • {review.likes}</span>
                  </button>
                  <button className="flex items-center gap-1.5 hover:text-white transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span>Responder</span>
                  </button>
               </div>
             </div>
          </div>
        ))}
      </div>
      
      <div className="text-center pt-4">
        <button className="text-gray-500 text-sm hover:text-white transition-colors underline decoration-gray-700 hover:decoration-white underline-offset-4">
          Carregar mais comentários...
        </button>
      </div>
    </div>
  );
};