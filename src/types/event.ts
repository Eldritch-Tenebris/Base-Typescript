interface Event {
    name: string;
    execute(...args: any[]): Promise<void> | void;
}

export default Event;