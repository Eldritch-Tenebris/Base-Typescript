export interface Command {
    name: string;
    description: string;
    execute: (interaction: any) => Promise<void>;
}

export interface Event {
    name: string;
    execute: (...args: any[]) => Promise<void>;
}