"use client";
import React, { use, useEffect } from "react";
import { createContext ,useState } from "react";

export const FavoriteContext = createContext(null);

export default function FavoriteProvider({ children }) {
    const [myFavorites, setMyFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = window.localStorage.getItem("MY_FAVORITES");
        if (storedFavorites) {
            setMyFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    return (
     <FavoriteContext.Provider 
    value={{
        myFavorites, 
        setMyFavorites
    }}>
        {children}
    </FavoriteContext.Provider >
    );
}