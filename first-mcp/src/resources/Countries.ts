import { MCPResource, ResourceContent } from "mcp-framework";

class CountriesResource extends MCPResource {
    uri = "resource://countries.json";
    name = "Countries";
    description = "List of active Ryanair's countries.";
    mimeType = "application/json";

    async read(): Promise<ResourceContent[]> {
        const response = await fetch("https://services-api.ryanair.com/views/locate/3/countries/en")
            .then(res => res.json())
        return [
            {
                uri: this.uri,
                mimeType: this.mimeType,
                text: JSON.stringify(response),
            },
        ];
    }
}

export default CountriesResource;
