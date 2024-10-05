import React from 'react';

const MessageList = ({ chats, onSelectChat }) => {
  return (
    <div className="w-1/4 bg-white border-r border-gray-300 overflow-y-auto">
      <div className="text-xl font-semibold p-4">Messages</div>
      {chats.map(chat => (
        <div
          key={chat.id}
          className="p-4 cursor-pointer hover:bg-gray-100"
          onClick={() => onSelectChat(chat)}
        >
          <div className="flex justify-between">
            <div className="font-semibold">{chat.name}</div>
            <div className="text-sm text-gray-500">{chat.date}</div>
          </div>
          <div className="text-sm text-gray-600">{chat.message}</div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
