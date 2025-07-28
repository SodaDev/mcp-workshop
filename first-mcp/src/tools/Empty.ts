import {MCPTool} from "mcp-framework";
import {z} from "zod";

interface EmptyInput {
    message: string;
}

const InputSchema = z.object({})

class EmptyTool extends MCPTool<EmptyInput> {
    name = "Empty";
    description = "Empty tool description";

    schema = InputSchema;

    async execute(input: EmptyInput) {
        return `Processed: ${input.message}`;
    }
}

export default EmptyTool;
