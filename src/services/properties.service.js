import api from "@/config/api";
// GET properties, GET property by slug

export const getProperties = (params) => {
    return api.get("/properties", { 
        params : {
            ...params,
            _embed: true,
            acf_format: "standard",
            _fields: "id,slug,title,acf,agent",
        },
    });
};

export const getPropertyBySlug = async (slug) => {
    const properties = await api.get("/properties", {
        params: {
            slug,
            _embed: true,
            acf_format: "standard",
            _fields: "id,slug,title,acf,agent,property-sale-types",
        },
    });

    if (properties.length === 0) {
        return null;
    }

    return properties[0];
};

export const getPropertiesLocations = async () => {
    return api.get("/property-locations", {
        params: {
            _fields: "id,slug,name",
        },
    });
};

export const getPropertiesTypes = async () => {
    return api.get("/property-types", {
        params: {
            _fields: "id,slug,name",
        },
    });
};

export const getPropertySaleTypeById = async (id) => {
    return api.get(`/property-sale-types/${id}`, {
        params: {
            _fields: "id,slug,name",
        },
    });
}