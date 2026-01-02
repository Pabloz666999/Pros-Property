"use client";
import { FavoriteContext } from "@/context/FavoriteProvider";
import { useContext } from "react";
import { toast } from "react-hot-toast";

export default function useMyFavorites() {
    const { myFavorites, setMyFavorites} = useContext(FavoriteContext);

    const checkIfFavorited = (propertyId) => {
        const foundProperty = myFavorites.find((item) => item.id === propertyId);
        return foundProperty ? true : false;
    };

    const handleAddFavorite = (property) => {
        const foundFavorite = myFavorites.find((item) => item.id === property.id);
        if (foundFavorite) {
            const filteredFavorites = myFavorites.filter(
                (item) => item.id !== property.id
            );
            setMyFavorites(filteredFavorites);
            toast.success("Property removed from favorites");

            window.localStorage.setItem("MY_FAVORITES", JSON.stringify(filteredFavorites));
            return;
        }
        setMyFavorites((prev) => {
            const newFavorites = [...prev, property];
            window.localStorage.setItem("MY_FAVORITES", JSON.stringify(newFavorites));
            return newFavorites;
        });
        toast.success("Property added to favorites");
    }

    return { myFavorites , setMyFavorites , handleAddFavorite, checkIfFavorited   };
}