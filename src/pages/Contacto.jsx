import ChatContact from '../components/ChatContact';
import useSeo from '../hooks/useSeo';

function ContactoPage() {
  useSeo({
    title: 'Contacto - Radio Cultural Paraguay',
    description: 'Contactate con Radio Cultural Paraguay. Envianos tu mensaje, saludos o sugerencias. Estamos para escucharte.'
  });
  return (
    <div className="page-container contact-page">
      <ChatContact />
    </div>
  );
}

export default ContactoPage;
