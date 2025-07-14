import { useState, useEffect, useRef } from 'react';

function ChatContact() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    // Mensaje de bienvenida inicial
    setMessages([
      {
        text: '¡Hola! Dejanos tu mensaje, sugerencia o saludo. Estamos para escucharte.',
        sender: 'bot',
      },
    ]);
  }, []);

  useEffect(() => {
    // Scroll automático al último mensaje
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const userMessage = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Simula la respuesta del bot
    setTimeout(() => {
      const botResponse = {
        text: 'Recibimos tu mensaje. Radio Cultura. Seguinos en nuestras redes sociales.',
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1200);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Contacto Directo</h2>
        <p>Radio Cultura</p>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <p>{msg.text}</p>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <form className="chat-input-form" onSubmit={handleSend}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribí tu mensaje aquí..."
          aria-label="Escribir mensaje"
        />
        <button type="submit" aria-label="Enviar mensaje">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
      </form>
    </div>
  );
}

export default ChatContact;
