import React, { useState, useEffect } from 'react';
import { VideoPlayer } from './components/VideoPlayer';
import { Button } from './components/Button';
import { Testimonials } from './components/Testimonials';
import { SocialProofPopup } from './components/SocialProofPopup';
import { ArrowRight, CheckCircle2, Lock } from 'lucide-react';

const App: React.FC = () => {
  const [showButton, setShowButton] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Format date as DD/MM/YYYY
    const date = new Date().toLocaleDateString('pt-BR');
    setCurrentDate(date);
    
    // Delay button appearance: 22 minutes and 39 seconds
    // 22 * 60 + 39 = 1359 seconds = 1,359,000 milliseconds
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 1359000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-poppins selection:bg-green-500/30 overflow-x-hidden">
      
      {/* Social Proof Popup */}
      <SocialProofPopup />

      {/* Top Bar Warning - Static (Not Sticky/Fixed) */}
      <div className="w-full bg-red-600 text-white text-center py-3 px-4 font-bold text-xs md:text-sm tracking-wide shadow-xl border-b border-red-700">
        ATENÇÃO : Devido a grande pressão da indústria farmacêutica esse video irá sair do ar no dia <span className="text-yellow-300 bg-red-700/30 px-1 rounded ml-1">{currentDate}</span>. Assista antes que acabe
      </div>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12 flex flex-col items-center">
        
        {/* Headlines */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 space-y-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-100 to-gray-400">
            Recupere o controle, a confiança e a força masculina de <span className="text-green-500 underline decoration-green-500/30">forma natural</span>
          </h1>
          <h2 className="text-lg md:text-xl text-gray-300 font-medium max-w-2xl mx-auto">
            Nunca mais passe vergonha com nenhuma mulher.
          </h2>
        </div>

        {/* VSL Container */}
        <div className="w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative">
            <VideoPlayer />
          </div>
          
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
            <CheckCircle2 className="w-3 h-3 text-green-500" />
            <span>Áudio Ligado</span>
            <span className="mx-2 text-gray-700">|</span>
            <CheckCircle2 className="w-3 h-3 text-green-500" />
            <span>Conexão Segura</span>
          </div>
        </div>

        {/* CTA Section */}
        {showButton && (
          <div className="mt-12 w-full max-w-md mx-auto animate-fade-in-up text-center space-y-4">
            <Button 
              fullWidth 
              onClick={() => window.location.href = "https://go.perfectpay.com.br/PPU38CQ5LUO"}
              className="animate-pulse-green"
            >
              QUERO O PROTOCOLO AGORA
              <ArrowRight className="w-5 h-5" />
            </Button>
            <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
              <Lock className="w-3 h-3" />
              Compra 100% Segura e Discreta
            </p>
          </div>
        )}

        {/* Testimonials */}
        <Testimonials />

      </main>

      {/* Footer */}
      <footer className="w-full py-8 mt-12 border-t border-white/5 bg-black text-center">
        <div className="max-w-6xl mx-auto px-4 text-xs text-gray-600 space-y-4">
          <p>&copy; {new Date().getFullYear()} Programa Força Natural. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="hover:text-gray-400 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Políticas de Privacidade</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Contato</a>
          </div>
          <p className="max-w-2xl mx-auto">
            Este site não faz parte do site do Facebook ou Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de forma alguma. FACEBOOK é uma marca comercial da FACEBOOK, Inc.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;