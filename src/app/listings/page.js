import BaseLayout from "@/components/Layouts/BaseLayout";;
import SearchForm from "@/components/UI/SeacrhForm";
import Filter from "@/components/Features/Listings/Filter";
import React from "react"; 
import PropertyLists from "@/components/Lists/PropertyLists";
import CallToAction from "@/components/UI/CallToAction";
import { getProperties } from "@/services/properties.service";

async function getData(params) {
  return await getProperties(params);
}

export default async function ListingsPage({searchParams}) {
const properties = await getData({...searchParams});

    return <BaseLayout>
        <div className="custom-container space-y-6">
                <div className="space-y-5 md:flex md:items-center md:justify-between md:space-y-0">
                <h1 className="text-xl font-bold">Browse Properties</h1>
                <SearchForm
                wrapperClassName="md:ml-auto md:mr-0 md:w-[400px]"
                inputClassName="border border-gray-300" 
                />
                </div>
            {/* Filter & Total Results */}
            <Filter totalResult={properties.length} />
            <hr/>
            <PropertyLists properties={properties} />
        </div>
        <CallToAction  image="/assets/image-2.png"
        title= "Tired of Looking ? Contact Us for Recommendations"
        />
    </BaseLayout>
}   