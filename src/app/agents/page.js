import AgentList from "@/components/Features/Agents/AgentList";
import BaseLayout from "@/components/Layouts/BaseLayout";
import SearchForm from "@/components/UI/SeacrhForm";
import CallToAction from "@/components/UI/CallToAction";
import { getAgents } from "@/services/agents.service";

const getData = async (params) => {
    return await getAgents({...params, per_page: 6 });
}

export default async function Agentspage ({ searchParams }) {
  const data = await getData({...searchParams});
    return <BaseLayout theme="dark">
    <div 
        className="h-[700px] md:h-[550px] flex items-center justify-center"
        style={{
        background: "url(/assets/agent.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
        <div className="custom-container space-y-6 text-center">
          <div className="space-y-2 md:space-y-4">
          <h1 className="text-white md:text-6xl md:max-w-[500px] md:mx-auto text-4xl font-bold md:leading-[1.5]">Our Agent</h1>
          <p className="text-white leading-relaxed md:text-xl">Explore our exstensive listings and find the perfect property for you.</p>
          </div>
    
          <SearchForm placeholder="Search Agent Name..." />
        </div>
      </div>
      <section className="custom-container py-6 space-y-6 md:space-y-12 md:py-12">
        {/* page title */}
        <h2 className="font-bold text-xl md:text-2xl">Browse Agent</h2>
        {/* agent list */}
        <div className="grid grid-cols-1 gap-3">
            {/* agent card */}
            <AgentList agents={data} />
        </div>
        <CallToAction 
        image="/assets/image-2.png"
        title= "Tired of Looking ? Contact Us for Recommendations"
        />
      </section>
    </BaseLayout>
}