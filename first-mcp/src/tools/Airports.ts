import {MCPTool} from "mcp-framework";
import {fetchWrapped} from "../http/wrapper.js";
import {Request} from 'node-fetch';
import {Airport} from "./model.js";
interface AirportsInput {}

class AirportsTool extends MCPTool<AirportsInput> {
  name = "locate-get-active-airports";
  description = "List of active Ryanair's airports with information about IATA code, city, region, country, coordinates and timezone.";

  schema = {};

  async execute(input: AirportsInput): Promise<Airport[]> {
    return await fetchWrapped(new Request("https://services-api.ryanair.com/views/locate/5/airports/en/active"))
  }
}

export default AirportsTool;
