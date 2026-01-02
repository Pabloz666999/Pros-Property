import BaseLayout from "@/components/Layouts/BaseLayout";
import SpecItem from "@/components/Features/Listings/SpecItem";
import { HiOutlineHeart } from "react-icons/hi";
import GalleryItem from "@/components/Features/Listings/GalleryItem";
import PropertyLists from "@/components/Lists/PropertyLists";
import CallToAction from "@/components/UI/CallToAction";
import { FaWhatsapp } from "react-icons/fa";
import { getProperties
, getPropertyBySlug
 } from "@/services/properties.service";
import { formatThousands } from "@/utils";
import AgentInfo from "@/components/Features/Listings/AgentInfo";
import Price from "@/components/Features/Listings/Price";


const getData = async (params, slug) => {
    const property = await getPropertyBySlug(slug);

    if (!property) {
        return notFound();
    }
    
    const properties = await getProperties({...params, per_page: 3 });
    return{
        properties,
        property,
    };
}; 


export default async function DetailPage({ searchParams, params }) {

    const {properties, property} = await getData({...searchParams}, params.slug);

    return(
        <BaseLayout theme="light">
            <div className="custom-container space-y-4">
                {/* wrapper */}
                <div className="space-y-6 md:space-y-0 md:flex md:items-start md:gap-10">
                    <div className="md:w-3/4">
                        {/* Big image */}
                        <img src={property?.acf?.thumbnail} alt="" className="w-full h-[300px] md:h-[600px] object-cover object-center rounded-xl" />
                    </div>
                    <div className="md:1/4">
                        {/* galeries */}
                        <div className="flex flex-nowrap md:h-[600px] md:flex-col overflow-x-scroll md:overflow-x-hidden md:overflow-y-scroll gallery pb-3 md:pr-4 md:gap-4">
                            <GalleryItem image="/assets/detail-1.png" />
                            <GalleryItem image="/assets/detail-2.png" />
                            <GalleryItem image="/assets/detail-3.png" />
                            <GalleryItem image="/assets/detail-4.png" />
                            <GalleryItem image="/assets/detail-5.png" />
                        </div>
                    </div>
                </div>
                {/* detail content & agent */}
                <div className="md:flex md:gap-25 md:items-start">
                    {/* content & description */}
                    <div className="md:w-3/4">
                        {/* content */}
                            <div>
                                {/* main info */}
                                <div className="space-y-3 md:flex md:justify-between md:items-center md:space-y-0">
                                    <div>
                                        <h1 className="font-bold text-2xl mb-2">{property?.title?.rendered}</h1>
                                        <p className="text-gray-600">{property?.acf?.short_description}</p>
                                    </div> 
                                    <Price property={property} />
                                </div>
                            </div>
                            {/* description & spesification */}
                            <div className="md:flex md:justify-between md:gap-10 md:pt-10">
                                {/* description */}
                                <div className="md:w-2/3">
                                    <h2 className="font-bold text-lg mb-3">{property?.acf?.description_title}</h2>
                                    <div className="prose max-w-full text-sm md:text-base">
                                        {property?.acf?.description}

                                    </div>
                                </div>
                                {/* spesification */}
                                <div className="pt-3 space-y-4 md:w-1/3">
                                    <p className="font-bold text-lg">Spesification</p>
                                    <div className="space-y-4 ">
                                        <SpecItem 
                                            title="Kamar Tidur" 
                                            icon="/assets/icons/detail/ic-bed.svg"
                                            value={property?.acf?.spesification?.bed_room}
                                        />
                                        <SpecItem 
                                            title="Kamar Mandi" 
                                            icon="/assets/icons/detail/ic-bath.svg"
                                            value={property?.acf?.spesification?.bath_room}
                                        />
                                        <SpecItem 
                                            title="Luas Tanah" 
                                            icon="/assets/icons/detail/ic-land.svg"
                                            value={property?.acf?.spesification?.land_area + "m2"}
                                        />
                                        <SpecItem 
                                            title="Luas Bangunan" 
                                            icon="/assets/icons/detail/ic-house.svg"
                                            value={property?.acf?.spesification?.building_area + "m2"}
                                        />
                                        <SpecItem 
                                            title="Tipe Properti" 
                                            icon="/assets/icons/detail/ic-apart.svg"
                                            value={"Rumah"} 
                                        />
                                        <SpecItem 
                                            title="Sertifikat" 
                                            icon="/assets/icons/detail/ic-certif.svg"
                                            value={property?.acf?.spesification?.certificate.value}
                                        />
                                        <SpecItem 
                                            title="Daya Listrik" 
                                            icon="/assets/icons/detail/ic-electric.svg"
                                            value={property?.acf?.spesification?.electricity}
                                        />
                                        <SpecItem 
                                            title="Periode Sewa" 
                                            icon="/assets/icons/detail/ic-period.svg"
                                            value={property?.acf?.spesification?.rent_period}
                                        />
                                        <SpecItem 
                                            title="Harga per m2" 
                                            icon="/assets/icons/detail/ic-m2.svg"
                                            value={"Rp" + formatThousands(property?.acf?.spesification?.price_per_m2)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <AgentInfo property={property} />
                    </div>
                    {/* recommendation */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold">Recommendations for you</h4>
                        <PropertyLists properties={properties} />
                    </div>
                </div>
        <CallToAction 
        image="/assets/image-2.png"
        title= "Tired of Looking ? Contact Us for Recommendations"
        />
        </BaseLayout>
    );
}