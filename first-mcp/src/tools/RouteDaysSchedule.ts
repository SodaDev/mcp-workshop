import { MCPTool } from "mcp-framework";
import { z } from "zod";
import {fetchWrapped} from "../http/wrapper.js";
import {Request} from 'node-fetch';

interface RouteDaysScheduleInput {
  departure: string;
  arrival: string;
}

class RouteDaysScheduleTool extends MCPTool<RouteDaysScheduleInput> {
  name = "schedule-get-route-days-schedule";
  description = "Get Ryanair's flight schedule dates based on the IATA code of departure airport IATA code and arrival airport IATA code";

  schema = {
    departure: {
      type: z.string().length(3).toUpperCase(),
      description: "Departure IATA code (e.g. WAW)",
    },
    arrival: {
      type: z.string().length(3).toUpperCase(),
      description: "Arrival IATA code (e.g. WAW)",
    },
  };

  async execute(input: RouteDaysScheduleInput) {
    const dep = input.departure.toUpperCase();
    const arr = input.arrival.toUpperCase();

    const results: string[] = await fetchWrapped(new Request(`https://services-api.ryanair.com/farfnd/v1/schedules/${dep}/${arr}/availability`))
    if (results.length === 0) {
      return `No flights found from ${dep} to ${arr}.`;
    }

    return results;
  }
}

export default RouteDaysScheduleTool;
