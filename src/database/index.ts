import mongoose, { InferSchemaType, model } from "mongoose";
import { guildSchema } from "./schemas/guild.js";
import { memberSchema } from "./schemas/member.js";
import { logger } from "#settings";
import chalk from "chalk";

try {
   await mongoose.connect(process.env.MONGO_URI, { dbName: "database" });
   logger.success(chalk.green("📦 MongoDB conectado"));
} catch(err){
   logger.error(err);
   process.exit(1);
}

export const db = {
   guilds: model("guild", guildSchema, "guilds"),
   members: model("member", memberSchema, "members")
};

export type GuildSchema = InferSchemaType<typeof guildSchema>;
export type MemberSchema = InferSchemaType<typeof memberSchema>;