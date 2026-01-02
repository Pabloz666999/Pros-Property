import {getProperties} from "@/services/properties.service";
import Link from "next/link";

const getData = async (agentId) => {
    return await getProperties({agent_id: agentId, per_page: 3});
}

export default async function AgentCard({ agent }) {
const properties = await getData (agent.id);

    return (
        <div className="p-3 md:p-8 md:rounded-xl rounded-lg border border-gray-300"> 
                <div className="space-y-6">
                    <div className="space-y-6 relative">
                        {/* agent profile picture & name */}
                        <div className="flex gap-3">
                            <img 
                            src={agent?.acf?.profile_picture}
                            className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover object-center" 
                            alt="" 
                        />
                        <div>
                            <p className="font-bold md:text-lg">{agent?.acf?.name}</p>
                            <span className="text-sm text-gray-600 md:text-base">Member since {agent?.acf?.joined_date.split("/").pop()}</span>
                        </div>
                        </div>
                        {/* agent stats */}
                        <div className="flex justify-between items-center">
                            <div className="text-center">
                                <p className="text-xs md:text-base">Total Property</p>
                                <p className="font-bold md:text-xl">{agent?.acf?.total_property}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-xs md:text-base">Total sold property</p>
                                <p className="font-bold md:text-xl">{agent?.acf?.total_sold_property}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-xs md:text-base">Middle price</p>
                                <p className="font-bold md:text-xl">{agent?.acf?.price_range_property}</p>
                            </div>
                        </div>
                        <Link href={`/agents/${agent.slug}`} className="absolute inset-0 w-full h-full"></Link>
                    </div>
                    {/* agent ads */}
                    <div className="space-y-3">
                        <p className="text-gray-600 text-sm md:text-base">List Ads</p>
                        <div className="grid grid-cols-3 gap-2 md:gap-4">
                            {properties.map((property) => {
                                    return (  
                                        <Link key={property.id} href={`/listings/${property.slug}`} className="w-full">
                                        <img src={property?.acf?.thumbnail} className="h-[40px] md:h-[80px] w-full rounded-lg object-cover" alt="" />
                                        </Link>
                                    );
                                })}
                            <img src="/assets/product-3.png" className="h-[40px] md:h-[80px] w-full rounded-lg object-cover" alt="" />

                        </div>
                    </div>
                </div>
            </div>
    );
}