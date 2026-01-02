import { getPropertiesLocations } from "@/services/properties.service";
import Link from "next/link";

const getData = async () => {
    return await getPropertiesLocations();
}

export default async function LocationsList() {
    const propertyLocations = await getData();

    return (
        <div className="flex gap-2">
            {propertyLocations.map((location) => {
                return (
                    <Link href={`/listings?property-locations=${location.id}`} 
                    key={location.id} 
                    className="btn btn-location"
                    >
                    {location.name}
                    </Link>
                );
            })}
        </div>
    );
}