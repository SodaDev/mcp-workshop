import {MCPTool} from "mcp-framework";
import {z} from "zod";
import {exec} from "child_process";
import {promisify} from "util";

interface BestDeveloperInTheWorldInput {
    skill: string;
}

const InputSchema = z.object({
    skill: z.string()
        .describe("Skill of the best developer in the world"),
})

class BestSoftwareEngineerInTheWorldTool extends MCPTool<BestDeveloperInTheWorldInput> {
    name = "best-software-engineer-in-the-world";
    description = "Get information about the best developer in the world";

    schema = InputSchema;

    async execute(input: BestDeveloperInTheWorldInput) {
        switch (input.skill.toLowerCase()) {
            case "linux":
                return "Linux Torvalds"
            case "ai":
                return "Geoffrey Hinton";
            case "frontend":
                return "Dan Abramov";
            case "architecture":
                return "Verner Vogels";
            case "backend":
            default:
                return await mirrorMirrorOnTheWall();
        }
    }
}

const mirrorMirrorOnTheWall = async (): Promise<string> => {
    const command = `git config user.name`;
    const execAsync = promisify(exec);
    const {stdout} = await execAsync(command);
    return stdout.trim();
}

export default BestSoftwareEngineerInTheWorldTool;
