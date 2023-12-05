// Importa el componente Auth
import Auth from "../hoc/Auth";
// Importa otros componentes necesarios
import Restricted from "../pages/Auth";
import GroupChatList from "../components/ChatGroup";
import IndividualChat from "../components/IndividualChat";
import MessageInput from "../components/InputMssg";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useLogin } from "../hooks/useLogin"; // Importa el hook useLogin

// Función Home
function Home() {
  const { user, loadingSession } = useLogin(); // Obtén el usuario y el estado de carga

  const [selectedChat, setSelectedChat] = useState(null);

  // Estructura de rutas simulada
  const [routes, setRoutes] = useState([
    {
      path: "*", // Cambia la ruta raíz
      name: "Home",
      element: <h1 className="text-black">Bienvenido a tus chats</h1>, // Cambia 'component' a 'element'
    },
    // Añade otras rutas según tus necesidades
  ]);

  // Manejar la selección de chat
  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
    // Puedes realizar otras acciones al seleccionar un chat si es necesario
  };

  if (loadingSession) {
    return <h1>Cargando...</h1>; // Muestra un mensaje de carga mientras se verifica la sesión
  }

  return (
    // Usar el componente Auth
    <Auth>
      <div className="flex h-screen bg-slate-200">
        <aside className="w-64 bg-gray-900 text-white p-4">
          {/* Muestra la lista de chats en el lateral izquierdo */}
          <GroupChatList onChatSelect={handleChatSelect} />
        </aside>
        <main className="flex-1 p-4">
          {/* Renderiza el contenido según las rutas */}
          <Routes>
            {routes.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={`route-${route.path}`}
              />
            ))}
            <Route path="/restricted" element={<Restricted />} />
          </Routes>

          {/* Muestra el contenido del chat seleccionado y el componente MessageInput */}
          {selectedChat && user && (
            // Pasa el usuario al componente IndividualChat
            <IndividualChat chat={selectedChat} user={user} />
          )}
        </main>
      </div>
    </Auth>
  );
}

export default Home;
