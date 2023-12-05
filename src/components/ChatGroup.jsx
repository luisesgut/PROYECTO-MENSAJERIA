import React, { useState, useEffect } from "react";
import { useDataChats } from "../hooks/useChats";
import Chat from "./Chat";

const GroupChatList = ({ onChatSelect }) => {
  const { data: chats, loading, error, getChats, addChat } = useDataChats();
  const [selectedChat, setSelectedChat] = useState(null);
  const [isCreatingChat, setIsCreatingChat] = useState(false);
  const [newChatName, setNewChatName] = useState("");

  useEffect(() => {
    const unsubscribe = getChats();
    return () => {
      if (unsubscribe && typeof unsubscribe === "function") {
        unsubscribe();
      }
    };
  }, []);

  const handleChatClick = (chat) => {
    onChatSelect({ ...chat, name: chat.name });
    setSelectedChat(chat.id);
  };

  const handleCreateChatClick = () => {
    setIsCreatingChat(true);
  };

  const handleCreateChat = () => {
    if (newChatName.trim() !== "") {
      addChat(newChatName);
      setNewChatName("");
      setIsCreatingChat(false);
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-xl">
      <h1 className="text-3xl font-bold mb-4 text-black">Tus Chats</h1>
      {loading && <p className="text-gray-500">Cargando tus Chats...</p>}
      {error && <p className="text-red-500">Error inesperado</p>}
      {chats && (
        <ul className="space-y-2  text-black">
          {chats.map((chat) => (
            <div key={chat.id}>
              <Chat
                chat={chat}
                onClick={() => handleChatClick(chat)}
                selected={selectedChat === chat.id}
              />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GroupChatList;
