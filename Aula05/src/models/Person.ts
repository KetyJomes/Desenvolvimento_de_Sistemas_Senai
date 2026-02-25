import mongoose, { Schema, Document } from 'mongoose';

interface IPerson extends Document {
nome: string;
sobrenome: string;
idade: number;
}

const personSchema: Schema = new Schema({
nome: { type: String, required: true },
sobrenome: { type: String, required: true },
idade: { type: Number, required: true },
});

const Person = mongoose.model<IPerson>('Person', personSchema, 'usuario');

export default Person;