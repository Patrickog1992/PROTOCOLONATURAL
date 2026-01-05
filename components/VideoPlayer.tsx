import React, { useEffect, useState } from 'react';

export const VideoPlayer: React.FC = () => {
  const [src, setSrc] = useState<string>('about:blank');

  useEffect(() => {
    // 1. Inject the SDK Script provided in the snippet
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
    script.async = true;
    document.head.appendChild(script);

    // 2. Calculate the iframe src dynamically (replicating the inline onload logic from the snippet)
    // logic: src + (location.search||'?') + '&vl=' + encodeURIComponent(location.href)
    const baseUrl = 'https://scripts.converteai.net/fd7cffcf-a128-4cf6-8573-7102145d7c17/players/695be8799bd66cff295e8ba5/v4/embed.html';
    const searchParams = window.location.search || '?';
    const vlParam = '&vl=' + encodeURIComponent(window.location.href);
    
    setSrc(`${baseUrl}${searchParams}${vlParam}`);

    // Cleanup script on unmount (optional, but good practice if checking for duplicates)
    return () => {
      // Often with these tracking scripts we might leave them, 
      // but strictly cleaning up would involve removing the tag.
      // We will leave it to avoid reloading it unnecessarily if the component just re-renders.
    };
  }, []);

  return (
    <div 
      id="ifr_695be8799bd66cff295e8ba5_wrapper" 
      style={{ margin: '0 auto', width: '100%', maxWidth: '100%' }} // Adjusted max-width to container
      className="shadow-2xl rounded-xl overflow-hidden border-4 border-white/10 bg-black"
    >
      <div 
        id="ifr_695be8799bd66cff295e8ba5_aspect" 
        style={{ position: 'relative', padding: '125% 0 0 0' }}
      >
        <iframe
          frameBorder="0"
          allowFullScreen
          src={src}
          id="ifr_695be8799bd66cff295e8ba5"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          referrerPolicy="origin"
          title="Video Player"
        />
      </div>
    </div>
  );
};