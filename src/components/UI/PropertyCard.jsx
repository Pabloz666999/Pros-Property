"use client";
import { formatThousands } from "@/utils";
import Link from "next/link";
import React from "react";
import useMyFavorites from "@/hooks/useMyFavorites";
import { RiHeartFill, RiHeartLine } from "react-icons/ri";


export default function PropertyCard( {property} ) {
    const { handleAddFavorite, checkIfFavorited } = useMyFavorites();
    return (
    <div className="border border-gray-200 rounded-lg md:rounded-xl shadow-md space-y-4 overflow-hidden">
        <div className="h-[230px] md:h-[200px] 2xl:h-[250px] relative">
            <Link href={`/listings/${property.slug}`}>
                <img 
                className="h-[230px] md:h-[200px] 2xl:h-[250px] w-full object-cover object-center" 
                src={property?.acf?.thumbnail} 
                alt=""
                />
            </Link>
            <button onClick={() => handleAddFavorite(property)} className="w-[46px] h-[46px] rounded-full bg-white absolute right-10 translate-y-[-20px] 
            translate-x-[20px] flex items-center justify-center shadow-md active:scale-[1.1] transition-all">
                {checkIfFavorited(property.id) ? <RiHeartFill className="text-blue-600 text-xl" /> : <RiHeartLine className="text-blue-600 text-xl"  />}
            </button>  
        </div>
        <div className="space-y-4 p-4 md:p-6 md:space-y-6">
        <div className="space-y-1 md:space-y-2">
            <p className="text-sm text-gray-600"><span className="text-blue-600 font-semibold">Rp {formatThousands(property?.acf?.price ?? 0)}</span>{" "}</p>
            <p className="text-xl font-bold">{property?.title?.rendered}</p>
        <p className="text-sm text-gray-600">{property?.acf?.short_descripion}</p>  
        </div>
        <hr />
        <div className="flex justify-between text-sm max-w-[90%] mx-auto">
            <div className="flex gap-2">
                <img src="/assets/icons/ic-bed-small.svg" alt="" />
                <p>{property?.acf?.spesification?.bed_room} Beds</p>
            </div>
            <div className="flex gap-2">
                <img src="/assets/icons/ic-bath-small.svg" alt="" />
                <p>{property?.acf?.spesification?.bath_room} Bathrooms</p>
            </div>
            <div className="flex gap-2">
                <img src="/assets/icons/ic-land-small.svg" alt="" />
                <p>{property?.acf?.spesification?.land_area}</p>
            </div> 
        </div>
    </div>      
    </div>
    );
}