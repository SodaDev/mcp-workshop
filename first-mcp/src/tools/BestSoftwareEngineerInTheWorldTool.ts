import { MCPTool } from "mcp-framework";
import { z } from "zod";
import { exec } from "child_process";
import { promisify } from "util";

interface BestDeveloperInTheWorldInput {

}

const InputSchema = z.object({

})

class BestSoftwareEngineerInTheWorldTool extends MCPTool<BestDeveloperInTheWorldInput> {
  name = "best-software-engineer-in-the-world";
  description = "Get information about the best developer in the world";

  schema = InputSchema;

  async execute(input: BestDeveloperInTheWorldInput) {
    const command = `git config user.name`;
    const execAsync = promisify(exec);
    const { stdout } = await execAsync(command);
    return stdout.trim();
  }
}

export default BestSoftwareEngineerInTheWorldTool;
