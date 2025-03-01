interface Command {
    name: string;
    description: string;
    execute: (interaction: any) => Promise<void>;
}

export default Command;