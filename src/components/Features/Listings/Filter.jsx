"use client";
import FormSelect from "@/components/UI/FormSelect";
import { HiOutlineFilter } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { mapLabelValue, parseQueryParams } from "@/utils";
import { getPropertiesTypes } from "@/services/properties.service";
import { getPropertiesLocations } from "@/services/properties.service";
import { useSearchParams, useRouter} from "next/navigation";
import qs from 'qs';

export default function Filter({ totalResult = 0 }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [open , setOpen ] = useState(false);
    const isTablet = useMediaQuery("(min-width: 768px)");

    const [types, setTypes] = useState([]);
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        Promise.all([getPropertiesTypes(), getPropertiesLocations()]).then(res => {
            const [typeData, locationData] = res;
            setTypes(mapLabelValue(typeData));
            setLocations(mapLabelValue(locationData));
        })
    }, []);

    const [filter, setFilter] = useState({
        'property-types': searchParams.get("property-types") || "",
        'property-locations': searchParams.get("property-locations") || "",
        'bed_room': searchParams.get("bed_room") || "",
    });

    const handleFilterChange =(key, value) => {
        setFilter((prev) => {
        return {
            ...prev,
            [key] : value,
            };
        });
    };

    const handleFilter = () => {
        const queryParams  = qs.stringify(parseQueryParams (filter), {
            skipNulls: true,
        });
        router.push(`?${queryParams}`);
    };

    return (
        <div className="md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 md:mt-4">Found Properties : {totalResult}</p>
            <button 
                onClick={() => setOpen(!open)}
                className="btn btn-outline btn-sm text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white rounded-xl md:hidden"
            >
                <HiOutlineFilter />
            </button>
            </div>
            {/* Filter */}
            {(open || isTablet) && (          
            <div className="bg-[#C8E4FF]/30 p-3 md:bg-transparent md:flex  md:justify-end md:items-end md:gap-3 rounded-lg">
            <FormSelect 
            label="Type" 
            options={types} 
            value={filter["property-types"]}
            onChange={(e) => handleFilterChange("property-types", e.target.value)}
            />
            <FormSelect label="Bed Room" 
                value={filter['bed_room']}
                onChange={(e) => handleFilterChange("bed_room", e.target.value)}
                options={[
                    {
                        label : '1 Bedroom',
                        value : 1,
                    },
                    {
                        label : '2 Bedroom',
                        value : 2,
                    },
                    {
                        label : '3 Bedroom',
                        value : 3,
                    },
                    {
                        label : '4 Bedroom',
                        value : 4,
                    },
                    {
                        label : '5 Bedroom',
                        value : 5,
                    },
                ]}
            />
            <FormSelect label="Location" 
            options={locations} 
            value={filter["property-locations"]} 
            onChange={(e) => handleFilterChange("property-locations", e.target.value)} />
            <button onClick={handleFilter} className="btn text-white bg-blue-600 rounded-sm mb-1 w-full md:w-auto">Filter</button>
            </div>
            )}  
        </div>
    );
}