import React from 'react';

const MessageBubble = ({ sender, text, isUser }) => {
  const messageContainerStyle = {
    display: 'flex',
    justifyContent: isUser ? 'flex-end' : 'flex-start',
    marginBottom: '10px',
  };

  const messageBubbleStyle = {
    maxWidth: '70%',
    padding: '10px',
    borderRadius: '15px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: isUser ? '#4CAF50' : '#E0E0E0',
    color: isUser ? '#ffffff' : '#000000',
  };

  const senderStyle = {
    marginBottom: '4px',
    color: isUser ? '#ffffff' : '#000000',
    fontWeight: 'bold',
  };

  return (
    <div style={messageContainerStyle}>
      <div style={messageBubbleStyle}>
        {!isUser && (
          <p style={senderStyle} className="font-bold">
            {sender === 'current_user_email' ? 'You' : sender}
          </p>
        )}
        <p>{text}</p>
      </div>
    </div>
  );
};

export default MessageBubble;



