import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  discordId: string;
  username: string;
  discriminator: string;
  joinedAt: Date;
  guilds: string[];
}

const userSchema = new Schema<IUser>({
  discordId: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  discriminator: { type: String, required: true },
  joinedAt: { type: Date, default: Date.now },
  guilds: { type: [String], default: [] },
});

const User = model<IUser>('User', userSchema);

export default User;