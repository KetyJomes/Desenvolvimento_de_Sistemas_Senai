import mongoose, { Schema, Document } from 'mongoose';

interface IPerson extends Document {
    nome: string;
    email: string;
}

const personSchema: Schema = new Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },

});

const Person = mongoose.model<IPerson>('Person', personSchema, 'usuario');

export default Person;