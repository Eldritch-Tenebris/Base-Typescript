import { config } from 'dotenv';

config();

export const DISCORD_TOKEN = process.env.DISCORD_TOKEN || '';
export const MONGODB_URI = process.env.MONGODB_URI || '';