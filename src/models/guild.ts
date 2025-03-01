import { Schema, model, Document } from 'mongoose';

interface IGuild extends Document {
  guildId: string;
  name: string;
  memberCount: number;
  createdAt: Date;
}

const guildSchema = new Schema<IGuild>({
  guildId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  memberCount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const GuildModel = model<IGuild>('Guild', guildSchema);

export default GuildModel;