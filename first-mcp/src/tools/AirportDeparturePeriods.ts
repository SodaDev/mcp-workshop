import {MCPTool} from "mcp-framework";
import {z} from "zod";
import {fetchWrapped} from "../http/wrapper.js";
import {Request} from "node-fetch";
import {RoutePeriods} from "./model.js";

interface AirportDeparturePeriodsInput {
  departure: string;
}

const InputSchema = z.object({
  departure: z.string().length(3).toUpperCase()
      .describe("Departure IATA code (e.g. WAW)"),
})

class AirportDeparturePeriodsTool extends MCPTool<AirportDeparturePeriodsInput> {
    name = "schedule-get-airport-departure-periods";
    description = "Get airport departure periods date ranges for each outgoing direction";

    schema = InputSchema;

    async execute(input: AirportDeparturePeriodsInput) {
      const dep = input.departure.toUpperCase();

      const results: Map<string, RoutePeriods> = await fetchWrapped(new Request(`https://services-api.ryanair.com/farfnd/v1/schedules/${dep}/periods`))
      if (results.size === 0) {
        return `No flights found from ${dep}.`;
      }

      return results;
    }
}

export default AirportDeparturePeriodsTool;
