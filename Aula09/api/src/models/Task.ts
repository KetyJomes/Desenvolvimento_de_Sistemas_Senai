import mongoose, { Schema, Document } from 'mongoose';

interface ITask extends Document {
title: string;
xp: number;
level: number;
progress: number;
status: string;
}

const taskSchema: Schema = new Schema({
title: { type: String, required: true },
xp: { type: Number, required: false },
level: { type: Number, required: true },
progress: { type: Number, default: 0 },
status: { type: String, required: false },
});

const Task = mongoose.model<ITask>('Task', taskSchema, 'task');

export default Task;