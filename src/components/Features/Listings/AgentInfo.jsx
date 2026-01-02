"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { RiHeartFill, RiHeartLine } from "react-icons/ri";
import useMyFavorites from "@/hooks/useMyFavorites";

export default function AgentInfo({property}) {
    const {handleAddFavorite, checkIfFavorited} = useMyFavorites();
    return (
        <div className="space-y-6 p-6 shadow-lg rounded-xl md:w-1/4">
            <div className="flex gap-3">
                <img className="w-12 h-12 rounded-full object-cover" src={property?.agent?.acf?.profile_picture} alt="" />
                <div>
                    <p className="text-lg font-bold mb-2">{property?.agent?.acf?.name}</p>
                    <p className="text-gray-600">Member Since {property?.agent?.acf?.joined_date.split("/").pop()}</p>
                </div>
            </div>
            <div className="space-y-3">
                <button className="btn btn-success btn-block rounded-lg">
                <FaWhatsapp />
                Contact Agent
            </button>
            <button onClick={() => handleAddFavorite(property)} className="btn btn-outline btn-block rounded-lg">
                {checkIfFavorited(property.id) ? (<RiHeartFill className="text-lg" /> ):( <RiHeartLine className="text-lg" />)}
                Save Property 
            </button>
            </div>
        </div>
    );
}