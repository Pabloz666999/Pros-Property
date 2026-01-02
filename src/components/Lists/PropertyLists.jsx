import PropertyCard from "../UI/PropertyCard";

export default function PropertyLists({properties = [] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* property card */}
            {properties.length === 0 ? 
            <div className="col-span-3 flex flex-col items-center justify-center space-y-4 max-w-md mx-auto">
            <img src="/assets/3d-empty-house.svg" alt="" />
                <p>No Properties Found...</p>
            </div>: properties.map((property) => {
            return <PropertyCard key={property.id} property={property} />;
            })}
        </div>
    );
}