import AgentCard from "./AgentCard";

export default function AgentList({agents}) {
    return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6">
        {agents.map((agent) => (
            <AgentCard agent={agent} key={agent.id} />
        ))}
    </div>
    );
}