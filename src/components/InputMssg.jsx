import React, { useState } from 'react';

const MessageInput = ({ onSubmit }) => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message.trim() === '') return;
    onSubmit(message);
    setMessage('');
  };

  return (
    <div className="chat-input mt-4 flex">
      <input
  type="text"
  className="w-full p-2 mt-2 rounded-md border border-slate-300 focus:outline-none focus:border-slate-500 text-black"
  placeholder="Escribe tu mensaje"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
/>

      <button
        onClick={sendMessage}
        className="ml-2 px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Enviar
      </button>
    </div>
  );
};

export default MessageInput;
