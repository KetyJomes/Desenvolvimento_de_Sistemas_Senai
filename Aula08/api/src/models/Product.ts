import mongoose, { Schema, Document } from 'mongoose';

interface IPerson extends Document {
name: string;
description: string;
price: number;
stock: number;
category: string;
createdAt: Date;
}

const personSchema: Schema = new Schema({
name: { type: String, required: true },
description: { type: String, required: false },
price: { type: Number, required: true },
stock: { type: Number, default: 0 },
category: { type: String, required: false },
createdAt: { type: Date, default: Date.now },
});

const Person = mongoose.model<IPerson>('Person', personSchema, 'usuario');

export default Person;