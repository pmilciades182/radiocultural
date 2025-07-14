import { useState, useEffect } from 'react';
import './InstallPrompt.css';

function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      // Previene que el mini-infobar aparezca en Chrome
      e.preventDefault();
      // Guarda el evento para que pueda ser disparado más tarde.
      setDeferredPrompt(e);
      // Muestra nuestro prompt personalizado
      setIsVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Limpieza del evento
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Oculta nuestro UI, ya que el prompt del navegador aparecerá
    setIsVisible(false);
    
    // Muestra el prompt de instalación
    deferredPrompt.prompt();
    
    // Espera a que el usuario responda al prompt
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    
    // Ya no necesitamos el prompt
    setDeferredPrompt(null);
  };



  if (!isVisible) {
    return null;
  }

  return (
    <div className="install-prompt-banner">
      <div className="install-prompt-content">
        <img src="/app.png" alt="Icono de la App" className="install-prompt-icon" />
        <div className="install-prompt-text">
          <strong>Lleva Radio Cultural contigo</strong>
          <p>Instala la aplicación para un acceso rápido y directo.</p>
        </div>
      </div>
      <div className="install-prompt-actions">
        <button onClick={handleInstallClick} className="btn-install">Instalar App</button>
      </div>
    </div>
  );
}

export default InstallPrompt;
