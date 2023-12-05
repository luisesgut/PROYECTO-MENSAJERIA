import { onSnapshot, query, collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../main";

export const useDataChats = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const getChats = async () => {
        setLoading(true);
        try {
            const chatsQuery = query(collection(db, "CHATS"));
            const unsubscribe = onSnapshot(chatsQuery, (querySnapshot) => {
                setData(querySnapshot.docs.map(
                    (doc) => ({ id: doc.id, ...doc.data() })
                ));
            });
            return unsubscribe;
        } catch (error) {
            setError("Error al obtener los chats");
        } finally {
            setLoading(false);
            setError(null);
        }
    };


    const addChat = async (chatName) => {
        try {
            const newChatRef = await addDoc(collection(db, "CHATS"), {
                name: chatName,
            });
            return newChatRef.id;
        } catch (error) {
            setError("Error al agregar el chat");
        }
    };


    return { data, error, loading, getChats, addChat };
};