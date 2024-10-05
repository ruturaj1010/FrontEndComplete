import React, { useState } from 'react';

const ChatWindow = ({ chat }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { sender: chat.name, text: chat.message },
  ]);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { sender: 'You', text: message }]);
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="p-4 border-b border-gray-300">
        <h2 className="font-semibold">{chat.name}</h2>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.sender === 'You' ? 'text-right' : ''}`}>
            <div className={`inline-block p-2 rounded-lg ${msg.sender === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              <strong>{msg.sender}</strong>: {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-300 flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write a message..."
          className="flex-1 border border-gray-300 rounded-l-lg p-2"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white p-2 rounded-r-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
