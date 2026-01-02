import ChooseCard from "@/components/Features/Homepage/ChooseCard";
import BaseLayout from "@/components/Layouts/BaseLayout";
import SearchForm from "@/components/UI/SeacrhForm";
import CallToAction from "@/components/UI/CallToAction";
import PropertyLists from "@/components/Lists/PropertyLists";
import {getProperties} from "@/services/properties.service";
import LocationsList from "@/components/Lists/LocationsList";

async function getData(params) {
  return await getProperties(params);
}
 
export default async function page({searchParams}) {
  const resolvedSearchParams = await searchParams;
  const properties = await getData({ ...resolvedSearchParams });
  return ( 
  <BaseLayout theme="dark">
  <div 
    className="h-[700px] md:h-screen flex items-center justify-center"
    style={{
    background: "url(/assets/homepage.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}>
    <div className="custom-container space-y-6 text-center">
      <div className="space-y-2 md:space-y-4">
      <h1 className="text-white md:text-6xl md:max-w-[500px] md:mx-auto text-4xl font-bold md:leading-[1.5]">Find Your Dream Home Today</h1>
      <p className="text-white leading-relaxed md:text-xl">Explore our listings and discover the perfect place to call home.</p>
      </div>

      <SearchForm />
    </div>
  </div>
  <section className="py-12"> 
    <div className="custom-container space-y-6 md:space-y-12">
      <h2 className="text-xl font-bold text-center">Why Choose Us</h2>
      {/* Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card  */}
        <ChooseCard 
        image="/assets/icon-1.png"
        title="Property Insurance"
        description="We offer comprehensive property insurance to protect your investment."/>
        <ChooseCard 
        image="/assets/icon-2.png"
        title="Property Insurance"
        description="We offer comprehensive property insurance to protect your investment."/>
        <ChooseCard 
        image="/assets/icon-3.png"
        title="Property Insurance"
        description="We offer comprehensive property insurance to protect your investment."/>
      </div>
    </div>
  </section>
    <section className="py-12">
    <div className="custom-container space-y-6 md:space-y-12">
      <div className="space-y-6 md:space-y-8">
        <h2 className="text-xl font-bold">Browse Properties</h2>
        <LocationsList />
      </div>
      {/* properties */}
      <PropertyLists properties={properties} />
    </div>
    </section>
   <CallToAction />
   </BaseLayout>
  );
}
