import api from "@/config/api";

export const getAgents = async (params) => {
    return api.get("/agents", { 
        params: {
            ...params,
            acf_format: "standard",
            _fields: 'id,title,acf,slug',
        } 
    });
};

export const getAgentBySlug = async (slug) => {
    const agents = await api.get("/agents", {
        params: {
            slug,
            _embed: true,
            acf_format: 'standard',
            _fields: 'id,title,acf,slug',
        },
    });
    
    if (agents.length === 0){
        return null;
    }
    return agents[0];
};