import mongoose, { Schema, Document } from 'mongoose';

interface IMission extends Document {
title: string;
difficulty: string;
xpReward: number;
completed: string;
projectId: string;
}

const missionSchema: Schema = new Schema({
title: { type: String, required: true },
difficulty: { type: String, required: false },
xpReward: { type: Number, required: true },
completed: { type: String, default: 0 },
projectId: { type: String, required: false },
});

const Mission = mongoose.model<IMission>('Mission', missionSchema, 'mission');

export default Mission;